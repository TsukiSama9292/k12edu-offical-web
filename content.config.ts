import { defineCollection, defineContentConfig } from '@nuxt/content'
import { de } from 'vuetify/locale'

export default defineContentConfig({
  collections: {
    aboutLabs: defineCollection({
      source: 'about/labs/*.md',
      type: 'page'
    }),
    aboutPeople: defineCollection({
      source: 'about/people/*.md',
      type: 'page'
    }),
    aboutTeams: defineCollection({
      source: 'about/teams/*.md',
      type: 'page'
    }),
    blogs: defineCollection({
      source: 'blogs/**/*.md',
      type: 'page'
    }),
  }
})
