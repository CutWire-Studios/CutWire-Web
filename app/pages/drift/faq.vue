<script setup lang="ts">
definePageMeta({ layout: 'drift' })

const site = useSiteConfig()
const path = '/drift/faq'

const { data: page } = await useAsyncData('drift-faq', () =>
  queryCollection('driftPages').path(path).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const title = page.value.title
const description = page.value.description
const headline = page.value.headline || title
const faqs = page.value.faqs ?? []

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
  defineWebPage({
    name: title,
    description,
    '@type': 'FAQPage',
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Drift', item: '/drift' },
      { name: 'FAQ' },
    ],
  }),
  ...faqs.map(faq => defineQuestion({
    name: faq.q,
    acceptedAnswer: faq.a,
  })),
])
</script>

<template>
  <div v-if="page">
    <DriftSeoHero
      eyebrow="FAQ"
      :title="headline"
      :description="description"
      :crumbs="[
        { name: 'Home', to: '/' },
        { name: 'Drift', to: '/drift' },
        { name: 'FAQ' },
      ]"
    />
    <div class="mx-auto max-w-3xl px-4 pb-8 md:px-6">
      <div
        v-if="page.body"
        class="drift-prose mb-10"
      >
        <ContentRenderer :value="page" />
      </div>
      <UiAccordion
        type="single"
        collapsible
        class="max-w-3xl"
      >
        <UiAccordionItem
          v-for="(faq, i) in faqs"
          :key="i"
          :value="`faq-${i}`"
          class="border-border"
        >
          <UiAccordionTrigger class="text-left font-semibold">
            {{ faq.q }}
          </UiAccordionTrigger>
          <UiAccordionContent class="text-muted-foreground">
            {{ faq.a }}
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
      <p class="mt-10 text-sm text-muted-foreground">
        Still stuck?
        <NuxtLink
          to="/support"
          class="text-primary hover:underline"
        >Contact support</NuxtLink>
        or read the
        <NuxtLink
          to="/drift/features"
          class="text-primary hover:underline"
        >full feature list</NuxtLink>.
      </p>
    </div>
    <DriftDownloadBand />
  </div>
</template>
