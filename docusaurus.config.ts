import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Xinqi Explores',
  tagline: 'Curiosity\'s cool',
  favicon: 'img/favicon.ico',
  
  url: 'https://www.muxinqi.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'notes',
          routeBasePath: 'notes',
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/muxinqi/muxinqi.com/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/muxinqi/muxinqi.com/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '@muxinqi',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📝 笔记',
        },
        {to: '/blog', label: '🌄 博客', position: 'left'},
        {
          href: 'https://github.com/muxinqi/muxinqi.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categories',
          items: [
            {
              label: '📝 笔记',
              to: '/notes/intro',
            },
            {
              label: '🌄 博客',
              to: '/blog',
            }
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'muxinqi.com',
              href: 'https://github.com/muxinqi/muxinqi.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/muxinqi',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/muxinqi',
            },
            {
              label: 'Email',
              href: 'mailto:hi@muxinqi.com'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/muxinqi">Xinqi Mu</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
