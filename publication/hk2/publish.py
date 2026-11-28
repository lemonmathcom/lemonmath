"""Publish exactly this batch to the existing Lemonmath Cloudflare resources."""
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from hashlib import sha256
import json
import os
from pathlib import Path, PurePosixPath
import re
import subprocess
import sys
from time import sleep
from urllib.error import HTTPError
from urllib.parse import quote, urlsplit
from urllib.request import Request, urlopen
from uuid import uuid4
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parent
API_DIR = ROOT.parents[1] / "api"
BUCKET = "lemonmath-assets"
DOWNLOAD_HOST = "tai-lieu.lemonmath.com"
SITE = "https://lemonmath.com"
USER_AGENT = "Lemonmath deployment verifier"
BEACON = re.compile(
    rb'<script\b[^>]*\bsrc="https://static\.cloudflareinsights\.com/beacon\.min\.js[^"]*"'
    rb'[^>]*></script>\r?\n?'
)

def require(condition, message):
    if not condition:
        raise RuntimeError(message)

def verify_pdf(item, download=True):
    # A lookup before upload must use a different cache key from the public
    # download URL. Otherwise a cached 404 can outlive the object upload.
    query = "?download=1" if download else f"?lm-check={uuid4().hex}"
    url = f"https://{DOWNLOAD_HOST}/" + quote(item["key"], safe="/") + query
    try:
        with urlopen(Request(url,headers={"User-Agent":USER_AGENT,"Cache-Control":"no-cache"}),timeout=15) as response:
            require(urlsplit(response.url).hostname == DOWNLOAD_HOST, "Unexpected PDF host")
            payload = response.read()
            require(response.status == 200 and payload.startswith(b"%PDF-") and
                    sha256(payload).hexdigest() == item["sha256"] and len(payload) == item["bytes"],
                    f"Unexpected PDF bytes for {item['key']}")
            require(response.headers.get_content_type() == "application/pdf" and
                    (not download or response.headers.get("Content-Disposition","").lower().startswith("attachment")),
                    f"Missing PDF download headers for {item['key']}")
            return True
    except HTTPError as error:
        if error.code == 404:
            return False
        raise

def verify_bucket():
    for name in ("CLOUDFLARE_API_TOKEN","CLOUDFLARE_ACCOUNT_ID"):
        value = os.environ.get(name,"").strip().strip("\"'")
        require(value, f"{name} is unavailable in the deployment workflow")
        os.environ[name] = value
    account = os.environ["CLOUDFLARE_ACCOUNT_ID"]
    token = os.environ["CLOUDFLARE_API_TOKEN"]
    require(re.fullmatch(r"[a-f0-9]{32}",account), "Invalid Cloudflare account identifier")
    endpoint = f"https://api.cloudflare.com/client/v4/accounts/{account}/r2/buckets/{BUCKET}/domains/custom"
    request = Request(endpoint,headers={"Authorization":"Bearer "+token,"User-Agent":USER_AGENT})
    try:
        with urlopen(request,timeout=20) as response:
            data = json.load(response)
    except HTTPError as error:
        raise RuntimeError(f"Could not verify the R2 custom domain (Cloudflare HTTP {error.code})") from None
    require(data["success"] and any(domain["domain"] == DOWNLOAD_HOST and domain["enabled"]
            for domain in data["result"]["domains"]), "Expected active download domain on lemonmath-assets")
    print(f"Verified {DOWNLOAD_HOST} is on {BUCKET}")

def expected_pdfs(grade_counts, kind):
    manifest = json.loads((ROOT/"r2-manifest.json").read_bytes())
    folders = {
        "exam": ("kho-de-thi", "cuoi-hk2", "dap-an"),
        "worksheet": ("tai-lieu", "phieu-bai-tap", "loi-giai"),
    }
    require(kind == "archive-exam" or kind in folders, f"Unknown release kind {kind}")
    if kind == "archive-exam":
        prefix = (
            r"kho-de-thi/(?:lop-(?P<grade>\d{2})/(?:giua-hk[12]|cuoi-hk[12])"
            r"|ky-thi/tn-thpt/de-(?:chinh-thuc|minh-hoa|thi-thu))/\d{4}-\d{4}"
        )
        answer_role = "dap-an"
    else:
        area, folder, answer_role = folders[kind]
        prefix = rf"{area}/lop-(?P<grade>\d{{2}})/{folder}/2025-2026"
    pattern = re.compile(
        rf"{prefix}/(?P<code>[a-z2-7]{{6}})/lemonmath_L(?P<file_grade>\d{{2}})_[a-zA-Z0-9_-]+_(?P<role>de|{answer_role})\.pdf"
    )
    require(len(manifest) == 2 * sum(grade_counts.values()), "Expected two PDFs per document")
    seen = set()
    codes = {}
    for item in manifest:
        key = item["key"]
        match = pattern.fullmatch(key)
        require(match and match["code"] == item["code"], f"Unexpected R2 target {key}")
        grade = match["grade"] or "12"
        require(1 <= int(grade) <= 12 and match["file_grade"] == grade, f"Invalid grade for {key}")
        require(codes.setdefault(match["code"], str(int(grade))) == str(int(grade)),
                f"Conflicting grades for {match['code']}")
        seen.add((match["code"], match["role"]))
        data = (ROOT/"r2"/key).read_bytes()
        require(data.startswith(b"%PDF-") and len(data)==item["bytes"] and sha256(data).hexdigest()==item["sha256"],
                f"PDF integrity check failed for {key}")
    require(Counter(codes.values()) == grade_counts, "Document counts by grade differ from the release")
    require(len(seen)==len(manifest), "Duplicate or missing PDF role")
    return manifest, set(codes)

