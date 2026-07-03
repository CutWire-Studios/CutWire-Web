<script setup lang="ts">
import { GitBranch, Layers, Network, Palette, ShieldAlert } from 'lucide-vue-next'

const { data: product } = await useAsyncData('prism-showcase', () =>
  queryCollection('products').where('slug', '=', 'prism').first(),
)

const highlightIcons = [GitBranch, Layers, Network, Palette, ShieldAlert]

const previewImage = '/images/prism-ss.avif'

const lightboxOpen = ref(false)
const previewAlt = 'CutWire Prism interface preview — live video mixing with dark UI and orange accents'

const showcaseHighlights = computed(() =>
  product.value?.highlights?.slice(0, 3) ?? [],
)
</script>

<template>
  <div
    v-if="product"
    class="glass-card group relative -mx-4 overflow-hidden rounded-xl md:-mx-8 lg:-mx-12"
  >
    <div class="ambient-glow absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-60" />

    <div class="relative z-10 grid lg:grid-cols-2 lg:items-stretch">
      <div class="order-2 flex flex-col justify-center p-8 md:p-10 lg:order-1 lg:p-12">
        <div class="mb-8 border-b border-outline-variant pb-6">
          <div class="flex items-center gap-3">
            <NuxtImg
              src="/images/prism-icon.png"
              alt="Prism icon"
              class="size-14 rounded-lg"
              width="56"
              height="56"
            />
            <h2 class="text-headline-lg text-on-surface">
              {{ product.name }}
            </h2>
          </div>
        </div>

        <p class="mb-10 text-lg leading-relaxed text-on-surface-variant">
          {{ product.summary }}
        </p>

        <div
          v-if="showcaseHighlights.length"
          class="mb-12"
        >
          <h4 class="mb-6 text-label-sm uppercase tracking-widest text-on-surface-variant">
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

        <div class="flex flex-wrap gap-4">
          <NuxtLink
            to="/prism"
            class="glow-button-primary px-8 py-3 text-label-sm uppercase tracking-wider"
          >
            Launch CutWire Prism
          </NuxtLink>
          <a
            :href="product.docsUrl ?? 'https://docs.cutwire.org'"
            class="glow-button-secondary px-8 py-3 text-label-sm uppercase tracking-wider"
          >
            View documentation
          </a>
        </div>
      </div>

      <button
        type="button"
        class="relative order-1 min-h-[220px] cursor-zoom-in overflow-hidden sm:min-h-[280px] lg:order-2 lg:min-h-0"
        aria-label="View full-size CutWire Prism screenshot"
        @click="lightboxOpen = true"
      >
        <NuxtImg
          :src="previewImage"
          :alt="previewAlt"
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
          :src="previewImage"
          :alt="previewAlt"
          class="max-h-[90vh] w-full object-contain"
          width="1866"
          height="1136"
        />
      </UiDialogContent>
    </UiDialog>
  </div>
</template>
