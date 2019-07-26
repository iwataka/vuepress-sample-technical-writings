module.exports = {
  title: 'Hello VuePress',
  description: 'technical writing by using VuePress',
  base: '/vuepress-sample-technical-writings/',
  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'Actions',
        collapsable: false,
        children: [
          '/actions/action-AAA'
        ]
      },
      {
        title: 'Services',
        collapsable: false,
        children: [
          {
            title: 'Service AAA',
            collapsable: false,
            children: [
              '/services/service-AAA/api-1',
              '/services/service-AAA/api-2'
            ]
          },
          {
            title: 'Service BBB',
            collapsable: false
          }
        ]
      }
    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-multimd-table'), {
        enableMultilineRows: true,
        enableRowspan: true
      })
      md.use(require('markdown-it-include'))
    }
  }
}
