<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'About — CutWire Studios',
  description: 'The team behind CutWire Studios — open-source live media software for operators.',
})

const developers = [
  {
    name: 'Suhas Dissanayake',
    initials: 'SD',
    github: null,
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

const milestones = [
  {
    year: '2025',
    title: 'CutWire starts Prism',
    body: 'A small team begins building an open-source live media trigger — simpler than Resolume, more approachable than TouchDesigner.',
  },
  {
    year: '2025–2026',
    title: 'From prototype to product',
    body: 'Node-based clip canvas, A/B mixing, GLSL shaders, HTML overlays, NDI output, OBS integration, and Flatpak packaging ship across sprints.',
  },
  {
    year: '2026',
    title: 'CutWire Studios launches',
    body: 'CutWire Prism 0.1 goes public under GPLv3. CutWire Studios becomes the home for live media tools built for operators everywhere.',
  },
]
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="ambient-glow top-0 left-0 -translate-x-1/2 -translate-y-1/4 opacity-60" />
    <div class="ambient-glow top-[30%] right-0 translate-x-1/4 opacity-40" />

    <!-- Hero -->
    <section class="section-y">
      <div class="container-cutwire">
        <div class="grid items-center gap-12 lg:grid-cols-12">
          <div class="lg:col-span-6">
            <p class="text-label-sm uppercase tracking-widest text-primary">
              About
            </p>
            <h1 class="mt-4 text-display-xl text-gradient">
              About CutWire Studios
            </h1>
            <p class="mt-6 max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              CutWire Studios builds open-source live media software for operators who run shows, streams, and events under real pressure.
            </p>
          </div>
          <div class="relative lg:col-span-6">
            <div class="glass-card relative aspect-[4/3] overflow-hidden p-1 shadow-2xl">
              <MarketingConsoleScene
                signal="b"
                scene="STAGE"
                class="h-full w-full rounded-[20px] opacity-70"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company story -->
    <section class="section-y">
      <div class="container-cutwire">
        <div class="glass-card relative mx-auto max-w-4xl overflow-hidden p-12 md:p-20">
          <div class="absolute top-0 right-0 size-64 rounded-full bg-primary/10 blur-[80px] mix-blend-screen" />
          <div class="relative z-10">
            <h2 class="text-center text-headline-lg text-on-surface">
              The CutWire narrative
            </h2>
            <div class="mx-auto mt-8 max-w-2xl space-y-6 text-body-md leading-relaxed text-on-surface-variant">
              <p>
                CutWire Prism started from a simple idea: professional live media control shouldn't require a manual or a subscription. We wanted click-to-trigger clip cards, a live crossfader, and panic controls — in a dark VJ-style interface that works in a school gym as well as on a small stage.
              </p>
              <p>
                Every CutWire product speaks the same signal language — calm under pressure, precise when it counts. We prioritize simplicity over feature bloat, build on open-source foundations, and release under GPLv3 so operators can trust and extend what they run live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Developers -->
    <section class="section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-label-sm uppercase tracking-widest text-on-surface-variant"
        >
          The team
        </p>
        <h2
          v-reveal="1"
          class="mt-4 text-headline-md text-on-surface"
        >
          Developers
        </h2>
        <p
          v-reveal="2"
          class="mt-4 max-w-2xl text-on-surface-variant"
        >
          The people building CutWire Studios software.
        </p>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="(dev, i) in developers"
            :key="dev.name"
            v-reveal="i"
            class="glass-card flex flex-col rounded-[24px] p-8 shadow-lg"
          >
            <div class="flex items-center gap-4">
              <div class="flex size-12 items-center justify-center rounded-full border border-outline-variant bg-surface text-label-md text-on-surface">
                {{ dev.initials }}
              </div>
              <div>
                <h3 class="text-label-md text-on-surface">
                  {{ dev.name }}
                </h3>
                <p class="text-label-sm text-primary">
                  Developer
                </p>
              </div>
            </div>
            <a
              v-if="dev.github"
              :href="dev.github"
              target="_blank"
              rel="noopener"
              class="mt-6 inline-flex items-center gap-1 text-label-sm text-on-surface-variant transition-colors hover:text-primary"
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
          class="mt-10 text-center text-sm text-on-surface-variant"
        >
          CutWire Prism is open source.
          <a
            href="https://github.com/SubtleArts/CutWire-Prism"
            target="_blank"
            rel="noopener"
            class="text-primary hover:underline"
          >Contributions welcome on GitHub</a>.
        </p>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section-y">
      <div class="container-cutwire max-w-[800px]">
        <h2
          v-reveal
          class="mb-20 text-center text-headline-md text-on-surface"
        >
          Our journey
        </h2>
        <div class="relative pl-8 md:pl-0">
          <div class="timeline-line absolute inset-y-0 left-1/2 hidden -translate-x-1/2 md:block" />
          <div class="absolute inset-y-0 left-0 w-0.5 bg-outline-variant md:hidden" />
          <div class="absolute top-0 left-0 h-1/2 w-0.5 bg-gradient-to-b from-primary to-transparent md:hidden" />

          <div class="space-y-16">
            <div
              v-for="(milestone, i) in milestones"
              :key="milestone.title"
              v-reveal="i"
              class="relative flex w-full flex-col items-start justify-between md:flex-row md:items-center md:even:flex-row-reverse"
            >
              <div
                class="absolute -left-[37px] z-10 mt-1.5 size-3.5 rounded-full border-2 border-primary bg-background shadow-[0_0_15px_rgba(255,77,0,0.8)] md:left-1/2 md:mt-0 md:-translate-x-1/2"
                :class="i > 0 ? 'border-primary/60 shadow-[0_0_10px_rgba(255,77,0,0.4)]' : ''"
              />
              <div class="glass-card w-full p-8 md:w-[45%]">
                <div
                  class="mb-3 text-label-sm uppercase tracking-wider"
                  :class="i === 0 ? 'text-primary' : 'text-on-surface-variant'"
                >
                  {{ milestone.year }}
                </div>
                <h3 class="mb-3 text-2xl font-semibold text-on-surface">
                  {{ milestone.title }}
                </h3>
                <p class="leading-relaxed text-on-surface-variant">
                  {{ milestone.body }}
                </p>
              </div>
              <div class="hidden w-[45%] md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section-y">
      <div class="container-cutwire">
        <CommonNewsletterForm />
      </div>
    </section>
  </div>
</template>
