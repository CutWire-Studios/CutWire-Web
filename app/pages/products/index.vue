<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Products — CutWire Studios',
  description: 'The CutWire product lineup — software built for people who run things live.',
})
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
              Every CutWire tool speaks the same signal language — calm under pressure, precise when it counts. Engineered for high-performance live workflows.
            </p>
            <div class="mt-10">
              <NuxtLink
                to="/switchx"
                class="glow-button-primary inline-flex items-center gap-2 px-8 py-4 text-label-sm uppercase tracking-wider"
              >
                Explore SwitchX
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
    <section class="section-y">
      <div class="container-cutwire">
        <MarketingProductShowcaseCard />
      </div>
    </section>
  </div>
</template>
