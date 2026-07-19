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
    <section class="relative section-y">
      <div class="ambient-glow opacity-50" />
      <div class="container-cutwire relative animate-rise-in">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p class="text-label-sm uppercase tracking-widest text-on-surface-variant">
              {{ product.name }} · Live media console
            </p>
            <h1 class="mt-5 text-display-xl text-on-surface">
              {{ product.tagline }}
            </h1>
            <p class="mt-6 text-body-lg text-on-surface-variant">
              {{ product.summary }}
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <NuxtLink
                :to="`/${product.slug}#download`"
                class="glow-button-primary px-8 py-4 text-label-md"
              >
                Download {{ product.name }}
              </NuxtLink>
              <button
                type="button"
                class="glow-button-secondary px-8 py-4 text-label-md"
                @click="videoOpen = true"
              >
                Watch the cut
              </button>
            </div>
          </div>
          <MarketingCrossfadeHero />
        </div>
      </div>
    </section>

    <!-- Signal path overview -->
    <section class="section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-label-sm uppercase tracking-widest text-on-surface-variant"
        >
          Signal path
        </p>
        <h2
          v-reveal="1"
          class="mt-4 text-headline-lg text-on-surface"
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
            <div class="glass-card flex-1 rounded-xl p-5">
              <span
                class="font-mono text-xs font-semibold"
                :class="i % 2 === 1 ? 'text-primary-fixed-dim' : 'text-primary'"
              >0{{ i + 1 }}</span>
              <h3 class="mt-2 text-lg font-semibold text-on-surface">
                {{ feature.title }}
              </h3>
              <p class="mt-1.5 text-sm text-on-surface-variant">
                {{ feature.body }}
              </p>
            </div>
            <div
              v-if="i < product.features.length - 1"
              class="hidden shrink-0 items-center justify-center text-on-surface-variant md:flex"
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
      class="section-y"
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
    <section class="section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-label-sm uppercase tracking-widest text-on-surface-variant"
        >
          Specs
        </p>
        <div
          v-reveal="1"
          class="glass-card mt-8 max-w-xl rounded-xl p-6"
        >
          <CommonSpecTable :specs="product.specs" />
        </div>
      </div>
    </section>

    <!-- Download -->
    <section class="section-y">
      <div class="container-cutwire max-w-lg">
        <p class="text-label-sm uppercase tracking-widest text-on-surface-variant">
          Get it
        </p>
        <h2 class="mt-4 text-headline-lg text-on-surface">
          Get {{ product.name }}
        </h2>
        <div class="glass-card mt-8 rounded-xl p-6">
          <CommonDownloadPanel
            :downloads="product.downloads"
            :product-name="product.name"
          />
        </div>
        <NuxtLink
          :to="`https://docs.cutwire.org/${product.slug}`"
          class="mt-6 inline-flex items-center gap-1 text-primary transition-colors hover:text-primary-fixed-dim"
        >
          Start with the docs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-4"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </section>

    <UiDialog v-model:open="videoOpen">
      <UiDialogContent class="border-outline-variant bg-card sm:max-w-3xl">
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

<style scoped>
.font-mono {
  font-family: var(--font-mono);
}
</style>
