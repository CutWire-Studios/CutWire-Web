<script setup lang="ts">
definePageMeta({ layout: 'default' })

const site = useSiteConfig()
const pageTitle = 'Products — CutWire Studios'
const pageDescription = 'The CutWire product lineup. CutWire Prism is a free live video mixer; CutWire Drift is a free CapCut alternative for desktop video editing.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: 'The CutWire product lineup',
  ogDescription: 'CutWire Prism for live mixing, and CutWire Drift — a free CapCut alternative for desktop editing.',
  ogType: 'website',
  ogUrl: `${site.url}/products`,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}/products` }] })

defineOgImageComponent('Default', {
  title: 'Software for creators who run the show.',
  description: 'Prism for live mixing. Drift for desktop video editing. Both free and open source.',
  eyebrow: 'Products',
})
</script>

<template>
  <LayoutStudioFrost>
    <section class="px-4 pt-16 pb-8 md:px-6 md:pt-24 md:pb-12">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
          Prism and Drift.
        </h1>
        <p class="mx-auto mt-5 max-w-xl text-pretty text-lg text-white/70 md:text-xl">
          A live mixer for the room, and a desktop editor for the cut. Both free and open source.
        </p>
      </div>
    </section>

    <section
      id="lineup"
      class="px-4 pb-20 md:px-6 md:pb-28"
    >
      <div class="mx-auto max-w-6xl space-y-8">
        <MarketingProductShowcaseCard slug="prism" />
        <MarketingProductShowcaseCard slug="drift" />
      </div>
    </section>
  </LayoutStudioFrost>
</template>
