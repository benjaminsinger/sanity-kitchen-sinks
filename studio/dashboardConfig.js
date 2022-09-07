export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63185d9435147e052c7f8e56',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sinks-studio-1daqwtge',
                  apiId: '589d3334-549b-4739-a028-061cf9fb4998'
                },
                {
                  buildHookId: '63185d95dc0da70527197ebe',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sinks-web-zvdyte28',
                  apiId: '9b84d4c6-7453-44c9-99af-b143be074415'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benjaminsinger/sanity-kitchen-sinks',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sinks-web-zvdyte28.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
