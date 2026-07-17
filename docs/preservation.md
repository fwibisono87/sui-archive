---
sidebar_position: 7
title: Preservation
description: Organize, verify, checksum, and back up a personal stream archive.
---

# Preservation

A playable video on one disk is a download, not yet a durable archive. Preserve enough context to identify it, verify it, and recover it after a device fails.

## Suggested layout

Use predictable folders and keep the platform ID in every basename:

```text
archive/
  Hoshimachi Suisei/
    20260717 - Example stream title [VIDEO_ID].mkv
    20260717 - Example stream title [VIDEO_ID].info.json
    20260717 - Example stream title [VIDEO_ID].description
    20260717 - Example stream title [VIDEO_ID].webp
    20260717 - Example stream title [VIDEO_ID].en.vtt
  downloaded.txt
  SHA256SUMS
```

Titles can change; IDs are stable identifiers. Prefer the upload or event date in `YYYYMMDD` form so names sort chronologically. Avoid deeply nesting by playlist unless that organization is genuinely useful.

## Keep sidecars

The media alone does not explain where it came from. Where available, retain:

- the `yt-dlp` info JSON;
- original description and thumbnail;
- creator-provided and automatic subtitles, clearly distinguished;
- live chat replay and comments when relevant;
- the original page URL and access date;
- a short note for unusual gaps, restarts, or manual processing.

Do not store login cookies, receipts, signed manifest URLs, or other credentials beside the archive.

## Prevent accidental duplicates

Use a download archive file for playlists and channels:

```bash
yt-dlp --download-archive downloaded.txt "PLAYLIST_OR_CHANNEL_URL"
```

Back up `downloaded.txt` with the collection. It is an index of completed IDs, not a substitute for checking that their files still exist.

## Verify before you trust it

After downloading:

1. Confirm expected files exist and have plausible sizes.
2. Play the beginning, several points in the middle, and the end.
3. Check audio and video duration with `ffprobe`:

```bash
ffprobe -v error -show_entries format=duration \
  -of default=noprint_wrappers=1:nokey=1 "archive.mkv"
```

4. For a live capture, compare duration with the announced stream length and any processed VOD.
5. Open subtitle and metadata sidecars rather than assuming an empty file is useful.

## Create checksums

Checksums reveal later corruption; they do not repair it. From the archive directory on Linux with GNU tools:

```bash
find . -type f ! -name SHA256SUMS -print0 \
  | sort -z \
  | xargs -0 sha256sum > SHA256SUMS
sha256sum --check SHA256SUMS
```

On macOS:

```bash
find . -type f ! -name SHA256SUMS -exec shasum -a 256 {} + > SHA256SUMS
shasum -a 256 --check SHA256SUMS
```

On PowerShell, generate an inventory with:

```powershell
Get-ChildItem -File -Recurse |
  Where-Object Name -ne 'SHA256SUMS.csv' |
  Get-FileHash -Algorithm SHA256 |
  Export-Csv -NoTypeInformation SHA256SUMS.csv
```

Verify that inventory later:

```powershell
Import-Csv .\SHA256SUMS.csv | ForEach-Object {
  $Actual = (Get-FileHash -LiteralPath $_.Path -Algorithm SHA256).Hash
  [PSCustomObject]@{ Path = $_.Path; Matches = ($Actual -eq $_.Hash) }
}
```

Regenerate the manifest deliberately after adding files. Keep an older signed or read-only copy when you need evidence that existing files did not change.

## Use the 3-2-1 rule

Aim for:

- **3 copies** of important files;
- on **2 different kinds of storage or failure domains**;
- with **1 copy off-site**.

For example: a working disk, an external backup disconnected when not in use, and an encrypted off-site backup. Sync alone is not a backup because deletion, corruption, or ransomware can sync too. Periodically restore a sample and re-check its checksums.

## Keep the source master

Do not re-encode the only copy merely for smaller size or device compatibility. Preserve the downloaded source codecs and create separate playback derivatives. Document any trimming, remuxing, subtitle conversion, or repair so the master remains distinguishable.

Finally, revisit platform-specific commands periodically. Preservation includes maintaining the workflow, not only the files it produced.
