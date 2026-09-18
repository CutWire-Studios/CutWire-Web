<script setup lang="ts">
useHead({
  link: [{ rel: 'preload', as: 'image', href: '/images/hero-layers.jpg' }],
})
</script>

<template>
  <div class="studio-frost relative -mt-24 min-h-dvh overflow-hidden">
    <div
      class="hero-continue-photo pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
    <div class="hero-continue-wash pointer-events-none absolute inset-0" />
    <div class="relative pt-24">
      <slot />
    </div>
  </div>
</template>
