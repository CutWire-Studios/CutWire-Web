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
    class="section-y"
  >
    <div class="container-cutwire max-w-lg">
      <h1 class="text-display-l text-text">
        Download {{ product.name }}
      </h1>
      <p class="mt-4 text-text-muted">
        Version {{ product.version }} · {{ product.platforms.join(', ') }}
      </p>
      <div class="mt-8">
        <CommonDownloadPanel
          :downloads="product.downloads"
          :product-name="product.name"
        />
      </div>
      <UiButton
        as-child
        variant="ghost"
        class="mt-6 text-cue"
      >
        <NuxtLink :to="`https://docs.cutwire.org/${product.slug}/getting-started`">
          Getting started →
        </NuxtLink>
      </UiButton>
    </div>
  </div>
</template>
