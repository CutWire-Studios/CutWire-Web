<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  aspect?: string
  hint?: string
  bare?: boolean
}>(), {
  aspect: '16 / 9',
  hint: 'Image placeholder',
  bare: false,
})
</script>

<template>
  <div
    class="relative overflow-hidden bg-surface"
    :class="bare ? '' : 'rounded-xl border border-border'"
    :style="{ aspectRatio: aspect }"
    role="img"
    :aria-label="label"
  >
    <div
      aria-hidden="true"
      class="absolute inset-0"
      style="background:
        radial-gradient(ellipse at 30% 20%, color-mix(in srgb, #fcad01 18%, transparent), transparent 55%),
        radial-gradient(ellipse at 80% 80%, color-mix(in srgb, #fcad01 10%, transparent), transparent 50%),
        linear-gradient(160deg, oklch(0.20 0.02 55), oklch(0.16 0.015 55));"
    />
    <div
      aria-hidden="true"
      class="drift-film-edge absolute inset-x-0 top-0 h-3 opacity-40"
    />
    <div
      aria-hidden="true"
      class="drift-film-edge absolute inset-x-0 bottom-0 h-3 opacity-40"
    />
    <div class="relative flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
      <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
        {{ hint }}
      </span>
      <span class="max-w-sm text-sm font-medium text-foreground/90 md:text-base">
        {{ label }}
      </span>
    </div>
  </div>
</template>
