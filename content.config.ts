import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.md',
    }),
    posts: defineCollection({
      type: 'page',
      source: 'posts/**.md',
      schema: z.object({
        minRead: z.number(),
        date: z.date(),
        title: z.string(),
        draft: z.boolean().optional(),
        readTime: z.string().optional(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  },
})
