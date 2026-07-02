<script setup lang="ts">
import { GraduationCap, Music, Trophy, Users } from 'lucide-vue-next'

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'CutWire Studios — Professional software, intuitive for everyone',
  description: 'CutWire Studios builds professional creative tools with clean, beginner-friendly interfaces. SwitchX is our first product.',
})

const useCases = [
  { title: 'School events', description: 'Instant highlight reels and replays during cricket, football, and assembly shows.', icon: GraduationCap },
  { title: 'Live concerts', description: 'Music videos, audio-reactive shader visuals, and custom graphics that sync with the beat.', icon: Music },
  { title: 'Visual performances', description: 'Dance, theater, and immersive installations with a dark VJ-style interface.', icon: Users },
  { title: 'Sports broadcasting', description: 'HTML/QML score overlays, freeze-frame holds, and program recording.', icon: Trophy },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative section-y">
      <div class="container-cutwire relative animate-rise-in">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="relative z-10">
            <div class="mb-6 flex items-center gap-2 text-label-sm uppercase tracking-widest text-primary">
              <span class="size-2 rounded-full bg-primary" />
              CutWire Studios · Software studio
            </div>
            <h1 class="text-display-xl text-on-surface">
              Professional software.<br>
              <span class="text-crossfade">Intuitive for everyone.</span>
            </h1>
            <p class="mt-6 max-w-lg text-body-lg text-on-surface-variant">
              CutWire Studios builds powerful creative tools with clean, beginner-friendly interfaces — so anyone can create like a pro. No steep learning curves, no manuals required.
            </p>
            <div class="mt-10 flex flex-wrap items-center gap-4">
              <NuxtLink
                to="/products"
                class="glow-button-primary inline-flex items-center gap-2 px-8 py-4 text-label-md"
              >
                See the products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="size-4"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="glow-button-secondary px-8 py-4 text-label-md"
              >
                About the studio
              </NuxtLink>
            </div>
            <p class="mt-8 flex items-center gap-3 text-label-sm text-on-surface-variant/60">
              <span class="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              SwitchX 0.1 — Open source
            </p>
          </div>

          <MarketingCrossfadeHero />
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="section-y">
      <div class="container-cutwire">
        <div
          v-reveal
          class="mx-auto max-w-4xl border-l-2 border-primary pl-8 md:pl-12"
        >
          <p class="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Mission
          </p>
          <h2
            v-reveal="1"
            class="mt-6 text-headline-lg text-on-surface"
          >
            Powerful technology shouldn't require a steep learning curve. We build professional-grade software with interfaces so intuitive that beginners feel confident from day one — while giving experts the depth and performance they demand.
          </h2>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="section-y">
      <div class="container-cutwire">
        <div
          v-reveal
          class="mb-12 flex items-end justify-between border-b border-outline-variant pb-6"
        >
          <div>
            <p class="text-label-sm uppercase tracking-widest text-on-surface-variant">
              Products
            </p>
            <h2 class="mt-2 text-headline-md text-on-surface">
              Our products
            </h2>
          </div>
          <NuxtLink
            to="/products"
            class="hidden items-center gap-1 text-label-sm uppercase text-primary transition-colors hover:text-primary-fixed-dim sm:flex"
          >
            All products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <MarketingProductShowcaseCard v-reveal />
      </div>
    </section>

    <!-- Use cases -->
    <section class="section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="mb-12 text-label-sm uppercase tracking-widest text-on-surface-variant"
        >
          Where SwitchX runs
        </p>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <MarketingUseCaseCard
            v-for="(useCase, i) in useCases"
            :key="useCase.title"
            v-reveal="i"
            v-bind="useCase"
          />
        </div>
      </div>
    </section>
  </div>
</template>
