<script setup lang="ts">
definePageMeta({ layout: 'drift' })

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
  <div v-if="page">
    <DriftSeoHero
      eyebrow="Alternatives"
      :title="headline"
      :description="description"
      wide
      :crumbs="[
        { name: 'Home', to: '/' },
        { name: 'Drift', to: '/drift' },
        { name: 'Alternatives' },
      ]"
    />
    <div class="mx-auto max-w-6xl px-4 pb-8 md:px-6">
      <div class="drift-prose max-w-3xl">
        <ContentRenderer :value="page" />
      </div>
      <div class="mt-12 grid gap-4 sm:grid-cols-2">
        <NuxtLink
          v-for="rival in rivals"
          :key="rival.path"
          :to="rival.path"
          class="group rounded-xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors hover:border-primary/50"
        >
          <p class="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            {{ rival.competitor }} alternative
          </p>
          <h2 class="mt-2 text-xl font-semibold tracking-tight">
            {{ rival.competitor }}
          </h2>
          <p class="mt-2 text-sm text-muted-foreground">
            {{ rival.hubBlurb || rival.who }}
          </p>
          <span class="mt-4 inline-block text-sm text-primary transition-all group-hover:translate-x-0.5">
            Compare with Drift →
          </span>
        </NuxtLink>
      </div>
    </div>
    <DriftDownloadBand />
  </div>
</template>
