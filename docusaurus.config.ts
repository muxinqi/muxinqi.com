import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const Constants = {
  GTAG_TRACKING_ID: 'G-P87JCEP6Z6',
  ALGOLIA_APP_ID: 'DVPTVLGBIM',
  ALGOLIA_API_KEY: '5d0be014fd499471d9226ba4cc74d7c1',
} as const

const isProd = process.env.NODE_ENV === 'production'

const config: Config = {
  title: 'Xinqi Explores',
  tagline: "Curiosity's cool",
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
        gtag: {
          trackingID: Constants.GTAG_TRACKING_ID,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
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
        { to: '/blog', label: '🌄 博客', position: 'left' },
        {
          href: 'https://github.com/muxinqi/muxinqi.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      appId: Constants.ALGOLIA_APP_ID,
      apiKey: Constants.ALGOLIA_API_KEY,
      indexName: 'muxinqi',
      contextualSearch: true,
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
            },
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
              href: 'mailto:hi@muxinqi.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/muxinqi">Xinqi Mu</a>`,
    },
    prism: {
      theme: prismThemes.palenight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff'],
    },
  } satisfies Preset.ThemeConfig,

  headTags: !isProd
    ? []
    : [
        // Microsoft Clarity
        {
          tagName: 'script',
          attributes: { type: 'text/javascript' },
          innerHTML: `
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "k135p7ppf5");
          `,
        },
        // Vercel Analytics
        {
          tagName: 'script',
          attributes: { type: 'text/javascript' },
          innerHTML: `
            window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
          `,
        },
      ],

  scripts: !isProd
    ? []
    : [
        // Sentry
        {
          src: 'https://js.sentry-cdn.com/8f8f9de80b1d17e2ad8dbe64deea6519.min.js',
          crossorigin: 'anonymous',
        },
        // Vercel Analytics
        {
          src: '/_vercel/insights/script.js',
          defer: true,
        },
      ],
}

export default config
