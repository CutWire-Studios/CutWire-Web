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
        class="text-label-sm uppercase tracking-widest"
        :class="signal === 'b' ? 'text-primary-fixed-dim' : 'text-primary'"
      >
        {{ step }}
      </p>
      <h2 class="mt-3 text-headline-lg text-on-surface">
        {{ title }}
      </h2>
      <p class="mt-4 text-body-lg text-on-surface-variant">
        {{ description }}
      </p>
      <slot name="content" />
    </div>
    <div
      v-reveal="1"
      class="aspect-video overflow-hidden rounded-2xl border border-outline-variant shadow-2xl"
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
