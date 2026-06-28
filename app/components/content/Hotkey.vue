<template>
  <span class="inline-flex items-center gap-1">
    <kbd
      v-for="key in keys.split(' ')"
      :key="key"
      class="rounded border border-hairline border-b-2 bg-surface-2 px-2 py-0.5 font-mono text-xs text-text"
    >
      {{ key }}
    </kbd>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  keys: string
}>()
</script>

<style scoped>
.font-mono {
  font-family: var(--font-mono);
}
</style>
