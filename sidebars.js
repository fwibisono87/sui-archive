// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guideSidebar: [
    'intro',
    'quick-start',
    'prerequisite-tools',
    {
      type: 'category',
      label: 'Tools',
      collapsed: false,
      items: ['tools/ffmpeg', 'tools/yt-dlp', 'tools/kkr'],
    },
    'live-streams',
    'paid-streams',
    'preservation',
    'troubleshooting',
  ],
};

module.exports = sidebars;
