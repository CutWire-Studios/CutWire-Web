<script setup lang="ts">
import type { PrismIconName } from '~/components/prism/Icon.vue'
import { PRISM_VERSION } from '~/composables/usePrismLinks'

definePageMeta({ layout: 'default' })

const { gh, issues } = usePrismLinks()

const site = useSiteConfig()

// Search titles truncate near 60 chars once the site name is appended, so the
// keyword-led title is kept short and the marketing line is used for social.
const pageTitle = 'CutWire Prism — Free live video mixer'
const socialTitle = 'CutWire Prism — Live visuals that don\'t take a weekend to learn'
const pageDescription = 'Free, open-source node-based live video mixer for schools, churches and small venues. Mix two decks, add overlays, output to NDI or a virtual camera.'
const socialDescription = 'Wire your sources on a node graph, mix two decks with a real crossfader, and push to a projector, NDI or a virtual camera. Free and open source under GPLv3.'
const pageUrl = `${site.url}/prism`
const ogImage = `${site.url}/images/prism-cover.png`
const ogImageAlt = 'CutWire Prism — Trigger. Mix. Create. Live.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: socialTitle,
  ogDescription: socialDescription,
  ogType: 'website',
  ogUrl: pageUrl,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  ogImage,
  ogImageAlt,
  ogImageType: 'image/png',
  ogImageWidth: 700,
  ogImageHeight: 400,
  twitterCard: 'summary_large_image',
  twitterTitle: socialTitle,
  twitterDescription: socialDescription,
  twitterImage: ogImage,
  twitterImageAlt: ogImageAlt,
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
})

useSchemaOrg([
  defineSoftwareApp({
    name: 'CutWire Prism',
    description: pageDescription,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Linux, Windows, macOS',
    softwareVersion: PRISM_VERSION,
    screenshot: `${site.url}/images/main-window.png`,
    offers: { price: '0.00', priceCurrency: 'USD' },
  }),
])

const features: { icon: PrismIconName, title: string, body: string }[] = [
  {
    icon: 'wire',
    title: 'Node canvas, not a spreadsheet',
    body: 'Drag media onto a graph and wire Input → Process → Layer → A/B → Output. What you see is what plays.',
  },
  {
    icon: 'layers',
    title: 'Two decks, one crossfader',
    body: 'Familiar A/B mixing with AUTO, CUT, per-deck speed, and transitions from crossfade to 3D cube and flip.',
  },
  {
    icon: 'bolt',
    title: 'Sub-50ms feel',
    body: 'FFmpeg decode into OpenGL compositing. Cue a clip, hit CUT, it\'s on the wall. No spinner, no lag.',
  },
  {
    icon: 'cam',
    title: 'Everything is a source',
    body: 'Video files, images, slideshows, cameras, screen capture, shaders, HTML, text, Lua, NDI, or a phone via QR.',
  },
  {
    icon: 'wand',
    title: 'AI background removal',
    body: 'Drop a webcam node, add Remove BG, and MediaPipe segmentation keys out the room. No green screen required.',
  },
  {
    icon: 'code',
    title: 'Scripting when you need it',
    body: 'Lua 5.4 for live text and data overlays. GLSL fragment shaders — including audio-reactive presets — as first-class sources.',
  },
  {
    icon: 'net',
    title: 'NDI, OBS & virtual camera',
    body: 'Output to a projector window, NDI network, or a virtual camera that appears in OBS, Zoom or the browser. Control from OBS over WebSocket.',
  },
  {
    icon: 'panic',
    title: 'Panic buttons that actually work',
    body: 'Blackout, Pause the current frame, or slam a Stay Tuned overlay. Always one click away when the laptop misbehaves.',
  },
]

const chain = [
  { k: 'Input', d: 'Video, camera, screen, shader, HTML, text, Lua, NDI, phone.' },
  { k: 'Process', d: 'Crop, flip, AI background removal — live.' },
  { k: 'Layer', d: 'Stack and position sources on a 1280×720 canvas.' },
  { k: 'A/B Select', d: 'Assign sources to Deck A or Deck B.' },
  { k: 'Output', d: 'Projector, NDI, virtual camera, or recording.' },
]

const steps = [
  'Import your media into the asset library.',
  'Drag sources onto the canvas.',
  'Wire Input → Process → Layer → A/B → Output.',
  'Assign to Deck A or B, or bind a hotkey.',
  'Mix with the crossfader, AUTO or CUT.',
  'Open the output window, enable NDI or virtual camera, hit record.',
]

