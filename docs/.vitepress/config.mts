import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "王香的个人博客",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qniansi' }
    ],

    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备19054686号-1</a>&nbsp;&nbsp;'
        + '<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32030002000311" target="_blank">苏公网安备32030002000311号</a>&nbsp;&nbsp;|&nbsp;&nbsp;'
        + '<a href="https://vitepress.dev/zh/" target="_blank">Powered By VitePress</a>'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
