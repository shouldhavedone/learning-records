import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'LearningRecords',
  description: 'Learning Records',

  themeConfig: {
    nav: [
      { text: '指引', link: '/info' },
      {
        text: 'HTML',
        items: [
          {
            text: '写H5和小程序有什么相同及不同的地方',
            link: '/html/写H5和小程序有什么相同及不同的地方',
          },
        ],
      },
    ],

    sidebar: [
      {
        items: [{ text: '指引', link: '/info' }],
      },
      {
        text: 'HTML',
        items: [
          {
            text: '写H5和小程序有什么相同及不同的地方',
            link: '/html/写H5和小程序有什么相同及不同的地方',
          },
        ],
      },
    ],
  },
});
