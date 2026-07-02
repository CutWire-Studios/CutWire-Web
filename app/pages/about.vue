<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'About — CutWire Studios',
  description: 'The story behind CutWire Studios and our roadmap.',
})

const milestones = [
  { year: '2025', title: 'CutWire founded', body: 'Started building live media tools for creators who run the show under real pressure.' },
  { year: '2026', title: 'SwitchX launch', body: 'First public release — trigger clips, mix sources, and run the whole show from one interface.' },
  { year: '2026', title: 'What is next', body: 'More products, tighter integrations, and community tools for operators everywhere.' },
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
            <h1 class="text-display-xl text-gradient">
              About CutWire
            </h1>
            <p class="mt-6 max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              CutWire Studios builds live media software for operators — the people running shows, streams, and events under real pressure.
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
        <div class="glass-card relative mx-auto max-w-4xl overflow-hidden p-12 text-center md:p-20">
          <div class="absolute top-0 right-0 size-64 rounded-full bg-primary/10 blur-[80px] mix-blend-screen" />
          <div class="relative z-10">
            <h2 class="text-headline-lg text-on-surface">
              The CutWire narrative
            </h2>
            <div class="mx-auto mt-8 max-w-2xl space-y-6 text-left text-body-md leading-relaxed text-on-surface-variant">
              <p>
                We believe the best tools disappear until you need them. Calm interface, decisive cuts, no configuration rabbit holes. Our software is built for real people running real shows — not just tech wizards.
              </p>
              <p>
                Every CutWire product speaks the same signal language: calm under pressure, precise when it counts. We started with SwitchX because live media operators deserved better — professional-grade power with an interface so intuitive beginners feel confident from day one.
              </p>
            </div>
          </div>
        </div>
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
