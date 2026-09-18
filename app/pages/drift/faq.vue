<script setup lang="ts">
definePageMeta({ layout: 'default' })

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
  <MarketingProductInner
    v-if="page"
    :title="headline"
    :description="description"
  >
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
        class="border-white/20"
      >
        <UiAccordionTrigger class="text-left font-semibold text-white">
          {{ faq.q }}
        </UiAccordionTrigger>
        <UiAccordionContent class="text-white/70">
          {{ faq.a }}
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
    <p class="mt-10 text-sm text-white/70">
      Still stuck?
      <NuxtLink
        to="/support"
        class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
      >Contact support</NuxtLink>
      or read the
      <NuxtLink
        to="/drift/features"
        class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
      >full feature list</NuxtLink>.
    </p>
  </MarketingProductInner>
</template>
