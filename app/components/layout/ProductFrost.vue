<script setup lang="ts">
const props = defineProps<{
  product: 'prism' | 'drift'
}>()

const photo = computed(() => productHeroSrc(props.product))

useHead({
  link: [{ rel: 'preload', as: 'image', href: photo.value }],
})
</script>

<template>
  <div
    class="product-frost relative -mt-24 min-h-dvh overflow-hidden"
    :style="{ '--product-hero': `url('${photo}')` }"
  >
    <div
      class="product-continue-photo pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
    <div class="hero-continue-wash pointer-events-none absolute inset-0" />
    <div class="relative pt-24">
      <slot />
    </div>
  </div>
</template>
