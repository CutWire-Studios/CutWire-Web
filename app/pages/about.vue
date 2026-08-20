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
    initials: 'SD',
    github: 'https://github.com/suhasdissa',
  },
  {
    name: 'Kalana Liyanage',
    initials: 'KL',
    github: 'https://github.com/kalana-pankaja',
  },
  {
    name: 'Sangeeth Kariyapperuma',
    initials: 'SK',
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

const milestones = [
  {
    year: '2025',
    title: 'CutWire starts Prism',
    body: 'A small team begins building an open-source live media trigger — simpler than Resolume, more approachable than TouchDesigner.',
  },
  {
    year: '2025–2026',
    title: 'From prototype to product',
    body: 'Prism ships a node graph, A/B mixing, AI background removal, shaders, overlays and NDI. Drift starts as a free CapCut alternative for desktop editing.',
  },
  {
    year: '2026',
    title: 'CutWire Studios launches',
    body: 'CutWire Prism 0.1 goes public under GPLv3. Drift joins the lineup as the studio\'s free desktop video editor.',
  },
]
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
            About
          </p>
          <h1 class="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Software for people who <span class="grad-text">create and go live</span>.
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg text-on-surface-variant md:text-xl">
            CutWire Studios builds free, open-source creative tools — live media mixing with Prism,
            and desktop video editing with Drift — for people who need to create under real pressure.
          </p>
        </div>

        <div
          v-reveal
          class="relative mx-auto mt-14 max-w-4xl"
        >
          <div class="glow-ring relative aspect-video overflow-hidden rounded-xl border border-border bg-surface">
            <MarketingConsoleScene
              signal="b"
              scene="STAGE"
              class="h-full w-full opacity-80"
            />
            <div
              aria-hidden="true"
              class="absolute inset-0 bg-gradient-to-tr from-background/70 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Facts strip -->
    <div class="border-y border-border/60 bg-surface/40">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-5 text-xs uppercase tracking-[0.18em] text-on-surface-variant md:px-6">
        <span
          v-for="fact in facts"
          :key="fact"
        >{{ fact }}</span>
      </div>
    </div>

    <!-- Story -->
    <section class="relative py-24 md:py-32">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Why we build it
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Creative tools shouldn't need a manual or a subscription.
          </h2>
          <div class="mt-5 space-y-5 text-lg text-on-surface-variant">
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
                class="text-primary hover:underline"
              >free CapCut alternative</NuxtLink>
              without watermarks, accounts or cloud lock-in. See
              <NuxtLink
                to="/drift/features"
                class="text-primary hover:underline"
              >every Drift feature</NuxtLink>
              or
              <NuxtLink
                to="/drift/alternatives"
                class="text-primary hover:underline"
              >compare it with other editors</NuxtLink>.
              Every CutWire product speaks the same language: calm under pressure, precise when it counts.
            </p>
          </div>
        </div>

        <div class="mt-14 grid gap-4 md:grid-cols-3">
          <div
            v-for="(item, i) in principles"
            :key="item.title"
            v-reveal="i"
            class="group relative overflow-hidden rounded-xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors hover:border-primary/50"
          >
            <div
              aria-hidden="true"
              class="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              style="background: rgba(255, 77, 0, 0.35)"
            />
            <div class="relative">
              <h3 class="font-semibold">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-sm text-on-surface-variant">
                {{ item.body }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="relative border-y border-border/60 bg-surface/40 py-24">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            The team
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            The people building it.
          </h2>
        </div>

        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <article
            v-for="(dev, i) in developers"
            :key="dev.name"
            v-reveal="i"
            class="group relative overflow-hidden rounded-xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors hover:border-primary/50"
          >
            <div class="flex items-center gap-4">
              <div class="flex size-11 flex-none items-center justify-center rounded-lg border border-border bg-card font-mono text-sm text-primary">
                {{ dev.initials }}
              </div>
              <div>
                <h3 class="font-semibold text-on-surface">
                  {{ dev.name }}
                </h3>
                <p class="text-sm text-on-surface-variant">
                  Developer
                </p>
              </div>
            </div>
            <a
              v-if="dev.github"
              :href="dev.github"
              target="_blank"
              rel="noopener"
              class="mt-6 inline-flex items-center gap-1.5 text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-3.5"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
              </svg>
            </a>
          </article>
        </div>

        <p
          v-reveal
          class="mt-10 text-sm text-on-surface-variant"
        >
          CutWire tools are open source.
          <a
            href="https://github.com/CutWire-Studios"
            target="_blank"
            rel="noopener"
            class="text-primary hover:underline"
          >Contributions welcome on GitHub</a>.
        </p>
      </div>
    </section>

    <!-- Journey -->
    <section class="relative py-24 md:py-32">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Journey
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            How we got here.
          </h2>
        </div>

        <ol class="mt-14 grid gap-3 md:grid-cols-3">
          <li
            v-for="(milestone, i) in milestones"
            :key="milestone.title"
            v-reveal="i"
            class="relative rounded-xl border border-border bg-surface/70 p-6 backdrop-blur"
          >
            <div class="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
              {{ milestone.year }}
            </div>
            <div class="mt-1 text-lg font-semibold text-primary">
              {{ milestone.title }}
            </div>
            <p class="mt-2 text-sm text-on-surface-variant">
              {{ milestone.body }}
            </p>
            <span
              v-if="i < milestones.length - 1"
              aria-hidden="true"
              class="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-primary md:block"
            >→</span>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>
