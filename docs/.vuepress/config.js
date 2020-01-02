module.exports = {
  base: '/blog/',
  dest: 'public',
  title: 'Dxx',
  description: '我的个人网站',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Dxxxxxxww' },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: [
      {
        title: '前端小事',
        children: [
          ['/front-end/', 'heihei'],
          ['/front-end/utils/', 'JS工具函数集合']
        ]
      },
      {
        title: 'CSS点滴',
        children: [['/css/', '哈哈哈']]
      },
      {
        title: '其他',
        children: [['/others/', '哈哈哈']]
      }
    ]
  }
}
