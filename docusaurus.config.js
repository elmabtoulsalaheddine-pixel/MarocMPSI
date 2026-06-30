import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MarocMPSI',
  tagline: 'Cours, exercices et ressources pour les étudiants MPSI au Maroc',
  favicon: 'img/favicon.ico',

  url: 'https://marocmpsi.github.io',
  baseUrl: '/',
    stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
    },
  ],
headTags: [
  {
    tagName: 'meta',
    attributes: {
      name: 'keywords',
      content: 'MPSI Maroc, Analyse, Algèbre, Concours, CPGE Maroc',
    },
  },
  {
    tagName: 'meta',
    attributes: {
      name: 'description',
      content:
        'Cours, exercices corrigés, colles et concours pour les étudiants MPSI au Maroc.',
    },
  },
],
  organizationName: 'MarocMPSI',
projectName: 'marocmpsi',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: './sidebars.js',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },

      blog: {
        showReadingTime: false,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },

      theme: {
        customCss: './src/css/custom.css',
      },
    },
  ],
],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
  title: 'MarocMPSI',
 logo: {
  alt: 'MarocMPSI',
  src: 'img/logo.svg',
},
  items: [
    {
      to: '/',
      label: 'Accueil',
      position: 'left',
    },
   {
  to: '/docs/analyse/les-nombres-reels',
  label: 'Analyse',
},
    {
      to: '/docs/algebre',
      label: 'Algèbre',
      position: 'left',
    },
    {
      to: '/docs/exercices/les-nombres-reels',
      label: 'Exercices',
      position: 'left',
    },
    {
      to: '/docs/colles',
      label: 'Colles',
      position: 'left',
    },
    {
      to: '/docs/concours',
      label: 'Concours',
      position: 'left',
    },
    {
      href: 'https://github.com/MarocMPSI/marocmpsi',
      label: 'GitHub',
      position: 'right',
    },
  ],
},

    footer: {
  style: 'dark',

  links: [
    {
      title: 'Cours',
      items: [
        {
          label: 'Analyse',
          to: '/docs/analyse',
        },
        {
          label: 'Algèbre',
          to: '/docs/algebre',
        },
        {
          label: 'Exercices',
          to: '/docs/exercices',
        },
      ],
    },

    {
      title: 'Préparation',
      items: [
        {
          label: 'Colles',
          to: '/docs/colles',
        },
        {
          label: 'Concours',
          to: '/docs/concours',
        },
      ],
    },

    {
      title: 'Projet',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/MarocMPSI/marocmpsi',
        },
      ],
    },
  ],

  copyright: `© ${new Date().getFullYear()} MarocMPSI — Tous droits réservés.`,
},

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;