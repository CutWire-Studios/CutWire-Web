<script setup lang="ts">
definePageMeta({ layout: 'default' })

const site = useSiteConfig()

useSeoMeta({
  title: 'About — CutWire Studios',
  description: 'The team behind CutWire Studios — free, open-source creative tools for live media and video editing, built for people who need to create under real pressure.',
  ogTitle: 'Software for people who create and go live',
  ogDescription: 'Why we build CutWire Prism and Drift, the principles behind them, and the people writing them.',
  ogType: 'website',
  ogUrl: `${site.url}/about`,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}/about` }] })

defineOgImageComponent('Default', {
  title: 'Software for people who create and go live.',
  description: 'Open-source creative tools, built by a small team in the open.',
  eyebrow: 'About',
})

const developers = [
  {
    name: 'Suhas Dissanayake',
    handle: 'suhasdissa',
    github: 'https://github.com/suhasdissa',
  },
  {
    name: 'Kalana Liyanage',
    handle: 'kalana-pankaja',
    github: 'https://github.com/kalana-pankaja',
  },
  {
    name: 'Sangeeth Kariyapperuma',
    handle: 'NipunSGeeTH',
    github: 'https://github.com/NipunSGeeTH',
  },
]

const facts = [
  'Open source',
  'GPLv3',
  'No telemetry',
  'No subscription',
  'Built in the open',
]

const principles = [
  {
    title: 'Calm under pressure',
    body: 'Whether you are live on stage or finishing a cut before it ships, the software has to stay simple when it matters most.',
  },
  {
    title: 'Simplicity over feature bloat',
    body: 'Every addition has to earn its place in the interface. Defaults that work beat options that might.',
  },
  {
    title: 'Open foundations',
    body: 'Built on Qt and FFmpeg, released under GPLv3 — so creators can trust, audit and extend what they run.',
  },
]
</script>

<template>
  <LayoutStudioFrost>
    <section class="px-4 pt-16 pb-12 md:px-6 md:pt-24 md:pb-16">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
          Software for people who create and go live.
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/70 md:text-xl">
          CutWire Studios builds free, open-source creative tools — live media mixing with Prism,
          and desktop video editing with Drift — for people who need to create under real pressure.
        </p>
      </div>
    </section>

    <div class="border-y border-white/10">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-5 text-sm text-white/70 md:px-6">
        <span
          v-for="fact in facts"
          :key="fact"
        >{{ fact }}</span>
      </div>
    </div>

    <section class="px-4 py-20 md:px-6 md:py-28">
      <div class="mx-auto max-w-6xl">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Creative tools shouldn't need a manual or a subscription.
          </h2>
          <div class="mt-5 space-y-5 text-lg text-white/70">
            <p>
              CutWire Prism started from a simple idea: a visual node graph, a live crossfader and
              panic controls, in a dark interface that works under stage lighting and in a school
              hall alike.
            </p>
            <p>
              Drift extends that same philosophy to desktop editing —
              a
              <NuxtLink
                to="/drift"
                class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >free CapCut alternative</NuxtLink>
              without watermarks, accounts or cloud lock-in. See
              <NuxtLink
                to="/drift/features"
                class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >every Drift feature</NuxtLink>
              or
              <NuxtLink
                to="/drift/alternatives"
                class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >compare it with other editors</NuxtLink>.
              Every CutWire product speaks the same language: calm under pressure, precise when it counts.
            </p>
          </div>
        </div>

        <div class="mt-14 grid gap-4 md:grid-cols-3">
          <div
            v-for="item in principles"
            :key="item.title"
            class="frost-card rounded-2xl p-6"
          >
            <h3 class="font-semibold text-white">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm text-white/70">
              {{ item.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-white/10 px-4 py-20 md:px-6 md:py-28">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">
          The people building it.
        </h2>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <MarketingDeveloperCard
            v-for="dev in developers"
            :key="dev.handle"
            :name="dev.name"
            :handle="dev.handle"
            :github="dev.github"
          />
        </div>

        <p class="mt-10 text-sm text-white/70">
          CutWire tools are open source.
          <a
            href="https://github.com/CutWire-Studios"
            target="_blank"
            rel="noopener"
            class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >Contributions welcome on GitHub</a>.
        </p>
      </div>
    </section>
  </LayoutStudioFrost>
</template>
