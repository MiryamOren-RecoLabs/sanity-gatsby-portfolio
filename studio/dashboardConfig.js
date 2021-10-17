export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '616c12cb5208b62f832eb64e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jfcsjijd',
                  apiId: 'a044bdc4-b9ea-42a9-9ccf-026010f08fa0'
                },
                {
                  buildHookId: '616c12cb74687f387417acd5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1p1wkrme',
                  apiId: 'ff832868-0967-4c92-8052-04671b04951b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MiryamOren-RecoLabs/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1p1wkrme.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