def unpack_qr(total, new_codes):
    pages = {}
    with ZipFile(ROOT/"qr-pages.zip") as archive:
        require(archive.testzip() is None, "Invalid QR archive")
        for name in archive.namelist():
            part = PurePosixPath(name)
            require(not part.is_absolute() and ".." not in part.parts and "\\" not in name
                    and (name.startswith("d/") or name in {"_redirects","_headers"}), "Invalid archive path")
            payload = archive.read(name)
            target = ROOT/"dist"/name
            target.parent.mkdir(parents=True,exist_ok=True)
            target.write_bytes(payload)
            if re.fullmatch(r"d/[a-z2-7]{6}\.html",name):
                pages[name[2:-5]] = sha256(payload).hexdigest()
    require(len(pages)==total and new_codes <= pages.keys(), f"Expected {total} QR pages")
    return pages

def verify_pages(pages, exclude=(), previous=None):
    sample = {code:digest for code,digest in pages.items() if code not in exclude}
    previous = previous or {}
    def check(entry):
        code,digest = entry
        url = f"{SITE}/d/{code}"
        with urlopen(Request(url,headers={"User-Agent":USER_AGENT}),timeout=15) as response:
            body = BEACON.sub(b"",response.read())
            require(urlsplit(response.url).path.rstrip("/") == f"/d/{code}" and
                    sha256(body).hexdigest() in {digest, previous.get(code)}, f"Unexpected public QR page {code}")
    with ThreadPoolExecutor(max_workers=6) as pool:
        list(pool.map(check,sample.items()))
    print(f"Verified {len(sample)} published QR pages")

def wrangler(*args, capture=False):
    return subprocess.run(["npx","--no-install","wrangler",*args],cwd=API_DIR,check=True,
                          text=True, stdout=subprocess.PIPE if capture else None,timeout=150)

WORD = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
SOURCE_TYPES = {"docx": WORD, "png": "image/png", "jpeg": "image/jpeg", "jpg": "image/jpeg"}
SOURCE_KEY = re.compile(
    r"kho-de-thi/nguon-ngan-hang/lop-(0[1-9]|1[0-2])/(?P<code>[a-z2-7]{6})/"
    r"(?:de-goc\.docx|hinh/[a-z0-9-]+\.(?:png|jpe?g))"
)


def source_files():
    items = json.loads((ROOT/"r2-manifest.json").read_bytes())
    keys, documents, codes = set(), set(), set()
    for item in items:
        key = item["key"]
        match = SOURCE_KEY.fullmatch(key)
        require(match and match["code"] == item["code"] and key not in keys, f"Unexpected source key {key}")
        keys.add(key)
        codes.add(item["code"])
        mime = SOURCE_TYPES[key.rsplit(".", 1)[1]]
        require(item["contentType"] == mime, f"Wrong type for {key}")
        data = (ROOT/"r2"/key).read_bytes()
        require(len(data) == item["bytes"] and sha256(data).hexdigest() == item["sha256"],
                f"Source digest mismatch for {key}")
        if mime == WORD:
            documents.add(item["code"])
            require(data.startswith(b"PK\x03\x04"), f"Wrong Word container for {key}")
        elif mime == "image/png":
            require(data.startswith(b"\x89PNG\r\n\x1a\n"), f"Wrong PNG image for {key}")
        else:
            require(data.startswith(b"\xff\xd8"), f"Wrong JPEG image for {key}")
    require(codes == documents and documents, "Each source group needs its original Word file")
    return items


