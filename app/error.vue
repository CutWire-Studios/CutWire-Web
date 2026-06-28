<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const is404 = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: is404.value ? 'Page not found — CutWire Studios' : 'Error — CutWire Studios',
})
</script>

<template>
  <div class="dark flex min-h-screen flex-col bg-ink text-text">
    <LayoutSiteHeader />
    <main class="flex flex-1 flex-col items-center justify-center pt-16 section-y">
      <div class="container-cutwire text-center">
        <p class="text-eyebrow text-text-faint">
          {{ error.statusCode }}
        </p>
        <h1 class="mt-4 text-display-l text-text">
          {{ is404 ? 'Empty screen.' : 'Something went wrong.' }}
        </h1>
        <p class="mt-4 text-text-muted">
          {{ is404
            ? 'An empty screen is an invitation to act — pick a direction.'
            : error.statusMessage || 'Try again or head back home.' }}
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <UiButton
            class="glow-live bg-live text-ink hover:bg-live/90"
            @click="clearError({ redirect: '/' })"
          >
            Home
          </UiButton>
          <UiButton
            as-child
            variant="outline"
            class="border-hairline hover:border-cue"
          >
            <NuxtLink to="https://docs.cutwire.org">
              Docs
            </NuxtLink>
          </UiButton>
          <UiButton
            as-child
            variant="outline"
            class="border-hairline hover:border-cue"
          >
            <NuxtLink to="/download">
              Download
            </NuxtLink>
          </UiButton>
        </div>
      </div>
    </main>
    <LayoutSiteFooter />
  </div>
</template>
