import { defineCollection, defineContentConfig } from '@nuxt/content'
import { de } from 'vuetify/locale'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      source: '**',
      type: 'page'
    }),
    aboutLabs: defineCollection({
      source: 'about/labs',
      type: 'page'
    }),
    aboutPeople: defineCollection({
      source: 'about/people',
      type: 'page'
    }),
    aboutTeams: defineCollection({
      source: 'about/teams',
      type: 'page'
    }),
    blogs: defineCollection({
      source: 'blogs',
      type: 'page'
    }),
  }
})
