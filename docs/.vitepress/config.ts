import { createRequire } from 'node:module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const utils = require('../../package.json')

export default defineConfig({
  base: '/utils/',

  head: [['link', { rel: 'icon', href: '/utils/favicon.ico' }]],

  title: 'utils.',

  description: 'A versatile collection of utility functions for simplifying JavaScript development.',

  appearance: 'dark',

  themeConfig: {
    logo: { light: '/logo/dark.png', dark: '/logo/light.png', alt: 'utils.' },

    siteTitle: false,

    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Examples', items: [{ text: 'Strings', link: '/api/strings' }, { text: 'Numbers', link: '/api/numbers' }, { text: 'Various', link: '/api/various' }] },
      { text: `v${utils.version}`, link: 'https://github.com/MilosPaunovic/utils/releases/latest' },
    ],

    sidebar: [
      { text: 'Guide', items: [{ text: 'Getting Started', link: '/guide' }] },
      { text: 'Examples', items: [{ text: 'Strings', link: '/api/strings' }, { text: 'Numbers', link: '/api/numbers' }, { text: 'Various', link: '/api/various' }] },
    ],

    socialLinks: [
      { icon: 'npm', link: 'https://www.npmjs.com/package/@paunovic/utils' },
      { icon: 'github', link: 'https://github.com/MilosPaunovic/utils' },
    ],

    footer: {
      message: 'Made with ❤️ in Belgrade, Serbia.',
      copyright: 'Copyright © 2024 - present <a href="https://github.com/MilosPaunovic">Miloš Paunović</a>',
    },
  },
})
