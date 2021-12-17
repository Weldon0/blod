const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '服务端编程-新型面授笔记',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'webAPI',
        link: '/webapi/',
      },
      {
        text: 'Ajax',
        link: '/ajax/',
      },
      {
        text: 'git',
        link: '/git/',
      },
      {
        text: '大事件',
        link: '/bigevents/',
      },
      {
        text: 'nodejs',
        link: '/node/',
      },
      {
        text: '讲义规范',
        link: '/coursenote/',
      },
      {
        text: '出题规范',
        link: '/specification/',
      },
    ],
    sidebar: {
      '/ajax/': [
        {
          title: 'Ajax',
          sidebarDepth: 2,
          collapsable: true,
          children: [
            '',
            'day01',
            'day01-afterclass',
            'day02',
            'day02-afterclass',
            'day03',
            'day03-afterclass',
            'day04',
            'day04-afterclass',
          ],
        },
      ],
      '/git/': [
        {
          title: 'git',
          sidebarDepth: 2,
          collapsable: true,
          children: [
            '',
            'day01',
            'day01-afterclass',
            'day02',
            'day02-afterclass',
          ],
        },
      ],
      '/bigevents/': [
        {
          title: '大事件',
          sidebarDepth: 2,
          collapsable: true,
          children: [''],
        },
      ],
      '/node/': [
        {
          title: 'nodejs',
          sidebarDepth: 2,
          collapsable: true,
          children: ['nodeday1', 'nodeday2'],
        },
      ],
      '/coursenote/': [
        {
          title: '讲义规范',
          sidebarDepth: 2,
          collapsable: true,
          children: [''],
        },
      ],
      '/specification/': [
        {
          title: '出题规范',
          sidebarDepth: 2,
          collapsable: true,
          children: [''],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
