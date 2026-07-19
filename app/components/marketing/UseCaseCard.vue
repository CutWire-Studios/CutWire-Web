<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  title: string
  description: string
  icon?: Component
}>()
</script>

<template>
  <div class="group relative overflow-hidden rounded-xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors hover:border-primary/50">
    <div
      aria-hidden="true"
      class="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      style="background: rgba(255, 77, 0, 0.35)"
    />
    <div class="relative">
      <span
        v-if="icon"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-primary"
      >
        <component
          :is="icon"
          class="size-5"
        />
      </span>
      <h4 class="mt-4 font-semibold text-on-surface">
        {{ title }}
      </h4>
      <p class="mt-2 text-sm text-on-surface-variant">
        {{ description }}
      </p>
    </div>
  </div>
</template>
