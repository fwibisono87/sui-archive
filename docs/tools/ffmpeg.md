---
sidebar_position: 1
---
# ffmpeg

The essential tool to working with video/audio.

[`ffmpeg`](https://ffmpeg.org/) is a "A complete, cross-platform solution to record, convert and stream audio and video." For our intents and purposes, we use it to manipulate audio and video streams. 

## Setup

### Windows 
Really simple, all you have to do is grab the [current release build](https://www.gyan.dev/ffmpeg/builds/). 

After doing so, extract the archive and run the following command to tell Windows where your `ffmpeg` program is located. For example, let's assume you extracted your archive on `C:\Users\suichan\Downloads\ffmpeg-5.1.2-essentials_build`:

```powershell
setx /M PATH "%PATH%;C:\Users\suichan\Downloads\ffmpeg-5.1.2-essentials_build\bin\ffmpeg.exe"
```

### Linux

#### Debian-base
For anything debian-based (Ubuntu, Linux Mint, and, well, Debian), 

```bash
sudo apt update
sudo apt upgrade

sudo apt install ffmpeg
```

To test that `ffmpeg` is installed, run
```bash
ffmpeg -version
```

#### ArchLinux (and anything that has AUR)

```bash
yay -Syyu
yay -S ffmpeg
```

To test that `ffmpeg` is installed, run
```bash
ffmpeg -version
```