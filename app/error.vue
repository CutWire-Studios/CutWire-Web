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
  <div class="flex min-h-screen flex-col bg-background text-on-surface">
    <LayoutSiteHeader />
    <main class="flex flex-1 flex-col items-center justify-center pt-24 section-y">
      <div class="container-cutwire text-center">
        <p class="text-sm text-on-surface-variant">
          {{ error.statusCode }}
        </p>
        <h1 class="mt-4 text-display-xl text-on-surface">
          {{ is404 ? 'Empty screen.' : 'Something went wrong.' }}
        </h1>
        <p class="mt-4 text-on-surface-variant">
          {{ is404
            ? 'An empty screen is an invitation to act — pick a direction.'
            : error.statusMessage || 'Try again or head back home.' }}
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            class="btn-primary min-h-11 px-6 py-2.5 text-sm"
            @click="clearError({ redirect: '/' })"
          >
            Home
          </button>
          <NuxtLink
            to="https://docs.cutwire.org"
            class="btn-secondary min-h-11 px-6 py-2.5 text-sm"
          >
            Docs
          </NuxtLink>
          <NuxtLink
            to="/products"
            class="btn-secondary min-h-11 px-6 py-2.5 text-sm"
          >
            Products
          </NuxtLink>
        </div>
      </div>
    </main>
    <LayoutSiteFooter />
  </div>
</template>
