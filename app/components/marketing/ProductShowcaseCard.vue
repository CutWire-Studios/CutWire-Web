<script setup lang="ts">
import { Gauge, Layers, RefreshCw } from 'lucide-vue-next'

const capabilities = [
  { title: 'Sub-millisecond Triggering', icon: Gauge },
  { title: 'Infinite Layer Mixing', icon: Layers },
  { title: 'Hardware Sync Pro', icon: RefreshCw },
]

const previewImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAxvvh1_Z6fAL_QigqkUVxXTsbDBhqqrkCPq-5jjzK0vt_67-csQSJn3C17V0itn02Uci2nEG8927RmbTXpZKK8n76R0x80bUuuBn9jy8G3ClZxKLmRS3L6OIWWrZO6eZc8oP3Qt43A1buZdLSGRc2N3DTTGq6Aac12j3ZyOsEitnB8CMIANL9cnb_DOOANnC4G-MaTmnom0YQxvjkq3_iR2DfsvG07v1IKcjP7e_wwlG70UaxchyG-tQp4fC6J2ejfq0gdYSlQL_k'
</script>

<template>
  <div class="glass-card group relative overflow-hidden p-8 md:p-16">
    <div class="ambient-glow absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-60" />

    <div class="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      <div class="order-2 lg:order-1">
        <div class="mb-8 flex items-center justify-between border-b border-outline-variant pb-6">
          <h2 class="text-headline-lg tracking-tight text-on-surface">
            SwitchX
          </h2>
          <span class="flex items-center gap-1.5 rounded-full border border-primary bg-primary/10 px-3 py-1 text-xs text-primary">
            <span class="size-1.5 rounded-full bg-primary" />
            LIVE
          </span>
        </div>

        <p class="mb-10 text-lg leading-relaxed text-on-surface-variant">
          The ultimate control center for live media environments. Trigger clips, mix sources, and run the whole show from a single, unified interface designed for zero latency.
        </p>

        <div class="mb-12">
          <h4 class="mb-6 text-xs uppercase tracking-widest text-on-surface-variant">
            Core Capabilities
          </h4>
          <ul class="space-y-4">
            <li
              v-for="cap in capabilities"
              :key="cap.title"
              class="flex items-center gap-4 text-body-md text-on-surface"
            >
              <span class="rounded-lg bg-primary/10 p-2 text-primary">
                <component
                  :is="cap.icon"
                  class="size-5"
                  fill="currentColor"
                />
              </span>
              {{ cap.title }}
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
            href="https://docs.cutwire.org"
            class="glow-button-secondary px-8 py-3 text-sm uppercase tracking-wider"
          >
            View Documentation
          </a>
        </div>
      </div>

      <div class="relative order-1 overflow-hidden rounded-2xl border border-outline-variant shadow-2xl lg:order-2">
        <NuxtImg
          :src="previewImage"
          alt="SwitchX interface preview — live video mixing with dark UI and orange accents"
          class="h-full w-full object-cover"
          width="800"
          height="600"
        />
      </div>
    </div>
  </div>
</template>
