<script setup lang="ts">
// A CSS-rendered still of the SwitchX console — no asset required.
// signal 'a' = live/program (ember), 'b' = cued/preview (azure).
const props = withDefaults(defineProps<{
  signal?: 'a' | 'b'
  timecode?: string
  scene?: string
}>(), {
  signal: 'a',
  timecode: '00:14:22:09',
  scene: 'SCENE',
})

const isA = computed(() => props.signal === 'a')
const accent = computed(() => (isA.value ? 'var(--live)' : 'var(--cue)'))
const label = computed(() => (isA.value ? 'PROGRAM' : 'PREVIEW'))

// deterministic-ish bars so A and B read differently
const bars = computed(() =>
  (isA.value
    ? [34, 72, 48, 90, 62, 80, 40, 96, 58, 76, 44, 88]
    : [60, 40, 78, 52, 86, 46, 70, 38, 82, 56, 92, 50]),
)
</script>

<template>
  <div
    class="relative isolate flex h-full w-full flex-col overflow-hidden rounded-lg border border-hairline bg-surface-1 font-mono text-text"
    :style="{ '--accent': accent }"
  >
    <!-- status bar -->
    <div class="flex items-center justify-between border-b border-hairline bg-surface-2/60 px-3 py-1.5 text-[0.625rem] tracking-wider">
      <span class="flex items-center gap-1.5">
        <span
          class="size-1.5 rounded-full"
          :class="isA ? 'animate-pulse' : ''"
          :style="{ background: 'var(--accent)' }"
        />
        <span :style="{ color: 'var(--accent)' }">{{ label }}</span>
      </span>
      <span class="text-text-faint">{{ timecode }}</span>
      <span
        class="rounded-sm border px-1.5 py-px font-semibold"
        :style="{ color: 'var(--accent)', borderColor: 'var(--accent)' }"
      >{{ isA ? 'A' : 'B' }}</span>
    </div>

    <!-- monitor / scene -->
    <div class="relative flex-1 overflow-hidden">
      <!-- generative visual -->
      <div
        class="absolute inset-0"
        :style="isA
          ? { background: 'radial-gradient(120% 100% at 20% 0%, rgba(34,211,192,.32), transparent 55%), radial-gradient(100% 120% at 90% 100%, rgba(34,211,192,.16), transparent 50%), #0b0e12' }
          : { background: 'radial-gradient(120% 100% at 80% 0%, rgba(124,116,255,.34), transparent 55%), radial-gradient(100% 120% at 10% 100%, rgba(124,116,255,.18), transparent 50%), #0b0c14' }"
      />
      <!-- rotating geometry -->
      <div
        class="absolute left-1/2 top-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-60"
        :style="{ borderColor: 'var(--accent)' }"
      />
      <div
        class="absolute left-1/2 top-1/2 aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 opacity-70"
        :class="isA ? 'rotate-[18deg]' : '-rotate-[12deg]'"
        :style="{ background: 'linear-gradient(135deg, var(--accent), transparent)', clipPath: isA ? 'polygon(50% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 50% 100%)' }"
      />
      <!-- safe-frame ticks -->
      <div class="absolute inset-3 rounded border border-text/10" />
      <div class="absolute bottom-2 left-3 text-[0.625rem] tracking-widest text-text/70">
        {{ scene }} · {{ isA ? '01' : '02' }}
      </div>

      <!-- audio FFT -->
      <div class="absolute bottom-2 right-3 flex h-6 items-end gap-px">
        <span
          v-for="(b, i) in bars"
          :key="i"
          class="w-0.5 rounded-sm"
          :style="{ height: `${b}%`, background: 'var(--accent)', opacity: 0.55 }"
        />
      </div>
    </div>

    <!-- clip rail -->
    <div class="flex items-center gap-1.5 border-t border-hairline bg-surface-2/40 px-3 py-2">
      <span
        v-for="n in 6"
        :key="n"
        class="h-5 flex-1 rounded-sm border"
        :class="n === (isA ? 4 : 2) ? '' : 'border-hairline bg-surface-1'"
        :style="n === (isA ? 4 : 2)
          ? { borderColor: 'var(--accent)', background: 'color-mix(in srgb, var(--accent) 18%, transparent)', boxShadow: '0 0 0 1px var(--accent)' }
          : {}"
      />
    </div>
  </div>
</template>
