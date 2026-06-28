<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'About — CutWire Studios',
  description: 'The story behind CutWire Studios and our roadmap.',
})

const milestones = [
  { year: '2025', title: 'CutWire founded', body: 'Started building live media tools for creators.' },
  { year: '2026', title: 'SwitchX launch', body: 'First public release — trigger, mix, create, live.' },
  { year: '2026', title: 'What is next', body: 'More products, tighter integrations, community tools.' },
]
</script>

<template>
  <div class="section-y">
    <div class="container-cutwire max-w-2xl">
      <h1 class="text-display-l text-text">
        About CutWire
      </h1>
      <p class="mt-6 text-body-l text-text-muted">
        CutWire Studios builds live media software for operators — the people running shows, streams, and events under real pressure.
      </p>
      <p class="mt-4 text-text-muted">
        We believe the best tools disappear until you need them. Calm interface, decisive cuts, no configuration rabbit holes.
      </p>

      <section class="mt-16">
        <p
          v-reveal
          class="text-eyebrow text-text-faint"
        >
          Roadmap
        </p>
        <div class="relative mt-8 space-y-10 pl-8">
          <!-- crossfade progress spine -->
          <span class="absolute inset-y-1 left-0 w-px bg-crossfade" />
          <div
            v-for="(milestone, i) in milestones"
            :key="milestone.title"
            v-reveal="i"
            class="relative"
          >
            <span class="absolute -left-[2.125rem] top-1 size-3 rounded-full bg-crossfade ring-4 ring-ink" />
            <p class="font-mono text-xs text-text-faint">
              {{ milestone.year }}
            </p>
            <h3 class="mt-1 text-lg font-semibold text-text">
              {{ milestone.title }}
            </h3>
            <p class="mt-1 text-sm text-text-muted">
              {{ milestone.body }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.text-body-l {
  font-size: 1.125rem;
  line-height: 1.6;
}

.font-mono {
  font-family: var(--font-mono);
}
</style>
