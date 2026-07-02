<script setup lang="ts">
import { MousePointerClick, Layers, ShieldAlert, QrCode, Clapperboard } from 'lucide-vue-next'

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Products — CutWire Studios',
  description: 'The CutWire product lineup — software built for people who run things live.',
})

const lineup = useLineup()
const product = lineup[0]

const capabilities = [
  { title: 'Sub-millisecond triggering', icon: MousePointerClick },
  { title: 'Infinite layer mixing', icon: Layers },
  { title: 'Hardware sync pro', icon: ShieldAlert },
  { title: 'Phone camera magic', icon: QrCode },
  { title: 'Pro overlays & effects', icon: Clapperboard },
]
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />

    <!-- Hero -->
    <section class="relative section-y">
      <div class="container-cutwire">
        <div class="grid items-center gap-12 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <div class="mb-6 flex items-center gap-2 text-label-sm uppercase tracking-widest text-primary">
              <span class="size-2 animate-pulse rounded-full bg-primary" />
              Product suite
            </div>
            <h1 class="text-display-xl text-on-surface">
              The products
            </h1>
            <p class="mt-6 max-w-lg text-lg text-on-surface-variant">
              Every CutWire tool speaks the same signal language — calm under pressure, precise when it counts. Engineered for high-performance workflows.
            </p>
            <div class="mt-10">
              <NuxtLink
                to="/switchx"
                class="glow-button-primary inline-flex items-center gap-2 px-8 py-4 text-label-sm uppercase tracking-wider"
              >
                Explore suite
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
          </div>
          <div class="relative lg:col-span-7">
            <div class="relative z-10 overflow-hidden rounded-3xl border border-outline-variant shadow-2xl">
              <MarketingConsoleScene
                signal="b"
                scene="STAGE"
                class="aspect-video w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product showcase -->
    <section
      v-if="product"
      class="section-y"
    >
      <div class="container-cutwire space-y-24">
        <div class="glass-card relative overflow-hidden p-8 md:p-16">
          <div class="ambient-glow absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-60" />
          <div class="relative z-10 grid items-center gap-16 lg:grid-cols-2">
            <div class="order-2 lg:order-1">
              <div class="mb-8 flex items-center justify-between border-b border-outline-variant pb-6">
                <h2 class="text-headline-lg text-on-surface">
                  {{ product.name }}
                </h2>
                <CommonLiveBadge />
              </div>
              <p class="mb-10 text-lg leading-relaxed text-on-surface-variant">
                The ultimate control center for live media environments. Trigger clips, mix sources, and run the whole show from a single, unified interface designed for zero latency.
              </p>
              <div class="mb-12">
                <h4 class="mb-6 text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Core capabilities
                </h4>
                <ul class="space-y-4">
                  <li
                    v-for="cap in capabilities"
                    :key="cap.title"
                    class="flex items-center gap-4 text-body-md text-on-surface"
                  >
                    <span class="rounded-lg bg-primary/10 p-2 text-primary">
                      <component
                        :is="cap.icon"
                        class="size-5"
                      />
                    </span>
                    {{ cap.title }}
                  </li>
                </ul>
              </div>
              <div class="flex flex-wrap gap-4">
                <NuxtLink
                  to="/switchx"
                  class="glow-button-primary px-8 py-3 text-label-sm uppercase tracking-wider"
                >
                  Launch SwitchX
                </NuxtLink>
                <a
                  href="https://docs.cutwire.org"
                  class="glow-button-secondary px-8 py-3 text-label-sm uppercase tracking-wider"
                >
                  View documentation
                </a>
              </div>
            </div>
            <div class="order-1 overflow-hidden rounded-2xl border border-outline-variant shadow-2xl lg:order-2">
              <MarketingConsoleScene
                signal="a"
                scene="ARENA"
                class="aspect-video w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