def source_available(item, fresh=False):
    key = item["key"]
    query = f"?lm-check={uuid4().hex}" if fresh else ""
    url = f"https://{DOWNLOAD_HOST}/" + quote(key, safe="/") + query
    try:
        with urlopen(Request(url, headers={"User-Agent": USER_AGENT, "Cache-Control": "no-cache"}),
                     timeout=30) as response:
            require(urlsplit(response.url).hostname == DOWNLOAD_HOST and response.status == 200,
                    f"Wrong source response for {key}")
            digest = sha256()
            length = 0
            for data in iter(lambda: response.read(1 << 20), b""):
                digest.update(data)
                length += len(data)
            require(length == item["bytes"] and digest.hexdigest() == item["sha256"],
                    f"Public copy differs from source {key}")
            require(response.headers.get_content_type() == item["contentType"], f"Wrong public MIME for {key}")
            return True
    except HTTPError as error:
        if error.code == 404:
            return False
        raise


def publish_word_sources(counts):
    items = source_files()
    require(len(items) == counts["objects"] and
            sum(item["contentType"] == WORD for item in items) == counts["documents"],
            "Source objects do not match release counts")
    if "--check" in sys.argv:
        print(f"Verified {len(items)} source objects locally", flush=True)
        return
    verify_bucket()

    def upload(item):
        key = item["key"]
        if not source_available(item, fresh=True):
            for attempt in range(3):
                try:
                    wrangler("r2", "object", "put", f"{BUCKET}/{key}", "--file", str(ROOT/"r2"/key),
                             "--remote", "--content-type", item["contentType"], capture=True)
                    break
                except (subprocess.CalledProcessError, subprocess.TimeoutExpired):
                    if attempt == 2:
                        raise
                    sleep(3 * (attempt + 1))

    with ThreadPoolExecutor(max_workers=8) as pool:
        for i, _ in enumerate(pool.map(upload, items), 1):
            if i % 50 == 0 or i == len(items):
                print(f"Prepared {i}/{len(items)} original source objects", flush=True)
        pending = items
        for wait in (0, 4, 8, 16):
            sleep(wait)
            pending = [item for item, available in zip(pending, pool.map(source_available, pending)) if not available]
            if not pending:
                break
    require(not pending, "Some original source objects are still unavailable")
    print(f"Verified {len(items)} original source objects on {DOWNLOAD_HOST}", flush=True)


def publish():
    counts = json.loads((ROOT/"release-counts.json").read_bytes())
    kind = counts.get("kind", "exam")
    if kind == "word-sources":
        publish_word_sources(counts)
        return
    manifest, release_codes = expected_pdfs(counts["grades"], kind)
    previous = counts.get("previous_page_sha256", {})
    new_codes = release_codes - previous.keys()
    require(counts["total_qr_count"] - counts["previous_qr_count"] == len(new_codes), "Unexpected QR count change")
    pages = unpack_qr(counts["total_qr_count"], release_codes)
    require(previous.keys() <= pages.keys() and
            all(re.fullmatch(r"[a-f0-9]{64}", digest) for digest in previous.values()),
            "Invalid hash for a revised QR page")
    verify_pages(pages,exclude=new_codes,previous=previous)
    if "--check" in sys.argv:
        return
    verify_bucket()

    for item in manifest:
        if not verify_pdf(item,download=False):
            wrangler("r2","object","put",f"{BUCKET}/{item['key']}","--file",
                     str(ROOT/"r2"/item["key"]),"--remote","--content-type","application/pdf")
    pending = manifest
    for wait in (0, 3, 6, 12, 24, 45, 60, 60):
        sleep(wait)
        with ThreadPoolExecutor(max_workers=6) as pool:
            pending = [item for item,available in zip(pending,pool.map(verify_pdf,pending)) if not available]
        if not pending:
            break
        print(f"Waiting for {len(pending)} download URLs to reach the CDN",flush=True)
    require(not pending, "PDF download URLs did not reach the CDN")
    print(f"Verified {len(manifest)} downloadable PDFs before deploying QR links")

    config = str(ROOT/"wrangler.jsonc")
    upload = wrangler("versions","upload","--config",config,"--message",
                      f"Publish {len(release_codes)} semester II {kind} pages",capture=True)
    print(upload.stdout,flush=True)
    version = re.search(r"\bVersion ID:\s*([a-f0-9-]{36})\b",upload.stdout,re.I)
    require(version, "Wrangler did not return the new QR version ID")
    wrangler("versions","deploy",version[1]+"@100%","--config",config,"--yes")

    for wait in (1, 3, 6, 12, 20):
        sleep(wait)
        try:
            verify_pages(pages)
            break
        except (RuntimeError, OSError):
            if wait == 20:
                raise

if __name__ == "__main__":
    publish()
