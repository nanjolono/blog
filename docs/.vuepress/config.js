const { requireSidebar } = require('./utils')

module.exports = {
  base: '/blog/',
  title: 'Dxx',
  description: '我的个人网站',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Dxxxxxxww' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: requireSidebar(),
    // requireSidebar(), //[
    // {
    //   title: '前端小事',
    //   children: [
    //     ['/front-end/', 'heihei'],
    //   ],
    // },
    //   {
    //     title: 'CSS点滴',
    //     children: [['css-module', '1.盒模型']],
    //   },
    //   {
    //     title: '其他',
    //     children: [['others-module', '哈哈哈']],
    //   },
    // ],
  },
}
