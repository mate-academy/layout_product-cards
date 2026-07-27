$file = "c:\pr\nyam\layout_product-cards\src\index.html"
$content = [System.IO.File]::ReadAllText($file)
$content = $content -replace "`r`n", "`n"
$content = $content -replace "`n", "`r`n"
[System.IO.File]::WriteAllText($file, $content)
