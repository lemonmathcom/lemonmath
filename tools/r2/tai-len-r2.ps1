# Lemonmath - tai tai lieu len R2 (https://tai-lieu.lemonmath.com/...). Chi TAI LEN (rclone copy):
# khong xoa file nao tren may, khong xoa file nao tren R2. Xem giao-viec/CLOUDFLARE.md.
$ErrorActionPreference = 'Stop'
$bucket = 'lemonmath-tailieu'
$src = Join-Path $env:USERPROFILE 'Dropbox\Lemonmath.com\tai-lieu-r2'
if (-not (Test-Path -LiteralPath $src)) {
  $src = Read-Host 'Thu muc chua tai lieu can dua len (vi du D:\tai-lieu-r2)'
  if (-not (Test-Path -LiteralPath $src)) { throw "Khong thay thu muc $src" }
}

# 1. rclone (cai bang winget neu chua co)
$rclone = (Get-Command rclone -ErrorAction SilentlyContinue).Source
if (-not $rclone) {
  Write-Host 'Dang cai rclone (mot lan)...'
  winget install --id Rclone.Rclone -e --accept-source-agreements --accept-package-agreements | Out-Host
  $rclone = Get-ChildItem -Path (Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet') -Recurse -Filter rclone.exe -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty FullName
  if (-not $rclone) { throw 'Chua cai duoc rclone. Mo cua so moi roi chay lai.' }
}

# 2. Khoa R2 (luu ma hoa tren may nay, chi tai khoan Windows nay doc duoc)
$cfgDir = Join-Path $env:APPDATA 'Lemonmath'; $cfg = Join-Path $cfgDir 'r2.xml'
if (-not (Test-Path -LiteralPath $cfg)) {
  New-Item -ItemType Directory -Force -Path $cfgDir | Out-Null
  Write-Host 'Lan dau: dan thong tin R2 token (Cloudflare > R2 > Manage API tokens).'
  $acc = Read-Host 'Account ID (32 ki tu)'
  $key = Read-Host 'Access Key ID'
  $sec = Read-Host 'Secret Access Key' -AsSecureString
  [pscustomobject]@{ Account = $acc.Trim(); Key = $key.Trim(); Secret = ($sec | ConvertFrom-SecureString) } | Export-Clixml -LiteralPath $cfg
}
$c = Import-Clixml -LiteralPath $cfg
$plain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR(($c.Secret | ConvertTo-SecureString)))
$env:RCLONE_CONFIG_R2_TYPE = 's3'
$env:RCLONE_CONFIG_R2_PROVIDER = 'Cloudflare'
$env:RCLONE_CONFIG_R2_ACCESS_KEY_ID = $c.Key
$env:RCLONE_CONFIG_R2_SECRET_ACCESS_KEY = $plain
$env:RCLONE_CONFIG_R2_ENDPOINT = "https://$($c.Account).r2.cloudflarestorage.com"
$env:RCLONE_CONFIG_R2_NO_CHECK_BUCKET = 'true'

# 3. Tai len: file da co va giong het thi bo qua
Write-Host "Dang dua $src len $bucket ..."
& $rclone copy $src "r2:$bucket" --checksum --transfers 8 --progress --exclude 'desktop.ini' --exclude '~$*' --exclude '*.tmp'
if ($LASTEXITCODE -ne 0) { throw "rclone bao loi (ma $LASTEXITCODE)." }
Write-Host ''
Write-Host 'XONG. File co dia chi: https://tai-lieu.lemonmath.com/<duong dan trong thu muc>'
Write-Host 'Ban co the dong cua so nay va bao Claude: "da tai tai lieu len R2".'
