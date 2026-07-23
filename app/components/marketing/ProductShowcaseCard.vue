<script setup lang="ts">
import { Captions, GitBranch, Layers, Network, Palette, Scissors, ShieldAlert, Sparkles } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  slug?: 'prism' | 'drift'
}>(), {
  slug: 'prism',
})

const { data: product } = await useAsyncData(`showcase-${props.slug}`, () =>
  queryCollection('products').where('slug', '=', props.slug).first(),
)

const assets = {
  prism: {
    icon: '/images/prism-icon.png',
    iconAlt: 'Prism icon',
    preview: '/images/prism-ss.avif',
    previewAlt: 'CutWire Prism interface preview — live video mixing with dark UI and orange accents',
    href: '/prism',
    exploreLabel: 'Explore CutWire Prism',
    icons: [GitBranch, Layers, Network, Palette, ShieldAlert],
  },
  drift: {
    icon: '/images/drift-icon.png',
    iconAlt: 'Drift icon',
    preview: '/images/drift-main-window.png',
    previewAlt: 'CutWire Drift interface preview — timeline, effects and video preview',
    href: '/drift',
    exploreLabel: 'Explore CutWire Drift',
    icons: [Scissors, Sparkles, Captions, Layers, ShieldAlert],
  },
} as const

const meta = computed(() => assets[props.slug])
const isLive = computed(() => product.value?.status === 'live')
const highlightIcons = computed(() => meta.value.icons)

const lightboxOpen = ref(false)

const showcaseHighlights = computed(() =>
  product.value?.highlights?.slice(0, 3) ?? [],
)
</script>

<template>
  <div
    v-if="product"
    class="group relative overflow-hidden rounded-xl border border-border bg-surface/70 backdrop-blur"
  >
    <div class="ambient-glow absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-50" />

    <div class="relative z-10 grid lg:grid-cols-2 lg:items-stretch">
      <div class="order-2 flex flex-col justify-center p-8 md:p-10 lg:order-1 lg:p-12">
        <div class="mb-8 border-b border-outline-variant pb-6">
          <div class="flex items-center gap-3">
            <NuxtImg
              :src="meta.icon"
              :alt="meta.iconAlt"
              class="size-14 rounded-lg"
              width="56"
              height="56"
            />
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-on-surface">
                {{ product.name }}
              </h2>
              <p
                v-if="!isLive"
                class="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-on-surface-variant"
              >
                Coming soon
              </p>
            </div>
          </div>
        </div>

        <p class="mb-10 text-lg leading-relaxed text-on-surface-variant">
          {{ product.summary }}
        </p>

        <div
          v-if="showcaseHighlights.length"
          class="mb-12"
        >
          <h4 class="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Core capabilities
          </h4>
          <ul class="space-y-4">
            <li
              v-for="(cap, i) in showcaseHighlights"
              :key="cap.title"
              class="flex items-start gap-4 text-body-md text-on-surface"
            >
              <span class="shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                <component
                  :is="highlightIcons[i] ?? GitBranch"
                  class="size-5"
                />
              </span>
              <span>
                <span class="font-medium">{{ cap.title }}</span>
                <span class="mt-0.5 block text-sm text-on-surface-variant">{{ cap.description }}</span>
              </span>
            </li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-3">
          <NuxtLink
            v-if="isLive"
            :to="meta.href"
            class="glow-button-primary px-5 py-3 text-sm"
          >
            {{ meta.exploreLabel }}
          </NuxtLink>
          <span
            v-else
            class="inline-flex cursor-not-allowed items-center rounded-md border border-border bg-surface/60 px-5 py-3 text-sm text-on-surface-variant opacity-70"
            :aria-disabled="true"
          >
            {{ meta.exploreLabel }} (coming soon)
          </span>
          <a
            v-if="isLive && product.docsUrl"
            :href="product.docsUrl"
            class="glow-button-secondary px-5 py-3 text-sm"
          >
            View documentation
          </a>
        </div>
      </div>

      <button
        type="button"
        class="relative order-1 min-h-[220px] cursor-zoom-in overflow-hidden sm:min-h-[280px] lg:order-2 lg:min-h-0"
        :aria-label="`View full-size CutWire ${product.name} screenshot`"
        @click="lightboxOpen = true"
      >
        <NuxtImg
          :src="meta.preview"
          :alt="meta.previewAlt"
          class="absolute inset-0 h-full w-full object-cover object-right transition-opacity duration-200 hover:opacity-90"
          width="1866"
          height="1136"
        />
      </button>
    </div>

    <UiDialog v-model:open="lightboxOpen">
      <UiDialogContent
        class="max-h-[95vh] max-w-[min(96vw,1866px)] border-0 bg-transparent p-0 shadow-none ring-0 sm:max-w-[min(96vw,1866px)]"
      >
        <UiDialogHeader class="sr-only">
          <UiDialogTitle>{{ product.name }} screenshot</UiDialogTitle>
        </UiDialogHeader>
        <NuxtImg
          :src="meta.preview"
          :alt="meta.previewAlt"
          class="max-h-[90vh] w-full object-contain"
          width="1866"
          height="1136"
        />
      </UiDialogContent>
    </UiDialog>
  </div>
</template>
