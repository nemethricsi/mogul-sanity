import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {dashboardTool, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'

export default defineConfig({
  name: 'default',
  title: 'mogul-sanity',

  projectId: 'awlvr4mc',
  dataset: 'production',

  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'feedthemogul.com',
              apiId: '3e3c630a-1954-493f-b33c-2de7f6b8b8f5',
              buildHookId: '6446f6aa4fe9971fac6e3744',
              name: 'feedthemogul',
              url: 'https://www.feedthemogul.com',
            },
          ],
          layout: {width: 'small'},
        }),
        projectUsersWidget(),
        projectInfoWidget(),
      ],
    }),
    deskTool(),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
