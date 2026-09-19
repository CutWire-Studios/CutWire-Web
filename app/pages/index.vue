<script setup lang="ts">
definePageMeta({ layout: 'default' })

const site = useSiteConfig()
const pageDescription = 'CutWire Studios is a non-profit. We build creative software in the open — free, no account, no subscription — and whatever you make with it stays yours.'

useSeoMeta({
  title: 'CutWire Studios — Free software down to the wire',
  description: pageDescription,
  ogTitle: 'Free software down to the wire, where your cut fuels the fire.',
  ogDescription: 'A non-profit studio. Free, open-source creative software — no account, no subscription, and the work you make stays yours.',
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
    sameAs: [
      'https://github.com/CutWire-Studios',
      'https://cutwire.org/discord',
      'https://www.youtube.com/@CutWire-Studios',
    ],
  }),
])

defineOgImageComponent('Default', {
  title: 'Free software down to the wire, where your cut fuels the fire.',
  description: 'A non-profit studio. Free, open-source creative software — no account, no subscription.',
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
            <span class="hero-heading block text-[clamp(2.05rem,5.8vw,4.25rem)]">
              Free software down to the wire,
            </span>
            <span class="hero-heading hero-heading-soft mt-1 block text-[clamp(2.05rem,5.8vw,4.25rem)] font-medium italic tracking-tight">
              where your cut fuels the fire.
            </span>
          </h1>
          <p class="hero-lede mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed md:text-xl">
            CutWire Studios is a non-profit. We build creative software in the open — free to use, free to study, with no account and no subscription — and whatever you make with it stays yours.
          </p>
          <!-- <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
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
          </div> -->
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
          <div class="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg font-medium">
            <a
              href="mailto:contact@cutwire.org"
              class="text-white hover:underline"
            >
              contact@cutwire.org
            </a>
            <a
              href="/discord"
              target="_blank"
              rel="noreferrer"
              class="text-white hover:underline"
            >
              Discord
            </a>
            <a
              href="https://www.youtube.com/@CutWire-Studios"
              target="_blank"
              rel="noreferrer"
              class="text-white hover:underline"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>
      </div>
    </div>
  </div>
</template>
