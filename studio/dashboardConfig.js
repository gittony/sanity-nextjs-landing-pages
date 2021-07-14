export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60ee51775329e8c60df18437',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t31v4bv3',
                  apiId: 'c0844c76-1bed-45ee-a9c8-12e5e710f9e1'
                },
                {
                  buildHookId: '60ee517746370bc1f0e79176',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-18oqmyvm',
                  apiId: 'e19912f4-31a6-46e0-8edc-a301d4781b18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gittony/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-18oqmyvm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
