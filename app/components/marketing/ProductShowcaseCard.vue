<script setup lang="ts">
import { Bot, GitBranch, Layers, Network, Palette, Scissors, ShieldAlert } from 'lucide-vue-next'

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
    previewAlt: 'CutWire Prism interface — live video mixing',
    href: '/prism',
    exploreLabel: 'Explore Prism',
    kind: 'Live video mixer',
    icons: [GitBranch, Layers, Network, Palette, ShieldAlert],
  },
  drift: {
    icon: '/images/drift-icon.png',
    iconAlt: 'Drift icon',
    preview: '/images/drift-main-window.avif',
    previewAlt: 'CutWire Drift interface — timeline, effects and video preview',
    href: '/drift',
    exploreLabel: 'Explore Drift',
    kind: 'Desktop video editor',
    icons: [Scissors, Bot, ShieldAlert],
  },
} as const

const meta = computed(() => assets[props.slug])
const isLive = computed(() => product.value?.status === 'live')
const highlightIcons = computed(() => meta.value.icons)
const isPrism = computed(() => props.slug === 'prism')

const lightboxOpen = ref(false)

const showcaseHighlights = computed(() =>
  product.value?.highlights?.slice(0, 3) ?? [],
)
</script>

<template>
  <article
    v-if="product"
    :id="props.slug"
    class="frost-card overflow-hidden rounded-2xl scroll-mt-28"
  >
    <div class="grid lg:grid-cols-2 lg:items-stretch">
      <div class="order-2 flex flex-col justify-center p-8 md:p-10 lg:order-1 lg:p-12">
        <div class="flex items-center gap-3">
          <NuxtImg
            :src="meta.icon"
            :alt="meta.iconAlt"
            class="size-12 rounded-lg"
            width="48"
            height="48"
          />
          <div>
            <p
              class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium"
              :class="isPrism ? 'bg-prism text-prism-foreground' : 'bg-drift text-drift-foreground'"
            >
              {{ meta.kind }}
            </p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {{ product.name }}
            </h2>
            <p
              v-if="!isLive"
              class="mt-1 text-sm text-white/70"
            >
              Coming soon
            </p>
          </div>
        </div>

        <p class="mt-6 text-lg leading-relaxed text-white/70">
          {{ product.summary }}
        </p>

        <ul
          v-if="showcaseHighlights.length"
          class="mt-8 space-y-4"
        >
          <li
            v-for="(cap, i) in showcaseHighlights"
            :key="cap.title"
            class="flex items-start gap-3 text-white"
          >
            <span
              class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg"
              :class="isPrism ? 'bg-prism/25 text-white' : 'bg-drift/25 text-white'"
            >
              <component
                :is="highlightIcons[i] ?? GitBranch"
                class="size-4"
                aria-hidden="true"
              />
            </span>
            <span>
              <span class="font-medium">{{ cap.title }}</span>
              <span class="mt-0.5 block text-sm text-white/70">{{ cap.description }}</span>
            </span>
          </li>
        </ul>

        <div class="mt-10 flex flex-wrap gap-3">
          <NuxtLink
            v-if="isLive"
            :to="meta.href"
            class="min-h-11 px-5 py-2.5 text-sm"
            :class="isPrism ? 'btn-prism' : 'btn-drift'"
          >
            {{ meta.exploreLabel }}
          </NuxtLink>
          <span
            v-else
            class="inline-flex cursor-not-allowed items-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm text-white/70 opacity-70"
            :aria-disabled="true"
          >
            {{ meta.exploreLabel }} (coming soon)
          </span>
          <a
            v-if="isLive && product.docsUrl"
            :href="product.docsUrl"
            class="min-h-11 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Documentation
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
          class="absolute inset-0 h-full w-full object-cover object-right"
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
  </article>
</template>
