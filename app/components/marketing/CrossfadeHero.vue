<script setup lang="ts">
const props = withDefaults(defineProps<{
  autoDrift?: boolean
  canvas?: boolean
}>(), {
  autoDrift: true,
  canvas: true,
})

const position = ref(38)
const interacting = ref(false)
const prefersReducedMotion = usePreferredReducedMotion()
const track = ref<HTMLElement | null>(null)

let animationFrame: number | null = null
let direction = 1

function loop() {
  if (!interacting.value) {
    position.value += direction * 0.04
    if (position.value >= 82) direction = -1
    if (position.value <= 18) direction = 1
  }
  animationFrame = requestAnimationFrame(loop)
}

onMounted(() => {
  if (props.autoDrift && prefersReducedMotion.value !== 'reduce')
    animationFrame = requestAnimationFrame(loop)
})

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
})

function setFromClientX(clientX: number) {
  const el = track.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const pct = ((clientX - rect.left) / rect.width) * 100
  position.value = Math.min(100, Math.max(0, pct))
}

function onPointerDown(e: PointerEvent) {
  interacting.value = true
  ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  setFromClientX(e.clientX)
}
function onPointerMove(e: PointerEvent) {
  if (!interacting.value) return
  setFromClientX(e.clientX)
}
function onPointerUp() {
  interacting.value = false
}

function onKey(e: KeyboardEvent) {
  const step = e.shiftKey ? 10 : 4
  if (e.key === 'ArrowLeft') position.value = Math.max(0, position.value - step)
  else if (e.key === 'ArrowRight') position.value = Math.min(100, position.value + step)
  else if (e.key === 'Home') position.value = 0
  else if (e.key === 'End') position.value = 100
  else return
  e.preventDefault()
}

const onAir = computed(() => (position.value < 50 ? 'A' : 'B'))
</script>

<template>
  <div class="relative z-0 w-full select-none lg:ml-8">
    <div class="ambient-glow" />
    <div
      v-if="canvas"
      class="relative mb-5 aspect-video overflow-hidden rounded-[24px] border border-outline-variant shadow-2xl transition-transform duration-700 ease-out hover:rotate-0 lg:rotate-2"
    >
      <MarketingConsoleScene
        signal="a"
        scene="ARENA"
        class="absolute inset-0"
      />
      <div
        class="absolute inset-0"
        :style="{ clipPath: `inset(0 0 0 ${position}%)` }"
      >
        <MarketingConsoleScene
          signal="b"
          scene="STAGE"
          timecode="00:14:22:11"
          class="h-full w-full"
        />
      </div>
      <div
        class="pointer-events-none absolute inset-y-0 w-px bg-primary"
        :style="{ left: `${position}%`, boxShadow: '0 0 12px 1px rgba(255,77,0,.45)' }"
      />
      <div class="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-outline-variant bg-background/70 px-2 py-0.5 backdrop-blur">
        <span class="size-1.5 animate-pulse rounded-full bg-primary" />
        <span class="font-mono text-[0.625rem] tracking-widest text-on-surface">ON AIR · {{ onAir }}</span>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <span class="font-mono text-xs font-semibold text-primary">A</span>
      <div
        ref="track"
        class="relative h-2 flex-1 cursor-pointer rounded-full bg-surface"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
      >
        <div
          class="absolute inset-y-0 left-0 rounded-full bg-primary"
          :style="{ width: `${position}%` }"
        />
        <button
          type="button"
          role="slider"
          aria-label="Crossfade A to B"
          aria-valuemin="0"
          aria-valuemax="100"
          :aria-valuenow="Math.round(position)"
          class="absolute top-1/2 h-6 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-on-surface/80 bg-primary shadow-lg transition-transform hover:scale-110"
          :style="{ left: `${position}%` }"
          @keydown="onKey"
        />
      </div>
      <span class="font-mono text-xs font-semibold text-primary-fixed-dim">B</span>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.font-mono {
  font-family: var(--font-mono);
}
</style>
