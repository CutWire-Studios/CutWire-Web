export function useDriftPageSeo(opts: {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  crumbs: { name: string, item?: string }[]
  questions?: { q: string, a: string }[]
}) {
  const site = useSiteConfig()
  const pageUrl = `${site.url}${opts.path}`

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: opts.ogTitle ?? opts.title,
    ogDescription: opts.ogDescription ?? opts.description,
    ogType: 'website',
    ogUrl: pageUrl,
    ogSiteName: site.name,
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: opts.ogTitle ?? opts.title,
    twitterDescription: opts.ogDescription ?? opts.description,
  })

  useHead({
    link: [{ rel: 'canonical', href: pageUrl }],
  })

  defineOgImageComponent('Default', {
    title: opts.ogTitle ?? opts.title,
    description: opts.ogDescription ?? opts.description,
    eyebrow: 'CutWire Drift',
  })

  useSchemaOrg([
    defineBreadcrumb({
      itemListElement: opts.crumbs.map(crumb => ({
        name: crumb.name,
        item: crumb.item,
      })),
    }),
    ...(opts.questions ?? []).map(faq => defineQuestion({
      name: faq.q,
      acceptedAnswer: faq.a,
    })),
  ])
}
