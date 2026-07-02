<script setup lang="ts">
useHead({
  noscript: [{ innerHTML: '<style>.reveal{opacity:1!important;transform:none!important}</style>' }],
})
</script>

<template>
  <div class="dark min-h-screen overflow-x-hidden bg-background text-on-surface">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UiSonner />
  </div>
</template>
