<script setup lang="ts">
definePageMeta({ layout: 'drift' })

const site = useSiteConfig()
const path = '/drift/mcp'

const { data: page } = await useAsyncData('drift-mcp', () =>
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
      { name: 'MCP' },
    ],
  }),
])
</script>

<template>
  <div v-if="page">
    <DriftSeoHero
      eyebrow="Agent access"
      :title="headline"
      :description="description"
      :crumbs="[
        { name: 'Home', to: '/' },
        { name: 'Drift', to: '/drift' },
        { name: 'MCP' },
      ]"
    />
    <div class="mx-auto max-w-3xl px-4 pb-8 md:px-6">
      <div class="drift-prose">
        <ContentRenderer :value="page" />
      </div>
    </div>
    <DriftDownloadBand />
  </div>
</template>
