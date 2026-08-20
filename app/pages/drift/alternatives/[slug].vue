<script setup lang="ts">
definePageMeta({ layout: 'drift' })

const route = useRoute()
const site = useSiteConfig()
const slug = computed(() => route.params.slug as string)
const path = computed(() => `/drift/alternatives/${slug.value}`)

const { data: page } = await useAsyncData(
  `drift-alt-${slug.value}`,
  () => queryCollection('driftPages').path(path.value).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const title = page.value.title
const description = page.value.description
const headline = page.value.headline || title
const competitor = page.value.competitor || 'this editor'
const owner = page.value.competitorOwner

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'article',
  ogUrl: `${site.url}${path.value}`,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}${path.value}` }] })

defineOgImageComponent('Default', {
  title: headline,
  description,
  eyebrow: `${competitor} alternative`,
})

useSchemaOrg([
  defineWebPage({ name: title, description }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Drift', item: '/drift' },
      { name: 'Alternatives', item: '/drift/alternatives' },
      { name: competitor },
    ],
  }),
])
</script>

<template>
  <div v-if="page">
    <DriftSeoHero
      eyebrow="Editor alternative"
      :title="headline"
      :description="description"
      :crumbs="[
        { name: 'Home', to: '/' },
        { name: 'Drift', to: '/drift' },
        { name: 'Alternatives', to: '/drift/alternatives' },
        { name: competitor },
      ]"
    >
      <template
        v-if="page.who"
        #after
      >
        <p class="mt-4 text-sm text-muted-foreground">
          <span class="font-medium text-foreground">Best for: </span>{{ page.who }}
        </p>
      </template>
    </DriftSeoHero>

    <div class="mx-auto max-w-3xl px-4 pb-8 md:px-6">
      <DriftCompareTable
        v-if="page.rows?.length"
        :competitor="competitor"
        :rows="page.rows"
      />

      <div
        v-if="page.wins?.length"
        class="mt-10 rounded-xl border border-border bg-surface/70 p-6"
      >
        <h2 class="text-xl font-semibold tracking-tight">
          Where {{ competitor }} still wins
        </h2>
        <ul class="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          <li
            v-for="win in page.wins"
            :key="win"
          >
            {{ win }}
          </li>
        </ul>
      </div>

      <div class="drift-prose mt-10">
        <ContentRenderer :value="page" />
      </div>

      <p class="mt-10 text-sm text-muted-foreground">
        See the
        <NuxtLink
          to="/drift/features"
          class="text-primary hover:underline"
        >full Drift feature list</NuxtLink>
        or
        <NuxtLink
          to="/drift/faq"
          class="text-primary hover:underline"
        >FAQ</NuxtLink>.
        Product names are used only to identify the software people already search for.
        <span v-if="owner">{{ competitor }} is a trademark of {{ owner }}.</span>
      </p>
    </div>
    <DriftDownloadBand />
  </div>
</template>
