export const getSidebarList = (pathname: string) => {
  let pathObj = {
    '/interview': [
      {
        items: [{ text: '指引', link: '/interview/info' }],
      },
      {
        text: 'HTML',
        items: [
          {
            text: '写H5和小程序有什么相同及不同的地方',
            link: '/interview/html/写H5和小程序有什么相同及不同的地方',
          },
        ],
      },
      {
        text: 'CSS',
        items: [
          {
            text: '页面导入样式时，使用link和@import有什么区别',
            link: '/interview/css/页面导入样式时，使用link和@import有什么区别',
          },
        ],
      },
      {
        text: 'VUE',
        items: [
          {
            text: 'vue的生命周期以及作用',
            link: '/interview/vue/vue的生命周期以及作用',
          },
        ],
      },
    ],
  }

  return pathObj[pathname]
}