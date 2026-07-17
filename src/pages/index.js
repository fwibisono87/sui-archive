import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <span className={styles.comet} aria-hidden="true">☄</span>
        <p className={styles.eyebrow}>A practical, fan-made preservation guide</p>
        <Heading as="h1" className={styles.heroTitle}>
          Keep the stream.<br />Keep its story.
        </Heading>
        <p className={styles.heroSubtitle}>
          Archive YouTube and authorized event streams with their metadata,
          subtitles, chat, checksums, and backups.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/quick-start/">
            Make your first archive
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/intro/">
            Read the guide
          </Link>
        </div>
        <p className={styles.responsibilityNote}>
          Personal preservation only. Respect creators, access rules, and viewing terms.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Personal stream preservation"
      description="A beginner-friendly guide to preserving streams with yt-dlp, ffmpeg, metadata, subtitles, chat, checksums, and backups.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
