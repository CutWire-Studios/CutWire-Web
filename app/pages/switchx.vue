<script setup lang="ts">
import { Clapperboard, GraduationCap, Layers, MousePointerClick, Music, QrCode, ShieldAlert, Trophy, Users } from 'lucide-vue-next'

definePageMeta({ layout: 'default' })

const { data: product } = await useAsyncData(
  'product-switchx',
  () => queryCollection('products').where('slug', '=', 'switchx').first(),
)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

useSeoMeta({
  title: 'SwitchX — Live Media Magic at Your Fingertips',
  description: 'The beginner-friendly live trigger that feels like magic. Instant clips, beautiful overlays, zero stress.',
})

const repoUrl = 'https://github.com/SubtleArts/SwitchX'
const videoOpen = ref(false)

const loveFeatures = [
  { title: 'Click. Trigger. Wow.', description: 'Drag in videos, photos, or live sources and fire them instantly with hotkeys or mouse clicks.', icon: MousePointerClick },
  { title: 'Look like a pro', description: 'Add stunning overlays, dynamic text, scoreboards, clocks, and eye-catching effects — all without complicated setups.', icon: Clapperboard },
  { title: 'Live mixing that flows', description: 'Blend between two decks with a smooth crossfader. Speed control included. Feels natural.', icon: Layers },
  { title: 'Ready for the unexpected', description: 'Panic buttons — Blackout, Freeze, "Stay Tuned" — give you confidence when things get wild.', icon: ShieldAlert },
  { title: 'Phone camera magic', description: 'Turn any smartphone into a wireless live camera with a simple QR code scan.', icon: QrCode },
]

const moments = [
  { title: 'School events', description: 'Instant replays, hype videos, and fun overlays that keep the energy high.', icon: GraduationCap },
  { title: 'Live music & performances', description: 'Drop music videos, audio-reactive visuals, and custom graphics that sync with the beat.', icon: Music },
  { title: 'Sports', description: 'Score overlays, highlight triggers, and quick camera switches that make any match feel broadcast-ready.', icon: Trophy },
  { title: 'Community & creative shows', description: 'Theater, dance, presentations — SwitchX makes every event feel polished and professional.', icon: Users },
]
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
                SwitchX · Live media trigger
              </p>
              <CommonLiveBadge />
            </div>
            <h1 class="mt-5 text-display-xl text-text">
              The beginner-friendly live trigger that feels like magic.
            </h1>
            <p class="mt-6 text-body-l text-text-muted">
              Instant clips. Beautiful overlays. Zero stress. Perfect for school events, small concerts, sports, and anywhere you want to look pro — without the headache.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <UiButton
                as-child
                size="lg"
                class="btn-signal"
              >
                <NuxtLink
                  :to="repoUrl"
                  target="_blank"
                  rel="noopener"
                >
                  Get SwitchX on GitHub
                </NuxtLink>
              </UiButton>
              <UiButton
                variant="outline"
                size="lg"
                class="btn-panel"
                @click="videoOpen = true"
              >
                Watch 90-second demo
              </UiButton>
            </div>
          </div>
          <div class="relative">
            <MarketingCrossfadeHero />
          </div>
        </div>
      </div>
    </section>

    <!-- Turn chaos into showtime -->
    <section class="border-t border-hairline section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-eyebrow text-text-faint"
        >
          Turn chaos into showtime
        </p>
        <p
          v-reveal="1"
          class="mt-6 max-w-3xl text-display-l text-text"
        >
          You're running a school assembly, a local band is rocking the stage, or the big game is on — and with one click, you're dropping highlight videos, pumping up graphics, or switching to a live camera like a seasoned pro.
        </p>
        <p
          v-reveal="2"
          class="mt-6 max-w-2xl text-body-l text-text-muted"
        >
          Built for real people, not just tech wizards. A clean, dark VJ-style interface that shines in low light — powerful enough for the stage, simple enough for your first time.
        </p>
      </div>
    </section>

    <!-- Why creators love SwitchX -->
    <section class="border-t border-hairline section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-eyebrow text-text-faint"
        >
          Why creators love it
        </p>
        <h2
          v-reveal="1"
          class="mt-4 text-display-l text-text"
        >
          Why creators love SwitchX
        </h2>
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    <section class="relative overflow-hidden border-t border-hairline section-y">
      <div class="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div class="container-cutwire relative">
        <p
          v-reveal
          class="text-eyebrow text-text-faint"
        >
          Built for real moments
        </p>
        <div class="mt-10 grid gap-6 sm:grid-cols-2">
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
    <section class="border-t border-hairline section-y">
      <div class="container-cutwire">
        <p
          v-reveal
          class="text-eyebrow text-text-faint"
        >
          Simple. Powerful. Yours.
        </p>
        <p
          v-reveal="1"
          class="mt-6 max-w-2xl text-body-l text-text-muted"
        >
          No steep learning curves. No expensive subscriptions. Just open it up, load your media, and start creating.
        </p>
        <div
          v-reveal="2"
          class="mt-10 flex flex-col gap-3 md:flex-row md:items-stretch"
        >
          <div class="panel flex-1 rounded-xl p-5">
            <h3 class="font-display text-lg font-semibold text-text">
              Dark, sleek interface
            </h3>
            <p class="mt-1.5 text-sm text-text-muted">
              Optimized for live events and low-light rooms.
            </p>
          </div>
          <div class="panel flex-1 rounded-xl p-5">
            <h3 class="font-display text-lg font-semibold text-text">
              Drag & drop everything
            </h3>
            <p class="mt-1.5 text-sm text-text-muted">
              Media, overlays, sources — just drop it in and go.
            </p>
          </div>
          <div class="panel flex-1 rounded-xl p-5">
            <h3 class="font-display text-lg font-semibold text-text">
              Sessions save automatically
            </h3>
            <p class="mt-1.5 text-sm text-text-muted">
              Pick up right where you left off, every time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specs -->
    <section
      v-if="product"
      class="relative overflow-hidden border-t border-hairline section-y"
    >
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

    <!-- Ready to steal the show -->
    <section class="border-t border-hairline section-y">
      <div class="container-cutwire max-w-lg text-center">
        <p class="text-eyebrow text-text-faint">
          Ready to steal the show?
        </p>
        <h2 class="mt-4 text-display-l text-text">
          Download SwitchX — it's free
        </h2>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <UiButton
            as-child
            size="lg"
            class="btn-signal"
          >
            <NuxtLink
              :to="repoUrl"
              target="_blank"
              rel="noopener"
            >
              Download SwitchX now
            </NuxtLink>
          </UiButton>
          <UiButton
            v-if="product"
            as-child
            variant="outline"
            size="lg"
            class="btn-panel"
          >
            <NuxtLink :to="`/download/${product.slug}`">
              Platform installers →
            </NuxtLink>
          </UiButton>
        </div>
        <p class="mt-6 font-mono text-xs text-text-faint">
          Open source · Cross-platform · Made with love by CutWire Studios
        </p>
      </div>
    </section>

    <UiDialog v-model:open="videoOpen">
      <UiDialogContent class="border-hairline bg-surface-1 sm:max-w-3xl">
        <UiDialogHeader>
          <UiDialogTitle>Watch the demo</UiDialogTitle>
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
