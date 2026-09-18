<script setup lang="ts">
definePageMeta({ layout: 'default' })

const site = useSiteConfig()
const path = '/drift/alternatives'

const { data: page } = await useAsyncData('drift-alternatives-hub', () =>
  queryCollection('driftPages').path(path).first(),
)
const { data: rivals } = await useAsyncData('drift-alternatives-list', () =>
  queryCollection('driftPages')
    .where('path', 'LIKE', '/drift/alternatives/%')
    .order('order', 'ASC')
    .select('path', 'title', 'competitor', 'hubBlurb', 'who', 'order')
    .all(),
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
      { name: 'Alternatives' },
    ],
  }),
])
</script>

<template>
  <MarketingProductInner
    v-if="page"
    :title="headline"
    :description="description"
    wide
  >
    <div class="drift-prose max-w-3xl">
      <ContentRenderer :value="page" />
    </div>
    <div class="mt-12 grid gap-4 sm:grid-cols-2">
      <NuxtLink
        v-for="rival in rivals"
        :key="rival.path"
        :to="rival.path"
        class="frost-card group rounded-xl p-6"
      >
        <p class="text-xs text-white/70">
          {{ rival.competitor }} alternative
        </p>
        <h2 class="mt-2 text-xl font-semibold tracking-tight text-white">
          {{ rival.competitor }}
        </h2>
        <p class="mt-2 text-sm text-white/70">
          {{ rival.hubBlurb || rival.who }}
        </p>
        <span class="mt-4 inline-block text-sm text-white">
          Compare with Drift
        </span>
      </NuxtLink>
    </div>
  </MarketingProductInner>
</template>
