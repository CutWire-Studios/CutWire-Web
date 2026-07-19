<script setup lang="ts">
export type PrismIconName = 'wire' | 'layers' | 'bolt' | 'cam' | 'wand' | 'code' | 'panic' | 'net'

defineProps<{ name: PrismIconName }>()

const paths: Record<PrismIconName, string[]> = {
  wire: ['M4 8h6a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4h2M4 20h6a4 4 0 0 0 4-4M20 8h-2'],
  layers: ['M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5M3 16l9 5 9-5'],
  bolt: ['M13 3L5 14h6l-1 7 8-11h-6l1-7z'],
  cam: ['M5 6h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z', 'M17 10l4-2v8l-4-2z'],
  wand: ['M3 21l12-12', 'M14 4l2 2M18 8l2 2M4 14l2 2'],
  code: ['M9 8l-5 4 5 4M15 8l5 4-5 4M13 4l-2 16'],
  panic: ['M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z', 'M12 8v5M12 16v.5'],
  net: ['M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z', 'M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18'],
}
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      v-for="d in paths[name]"
      :key="d"
      :d="d"
    />
  </svg>
</template>
