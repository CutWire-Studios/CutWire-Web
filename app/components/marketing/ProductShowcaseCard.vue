<script setup lang="ts">
import { GitBranch, Layers, Network, Palette, ShieldAlert } from 'lucide-vue-next'

const { data: product } = await useAsyncData('switchx-showcase', () =>
  queryCollection('products').where('slug', '=', 'switchx').first(),
)

const highlightIcons = [GitBranch, Layers, Network, Palette, ShieldAlert]

const previewImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAxvvh1_Z6fAL_QigqkUVxXTsbDBhqqrkCPq-5jjzK0vt_67-csQSJn3C17V0itn02Uci2nEG8927RmbTXpZKK8n76R0x80bUuuBn9jy8G3ClZxKLmRS3L6OIWWrZO6eZc8oP3Qt43A1buZdLSGRc2N3DTTGq6Aac12j3ZyOsEitnB8CMIANL9cnb_DOOANnC4G-MaTmnom0YQxvjkq3_iR2DfsvG07v1IKcjP7e_wwlG70UaxchyG-tQp4fC6J2ejfq0gdYSlQL_k'

const showcaseHighlights = computed(() =>
  product.value?.highlights?.slice(0, 3) ?? [],
)
</script>

<template>
  <div
    v-if="product"
    class="glass-card group relative overflow-hidden p-8 md:p-16"
  >
    <div class="ambient-glow absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-60" />

    <div class="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      <div class="order-2 lg:order-1">
        <div class="mb-8 flex items-center justify-between border-b border-outline-variant pb-6">
          <h2 class="text-headline-lg tracking-tight text-on-surface">
            {{ product.name }}
          </h2>
          <CommonLiveBadge v-if="product.status === 'live'" />
        </div>

        <p class="mb-10 text-lg leading-relaxed text-on-surface-variant">
          {{ product.summary }}
        </p>

        <div
          v-if="showcaseHighlights.length"
          class="mb-12"
        >
          <h4 class="mb-6 text-xs uppercase tracking-widest text-on-surface-variant">
            Core Capabilities
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

        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink
            to="/switchx"
            class="glow-button-primary px-8 py-3 text-sm uppercase tracking-wider"
          >
            Launch SwitchX
          </NuxtLink>
          <a
            :href="product.docsUrl ?? 'https://docs.cutwire.org'"
            class="glow-button-secondary px-8 py-3 text-sm uppercase tracking-wider"
          >
            View Documentation
          </a>
        </div>
      </div>

      <div class="relative order-1 overflow-hidden rounded-2xl border border-outline-variant shadow-2xl lg:order-2">
        <NuxtImg
          :src="previewImage"
          alt="SwitchX interface preview — live video mixing with dark UI and cyan accents"
          class="h-full w-full object-cover"
          width="800"
          height="600"
        />
      </div>
    </div>
  </div>
</template>
