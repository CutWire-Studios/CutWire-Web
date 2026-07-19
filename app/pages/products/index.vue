<script setup lang="ts">
definePageMeta({ layout: 'default' })

const site = useSiteConfig()
const pageTitle = 'Products — CutWire Studios'
const pageDescription = 'The CutWire product lineup. CutWire Prism is a free, open-source node-based live video mixer for schools, churches, streamers and small venues.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: 'The CutWire product lineup',
  ogDescription: 'Software built for people who run things live — starting with CutWire Prism, a free node-based live video mixer.',
  ogType: 'website',
  ogUrl: `${site.url}/products`,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}/products` }] })

defineOgImageComponent('Default', {
  title: 'Software for people who run things live.',
  description: 'One product, built properly. CutWire Prism — free and open source.',
  eyebrow: 'Products',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div
        aria-hidden="true"
        class="grid-bg absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0"
        style="background: var(--grad-hero)"
      />
      <div class="relative mx-auto max-w-6xl px-4 pt-20 pb-16 md:px-6 md:pt-28 md:pb-24">
        <div class="animate-rise-in mx-auto max-w-3xl text-center">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Product suite
          </p>
          <h1 class="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Software for people who <span class="grad-text">run things live</span>.
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg text-on-surface-variant md:text-xl">
            Every CutWire tool speaks the same signal language — calm under pressure, precise when
            it counts.
          </p>
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
            <NuxtLink
              to="/prism"
              class="glow-button-primary px-5 py-3 text-sm"
            >
              Explore CutWire Prism
            </NuxtLink>
            <a
              href="https://docs.cutwire.org"
              class="glow-button-secondary px-5 py-3 text-sm"
            >
              Read the docs
            </a>
          </div>
        </div>

        <div
          v-reveal
          class="relative mx-auto mt-14 max-w-4xl"
        >
          <div class="glow-ring relative aspect-video overflow-hidden rounded-xl border border-border bg-surface">
            <MarketingConsoleScene
              signal="b"
              scene="STAGE"
              class="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Product showcase -->
    <section class="relative py-24 md:py-32">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Available now
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            One product, built properly.
          </h2>
        </div>

        <MarketingProductShowcaseCard
          v-reveal
          class="mt-12"
        />
      </div>
    </section>
  </div>
</template>
