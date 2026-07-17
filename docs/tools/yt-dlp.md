---
sidebar_position: 2
title: yt-dlp
description: Download video, metadata, subtitles, thumbnails, and chat with current yt-dlp practices.
---

# yt-dlp

[`yt-dlp`](https://github.com/yt-dlp/yt-dlp) is the main tool used in this guide. It supports YouTube and [many other sites](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md), chooses suitable video and audio streams, and asks [`ffmpeg`](./ffmpeg.md) to merge them when necessary.

Install and verify it first using [Prerequisites](../prerequisite-tools.md).

## One video

The smallest useful command is:

```bash
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"
```

By default, current `yt-dlp` selects a good quality combination. Avoid copying format IDs such as `137+140` from another video: IDs and available codecs vary.

## A preservation-oriented download

Create a directory for the archive, move into it, and run:

```bash
yt-dlp \
  --write-info-json \
  --write-description \
  --write-thumbnail \
  --write-subs \
  --write-auto-subs \
  --sub-langs "en.*,ja.*,id.*" \
  --write-comments \
  --mtime \
  --download-archive downloaded.txt \
  -o "%(uploader)s/%(upload_date)s - %(title)s [%(id)s].%(ext)s" \
  "https://www.youtube.com/watch?v=VIDEO_ID"
```

This keeps the media plus an info JSON file, description, thumbnail, selected English/Japanese/Indonesian subtitles, comments, and a record that prevents accidental re-downloads. Adjust the language list for your collection. Comment extraction can be slow; omit `--write-comments` when speed matters. Not every site exposes every sidecar.

For an entire channel or playlist, use the same command with its playlist URL. First test with `--playlist-end 1` so a filename or authentication mistake does not multiply across hundreds of videos.

## Formats and containers

Inspect what a page offers with:

```bash
yt-dlp --list-formats "URL"
```

Letting `yt-dlp` choose is usually best. If you need a constraint, describe the result rather than pinning a transient ID. This example limits video to 1080p while retaining a fallback:

```bash
yt-dlp -f "bv*[height<=1080]+ba/b[height<=1080]" "URL"
```

Do not append `.mp4` after `%(ext)s`; that produces misleading names such as `video.webm.mp4`. If you need an MP4 compatibility copy, preserve the original and use `--remux-video mp4` or the [ffmpeg remux example](./ffmpeg.md#containers-and-remuxing) only when the codecs are compatible.

## Subtitles and live chat

List subtitle tracks first:

```bash
yt-dlp --list-subs "URL"
```

Download selected subtitle languages:

```bash
yt-dlp --write-subs --write-auto-subs --sub-langs "en.*,ja.*,id.*" "URL"
```

On supported YouTube pages, `live_chat` appears as a subtitle track. Save it as a sidecar with:

```bash
yt-dlp --skip-download --write-subs --sub-langs live_chat "URL"
```

Chat availability and replay completeness are controlled by YouTube. Verify that the resulting file exists and is non-empty.

## Content that requires your account

Use cookies only for content your logged-in account is permitted to view. `--cookies-from-browser` avoids browser extensions and loose cookie exports:

```bash
yt-dlp --cookies-from-browser firefox "URL"
```

Replace `firefox` with a [supported browser name](https://github.com/yt-dlp/yt-dlp#filesystem-options). Some browsers must be fully closed before their cookie database can be read. If you use a separate browser profile, append its name or path using the syntax documented by `yt-dlp --help`.

:::danger Cookies are credentials

Cookies can grant access to your account. Never commit them to Git, paste them into an issue, share them with another person, or store them inside the archive. Prefer a dedicated browser profile, keep it protected, and sign out or revoke sessions if a cookie file leaks.

:::

## Reusable configuration

After one-off commands work, place stable options in a [configuration file](https://github.com/yt-dlp/yt-dlp#configuration):

```text title="yt-dlp archive configuration"
--write-info-json
--write-description
--write-thumbnail
--write-subs
--write-auto-subs
--sub-langs en.*,ja.*,id.*
--mtime
--download-archive downloaded.txt
-o %(uploader)s/%(upload_date)s - %(title)s [%(id)s].%(ext)s
```

Keep account cookies and output paths out of a configuration you intend to share. Use `--ignore-config` when testing whether a saved option causes a problem.

## Updating and diagnostics

Start any diagnosis with:

```bash
yt-dlp --version
yt-dlp -U
yt-dlp --verbose "URL"
```

Use your package manager instead of `-U` when it installed `yt-dlp`. Before sharing a verbose log, remove usernames, local paths, cookies, query tokens, and private URLs. See [Troubleshooting](../troubleshooting.md) for common failures.
