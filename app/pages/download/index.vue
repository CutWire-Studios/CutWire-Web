<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Download — CutWire Studios',
  description: 'Download CutWire software for macOS, Windows, and Linux.',
})

const { data: products } = await useAsyncData('download-products', () =>
  queryCollection('products').where('status', '=', 'live').all(),
)
</script>

<template>
  <div class="relative overflow-hidden section-y">
    <div class="ambient-glow top-0 opacity-40" />

    <div class="container-cutwire relative z-10">
      <p class="text-label-sm uppercase tracking-widest text-primary">
        Download
      </p>
      <h1 class="mt-4 text-display-xl text-on-surface">
        Get the latest
      </h1>
      <p class="mt-4 max-w-xl text-on-surface-variant">
        Get the latest version for your platform.
      </p>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <NuxtLink
          v-for="product in products"
          :key="product.slug"
          :to="`/download/${product.slug}`"
          class="glass-card group rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
        >
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-headline-md text-on-surface">
              {{ product.name }}
            </h2>
            <CommonLiveBadge />
          </div>
          <p class="text-on-surface-variant">
            {{ product.platforms.join(' · ') }}
          </p>
          <span class="mt-6 inline-flex items-center gap-1 text-label-sm uppercase tracking-wide text-primary transition-all group-hover:gap-3">
            Download
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
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
