<script setup lang="ts">
import type { ProductsCollectionItem } from '@nuxt/content'

defineProps<{
  product: ProductsCollectionItem
}>()

const videoOpen = ref(false)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero-glow relative overflow-hidden section-y">
      <div class="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div class="container-cutwire relative animate-rise-in">
        <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div class="flex items-center gap-3">
              <p class="text-eyebrow text-text-faint">
                {{ product.name }} · Live media console
              </p>
              <CommonLiveBadge v-if="product.status === 'live'" />
            </div>
            <h1 class="mt-5 text-display-xl text-text">
              {{ product.tagline }}
            </h1>
            <p class="mt-6 text-body-l text-text-muted">
              {{ product.summary }}
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <UiButton
                as-child
                size="lg"
                class="btn-signal"
              >
                <NuxtLink :to="`/download/${product.slug}`">
                  Download {{ product.name }}
                </NuxtLink>
              </UiButton>
              <UiButton
                variant="outline"
                size="lg"
                class="btn-panel"
                @click="videoOpen = true"
              >
                Watch the cut
              </UiButton>
            </div>
            <p class="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs text-text-faint">
              <span class="mr-1">Cut live:</span>
              <kbd class="keycap">Space</kbd>
              <kbd class="keycap">1</kbd>
              <kbd class="keycap">2</kbd>
              <kbd class="keycap">3</kbd>
              <span class="ml-1">· panic</span>
              <kbd class="keycap">Esc</kbd>
            </p>
          </div>
          <div class="relative">
            <MarketingCrossfadeHero />
          </div>
        </div>
      </div>
    </section>

    <!-- Signal path overview -->
    <section class="relative overflow-hidden border-t border-hairline section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-eyebrow text-text-faint"
        >
          Signal path
        </p>
        <h2
          v-reveal="1"
          class="mt-4 text-display-l text-text"
        >
          From source to show
        </h2>
        <div
          v-reveal="2"
          class="mt-10 flex flex-col gap-3 md:flex-row md:items-stretch"
        >
          <template
            v-for="(feature, i) in product.features"
            :key="feature.title"
          >
            <div class="panel flex-1 rounded-xl p-5">
              <span
                class="font-mono text-xs font-semibold"
                :style="{ color: i % 2 === 1 ? 'var(--cue)' : 'var(--live)' }"
              >0{{ i + 1 }}</span>
              <h3 class="mt-2 font-display text-lg font-semibold text-text">
                {{ feature.title }}
              </h3>
              <p class="mt-1.5 text-sm text-text-muted">
                {{ feature.body }}
              </p>
            </div>
            <div
              v-if="i < product.features.length - 1"
              class="hidden shrink-0 items-center justify-center font-mono text-text-faint md:flex"
              aria-hidden="true"
            >
              →
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- Detailed features -->
    <section
      v-for="(feature, i) in product.features"
      :key="feature.title"
      class="border-t border-hairline section-y"
    >
      <div class="container-cutwire">
        <MarketingFeatureSection
          :step="`0${i + 1} / ${feature.title.toUpperCase()}`"
          :title="feature.title"
          :description="feature.body"
          :reverse="i % 2 === 1"
          :signal="i % 2 === 1 ? 'b' : 'a'"
          :scene="feature.title.toUpperCase()"
        />
      </div>
    </section>

    <!-- Specs -->
    <section class="relative overflow-hidden border-t border-hairline section-y">
      <div class="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div class="container-cutwire relative">
        <p
          v-reveal
          class="text-eyebrow text-text-faint"
        >
          Specs
        </p>
        <div
          v-reveal="1"
          class="panel mt-8 max-w-xl rounded-xl p-6"
        >
          <CommonSpecTable :specs="product.specs" />
        </div>
      </div>
    </section>

    <!-- Download -->
    <section class="border-t border-hairline section-y">
      <div class="container-cutwire max-w-lg">
        <p class="text-eyebrow text-text-faint">
          Get it
        </p>
        <h2 class="mt-4 text-display-l text-text">
          Get {{ product.name }}
        </h2>
        <div class="panel mt-8 rounded-xl p-6">
          <CommonDownloadPanel
            :downloads="product.downloads"
            :product-name="product.name"
          />
        </div>
        <UiButton
          as-child
          variant="ghost"
          class="mt-6 text-cue"
        >
          <NuxtLink :to="`https://docs.cutwire.org/${product.slug}`">
            Start with the docs →
          </NuxtLink>
        </UiButton>
      </div>
    </section>

    <UiDialog v-model:open="videoOpen">
      <UiDialogContent class="border-hairline bg-surface-1 sm:max-w-3xl">
        <UiDialogHeader>
          <UiDialogTitle>Watch the cut</UiDialogTitle>
        </UiDialogHeader>
        <div class="aspect-video">
          <MarketingConsoleScene
            signal="b"
            scene="STAGE"
          />
        </div>
      </UiDialogContent>
    </UiDialog>
  </div>
</template>
