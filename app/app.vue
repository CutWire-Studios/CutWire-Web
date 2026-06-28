<script setup lang="ts">
// No-JS fallback: reveal-on-scroll elements are hidden in SSR to avoid a flash,
// so un-hide them when scripting is unavailable.
useHead({
  noscript: [{ innerHTML: '<style>.reveal{opacity:1!important;transform:none!important}</style>' }],
})
</script>

<template>
  <div class="dark min-h-screen bg-ink text-text">
    <div
      class="bg-grain"
      aria-hidden="true"
    />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UiSonner />
  </div>
</template>
