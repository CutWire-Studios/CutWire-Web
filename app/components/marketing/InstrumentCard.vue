<script setup lang="ts">
import type { Instrument } from '~/composables/useLineup'

const props = defineProps<{
  instrument: Instrument
  featured?: boolean
}>()

const live = computed(() => props.instrument.status === 'live')
const NuxtLinkComponent = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="live ? NuxtLinkComponent : 'div'"
    :to="live ? (instrument.href ?? `/products/${instrument.slug}`) : undefined"
    class="glass-card group overflow-hidden rounded-[24px] shadow-xl transition-all duration-500"
    :class="[
      live ? 'cursor-pointer hover:-translate-y-2' : 'opacity-80',
      featured ? '' : 'panel-hover',
    ]"
  >
    <div
      class="relative w-full overflow-hidden bg-background"
      :class="featured ? 'h-[400px]' : 'aspect-[16/10]'"
    >
      <MarketingConsoleScene
        v-if="live"
        :signal="instrument.accent === 'live' ? 'a' : 'b'"
        :scene="instrument.domain.toUpperCase()"
        class="absolute inset-0 rounded-none border-0 opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
      <div
        v-else
        class="absolute inset-0 flex items-center justify-center bg-surface"
      >
        <span class="rounded-full border border-dashed border-outline-variant px-4 py-2 text-label-sm text-on-surface-variant">
          Coming soon
        </span>
      </div>
    </div>

    <div class="relative z-10 bg-gradient-to-t from-[#1C1D23] to-transparent p-8">
      <div class="mb-2 flex items-center justify-between gap-3">
        <h3 class="text-headline-md text-on-surface">
          {{ instrument.name }}
        </h3>
        <CommonLiveBadge v-if="live" />
      </div>
      <p class="mb-6 max-w-2xl text-body-md text-on-surface-variant">
        {{ instrument.tagline }}
      </p>
      <span
        v-if="live"
        class="inline-flex items-center gap-1 text-label-sm uppercase tracking-wide text-primary transition-all group-hover:gap-4"
      >
        Explore
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="size-4"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </component>
</template>
