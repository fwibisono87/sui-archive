// @ts-check
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Suisei Archive Guide',
  tagline: 'Keep the moments that matter, responsibly.',
  url: 'https://fwibisono87.github.io',
  baseUrl: '/sui-archive/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  favicon: 'img/favicon.ico',

  organizationName: 'fwibisono87',
  projectName: 'sui-archive',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/fwibisono87/sui-archive/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Suisei Archive Guide',
        logo: {
          alt: 'Suisei Archive Guide comet logo',
          src: 'img/sui.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guide',
          },
          {
            type: 'doc',
            docId: 'quick-start',
            position: 'left',
            label: 'Quick start',
          },
          {
            href: 'https://github.com/fwibisono87/sui-archive',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick start',
                to: '/docs/quick-start/',
              },
              {
                label: 'Live streams',
                to: '/docs/live-streams/',
              },
              {
                label: 'Preservation',
                to: '/docs/preservation/',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'Source code',
                href: 'https://github.com/fwibisono87/sui-archive',
              },
              {
                label: 'Report an issue',
                href: 'https://github.com/fwibisono87/sui-archive/issues',
              },
              {
                label: 'Content license',
                href: 'https://creativecommons.org/licenses/by/4.0/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Francis Wibisono. Guide content CC BY 4.0. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'powershell'],
      },
    }),
};

module.exports = config;
