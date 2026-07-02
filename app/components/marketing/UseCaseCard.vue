<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  title: string
  description: string
  icon?: Component
}>()
</script>

<template>
  <div class="glass-card group rounded-[24px] p-6 shadow-lg transition-colors hover:bg-white/5">
    <span
      v-if="icon"
      class="mb-6 flex size-12 items-center justify-center rounded-full border border-outline-variant bg-surface text-on-surface-variant transition-all group-hover:border-primary/30 group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(255,77,0,0.3)]"
    >
      <component
        :is="icon"
        class="size-5"
      />
    </span>
    <h4 class="text-label-md text-on-surface">
      {{ title }}
    </h4>
    <p class="mt-2 text-sm text-on-surface-variant/80">
      {{ description }}
    </p>
  </div>
</template>
