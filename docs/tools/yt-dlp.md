---
sidebar_position: 6
---

# yt-dlp

Supported: YouTube, SPWN, and [everything on this list!](https://raw.githubusercontent.com/yt-dlp/yt-dlp/master/supportedsites.md)

[`yt-dlp`](https://github.com/yt-dlp/yt-dlp) is a fork of [`youtube-dl`](https://ytdl-org.github.io/youtube-dl/), a "Command-line program to download videos from YouTube.com and other video sites", which I find to be more convenient and more-feature complete in most circumstances.

As with most options on this guide, I would assume that you are comfortable with using Command-Line interfaces. However, it is not nescessary. Just follow along, and you'll be fine!

## What does this tool do?
As of November 2020, YouTube stores its high-quality videos in seperate audio and video streams. As (presumably) you want to save the best possible video and audio, we need to download *both* streams then merge them to a single file. 

To be able to merge said files, we need to defer the process to ffmpeg.