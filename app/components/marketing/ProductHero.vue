<script setup lang="ts">
const props = defineProps<{
  product: 'prism' | 'drift'
  line1: string
  line2: string
  lede: string
  platforms: string
  photoAlt: string
}>()

const photo = computed(() => productHeroSrc(props.product))
const size = computed(() =>
  props.product === 'prism'
    ? { w: 1920, h: 1280 }
    : { w: 1920, h: 1440 },
)
const downloadOpen = ref(false)
const downloadClass = computed(() =>
  props.product === 'prism' ? 'btn-prism' : 'btn-drift',
)
const prism = usePrismLinks()
const drift = useDriftLinks()
const github = computed(() => (props.product === 'prism' ? prism.gh : drift.gh))
const flathub = computed(() => (props.product === 'prism' ? prism.flathub : drift.flathub))

useHead({
  link: [{ rel: 'preload', as: 'image', href: photo.value }],
})
</script>

<template>
  <div>
    <section
      id="top"
      class="hero-stage sticky top-0 z-0 -mt-24 h-dvh overflow-hidden"
    >
      <img
        :src="photo"
        :alt="photoAlt"
        class="absolute inset-0 h-full w-full object-cover object-center"
        :width="size.w"
        :height="size.h"
        fetchpriority="high"
      >
      <div class="hero-copy relative flex h-full items-center justify-center px-4 pt-24 pb-10 md:px-6">
        <div class="relative mx-auto w-full max-w-5xl text-center">
          <h1 class="text-balance font-bold leading-[1.02] tracking-tight">
            <!-- PLACEHOLDER — replace from PRODUCT-HERO-COPY-BRIEF.md -->
            <span class="hero-heading block text-[clamp(2.05rem,5.8vw,4.25rem)]">
              {{ line1 }}
            </span>
            <span class="hero-heading hero-heading-soft mt-1 block text-[clamp(2.05rem,5.8vw,4.25rem)] font-medium italic tracking-tight">
              {{ line2 }}
            </span>
          </h1>
          <p class="hero-lede mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed md:text-xl">
            {{ lede }}
          </p>
          <p class="hero-lede mt-6 text-sm opacity-80">
            {{ platforms }}
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              :class="downloadClass"
              class="min-h-14 px-8 text-base md:min-h-16 md:px-10 md:text-lg"
              @click="downloadOpen = true"
            >
              Download
            </button>
            <CommonGithubStarButton :href="github" />
            <CommonFlathubButton :href="flathub" />
          </div>
        </div>
      </div>
    </section>

    <MarketingProductDownloadDialog
      v-model:open="downloadOpen"
      :product="product"
    />

    <div
      class="product-frost hero-continue relative z-10 overflow-hidden rounded-t-[2rem]"
      :style="{ '--product-hero': `url('${photo}')` }"
    >
      <div
        class="product-continue-photo pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div class="hero-continue-wash pointer-events-none absolute inset-0" />
      <div class="relative">
        <slot />
      </div>
    </div>
  </div>
</template>
