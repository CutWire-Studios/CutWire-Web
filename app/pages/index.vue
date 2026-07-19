<script setup lang="ts">
import { GraduationCap, Music, Trophy, Users } from 'lucide-vue-next'

definePageMeta({ layout: 'default' })

const site = useSiteConfig()
const pageDescription = 'CutWire Studios builds free, open-source live media software with beginner-friendly interfaces. CutWire Prism is a node-based live video mixer for schools, churches and small venues.'

useSeoMeta({
  title: 'CutWire Studios — Professional software, intuitive for everyone',
  description: pageDescription,
  ogTitle: 'Professional software. Intuitive for everyone.',
  ogDescription: 'Free, open-source live media tools for people who run shows, streams and events under real pressure.',
  ogType: 'website',
  ogUrl: site.url,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})

useHead({ link: [{ rel: 'canonical', href: site.url }] })

useSchemaOrg([
  defineOrganization({
    name: 'CutWire Studios',
    description: pageDescription,
    url: site.url,
    logo: `${site.url}/logo-with-name.svg`,
    sameAs: ['https://github.com/CutWire-Studios'],
  }),
])

defineOgImageComponent('Default', {
  title: 'Professional software. Intuitive for everyone.',
  description: 'Free, open-source live media tools for people who run things live.',
  eyebrow: 'CutWire Studios',
})

const useCases = [
  { title: 'School events', description: 'Instant highlight reels and replays during cricket, football, and assembly shows.', icon: GraduationCap },
  { title: 'Live concerts', description: 'Music videos, audio-reactive shader visuals, and custom graphics that sync with the beat.', icon: Music },
  { title: 'Visual performances', description: 'Dance, theater, and immersive installations with a dark VJ-style interface.', icon: Users },
  { title: 'Sports broadcasting', description: 'HTML/QML score overlays, freeze-frame holds, and program recording.', icon: Trophy },
]

const principles = [
  {
    title: 'Usable in ten minutes',
    body: 'If a volunteer can\'t run it the first time they open it, the design is wrong. Defaults that work beat options that might.',
  },
  {
    title: 'Depth when you want it',
    body: 'Node graphs, shaders, scripting and network I/O are all there — behind the simple path, not in front of it.',
  },
  {
    title: 'Free and open source',
    body: 'GPLv3, no account, no telemetry, no feature tier. The tools should belong to the people using them.',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      id="top"
      class="relative overflow-hidden"
    >
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
          <NuxtLink
            to="/prism"
            class="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-on-surface-variant backdrop-blur transition-colors hover:text-on-surface"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
            CutWire Prism v0.1.2 is out — free &amp; open source
          </NuxtLink>
          <h1 class="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Professional software. <span class="grad-text">Intuitive for everyone.</span>
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg text-on-surface-variant md:text-xl">
            CutWire Studios builds powerful creative tools with clean, beginner-friendly
            interfaces — so anyone can create like a pro. No steep learning curves, no manuals
            required.
          </p>
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
            <NuxtLink
              to="/prism"
              class="glow-button-primary px-5 py-3 text-sm"
            >
              Explore CutWire Prism
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="glow-button-secondary px-5 py-3 text-sm"
            >
              About the studio
            </NuxtLink>
          </div>
          <p class="mt-4 font-mono text-xs text-on-surface-variant">
            Linux · Windows · macOS · GPLv3
          </p>
        </div>

        <div
          v-reveal
          class="relative mx-auto mt-14 max-w-6xl"
        >
          <div
            aria-hidden="true"
            class="absolute -inset-x-8 -inset-y-6 rounded-3xl opacity-60 blur-2xl"
            style="background: linear-gradient(120deg, rgba(255, 77, 0, 0.35), rgba(255, 140, 60, 0.25))"
          />
          <div class="glow-ring relative overflow-hidden rounded-xl border border-border bg-surface">
            <NuxtImg
              src="/images/prism-mock.avif"
              alt="CutWire Prism interface preview — live video mixing with dark UI and orange accents"
              class="block w-full"
              width="1209"
              height="828"
              sizes="xs:100vw sm:100vw md:100vw lg:1152px"
              loading="eager"
              preload
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        class="absolute inset-x-0 top-0 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(255, 77, 0, 0.5), transparent)"
      />
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Mission
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Powerful technology shouldn't require a steep learning curve.
          </h2>
          <p class="mt-5 text-lg text-on-surface-variant">
            We build professional-grade software with interfaces so intuitive that beginners feel
            confident from day one — while giving experts the depth and performance they demand.
          </p>
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

    <!-- Products -->
    <section class="relative py-24 md:py-32">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="flex flex-wrap items-end justify-between gap-4"
        >
          <div class="max-w-2xl">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Products
            </p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              One product, built properly.
            </h2>
          </div>
          <NuxtLink
            to="/products"
            class="rounded-md border border-border bg-surface/60 px-4 py-2 text-sm transition-colors hover:bg-card"
          >
            All products →
          </NuxtLink>
        </div>

        <MarketingProductShowcaseCard
          v-reveal
          class="mt-12"
        />
      </div>
    </section>

    <!-- Use cases -->
    <section class="relative border-y border-border/60 bg-surface/40 py-24">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Where CutWire Prism runs
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            People with a real deadline and no budget.
          </h2>
        </div>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MarketingUseCaseCard
            v-for="(useCase, i) in useCases"
            :key="useCase.title"
            v-reveal="i % 2"
            v-bind="useCase"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24">
      <div class="mx-auto max-w-4xl px-4 text-center md:px-6">
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 mx-auto max-w-2xl blur-3xl"
          style="background: var(--grad-hero)"
        />
        <div
          v-reveal
          class="relative"
        >
          <h2 class="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Start with <span class="grad-text">CutWire Prism</span>.
          </h2>
          <p class="mx-auto mt-5 max-w-xl text-on-surface-variant">
            Free and open source. No login, no trial, no feature tier — wire a few nodes and go
            live tonight.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <NuxtLink
              to="/prism"
              class="glow-button-primary px-6 py-3 text-sm"
            >
              Explore CutWire Prism
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="glow-button-secondary px-6 py-3 text-sm"
            >
              About the studio
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
