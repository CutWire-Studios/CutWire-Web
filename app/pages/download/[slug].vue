<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data: product } = await useAsyncData(
  `download-${slug.value}`,
  () => queryCollection('products').where('slug', '=', slug.value).first(),
)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

useSeoMeta({
  title: `Download ${product.value.name} — CutWire Studios`,
  description: `Download ${product.value.name} for macOS, Windows, or Linux.`,
})
</script>

<template>
  <div
    v-if="product"
    class="relative overflow-hidden section-y"
  >
    <div class="ambient-glow top-0 opacity-40" />

    <div class="container-cutwire relative z-10 max-w-lg">
      <p class="text-label-sm uppercase tracking-widest text-primary">
        Download
      </p>
      <h1 class="mt-4 text-display-xl text-on-surface">
        {{ product.name }}
      </h1>
      <p class="mt-4 text-on-surface-variant">
        Version {{ product.version }} · {{ product.platforms.join(', ') }}
      </p>
      <div class="glass-card mt-8 rounded-[24px] p-6">
        <CommonDownloadPanel
          :downloads="product.downloads"
          :product-name="product.name"
        />
      </div>
      <NuxtLink
        :to="`https://docs.cutwire.org/${product.slug}/getting-started`"
        class="mt-6 inline-flex items-center gap-1 text-primary transition-colors hover:text-primary-fixed-dim"
      >
        Getting started
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
</template>
