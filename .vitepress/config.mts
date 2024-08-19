import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mochi",
  description: "Powerful anime streaming platform with a minimal interface and high-quality streaming.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: true,
    editLink: {
      pattern: 'https://github.com/mochi-stream/docs/edit/main/:path'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mochi-stream/mochi' }
    ]
  }
})
