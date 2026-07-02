import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: 'data',
      source: 'products/*.yml',
      schema: z.object({
        slug: z.string(),
        name: z.string(),
        tagline: z.string(),
        status: z.enum(['live', 'coming-soon']),
        version: z.string().optional(),
        platforms: z.array(z.enum(['macOS', 'Windows', 'Linux'])).default([]),
        summary: z.string(),
        features: z.array(z.object({ title: z.string(), body: z.string(), icon: z.string() })),
        highlights: z.array(z.object({ title: z.string(), description: z.string() })).optional(),
        useCases: z.array(z.object({ title: z.string(), description: z.string() })).optional(),
        hero: z.object({
          headline: z.string(),
          subheadline: z.string().optional(),
        }).optional(),
        repoUrl: z.string().url().optional(),
        docsUrl: z.string().url().optional(),
        specs: z.array(z.object({ label: z.string(), value: z.string() })),
        downloads: z.array(z.object({
          platform: z.string(),
          url: z.string(),
          size: z.string(),
          version: z.string().optional(),
          checksum: z.string().optional(),
        })).default([]),
      }),
    }),
  },
})
