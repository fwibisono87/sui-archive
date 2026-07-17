---
sidebar_position: 8
title: Troubleshooting
description: Diagnose installation, extraction, authentication, merge, and live-capture problems.
---

# Troubleshooting

Start with the simplest reproducible command. Saved configuration, browser cookies, and format constraints can hide the real cause.

## First response checklist

```bash
yt-dlp --version
yt-dlp -U
ffmpeg -version
deno --version
yt-dlp --ignore-config --verbose "URL"
```

If a package manager installed `yt-dlp`, update it through that manager. Read the first error, not only the last line of output.

## Command not found

Close and reopen the terminal. Confirm that the directory containing the executable—not the executable file—is on `PATH`.

On PowerShell:

```powershell
Get-Command yt-dlp
Get-Command ffmpeg
```

On Bash or Zsh:

```bash
command -v yt-dlp
command -v ffmpeg
```

If two installations appear, remove or update the older one so your shell runs the version you expect.

## YouTube extraction fails

- Update to the current stable `yt-dlp` release.
- Confirm a supported JavaScript runtime such as Deno is installed.
- Retry with `--ignore-config`.
- Remove copied format IDs and let default selection run.
- Check whether the video plays in a normal browser on the same network.

Avoid adding random extractor arguments from old issue comments. A temporary site change may require a new `yt-dlp` release.

## “ffmpeg not found” or merge failure

Run `ffmpeg -version` in the same terminal. If it works, use `yt-dlp --verbose` and check the executable path it reports. Do not force MP4 when the selected codecs require another container; keep the default merged result or use Matroska.

## Login, age, membership, or ticket error

First confirm the page plays in your browser with your own account. Then try:

```bash
yt-dlp --cookies-from-browser firefox "URL"
```

Close the browser if its cookie database is locked. Use the correct browser profile. Never solve an authentication error with cookies from somebody else's account.

DRM-related downloading issues are not covered in this guide. Please consult another resource if the service reports DRM.

## Live recording is incomplete

An incomplete live file can result from joining late with DVR disabled, network loss, a stream restart, or unavailable earlier segments. Keep the partial file. After the platform finishes processing the VOD, download it normally into another directory and compare durations.

Use `ffprobe` to inspect duration and streams:

```bash
ffprobe -v error -show_entries stream=index,codec_name:format=duration \
  -of json "recording.mkv"
```

No repair command can recreate missing source segments. A remux may repair a damaged container index, but make it to a new file and retain the original.

## Filenames are strange or too long

Keep the stable video ID while shortening the title:

```bash
yt-dlp --trim-filenames 180 \
  -o "%(upload_date)s - %(title)s [%(id)s].%(ext)s" "URL"
```

Windows paths have additional length and reserved-character constraints; use a short archive root such as `D:\Archive` when necessary.

## Asking for help safely

The [`yt-dlp` issue tracker](https://github.com/yt-dlp/yt-dlp/issues) provides current bug reports and templates. Before posting logs, redact:

- cookies and authorization headers;
- signed or private URLs and query strings;
- local usernames and private filesystem paths;
- ticket, membership, and receipt details.

Public URLs and complete **redacted** verbose output are more useful than screenshots of one error line.
