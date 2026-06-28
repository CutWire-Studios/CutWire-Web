<script setup lang="ts">
defineProps<{
  specs: Array<{ label: string, value: string }>
}>()
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-hairline">
    <div
      v-for="spec in specs"
      :key="spec.label"
      class="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-center border-b border-hairline last:border-b-0"
    >
      <span class="font-mono text-xs uppercase tracking-wider text-text-faint px-6 py-4">
        {{ spec.label }}
      </span>
      <span class="border-l border-hairline text-sm text-text px-6 py-4">
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
