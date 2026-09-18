<script setup lang="ts">
definePageMeta({ layout: 'default' })

const site = useSiteConfig()
const pageDescription = 'CutWire Studios builds free, open-source creative tools. Prism is a live video mixer for schools, churches and venues. Drift is a free CapCut alternative for desktop video editing — no watermark, no account.'

useSeoMeta({
  title: 'CutWire Studios — Professional software, intuitive for everyone',
  description: pageDescription,
  ogTitle: 'Professional software. Intuitive for everyone.',
  ogDescription: 'Free open-source tools: Prism for live mixing, Drift as a CapCut-style desktop video editor with no watermark.',
  ogType: 'website',
  ogUrl: site.url,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: site.url },
    { rel: 'preload', as: 'image', href: '/images/hero-layers.jpg' },
  ],
})

useSchemaOrg([
  defineOrganization({
    name: 'CutWire Studios',
    description: pageDescription,
    url: site.url,
    logo: `${site.url}/logo-with-name.svg`,
    email: 'contact@cutwire.org',
    sameAs: ['https://github.com/CutWire-Studios'],
  }),
])

defineOgImageComponent('Default', {
  title: 'Professional software. Intuitive for everyone.',
  description: 'Prism for live mixing. Drift for desktop video editing. Both free and open source.',
  eyebrow: 'CutWire Studios',
})
</script>

<template>
  <div>
    <section
      id="top"
      class="hero-stage sticky top-0 z-0 -mt-24 h-dvh overflow-hidden"
    >
      <!-- Photo: Philip Oroni / Unsplash License — curved black and orange layers -->
      <img
        src="/images/hero-layers.jpg"
        alt="Curved abstract layers fading from black into orange"
        class="absolute inset-0 h-full w-full object-cover object-center"
        width="1920"
        height="1080"
        fetchpriority="high"
      >
      <div class="hero-copy relative flex h-full items-center justify-center px-4 pt-24 pb-10 md:px-6">
        <div class="relative mx-auto w-full max-w-5xl text-center">
          <h1 class="text-balance font-bold leading-[1.02] tracking-tight">
            <span class="hero-heading block text-[clamp(2.25rem,6.8vw,4.75rem)]">
              Professional software.
            </span>
            <span class="hero-heading hero-heading-soft mt-1 block text-[clamp(2.25rem,6.8vw,4.75rem)] font-medium italic tracking-tight">
              Intuitive for everyone.
            </span>
          </h1>
          <p class="hero-lede mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed md:text-xl">
            Free, open-source tools for live shows and desktop edits — no account, no watermark, no feature tier.
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#prism"
              class="btn-glass-prism min-h-11 px-5 py-2.5 text-sm"
            >
              Prism
            </a>
            <a
              href="#drift"
              class="btn-glass-drift min-h-11 px-5 py-2.5 text-sm"
            >
              Drift
            </a>
          </div>
          <p class="hero-lede mt-6 text-sm opacity-80">
            Linux · Windows · macOS · GPLv3
          </p>
        </div>
      </div>
    </section>

    <div class="hero-continue relative z-10 overflow-hidden rounded-t-[2rem]">
      <div
        class="hero-continue-photo pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div class="hero-continue-wash pointer-events-none absolute inset-0" />

      <div class="relative">
      <section class="px-4 py-12 md:px-6 md:py-16">
        <div class="mx-auto max-w-6xl space-y-8">
          <MarketingProductShowcaseCard slug="prism" />
          <MarketingProductShowcaseCard slug="drift" />
        </div>
      </section>

      <section class="hero-contact px-4 py-20 md:px-6 md:py-28">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Built for people with a deadline.
          </h2>
          <p class="mt-5 text-lg leading-relaxed text-white/70">
            If a volunteer can't run it the first time they open it, the design is wrong.
            Depth is there when you want it — node graphs, shaders, a real timeline —
            behind the simple path, not in front of it.
          </p>
          <a
            href="mailto:contact@cutwire.org"
            class="mt-8 inline-block text-lg font-medium text-white hover:underline"
          >
            contact@cutwire.org
          </a>
        </div>
      </section>
      </div>
    </div>
  </div>
</template>
