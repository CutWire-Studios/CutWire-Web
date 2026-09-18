<script setup lang="ts">
definePageMeta({ layout: 'default' })

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
  <MarketingProductInner
    v-if="page"
    :title="headline"
    :description="description"
  >
    <template
      v-if="page.who"
      #after
    >
      <p class="mt-4 text-sm text-white/70">
        <span class="font-medium text-white">Best for: </span>{{ page.who }}
      </p>
    </template>

    <DriftCompareTable
      v-if="page.rows?.length"
      :competitor="competitor"
      :rows="page.rows"
    />

    <div
      v-if="page.wins?.length"
      class="frost-card mt-10 rounded-xl p-6"
    >
      <h2 class="text-xl font-semibold tracking-tight text-white">
        Where {{ competitor }} still wins
      </h2>
      <ul class="mt-4 list-disc space-y-2 pl-5 text-white/70">
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

    <p class="mt-10 text-sm text-white/70">
      See the
      <NuxtLink
        to="/drift/features"
        class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
      >full Drift feature list</NuxtLink>
      or
      <NuxtLink
        to="/drift/faq"
        class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
      >FAQ</NuxtLink>.
      Product names are used only to identify the software people already search for.
      <span v-if="owner">{{ competitor }} is a trademark of {{ owner }}.</span>
    </p>
  </MarketingProductInner>
</template>
