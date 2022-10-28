---
sidebar_position: 6
---

# yt-dlp

Supported: YouTube, SPWN, and [everything on this list!](https://raw.githubusercontent.com/yt-dlp/yt-dlp/master/supportedsites.md)

[`yt-dlp`](https://github.com/yt-dlp/yt-dlp) is a fork of [`youtube-dl`](https://ytdl-org.github.io/youtube-dl/), a "Command-line program to download videos from YouTube.com and other video sites", which I find to be more convenient and more-feature complete in most circumstances.

As with most options on this guide, I would assume that you are comfortable with using Command-Line interfaces. However, it is not nescessary. Just follow along, and you'll be fine!

## What does this tool do?
As of November 2020, YouTube stores its high-quality videos in seperate audio and video streams. As (presumably) you want to save the best possible video and audio, we need to download *both* streams then merge them to a single file. 

To be able to merge said files, we need to defer the process to [ffmpeg](/docs/tools/ffmpeg/).

## Installation
### Windows 
Download the [latest release](https://github.com/yt-dlp/yt-dlp/releases) (Preferrably the `.exe`). You can run it as-is by opening PowerShell on your downloads folder, and typing in
```powershell
./yt-dlp
```
This command should return
```
PS D:\Users\sui\Downloads> ./yt-dlp

Usage: yt-dlp.exe [OPTIONS] URL [URL...]

yt-dlp.exe: error: You must provide at least one URL.
Type yt-dlp --help to see a list of all options.
```
### Linux
Using your favourite package manager (e.g. `apt` for ubuntu, or `aur` for arch), install the following packages:
```
python3
python3-pip
python-is-python3
atomicparsley
```
Installation of `yt-dlp` itself can be achieved in 2 ways, either by directly getting the precompiled binaries directly or using [pip](https://pypi.org/project/pip/ )(Python's Package Manager)

#### Installation using binaries
```bash
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
# Downloads the latest release from GitHub and stores it in /usr/local/bin/yt-dlp
# You can also use, in place of curl, wget and aria2c
sudo chmod a+rx /usr/local/bin/youtube-dl
# Grants read and execute permissions to all users for yt-dlp
```

#### Installation using pip
```bash
sudo -H python3 -m pip install -U yt-dlp 
# Installs yt-dlp globally
```

## Basic Usage

In the simplest of terms, you can download a video just with the following command.
Assuming you want to download [Suisei's Stellar Stellar](https://www.youtube.com/watch?v=a51VH9BYzZA) with the url `https://www.youtube.com/watch?v=a51VH9BYzZA`
``` bash
yt-dlp "https://www.youtube.com/watch?v=a51VH9BYzZA"
```