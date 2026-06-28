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
  <div class="section-y">
    <div class="container-cutwire">
      <h1 class="text-display-l text-text">
        Download
      </h1>
      <p class="mt-4 text-text-muted">
        Get the latest version for your platform.
      </p>
      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <NuxtLink
          v-for="product in products"
          :key="product.slug"
          :to="`/download/${product.slug}`"
        >
          <UiCard class="border-hairline bg-surface-1 transition-all hover:-translate-y-0.5 hover:border-cue/40">
            <UiCardHeader>
              <UiCardTitle class="text-text">{{ product.name }}</UiCardTitle>
              <UiCardDescription>
                {{ product.platforms.join(' · ') }}
              </UiCardDescription>
            </UiCardHeader>
          </UiCard>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
