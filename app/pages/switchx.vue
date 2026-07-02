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
    <section class="relative section-y">
      <div class="ambient-glow opacity-50" />
      <div class="container-cutwire relative animate-rise-in">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div class="flex items-center gap-3">
              <p class="text-label-sm uppercase tracking-widest text-on-surface-variant">
                SwitchX · Live media trigger
              </p>
              <CommonLiveBadge />
            </div>
            <h1 class="mt-5 text-display-xl text-on-surface">
              The beginner-friendly live trigger that feels like magic.
            </h1>
            <p class="mt-6 text-body-lg text-on-surface-variant">
              Instant clips. Beautiful overlays. Zero stress. Perfect for school events, small concerts, sports, and anywhere you want to look pro — without the headache.
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
                Watch 90-second demo
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
            You're running a school assembly, a local band is rocking the stage, or the big game is on — and with one click, you're dropping highlight videos, pumping up graphics, or switching to a live camera like a seasoned pro.
          </p>
          <p
            v-reveal="2"
            class="mt-6 max-w-2xl text-body-lg text-on-surface-variant"
          >
            Built for real people, not just tech wizards. A clean, dark VJ-style interface that shines in low light — powerful enough for the stage, simple enough for your first time.
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
          No steep learning curves. No expensive subscriptions. Just open it up, load your media, and start creating.
        </p>
        <div
          v-reveal="2"
          class="mt-10 grid gap-4 md:grid-cols-3"
        >
          <div class="glass-card rounded-[24px] p-6">
            <h3 class="text-lg font-semibold text-on-surface">
              Dark, sleek interface
            </h3>
            <p class="mt-2 text-sm text-on-surface-variant">
              Optimized for live events and low-light rooms.
            </p>
          </div>
          <div class="glass-card rounded-[24px] p-6">
            <h3 class="text-lg font-semibold text-on-surface">
              Drag & drop everything
            </h3>
            <p class="mt-2 text-sm text-on-surface-variant">
              Media, overlays, sources — just drop it in and go.
            </p>
          </div>
          <div class="glass-card rounded-[24px] p-6">
            <h3 class="text-lg font-semibold text-on-surface">
              Sessions save automatically
            </h3>
            <p class="mt-2 text-sm text-on-surface-variant">
              Pick up right where you left off, every time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specs -->
    <section
      v-if="product"
      class="section-y"
    >
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
            Download SwitchX — it's free
          </h2>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              :href="repoUrl"
              target="_blank"
              rel="noopener"
              class="glow-button-primary px-8 py-4 text-label-md"
            >
              Download SwitchX now
            </a>
            <NuxtLink
              v-if="product"
              :to="`/download/${product.slug}`"
              class="glow-button-secondary px-8 py-4 text-label-md"
            >
              Platform installers
            </NuxtLink>
          </div>
          <p class="mt-6 text-label-sm text-on-surface-variant/60">
            Open source · Cross-platform · Made with love by CutWire Studios
          </p>
        </div>
      </div>
    </section>

    <UiDialog v-model:open="videoOpen">
      <UiDialogContent class="border-outline-variant bg-card sm:max-w-3xl">
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
