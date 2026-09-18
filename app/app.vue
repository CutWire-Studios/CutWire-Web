<script setup lang="ts">
import UiSonner from '~/components/ui/sonner/Sonner.vue'

useHead({
  htmlAttrs: { lang: 'en' },
})
</script>

<template>
  <div class="min-h-screen overflow-x-clip bg-background text-on-surface">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UiSonner />
  </div>
</template>
