---
sidebar_position: 1
title: ffmpeg
description: Install and verify the media toolkit used by yt-dlp.
---

# ffmpeg

[`ffmpeg`](https://ffmpeg.org/) is the media toolkit `yt-dlp` uses to combine separate video and audio streams. You usually do not need to call it directly, but it must be installed and visible on your `PATH`.

## Windows

Install a current build with `winget`:

```powershell
winget install Gyan.FFmpeg
```

Alternatively, download a build linked from the official [ffmpeg download page](https://ffmpeg.org/download.html). Extract it to a permanent location, then add the archive's **`bin` directory** to your user `PATH`—not `ffmpeg.exe` itself. Open a new terminal afterward.

## macOS

With [Homebrew](https://brew.sh/):

```bash
brew install ffmpeg
```

## Linux

Debian, Ubuntu, and Linux Mint:

```bash
sudo apt update
sudo apt install ffmpeg
```

Fedora:

```bash
sudo dnf install ffmpeg
```

Arch Linux:

```bash
sudo pacman -S ffmpeg
```

Package availability and codec selection vary by distribution. Consult your distribution documentation if the package is unavailable.

## Verify the installation

```bash
ffmpeg -version
ffprobe -version
```

Both commands should print version and build information.

## Containers and remuxing

The video codec, audio codec, and file container are different things. The highest-quality streams may combine cleanly into Matroska (`.mkv`) but not MP4. For preservation, keep the source codecs and let `yt-dlp` choose a compatible container. If you need an MP4 playback copy, try:

```bash
ffmpeg -i "archive.mkv" -map 0 -c copy "playback-copy.mp4"
```

This remuxes without re-encoding. It can fail when one of the source codecs is not supported by MP4; keep the original archive either way.
