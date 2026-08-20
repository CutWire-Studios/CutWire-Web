import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const comparisonRow = z.object({
  label: z.string(),
  them: z.string(),
  us: z.string(),
})

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
    driftPages: defineCollection({
      type: 'page',
      source: 'drift/**/*.md',
      schema: z.object({
        eyebrow: z.string().optional(),
        headline: z.string().optional(),
        competitor: z.string().optional(),
        competitorOwner: z.string().optional(),
        who: z.string().optional(),
        wins: z.array(z.string()).optional(),
        rows: z.array(comparisonRow).optional(),
        faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
        hubBlurb: z.string().optional(),
        order: z.number().optional(),
      }),
    }),
  },
})
