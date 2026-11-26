# Lemonmath - kiem ke thu muc TaiLieuToan. CHI DOC, khong sua, khong xoa file nao.
$ErrorActionPreference = 'Continue'
$here = $PSScriptRoot
$root = Split-Path -Parent $here
$out  = Join-Path $here 'danh-muc-tho.csv'
Write-Host "Lemonmath - kiem ke $root"
Write-Host "Dang liet ke file (1-3 phut)..."
$files = @(Get-ChildItem -LiteralPath $root -Recurse -File -Force -ErrorAction SilentlyContinue -ErrorVariable gciErr |
  Where-Object { -not $_.FullName.StartsWith($here) })
Write-Host ("Tim thay {0} file. Dang tinh dau van tay cho cac file co kich thuoc trung nhau..." -f $files.Count)
$dup = @{}
$files | Group-Object Length | Where-Object { $_.Count -gt 1 } | ForEach-Object { $dup[$_.Name] = $true }
$i = 0
$rows = foreach ($f in $files) {
  $i++
  if ($i % 1000 -eq 0) { Write-Host ("  {0}/{1}" -f $i, $files.Count) }
  $h = ''
  if ($dup.ContainsKey([string]$f.Length)) {
    try { $h = (Get-FileHash -LiteralPath $f.FullName -Algorithm MD5 -ErrorAction Stop).Hash } catch { $h = 'ERR' }
  }
  [pscustomobject]@{
    path  = $f.FullName.Substring($root.Length + 1)
    ext   = $f.Extension.ToLower()
    bytes = $f.Length
    mtime = $f.LastWriteTime.ToString('yyyy-MM-dd HH:mm')
    md5   = $h
  }
}
$rows | Export-Csv -LiteralPath $out -NoTypeInformation -Encoding UTF8
if ($gciErr.Count -gt 0) {
  Write-Host ("Canh bao: {0} muc khong doc duoc (duong dan qua dai hoac bi khoa), xem khong-doc-duoc.txt" -f $gciErr.Count)
  $gciErr | ForEach-Object { $_.TargetObject } | Out-File -LiteralPath (Join-Path $here 'khong-doc-duoc.txt') -Encoding UTF8
}
Write-Host ''
Write-Host ("XONG: {0} file. Ket qua: {1}" -f @($rows).Count, $out)
Write-Host 'Ban co the dong cua so nay va bao Claude: "da chay xong kiem ke".'
