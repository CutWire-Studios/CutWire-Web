<script setup lang="ts">
definePageMeta({ layout: 'default' })

const site = useSiteConfig()
const path = '/drift/features'

const { data: page } = await useAsyncData('drift-features', () =>
  queryCollection('driftPages').path(path).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const title = page.value.title
const description = page.value.description
const headline = page.value.headline || title

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${site.url}${path}`,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}${path}` }] })

defineOgImageComponent('Default', {
  title: headline,
  description,
  eyebrow: 'CutWire Drift',
})

useSchemaOrg([
  defineWebPage({ name: title, description }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Drift', item: '/drift' },
      { name: 'Features' },
    ],
  }),
])
</script>

<template>
  <MarketingProductInner
    v-if="page"
    :title="headline"
    :description="description"
  >
    <div class="drift-prose">
      <ContentRenderer :value="page" />
    </div>
  </MarketingProductInner>
</template>
