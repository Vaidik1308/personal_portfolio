import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity nextjs site',

  projectId: 'hdjldg9s',
  dataset: 'production',
  basePath:"/studio",

  plugins: [structureTool(),],

  schema: {
    types: schemaTypes,
  },
})
