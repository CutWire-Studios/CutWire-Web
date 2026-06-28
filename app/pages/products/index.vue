<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Products — CutWire Studios',
  description: 'The CutWire product lineup — software built for people who run things live.',
})

const lineup = useLineup()
</script>

<template>
  <div class="relative overflow-hidden section-y">
    <div class="bg-grid pointer-events-none absolute inset-0 top-0 -z-10 h-80" />
    <div class="container-cutwire">
      <p class="text-eyebrow text-text-faint">
        Products
      </p>
      <h1 class="mt-4 text-display-l text-text">
        The products
      </h1>
      <p class="mt-4 max-w-xl text-body-l text-text-muted">
        Every CutWire tool speaks the same signal language — calm under pressure, precise when it counts.
      </p>
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MarketingInstrumentCard
          v-for="(item, i) in lineup"
          :key="item.name"
          v-reveal="i"
          :instrument="item"
        />
      </div>
    </div>
  </div>
</template>
