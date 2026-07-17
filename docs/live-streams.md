---
sidebar_position: 5
title: Live streams
description: Prepare for scheduled YouTube streams and understand DVR and recovery limits.
---

# Live streams

Live capture is less forgiving than downloading a finished VOD. Start early, monitor the first few minutes, and treat the finished recording as unverified until you inspect it.

## Scheduled YouTube stream

Open the watch page before the scheduled start and run:

```bash
yt-dlp \
  --wait-for-video 30 \
  --live-from-start \
  --write-info-json \
  --write-description \
  --write-thumbnail \
  -o "%(upload_date)s - %(title)s [%(id)s].%(ext)s" \
  "https://www.youtube.com/watch?v=VIDEO_ID"
```

`--wait-for-video 30` retries every 30 seconds. `--live-from-start` asks for earlier segments when the service makes them available; `yt-dlp` documents this feature as experimental, so update the program and test it before an important event.

## DVR is the deciding factor

When DVR is enabled, joining late may still allow retrieval from the beginning. When the creator or platform disables DVR, earlier segments may never be exposed to a late client. No command can reconstruct segments that were never available to it.

For an announced unarchived stream:

- Start the command before the scheduled time.
- Use stable power and wired networking where possible.
- Disable sleep for the duration without disabling normal disk protections.
- Leave more free disk space than the expected recording requires.
- Check that the output file begins growing after the stream starts.

Avoid restarting a healthy capture merely to change filenames or optional metadata.

## If you join after the stream begins

Try the command with `--live-from-start`. If it begins at the current live edge, keep recording rather than repeatedly restarting. A partial archive is better than losing more of the stream.

## When the stream ends

YouTube may need time to process the normal VOD and higher-quality formats. After processing completes, run an ordinary [preservation-oriented download](./tools/yt-dlp.md#a-preservation-oriented-download) into a separate location. Compare its duration with the live capture and keep the more complete source—or both when they differ.

Save chat replay separately after it becomes available:

```bash
yt-dlp --skip-download --write-subs --sub-langs live_chat "URL"
```

Then follow the [verification checklist](./preservation.md#verify-before-you-trust-it).

## What can go wrong

Network loss, platform-side discontinuities, ads, stream restarts, and format changes can leave gaps or multiple files. Do not assume an exit code of zero proves the recording is complete. For symptom-based help, see [Troubleshooting](./troubleshooting.md#live-recording-is-incomplete).
