<script setup lang="ts">
import { Clapperboard, GraduationCap, GitBranch, Layers, Music, Network, Palette, ShieldAlert, Trophy, Users } from 'lucide-vue-next'
import type { Component } from 'vue'

definePageMeta({ layout: 'default' })

const { data: product } = await useAsyncData(
  'product-switchx',
  () => queryCollection('products').where('slug', '=', 'switchx').first(),
)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

useSeoMeta({
  title: 'SwitchX — Trigger. Mix. Create. Live.',
  description: product.value.summary,
})

const repoUrl = product.value.repoUrl ?? 'https://github.com/SubtleArts/SwitchX'
const videoOpen = ref(false)

const highlightIcons: Component[] = [GitBranch, Layers, Network, Palette, ShieldAlert]

const loveFeatures = computed(() =>
  (product.value?.highlights ?? []).map((item, i) => ({
    title: item.title,
    description: item.description,
    icon: highlightIcons[i] ?? GitBranch,
  })),
)

const useCaseIcons: Record<string, Component> = {
  'School events': GraduationCap,
  'Live concerts': Music,
  'Visual performances': Users,
  'Sports broadcasting': Trophy,
}

const moments = computed(() =>
  (product.value?.useCases ?? []).map(item => ({
    title: item.title,
    description: item.description,
    icon: useCaseIcons[item.title] ?? Clapperboard,
  })),
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative section-y">
      <div class="ambient-glow opacity-50" />
      <div class="container-cutwire relative animate-rise-in">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div class="flex items-center gap-3">
              <p class="text-label-sm uppercase tracking-widest text-on-surface-variant">
                SwitchX · {{ product.tagline }}
              </p>
              <CommonLiveBadge />
            </div>
            <h1 class="mt-5 text-display-xl text-on-surface">
              {{ product.hero?.headline ?? product.tagline }}
            </h1>
            <p class="mt-6 text-body-lg text-on-surface-variant">
              {{ product.hero?.subheadline ?? product.summary }}
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <a
                :href="repoUrl"
                target="_blank"
                rel="noopener"
                class="glow-button-primary px-8 py-4 text-label-md"
              >
                Get SwitchX on GitHub
              </a>
              <button
                type="button"
                class="glow-button-secondary px-8 py-4 text-label-md"
                @click="videoOpen = true"
              >
                Watch demo
              </button>
            </div>
          </div>
          <MarketingCrossfadeHero />
        </div>
      </div>
    </section>

    <!-- Turn chaos into showtime -->
    <section class="section-y">
      <div class="container-cutwire">
        <div class="mx-auto max-w-4xl border-l-2 border-primary pl-8 md:pl-12">
          <p
            v-reveal
            class="text-label-sm uppercase tracking-widest text-on-surface-variant"
          >
            Turn chaos into showtime
          </p>
          <p
            v-reveal="1"
            class="mt-6 text-headline-lg text-on-surface"
          >
            Click-to-trigger clip cards, a live A/B crossfader, and panic controls when the show gets wild — all in a dark VJ-style interface optimized for low-light events.
          </p>
          <p
            v-reveal="2"
            class="mt-6 max-w-2xl text-body-lg text-on-surface-variant"
          >
            Built with Qt 6, FFmpeg, and OpenGL. Free and open source under GPLv3 — simpler than Resolume, more approachable than TouchDesigner, and ready for your first live show.
          </p>
        </div>
      </div>
    </section>

    <!-- Why creators love SwitchX -->
    <section class="section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="mb-12 text-label-sm uppercase tracking-widest text-on-surface-variant"
        >
          Why creators love it
        </p>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MarketingUseCaseCard
            v-for="(feature, i) in loveFeatures"
            :key="feature.title"
            v-reveal="i"
            v-bind="feature"
          />
        </div>
      </div>
    </section>

    <!-- Built for real moments -->
    <section class="relative section-y">
      <div class="container-cutwire relative">
        <p
          v-reveal
          class="mb-12 text-label-sm uppercase tracking-widest text-on-surface-variant"
        >
          Built for real moments
        </p>
        <div class="grid gap-6 sm:grid-cols-2">
          <MarketingUseCaseCard
            v-for="(moment, i) in moments"
            :key="moment.title"
            v-reveal="i"
            v-bind="moment"
          />
        </div>
      </div>
    </section>

    <!-- Simple. Powerful. Yours. -->
    <section class="section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-label-sm uppercase tracking-widest text-on-surface-variant"
        >
          Simple. Powerful. Yours.
        </p>
        <p
          v-reveal="1"
          class="mt-6 max-w-2xl text-body-lg text-on-surface-variant"
        >
          No expensive subscriptions. Sessions autosave with portable asset paths and smart relinking. Drag and drop media onto clip cards and go live.
        </p>
        <div
          v-reveal="2"
          class="mt-10 grid gap-4 md:grid-cols-3"
        >
          <div class="glass-card rounded-[24px] p-6">
            <h3 class="text-lg font-semibold text-on-surface">
              Dark VJ theme
            </h3>
            <p class="mt-2 text-sm text-on-surface-variant">
              Resolume Arena–inspired UI with cyan accents, built for low-light events.
            </p>
          </div>
          <div class="glass-card rounded-[24px] p-6">
            <h3 class="text-lg font-semibold text-on-surface">
              Drag & drop media
            </h3>
            <p class="mt-2 text-sm text-on-surface-variant">
              Load folders, files, or photos — or drop media directly onto clip cards.
            </p>
          </div>
          <div class="glass-card rounded-[24px] p-6">
            <h3 class="text-lg font-semibold text-on-surface">
              Sessions autosave
            </h3>
            <p class="mt-2 text-sm text-on-surface-variant">
              Save and reload shows with portable .switchx bundles and asset relinking.
            </p>
          </div>
        </div>
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
          class="glass-card mt-8 max-w-xl rounded-[24px] p-6"
        >
          <CommonSpecTable :specs="product.specs" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-y">
      <div class="container-cutwire">
        <div class="glass-card mx-auto max-w-lg rounded-[24px] p-12 text-center">
          <p class="text-label-sm uppercase tracking-widest text-on-surface-variant">
            Ready to steal the show?
          </p>
          <h2 class="mt-4 text-headline-lg text-on-surface">
            Get SwitchX — free & open source
          </h2>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              :href="repoUrl"
              target="_blank"
              rel="noopener"
              class="glow-button-primary px-8 py-4 text-label-md"
            >
              View on GitHub
            </a>
            <NuxtLink
              :to="`/download/${product.slug}`"
              class="glow-button-secondary px-8 py-4 text-label-md"
            >
              Build & install
            </NuxtLink>
          </div>
          <p class="mt-6 text-label-sm text-on-surface-variant/60">
            GPLv3 · Qt 6 + FFmpeg · Cross-platform · CutWire Studios
          </p>
        </div>
      </div>
    </section>

    <UiDialog v-model:open="videoOpen">
      <UiDialogContent class="border-outline-variant bg-card sm:max-w-3xl">
        <UiDialogHeader>
          <UiDialogTitle>SwitchX preview</UiDialogTitle>
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
