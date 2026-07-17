---
sidebar_position: 3
title: Prerequisites
description: Install a terminal, yt-dlp, ffmpeg, and a JavaScript runtime.
---

# Prerequisites

You need three programs:

- [`yt-dlp`](./tools/yt-dlp.md) downloads the media and accompanying information.
- [`ffmpeg`](./tools/ffmpeg.md) joins separate video and audio streams and can remux files.
- A supported JavaScript runtime lets `yt-dlp` handle YouTube's current player. [Deno](https://deno.com/) is the recommended default.

Use a currently supported version of Windows, macOS, or Linux. Commands in this guide are shown for PowerShell and POSIX shells such as Bash or Zsh.

## Install yt-dlp

Prefer one of the methods in the official [yt-dlp installation guide](https://github.com/yt-dlp/yt-dlp/wiki/Installation). These examples keep the tool easy to update.

### Windows

The simplest route is [`winget`](https://learn.microsoft.com/windows/package-manager/winget/):

```powershell
winget install yt-dlp.yt-dlp
winget upgrade yt-dlp.yt-dlp
```

### macOS

With [Homebrew](https://brew.sh/):

```bash
brew install yt-dlp
brew upgrade yt-dlp
```

### Linux

The standalone release is consistent across distributions. Install it in your own binary directory—no system-wide `sudo pip` required:

```bash
mkdir -p "$HOME/.local/bin"
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp \
  -o "$HOME/.local/bin/yt-dlp"
chmod a+rx "$HOME/.local/bin/yt-dlp"
```

Ensure `$HOME/.local/bin` is on your `PATH`. Your distribution package or `pipx install yt-dlp` are also reasonable choices, but distribution releases can lag behind upstream.

## Install ffmpeg and Deno

Follow the [ffmpeg setup](./tools/ffmpeg.md) for your operating system. Install Deno from its [official installation page](https://docs.deno.com/runtime/getting_started/installation/), or use your operating system's package manager if it offers a current release.

## Verify everything

Open a **new** terminal after installing, then run:

```bash
yt-dlp --version
ffmpeg -version
deno --version
```

Each command should print a version instead of “command not found” or “not recognized.” If it does not, see [Troubleshooting](./troubleshooting.md).

## Keep the tools current

Video sites change without notice. If a download that worked yesterday suddenly fails, update `yt-dlp` before changing your command:

```bash
yt-dlp -U
```

Package-managed installations should be updated through the same package manager instead. For example, use `winget upgrade`, `brew upgrade`, or your Linux distribution's update command.
