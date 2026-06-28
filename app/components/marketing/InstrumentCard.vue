<script setup lang="ts">
import type { Instrument } from '~/composables/useLineup'

const props = defineProps<{
  instrument: Instrument
}>()

const live = computed(() => props.instrument.status === 'live')
const accentVar = computed(() => (props.instrument.accent === 'live' ? 'var(--live)' : 'var(--cue)'))
const NuxtLinkComponent = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="live ? NuxtLinkComponent : 'div'"
    :to="live ? (instrument.href ?? `/products/${instrument.slug}`) : undefined"
    class="panel group flex flex-col overflow-hidden rounded-xl"
    :class="live ? 'panel-hover' : ''"
  >
    <!-- visual -->
    <div class="relative aspect-[16/10] overflow-hidden border-b border-hairline">
      <MarketingConsoleScene
        v-if="live"
        :signal="instrument.accent === 'live' ? 'a' : 'b'"
        :scene="instrument.domain.toUpperCase()"
        class="absolute inset-0 rounded-none border-0"
      />
      <div
        v-else
        class="absolute inset-0 flex items-center justify-center bg-surface-1"
      >
        <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <span class="rounded-md border border-dashed border-hairline px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-faint">
          Open bay
        </span>
      </div>
    </div>

    <!-- body -->
    <div class="flex flex-1 flex-col p-5">
      <div class="flex items-center justify-between gap-3">
        <p
          class="font-mono text-[0.6875rem] uppercase tracking-wider"
          :style="{ color: live ? accentVar : 'var(--text-faint)' }"
        >
          {{ instrument.domain }}
        </p>
        <CommonLiveBadge v-if="live" />
        <span
          v-else
          class="rounded-sm border border-hairline px-1.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-wider text-text-faint"
        >Coming soon</span>
      </div>

      <h3 class="mt-3 font-display text-2xl font-semibold tracking-tight text-text">
        {{ instrument.name }}
      </h3>
      <p class="mt-2 flex-1 text-sm text-text-muted">
        {{ instrument.tagline }}
      </p>

      <span
        class="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider"
        :class="live ? 'text-text-muted transition-colors group-hover:text-live' : 'text-text-faint'"
      >
        {{ live ? 'Explore' : 'In the studio' }}
        <span v-if="live">→</span>
      </span>
    </div>
  </component>
</template>