const shots = [
  {
    src: '/images/input-types.png',
    w: 1254,
    h: 782,
    title: 'Every input under one menu',
    body: 'Media file, video URL, camera, screen capture, canvas, shader, HTML, text, NDI, phone over WebRTC — one picker.',
  },
  {
    src: '/images/video-effects.png',
    w: 1424,
    h: 630,
    title: 'Process what comes in',
    body: 'Chain Remove BG, Crop and Flip on any input. AI segmentation keys a webcam without a green screen.',
  },
  {
    src: '/images/overlay-editor.png',
    w: 1865,
    h: 1163,
    title: 'Layer layout in real time',
    body: 'Drag, resize, snap, fit or stretch. Changes hit the output the moment you move a handle.',
  },
  {
    src: '/images/text-overlays.png',
    w: 1124,
    h: 1015,
    title: 'Titles, lower thirds, live clocks',
    body: 'Styled text sources with gradients, outlines, shadows and script variables like {now} and {date}.',
  },
  {
    src: '/images/html-editor.png',
    w: 1453,
    h: 835,
    title: 'HTML overlays without the HTML',
    body: 'A visual editor for scoreboards, timers and lower thirds. Or drop in your own HTML file when you want full control.',
  },
  {
    src: '/images/lua-scripting.png',
    w: 1004,
    h: 468,
    title: 'Lua scripts drive live data',
    body: 'Run a 5.4 script on an interval to generate scores, weather, tickers — anything you can express in a few lines.',
  },
]

const audienceRows = [
  {
    t: 'School & college events',
    d: 'Cricket and football highlights, live scoreboards, assembly slides, prizegiving reels — run by student volunteers.',
  },
  {
    t: 'Churches, theatres, community AV',
    d: 'Lyrics, camera cuts, pre-recorded segments and a Stay Tuned card for when the laptop needs a moment.',
  },
  {
    t: 'Small concerts & clubs',
    d: 'Music videos, GLSL shaders reacting to the audio FFT, quick cuts between decks with a real crossfader.',
  },
  {
    t: 'Streamers & OBS setups',
    d: 'Feed Prism into OBS as a virtual camera, or trigger scenes over the OBS WebSocket. NDI in and out.',
  },
  {
    t: 'Local sports broadcasts',
    d: 'Score overlays, freeze-frame replays, program recording with markers, FLAC audio capture.',
  },
]
</script>

