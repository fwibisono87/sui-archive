---
sidebar_position: 2
title: Quick start
description: Make your first complete personal YouTube archive.
---

# Quick start

This walkthrough saves one public YouTube video together with the context needed to identify it later.

## 1. Check the tools

Open PowerShell, Terminal, or your preferred shell:

```bash
yt-dlp --version
ffmpeg -version
deno --version
```

If any command is missing, follow [Prerequisites](./prerequisite-tools.md).

## 2. Choose an archive folder

Create a folder on a drive with enough free space, then open it in your terminal.

On Linux or macOS:

```bash
mkdir -p "Suisei Archive"
cd "Suisei Archive"
```

On PowerShell:

```powershell
New-Item -ItemType Directory -Path "Suisei Archive"
Set-Location "Suisei Archive"
```

## 3. Download media and context

Replace `VIDEO_ID` with the ID from the YouTube URL:

```bash
yt-dlp \
  --write-info-json \
  --write-description \
  --write-thumbnail \
  --write-subs \
  --write-auto-subs \
  --sub-langs "en.*,ja.*,id.*" \
  -o "%(upload_date)s - %(title)s [%(id)s].%(ext)s" \
  "https://www.youtube.com/watch?v=VIDEO_ID"
```

PowerShell accepts the command on one line. If you split it across lines, replace each trailing `\` with a PowerShell backtick.

`yt-dlp` may create several files with the same base name: the video, metadata (`.info.json`), description, thumbnail, and English, Japanese, or Indonesian subtitle tracks. That is intentional; adjust `--sub-langs` if you need other languages.

## 4. Verify the result

- Play the media from beginning to end, or at least seek through its start, middle, and end.
- Confirm that it has both picture and sound.
- Open the description and check that the info JSON is not empty.
- Keep every sidecar beside the media file.

Once this works, read the full [`yt-dlp` guide](./tools/yt-dlp.md), then add [checksums and backups](./preservation.md). For a stream that has not begun, use the [scheduled live workflow](./live-streams.md) instead.
