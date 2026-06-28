<script setup lang="ts">
defineProps<{
  step: string
  title: string
  description: string
  reverse?: boolean
  signal?: 'a' | 'b'
  scene?: string
}>()
</script>

<template>
  <section
    class="grid items-center gap-12 lg:grid-cols-2"
    :class="reverse ? 'lg:[&>*:first-child]:order-2' : ''"
  >
    <div v-reveal>
      <p
        class="text-eyebrow"
        :class="signal === 'b' ? 'text-cue' : 'text-live'"
      >
        {{ step }}
      </p>
      <h2 class="mt-3 text-display-l text-text">
        {{ title }}
      </h2>
      <p class="mt-4 text-body-l text-text-muted">
        {{ description }}
      </p>
      <slot name="content" />
    </div>
    <div
      v-reveal="1"
      class="aspect-video"
    >
      <slot name="visual">
        <MarketingConsoleScene
          :signal="signal ?? 'a'"
          :scene="scene ?? 'SCENE'"
        />
      </slot>
    </div>
  </section>
</template>