<template>
  <MarketingProductHero
    product="prism"
    line1="Throw the hall through a Prism,"
    line2="the mix still keeps its rhythm."
    lede="CutWire Prism is a node-based live video mixer for volunteers, streamers and small venues. Wire your sources, mix two decks, and push to a projector, NDI or a virtual camera — free, forever."
    platforms="Linux · Windows · macOS (source build) · GPLv3"
    photo-alt="Macro photograph of a crystal prism catching purple and cyan light"
  >
    <!-- Photo: Ant Rozetsky / Unsplash License — 6AhXLy7Km10 -->
    <section class="px-4 py-10 md:px-6 md:py-14">
      <div class="mx-auto max-w-6xl">
        <figure class="frost-card rounded-xl">
          <div class="overflow-hidden rounded-xl">
            <NuxtImg
              src="/images/main-window.png"
              alt="CutWire Prism main window: asset library, node graph and live control panel"
              class="block w-full"
              format="avif"
              width="1866"
              height="1165"
              sizes="xs:100vw sm:100vw md:100vw lg:1152px"
              loading="eager"
              preload
            />
          </div>
        </figure>
      </div>
    </section>

    <section
      id="features"
      class="scroll-mt-28 px-4 py-16 md:px-6 md:py-24"
    >
      <div class="mx-auto max-w-6xl">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Everything a small production needs. Nothing that scares a volunteer off.
          </h2>
          <p class="mt-5 text-lg text-white/70">
            Resolume is powerful and expensive. TouchDesigner is powerful and steep. Prism picks a
            different fight: be usable in ten minutes, honest about what it does, and free.
          </p>
        </div>
        <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="card in features"
            :key="card.title"
            class="frost-card rounded-xl p-6"
          >
            <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white">
              <PrismIcon
                :name="card.icon"
                class="h-5 w-5"
              />
            </div>
            <h3 class="mt-4 font-semibold text-white">
              {{ card.title }}
            </h3>
            <p class="mt-2 text-sm text-white/70">
              {{ card.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="how"
      class="scroll-mt-28 px-4 py-16 md:px-6 md:py-24"
    >
      <div class="mx-auto max-w-6xl">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white md:text-5xl">
            One pipeline. Left to right.
          </h2>
          <p class="mt-5 text-lg text-white/70">
            Every Prism show — school match, church service, or streamed DJ set — is the same five
            kinds of nodes wired in the same direction.
          </p>
        </div>

        <ol class="mt-14 grid gap-3 md:grid-cols-5">
          <li
            v-for="(node, i) in chain"
            :key="node.k"
            class="frost-card relative rounded-xl p-5"
          >
            <div class="text-xs text-white/70">
              Step {{ i + 1 }}
            </div>
            <div class="mt-1 text-lg font-semibold text-white">
              {{ node.k }}
            </div>
            <p class="mt-2 text-sm text-white/70">
              {{ node.d }}
            </p>
          </li>
        </ol>

        <div class="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <figure class="frost-card rounded-xl">
            <div class="overflow-hidden rounded-xl">
              <NuxtImg
                src="/images/node-editor.png"
                alt="Node editor showing input, process, layer, A/B select and output nodes wired together"
                class="block w-full"
                format="avif"
                width="1216"
                height="598"
                sizes="xs:100vw sm:100vw md:100vw lg:556px"
                loading="lazy"
              />
            </div>
          </figure>
          <div>
            <h3 class="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Ten minutes to first show
            </h3>
            <ol class="mt-6 space-y-3">
              <li
                v-for="(step, i) in steps"
                :key="step"
                class="flex gap-4"
              >
                <span class="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/25 bg-white/10 text-xs text-white">
                  {{ i + 1 }}
                </span>
                <span class="text-white/70">{{ step }}</span>
              </li>
            </ol>
            <div class="frost-card mt-8 rounded-lg p-4 text-sm text-white/70">
              <span class="text-white">Hotkey grid:</span> keys
              <kbd class="rounded bg-white/10 px-1.5 py-0.5 text-xs text-white">1–0</kbd>
              <kbd class="rounded bg-white/10 px-1.5 py-0.5 text-xs text-white">Q–P</kbd>
              <kbd class="rounded bg-white/10 px-1.5 py-0.5 text-xs text-white">A–L</kbd>
              <kbd class="rounded bg-white/10 px-1.5 py-0.5 text-xs text-white">Z–M</kbd>
              fire to Deck A. Add
              <kbd class="rounded bg-white/10 px-1.5 py-0.5 text-xs text-white">Shift</kbd> to fire
              to Deck B.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="screens"
      class="scroll-mt-28 px-4 py-16 md:px-6 md:py-24"
    >
      <div class="mx-auto max-w-6xl">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Real UI. Not concept art.
          </h2>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <figure
            v-for="shot in shots"
            :key="shot.title"
            class="frost-card rounded-xl"
          >
            <div class="overflow-hidden rounded-t-xl">
              <NuxtImg
                :src="shot.src"
                :alt="shot.title"
                :width="shot.w"
                :height="shot.h"
                class="block w-full"
                format="avif"
                sizes="xs:100vw sm:100vw md:564px"
                loading="lazy"
              />
            </div>
            <figcaption class="p-5">
              <h3 class="font-semibold text-white">
                {{ shot.title }}
              </h3>
              <p class="mt-1.5 text-sm text-white/70">
                {{ shot.body }}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section
      id="made-for"
      class="scroll-mt-28 px-4 py-16 md:px-6 md:py-24"
    >
      <div class="mx-auto max-w-6xl">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">
            People with a real deadline and no budget.
          </h2>
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-2">
          <div
            v-for="row in audienceRows"
            :key="row.t"
            class="frost-card flex gap-4 rounded-xl p-5"
          >
            <div class="mt-1.5 h-2 w-2 flex-none rounded-full bg-prism" />
            <div>
              <h3 class="font-semibold text-white">
                {{ row.t }}
              </h3>
              <p class="mt-1 text-sm text-white/70">
                {{ row.d }}
              </p>
            </div>
          </div>
        </div>
        <p class="mt-10 text-sm text-white/70">
          Early, under active development —
          <a
            :href="issues"
            target="_blank"
            rel="noreferrer"
            class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >file the bugs you hit</a>
          or
          <a
            :href="gh"
            target="_blank"
            rel="noreferrer"
            class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >read the source</a>.
        </p>
      </div>
    </section>
  </MarketingProductHero>
</template>
