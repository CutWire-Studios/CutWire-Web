<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  title: string
  description: string
  icon?: Component
}>()
</script>

<template>
  <UiCard class="panel panel-hover group h-full">
    <UiCardHeader>
      <span
        v-if="icon"
        class="flex size-10 items-center justify-center rounded-md border border-hairline bg-surface-2 text-text-muted transition-colors group-hover:border-live/50 group-hover:text-live"
      >
        <component
          :is="icon"
          class="size-5"
        />
      </span>
      <UiCardTitle class="mt-4 text-text">
        {{ title }}
      </UiCardTitle>
    </UiCardHeader>
    <UiCardContent>
      <p class="text-sm text-text-muted">
        {{ description }}
      </p>
    </UiCardContent>
  </UiCard>
</template>
