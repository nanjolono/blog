const { requireSidebar } = require('./utils')

module.exports = {
  base: '/blog/',
  title: 'nanjolono',
  description: '我的个人网站',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/nanjolono' },
      { text: 'java', link: './java-module' },
    ],
    sidebar: requireSidebar(),
    themeConfig: {
      lastUpdated: true, // '最后更新时间',
    },
    markdown: {
      // 显示代码块行号
      lineNumbers: true,
    },
  },
}
