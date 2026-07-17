# Suisei Archive Guide

A beginner-friendly guide to making responsible personal archives of streams. The site covers `yt-dlp`, `ffmpeg`, YouTube live capture, authorized paid-event case studies, metadata, subtitles, chat, checksums, and backups.

The published site is <https://fwibisono87.github.io/sui-archive/>.

## Development

Requirements:

- Node.js 24 or newer (the repository includes `.nvmrc`)
- Yarn 1.22.22

Install dependencies and start the local site:

```bash
yarn install --frozen-lockfile
yarn start
```

Create a production build:

```bash
yarn build
```

Pull requests to the guide are welcome. Platform-specific instructions should link to primary sources and state when they were last verified. Never include account cookies, signed media URLs, ticket details, or other credentials in examples or bug reports.

Pushes to `master` are built and deployed to GitHub Pages by `.github/workflows/deploy-pages.yml`.

## Licenses

Source code is licensed under the [MIT License](./LICENSE). Written guide content is licensed under [CC BY 4.0](./CONTENT-LICENSE.md).
