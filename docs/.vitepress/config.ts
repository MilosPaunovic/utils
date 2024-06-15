import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/utils/',

  title: 'utils',

  description: 'A versatile collection of utility functions for simplifying JavaScript development.',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Examples', items: [{ text: 'Strings', link: '/api/strings' }, { text: 'Numbers', link: '/api/numbers' }, { text: 'Various', link: '/api/various' }] },
    ],

    sidebar: [
      { text: 'Guide', items: [{ text: 'Getting Started', link: '/guide' }] },
      { text: 'Examples', items: [{ text: 'Strings', link: '/api/strings' }, { text: 'Numbers', link: '/api/numbers' }, { text: 'Various', link: '/api/various' }] },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MilosPaunovic/utils' },
    ],

    footer: {
      message: 'Made with ❤️ in Belgrade, Serbia.',
      copyright: 'Copyright © 2024 - present <a href="https://github.com/MilosPaunovic">Miloš Paunović</a>',
    },
  },
})
