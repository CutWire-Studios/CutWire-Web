<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/vue'

defineProps<{
  shots: {
    title: string
    src: string
    w: number
    h: number
  }[]
}>()

const scroller = ref<HTMLElement | null>(null)
const canPrev = ref(false)
const canNext = ref(true)

function update() {
  const el = scroller.value
  if (!el)
    return
  canPrev.value = el.scrollLeft > 12
  canNext.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 12
}

function scrollByDir(dir: -1 | 1) {
  const el = scroller.value
  if (!el)
    return
  const reduced = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const step = Math.min(320, Math.round(el.clientWidth * 0.7))
  el.scrollBy({ left: dir * step, behavior: reduced ? 'auto' : 'smooth' })
}

onMounted(() => {
  update()
  scroller.value?.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update, { passive: true })
})

onBeforeUnmount(() => {
  scroller.value?.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})
</script>

<template>
  <section
    id="screens"
    class="relative py-16 md:py-20"
  >
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <div
        v-reveal
        class="flex flex-wrap items-end justify-between gap-4"
      >
        <div class="max-w-xl">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Screenshots
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Real UI from the editor.
          </h2>
        </div>
        <div class="flex gap-2">
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/70 text-foreground transition-colors hover:bg-surface-2 disabled:pointer-events-none disabled:opacity-30"
            :disabled="!canPrev"
            aria-label="Previous screenshots"
            @click="scrollByDir(-1)"
          >
            <ChevronLeftIcon class="h-4 w-4" />
          </button>
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/70 text-foreground transition-colors hover:bg-surface-2 disabled:pointer-events-none disabled:opacity-30"
            :disabled="!canNext"
            aria-label="Next screenshots"
            @click="scrollByDir(1)"
          >
            <ChevronRightIcon class="h-4 w-4" />
          </button>
        </div>
      </div>

      <div class="relative mt-8 -mx-4 md:-mx-6">
        <div
          ref="scroller"
          class="drift-shot-strip flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4 pb-2 pr-16 md:px-6 md:pr-20"
          tabindex="0"
          role="region"
          aria-label="Editor screenshots"
        >
          <figure
            v-for="shot in shots"
            :key="shot.title"
            class="w-[210px] flex-none snap-start sm:w-[230px]"
          >
            <div class="overflow-hidden rounded-xl border border-border bg-surface">
              <NuxtImg
                :src="shot.src"
                :alt="shot.title"
                :width="shot.w"
                :height="shot.h"
                class="block h-64 w-full object-cover object-top"
                sizes="230px"
                loading="lazy"
              />
            </div>
            <figcaption class="mt-2.5 px-0.5 text-sm font-medium leading-snug">
              {{ shot.title }}
            </figcaption>
          </figure>
        </div>
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent md:w-16"
        />
      </div>
    </div>
  </section>
</template>
