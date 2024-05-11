import { defineConfig } from 'vitepress';
import { getSidebarList } from './utils'

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/learning-records/',
  lang: 'en-US',
  title: 'Learning-Records',
  description: 'Learning Records',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '面试题', link: '/interview/info' },
    ],

    sidebar: {
      '/interview': getSidebarList('/interview')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shouldhavedone/learning-records' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 shouldhavedone'
    }
  },
});
