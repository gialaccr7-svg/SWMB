$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$handoverRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$archivePath = Join-Path $handoverRoot 'vibe-host-ban-giao.zip'
$folders = @('app','components','lib','public','scripts','docs')
$files = @('.dockerignore','.gitignore','.node-version','.npmrc','.nvmrc','.prettierignore','.prettierrc.json','AGENTS.md','Dockerfile','eslint.config.mjs','next-env.d.ts','next.config.ts','package.json','package-lock.json','postcss.config.mjs','proxy.ts','tsconfig.json','vite.config.ts','README.md','HUONG-DAN-VIBE-HOST.md','KET-QUA-KIEM-TRA.md','SOURCE-PARITY.json')
if (Test-Path -LiteralPath $archivePath) { Remove-Item -LiteralPath $archivePath }
$archive = [IO.Compression.ZipFile]::Open($archivePath, [IO.Compression.ZipArchiveMode]::Create)
try {
  foreach ($relative in $files) {
    [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, (Join-Path $handoverRoot $relative), $relative, [IO.Compression.CompressionLevel]::Optimal) | Out-Null
  }
  foreach ($folder in $folders) {
    Get-ChildItem -LiteralPath (Join-Path $handoverRoot $folder) -Recurse -File | ForEach-Object {
      $relative = $_.FullName.Substring($handoverRoot.Length + 1).Replace('\','/')
      [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $_.FullName, $relative, [IO.Compression.CompressionLevel]::Optimal) | Out-Null
    }
  }
} finally { $archive.Dispose() }
Get-FileHash -LiteralPath $archivePath -Algorithm SHA256
