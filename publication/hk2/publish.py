"""Publish exactly this batch to the existing Lemonmath Cloudflare resources."""
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
CODES = dict(enumerate(("z2ti3o", "5qxkeb", "qw3wev", "kvqood", "gykbp5", "4aty47", "35heli"), start=6))
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

def expected_pdfs():
    manifest = json.loads((ROOT/"r2-manifest.json").read_bytes())
    require(len(manifest) == 14, "Expected two PDFs per grade")
    seen = set()
    for item in manifest:
        key = item["key"]
        match = re.fullmatch(
            r"kho-de-thi/lop-(\d{2})/cuoi-hk2/2025-2026/([a-z2-7]{6})/(lemonmath_[a-zA-Z0-9_-]+)_(de|dap-an)\.pdf",
            key,
        )
        require(match and CODES.get(int(match[1])) == match[2] == item["code"], f"Unexpected R2 target {key}")
        seen.add((match[2],match[4]))
        data = (ROOT/"r2"/key).read_bytes()
        require(data.startswith(b"%PDF-") and len(data)==item["bytes"] and sha256(data).hexdigest()==item["sha256"],
                f"PDF integrity check failed for {key}")
    require(len(seen)==14, "Duplicate or missing PDF role")
    return manifest

def unpack_qr():
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
    require(len(pages)==56 and set(CODES.values()) <= pages.keys(), "Expected 56 QR pages")
    return pages

def verify_pages(pages, only_existing=False):
    sample = {code:digest for code,digest in pages.items() if not only_existing or code not in CODES.values()}
    def check(entry):
        code,digest = entry
        url = f"{SITE}/d/{code}"
        with urlopen(Request(url,headers={"User-Agent":USER_AGENT}),timeout=15) as response:
            body = BEACON.sub(b"",response.read())
            require(urlsplit(response.url).path.rstrip("/") == f"/d/{code}" and
                    sha256(body).hexdigest()==digest, f"Unexpected public QR page {code}")
    with ThreadPoolExecutor(max_workers=6) as pool:
        list(pool.map(check,sample.items()))
    print(f"Verified {len(sample)} published QR pages")

def wrangler(*args, capture=False):
    return subprocess.run(["npx","--no-install","wrangler",*args],cwd=API_DIR,check=True,
                          text=True, stdout=subprocess.PIPE if capture else None,timeout=150)

def publish():
    manifest, pages = expected_pdfs(), unpack_qr()
    verify_pages(pages,only_existing=True)
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
                      "Add seven semester II exam pages",capture=True)
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
