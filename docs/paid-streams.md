---
sidebar_position: 6
title: Paid streams
description: Time-sensitive notes for personal copies of events you are authorized to watch.
---

# Paid streams

**Last verified: 17 July 2026.** Ticketing systems and their terms change frequently. Treat this page as a set of case studies, not a promise that a platform will remain downloadable.

Only proceed when your own account has a valid ticket and local law and the event terms permit a personal copy. A ticket is not permission to redistribute the event. Keep browser cookies and playback URLs private.

## Start with the page URL

While signed in and able to play the event in your browser, update `yt-dlp`, then inspect the page:

```bash
yt-dlp -U
yt-dlp --cookies-from-browser firefox --list-formats "EVENT_PAGE_URL"
```

If formats appear, use the page URL directly:

```bash
yt-dlp \
  --cookies-from-browser firefox \
  --write-info-json \
  --write-thumbnail \
  -o "%(upload_date)s - %(title)s [%(id)s].%(ext)s" \
  "EVENT_PAGE_URL"
```

Do not copy somebody else's cookies, manifest URL, format IDs, or ticket link. Access URLs are often short-lived and account-bound.

## [ZAIKO](https://zaiko.io/)

`yt-dlp` currently lists ZAIKO extractors, including ticketed event pages. Open the event once in your browser, confirm playback, then use the normal page-URL command above with your browser cookies.

If extraction fails, capture a redacted `--verbose` log and check the current [supported-sites list](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md) and [open yt-dlp issues](https://github.com/yt-dlp/yt-dlp/issues). Do not include the event URL's private query parameters or cookie values in a public issue.

## [Streaming+ (eplus)](https://eplus.jp/sf/streamingplus)

`yt-dlp` currently includes eplus extractors used by Streaming+. Begin from the authenticated viewing page, not the ticket-purchase page, and use the same direct command. Some events may use a different player configuration even on the same service.

## [SPWN](https://virtual.spwn.jp/)

SPWN is not currently listed as a dedicated `yt-dlp` extractor. Try the authenticated event page anyway because generic extraction may work for an ordinary HLS stream.

If the page is unsupported but the browser player exposes an ordinary HLS (`.m3u8`) media URL, and capturing it is permitted, `yt-dlp` can accept that URL with your own browser session:

```bash
yt-dlp --cookies-from-browser firefox "YOUR_AUTHORIZED_HLS_URL"
```

Use the master playlist when available and let `yt-dlp` select formats. Do not publish the URL: it may function like a temporary credential. If the playlist expires, return to the viewing page rather than trying random URL changes.

## Nissin Power Station

Older versions of this guide included Nissin Power Station. Its former streaming service is no longer a current workflow and the old site was unavailable when this page was verified. The section is retained only to explain why old guides and screenshots mention it.

## DRM

DRM-related downloading issues are not covered in this guide. Please consult another resource if an event uses DRM.

## Before the viewing window closes

- Test playback and the direct `--list-formats` command early.
- Record the event title, date, performer, platform, and official event page.
- Allow time to verify duration, audio, and video before access expires.
- Preserve receipts separately from the media; they contain personal information.
- Follow the [preservation workflow](./preservation.md), but never put cookies or signed playback URLs in the archive metadata.
