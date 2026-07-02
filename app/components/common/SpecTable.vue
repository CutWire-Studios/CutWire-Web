<script setup lang="ts">
defineProps<{
  specs: Array<{ label: string, value: string }>
}>()
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-outline-variant">
    <div
      v-for="spec in specs"
      :key="spec.label"
      class="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-center border-b border-outline-variant last:border-b-0"
    >
      <span class="px-6 py-4 font-mono text-xs uppercase tracking-wider text-on-surface-variant">
        {{ spec.label }}
      </span>
      <span class="border-l border-outline-variant px-6 py-4 text-sm text-on-surface">
        {{ spec.value }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.font-mono {
  font-family: var(--font-mono);
}
</style>
