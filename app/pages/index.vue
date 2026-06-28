<script setup lang="ts">
import { GraduationCap, Music, Zap, Radio } from 'lucide-vue-next'

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'CutWire Studios — Professional software, intuitive for everyone',
  description: 'CutWire Studios builds professional creative tools with clean, beginner-friendly interfaces. SwitchX is our first product.',
})

const lineup = useLineup()

const useCases = [
  { title: 'School events', description: 'Assemblies, graduations, and pep rallies.', icon: GraduationCap },
  { title: 'Concerts', description: 'Live visuals and backdrop mixing.', icon: Music },
  { title: 'Sports', description: 'Scoreboard feeds and instant replays.', icon: Zap },
  { title: 'Streaming', description: 'Multi-source shows for Twitch and YouTube.', icon: Radio },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero-glow relative flex min-h-[calc(100vh-6.75rem)] flex-col justify-center overflow-hidden section-y">
      <div class="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div class="container-cutwire relative animate-rise-in">
        <div class="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p class="text-eyebrow text-text-faint">
              <span class="text-live">●</span> CutWire Studios · Software studio
            </p>
            <h1 class="mt-5 text-display-xl text-text">
              Professional software.<br>
              <span class="text-crossfade">Intuitive for everyone.</span>
            </h1>
            <p class="mt-6 max-w-xl text-body-l text-text-muted">
              CutWire Studios builds powerful creative tools with clean, beginner-friendly interfaces — so anyone can create like a pro. No steep learning curves, no manuals required.
            </p>
            <div class="mt-8 flex flex-wrap items-center gap-4">
              <UiButton
                as-child
                size="lg"
                class="btn-signal"
              >
                <NuxtLink to="/products">
                  See the products →
                </NuxtLink>
              </UiButton>
              <UiButton
                as-child
                variant="outline"
                size="lg"
                class="btn-panel"
              >
                <NuxtLink to="/about">
                  About the studio
                </NuxtLink>
              </UiButton>
            </div>
            <p class="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-text-faint">
              <span class="inline-flex items-center gap-1.5 text-text-muted">
                <span class="size-1.5 animate-pulse rounded-full bg-live" /> SwitchX 1.0 — live now
              </span>
            </p>
          </div>

          <div class="relative">
            <MarketingCrossfadeHero />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="border-t border-hairline section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-eyebrow text-text-faint"
        >
          Mission
        </p>
        <p
          v-reveal="1"
          class="mt-6 max-w-3xl text-display-l text-text"
        >
          Powerful technology shouldn't require a steep learning curve. We build professional-grade software with interfaces so intuitive that beginners feel confident from day one — while giving experts the depth and performance they demand.
        </p>
      </div>
    </section>

    <!-- Products -->
    <section class="border-t border-hairline section-y">
      <div class="container-cutwire">
        <div
          v-reveal
          class="flex items-end justify-between gap-6"
        >
          <div>
            <p class="text-eyebrow text-text-faint">
              Products
            </p>
            <h2 class="mt-4 text-display-l text-text">
              Our products
            </h2>
          </div>
          <NuxtLink
            to="/products"
            class="hidden shrink-0 pb-1 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-cue sm:block"
          >
            All products →
          </NuxtLink>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MarketingInstrumentCard
            v-for="(item, i) in lineup"
            :key="item.name"
            v-reveal="i"
            :instrument="item"
          />
        </div>
      </div>
    </section>

    <!-- Use cases -->
    <section class="border-t border-hairline section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-eyebrow text-text-faint"
        >
          Where SwitchX runs
        </p>
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MarketingUseCaseCard
            v-for="(useCase, i) in useCases"
            :key="useCase.title"
            v-reveal="i"
            v-bind="useCase"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="border-t border-hairline section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-eyebrow text-text-faint"
        >
          In their words
        </p>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <blockquote
            v-reveal
            class="panel rounded-xl p-6"
          >
            <p class="text-body-l text-text">
              "We ran our first assembly show in twenty minutes. No manual required."
            </p>
            <div class="mt-6 flex items-center gap-3">
              <UiAvatar>
                <UiAvatarFallback>JM</UiAvatarFallback>
              </UiAvatar>
              <div>
                <p class="text-sm font-medium text-text">
                  Jamie M.
                </p>
                <p class="text-xs text-text-muted">
                  School AV operator
                </p>
              </div>
            </div>
          </blockquote>
          <blockquote
            v-reveal="1"
            class="panel rounded-xl p-6"
          >
            <p class="text-body-l text-text">
              "Hot-swapping sources mid-set used to mean dead air. Now it's one keystroke."
            </p>
            <div class="mt-6 flex items-center gap-3">
              <UiAvatar>
                <UiAvatarFallback>RD</UiAvatarFallback>
              </UiAvatar>
              <div>
                <p class="text-sm font-medium text-text">
                  Rey D.
                </p>
                <p class="text-xs text-text-muted">
                  Touring VJ
                </p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="border-t border-hairline section-y">
      <div class="container-cutwire">
        <CommonNewsletterForm />
      </div>
    </section>
  </div>
</template>
