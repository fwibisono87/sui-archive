import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const features = [
  {
    icon: '▶',
    title: 'Capture with context',
    description: 'Save the best available media together with descriptions, thumbnails, subtitles, comments, and live chat.',
    label: 'Learn yt-dlp',
    to: '/docs/tools/yt-dlp/',
  },
  {
    icon: '◉',
    title: 'Be ready before live',
    description: 'Prepare for scheduled starts, understand DVR limits, and compare your capture with the processed VOD.',
    label: 'Prepare for a stream',
    to: '/docs/live-streams/',
  },
  {
    icon: '✓',
    title: 'Know your copy is safe',
    description: 'Use stable names, checksums, verification, and a 3-2-1 backup plan instead of trusting a single disk.',
    label: 'Build an archive',
    to: '/docs/preservation/',
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.intro}>
          <p className={styles.kicker}>From one VOD to a resilient collection</p>
          <Heading as="h2">A workflow you can understand and repeat</Heading>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <span className={styles.icon} aria-hidden="true">{feature.icon}</span>
              <Heading as="h3">{feature.title}</Heading>
              <p>{feature.description}</p>
              <Link to={feature.to}>{feature.label} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
