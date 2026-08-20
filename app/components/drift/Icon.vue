<script setup lang="ts">
export type DriftIconName =
  | 'timeline'
  | 'spark'
  | 'sticker'
  | 'captions'
  | 'cutout'
  | 'speed'
  | 'audio'
  | 'package'
  | 'agent'

defineProps<{ name: DriftIconName }>()

const paths: Record<DriftIconName, string[]> = {
  timeline: [
    'M3 12h18',
    'M7 8v8M12 6v12M17 9v6',
    'M3 7h2M3 17h2M19 7h2M19 17h2',
  ],
  spark: [
    'M12 3l1.2 4.2L17 8.5l-3.8 1.3L12 14l-1.2-4.2L7 8.5l3.8-1.3L12 3z',
    'M19 14l.7 2.4L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.6L19 14z',
  ],
  sticker: [
    'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z',
    'M14 3v6h6',
    'M9 13h6M9 17h4',
  ],
  captions: [
    'M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z',
    'M6 12h4M12 12h6M6 15h8',
  ],
  cutout: [
    'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
    'M8 14c1.2-2 2.5-3 4-3s2.8 1 4 3',
    'M9.5 10h.01M14.5 10h.01',
  ],
  speed: [
    'M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16z',
    'M12 12l4-3',
    'M12 8v1',
  ],
  audio: [
    'M4 10v4M8 7v10M12 4v16M16 8v8M20 10v4',
  ],
  package: [
    'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z',
    'M12 12l8-4.5M12 12v9M12 12L4 7.5',
  ],
  agent: [
    'M12 3a4 4 0 0 1 4 4v1h1.5a2.5 2.5 0 0 1 0 5H16v1a4 4 0 1 1-8 0v-1H6.5a2.5 2.5 0 0 1 0-5H8V7a4 4 0 0 1 4-4z',
    'M9.5 13h.01M14.5 13h.01',
    'M12 2v1',
  ],
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
