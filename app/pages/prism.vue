<script setup lang="ts">
import type { PrismIconName } from '~/components/prism/Icon.vue'

definePageMeta({ layout: 'prism' })

const { gh, releases, flathub, issues } = usePrismLinks()

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
    softwareVersion: '0.1.2',
    screenshot: `${site.url}/images/main-window.png`,
    offers: { price: '0.00', priceCurrency: 'USD' },
  }),
])

const audiences = [
  'For schools',
  'For churches',
  'For streamers',
  'For theatres',
  'For small gigs',
  'For AV volunteers',
]

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

const downloads = [
  {
    os: 'Linux',
    tag: 'Recommended',
    body: 'Install from Flathub, or grab an AppImage from the GitHub releases page.',
    code: 'flatpak install flathub org.cutwire.Prism\nflatpak run org.cutwire.Prism',
    primary: { label: 'Open on Flathub', href: flathub },
    secondary: { label: 'AppImage on GitHub', href: releases },
  },
  {
    os: 'Windows',
    tag: 'Installer',
    body: 'Download the latest .exe installer from GitHub releases.',
    code: '# Download Prism-Setup-x64.exe from\n# github.com/CutWire-Studios/Prism/releases',
    primary: { label: 'Windows installer', href: releases },
    secondary: { label: 'All releases', href: releases },
  },
  {
    os: 'macOS',
    tag: 'Build from source',
    body: 'No prebuilt binary yet — build from source with CMake. Note: virtual camera output isn\'t available on macOS.',
    code: 'git clone https://github.com/CutWire-Studios/Prism\ncmake -B build && cmake --build build',
    primary: { label: 'Build instructions', href: gh },
    secondary: { label: 'Track macOS binary', href: issues },
  },
]

const stack: [string, string][] = [
  ['Qt 6 Widgets', 'Native UI'],
  ['C++20 · CMake', 'Core'],
  ['FFmpeg', 'Decode'],
  ['OpenGL', 'Compositing'],
  ['Qt WebEngine', 'HTML overlays'],
  ['Lua 5.4 + sol2', 'Scripting'],
  ['kissfft', 'Audio FFT'],
  ['ONNX Runtime · MediaPipe', 'AI segmentation'],
  ['libdatachannel', 'WebRTC phone cam'],
  ['NDI SDK', 'Network video'],
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      id="top"
      class="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        class="prism-grid-bg absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0"
        style="background: var(--grad-hero)"
      />
      <div class="relative mx-auto max-w-6xl px-4 pt-20 pb-16 md:px-6 md:pt-28 md:pb-24">
        <div class="animate-rise-in mx-auto max-w-3xl text-center">
          <NuxtImg
            src="/images/prism-icon.png"
            alt="CutWire Prism app icon"
            class="mx-auto mb-7 h-20 w-20 drop-shadow-[0_8px_30px_oklch(0.55_0.22_295_/_0.45)]"
            width="160"
            height="160"
            format="avif"
            loading="eager"
          />
          <a
            :href="gh"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
            Free &amp; open source · GPLv3 · v0.1.2
          </a>
          <h1 class="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Live visuals that <span class="prism-grad-text">don't take a weekend</span> to learn.
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            CutWire Prism is a node-based live video mixer for volunteers, streamers and small
            venues. Wire your sources, mix two decks, and push to a projector, NDI or a virtual
            camera — free, forever.
          </p>
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#download"
              class="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.72_0.20_295_/_0.8)] transition-transform hover:scale-[1.02]"
            >
              Download Prism
            </a>
            <a
              :href="gh"
              target="_blank"
              rel="noreferrer"
              class="rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground/90 backdrop-blur transition-colors hover:bg-surface-2"
            >
              Star on GitHub →
            </a>
          </div>
          <p class="mt-4 font-mono text-xs text-muted-foreground">
            Linux · Windows · macOS (source build)
          </p>
        </div>

        <div
          v-reveal
          class="relative mx-auto mt-14 max-w-6xl"
        >
          <div
            aria-hidden="true"
            class="absolute -inset-x-8 -inset-y-6 rounded-3xl opacity-70 blur-2xl"
            style="background: linear-gradient(120deg, oklch(0.55 0.22 295 / 0.35), oklch(0.45 0.18 260 / 0.35))"
          />
          <div class="prism-glow-ring relative overflow-hidden rounded-xl border border-border bg-surface">
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
        </div>
      </div>
    </section>

    <!-- Audience bar -->
    <div class="border-y border-border/60 bg-surface/40">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-5 text-xs uppercase tracking-[0.18em] text-muted-foreground md:px-6">
        <span
          v-for="item in audiences"
          :key="item"
        >{{ item }}</span>
      </div>
    </div>

    <!-- Features -->
    <section
      id="features"
      class="relative py-24 md:py-32"
    >
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Features
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Everything a small production needs. Nothing that scares a volunteer off.
          </h2>
          <p class="mt-5 text-lg text-muted-foreground">
            Resolume is powerful and expensive. TouchDesigner is powerful and steep. Prism picks a
            different fight: be usable in ten minutes, honest about what it does, and free.
          </p>
        </div>
        <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(card, i) in features"
            :key="card.title"
            v-reveal="i % 4"
            class="group relative overflow-hidden rounded-xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors hover:border-primary/50"
          >
            <div
              aria-hidden="true"
              class="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              style="background: oklch(0.72 0.20 295 / 0.35)"
            />
            <div class="relative">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary">
                <PrismIcon
                  :name="card.icon"
                  class="h-5 w-5"
                />
              </div>
              <h3 class="mt-4 font-semibold">
                {{ card.title }}
              </h3>
              <p class="mt-2 text-sm text-muted-foreground">
                {{ card.body }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section
      id="how"
      class="relative py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        class="absolute inset-x-0 top-0 h-px"
        style="background: linear-gradient(90deg, transparent, oklch(0.72 0.20 295 / 0.5), transparent)"
      />
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            One pipeline. Left to right.
          </h2>
          <p class="mt-5 text-lg text-muted-foreground">
            Every Prism show — school match, church service, or streamed DJ set — is the same five
            kinds of nodes wired in the same direction.
          </p>
        </div>

        <ol class="mt-14 grid gap-3 md:grid-cols-5">
          <li
            v-for="(node, i) in chain"
            :key="node.k"
            v-reveal="i"
            class="relative rounded-xl border border-border bg-surface/70 p-5 backdrop-blur"
          >
            <div class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Step {{ i + 1 }}
            </div>
            <div class="mt-1 text-lg font-semibold text-primary">
              {{ node.k }}
            </div>
            <p class="mt-2 text-sm text-muted-foreground">
              {{ node.d }}
            </p>
            <span
              v-if="i < chain.length - 1"
              aria-hidden="true"
              class="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-primary md:block"
            >→</span>
          </li>
        </ol>

        <div class="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div
            v-reveal
            class="prism-glow-ring overflow-hidden rounded-xl border border-border bg-surface"
          >
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
          <div v-reveal="1">
            <h3 class="text-2xl font-semibold tracking-tight md:text-3xl">
              Ten minutes to first show
            </h3>
            <ol class="mt-6 space-y-3">
              <li
                v-for="(step, i) in steps"
                :key="step"
                class="flex gap-4"
              >
                <span class="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs text-primary">
                  {{ i + 1 }}
                </span>
                <span class="text-muted-foreground">{{ step }}</span>
              </li>
            </ol>
            <div class="mt-8 rounded-lg border border-border bg-surface-2 p-4 text-sm text-muted-foreground">
              <span class="text-foreground">Hotkey grid:</span> keys
              <kbd class="rounded bg-background px-1.5 py-0.5 font-mono text-xs">1–0</kbd>
              <kbd class="rounded bg-background px-1.5 py-0.5 font-mono text-xs">Q–P</kbd>
              <kbd class="rounded bg-background px-1.5 py-0.5 font-mono text-xs">A–L</kbd>
              <kbd class="rounded bg-background px-1.5 py-0.5 font-mono text-xs">Z–M</kbd>
              fire to Deck A. Add
              <kbd class="rounded bg-background px-1.5 py-0.5 font-mono text-xs">Shift</kbd> to fire
              to Deck B.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots -->
    <section
      id="screens"
      class="relative py-24 md:py-32"
    >
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Screenshots
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Real UI. Not concept art.
          </h2>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <figure
            v-for="(shot, i) in shots"
            :key="shot.title"
            v-reveal="i % 2"
            class="overflow-hidden rounded-xl border border-border bg-surface"
          >
            <NuxtImg
              :src="shot.src"
              :alt="shot.title"
              :width="shot.w"
              :height="shot.h"
              class="block w-full border-b border-border"
              format="avif"
              sizes="xs:100vw sm:100vw md:564px"
              loading="lazy"
            />
            <figcaption class="p-5">
              <h3 class="font-semibold">
                {{ shot.title }}
              </h3>
              <p class="mt-1.5 text-sm text-muted-foreground">
                {{ shot.body }}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Made for -->
    <section class="relative border-y border-border/60 bg-surface/40 py-24">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Made for
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            People with a real deadline and no budget.
          </h2>
        </div>
        <div class="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2">
          <div
            v-for="(row, i) in audienceRows"
            :key="row.t"
            v-reveal="i % 2"
            class="flex gap-4 rounded-lg border border-transparent p-2 transition-colors hover:border-border hover:bg-surface"
          >
            <div class="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary shadow-[0_0_10px] shadow-primary" />
            <div>
              <h3 class="font-semibold">
                {{ row.t }}
              </h3>
              <p class="mt-1 text-sm text-muted-foreground">
                {{ row.d }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Download -->
    <section
      id="download"
      class="relative py-24 md:py-32"
    >
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Download
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Free. Open source. Actually free.
          </h2>
          <p class="mt-5 text-lg text-muted-foreground">
            GPLv3, no account, no telemetry, no upsell. Version 0.1.2 is early and under active
            development — please file the bugs you hit.
          </p>
        </div>
        <div class="mt-12 grid gap-5 md:grid-cols-3">
          <div
            v-for="(card, i) in downloads"
            :key="card.os"
            v-reveal="i"
            class="flex flex-col rounded-xl border border-border bg-surface/70 p-6 backdrop-blur"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">
                {{ card.os }}
              </h3>
              <span class="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                {{ card.tag }}
              </span>
            </div>
            <p class="mt-3 text-sm text-muted-foreground">
              {{ card.body }}
            </p>
            <pre class="mt-4 overflow-x-auto rounded-lg border border-border bg-background/80 p-3 font-mono text-[12px] leading-relaxed text-foreground/90">{{ card.code }}</pre>
            <div class="mt-auto flex flex-col gap-2 pt-5">
              <a
                :href="card.primary.href"
                target="_blank"
                rel="noreferrer"
                class="rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                {{ card.primary.label }}
              </a>
              <a
                :href="card.secondary.href"
                target="_blank"
                rel="noreferrer"
                class="rounded-md border border-border bg-surface-2 px-4 py-2 text-center text-sm text-foreground/90 transition-colors hover:bg-surface"
              >
                {{ card.secondary.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Built with -->
    <section
      id="tech"
      class="relative py-24 md:py-32"
    >
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div v-reveal>
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Under the hood
            </p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Built with tools you already trust.
            </h2>
            <p class="mt-5 text-muted-foreground">
              Prism is a native desktop app — no Electron, no browser tab pretending to be an app.
              Everything runs on your GPU, and every dependency is either open source or a standard
              media SDK.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a
                :href="gh"
                target="_blank"
                rel="noreferrer"
                class="rounded-md border border-border bg-surface-2 px-4 py-2 text-sm transition-colors hover:bg-surface"
              >
                Read the source →
              </a>
              <a
                :href="issues"
                target="_blank"
                rel="noreferrer"
                class="rounded-md border border-border bg-surface-2 px-4 py-2 text-sm transition-colors hover:bg-surface"
              >
                Open an issue
              </a>
            </div>
          </div>
          <ul class="grid gap-2 sm:grid-cols-2">
            <li
              v-for="([name, role], i) in stack"
              :key="name"
              v-reveal="i % 4"
              class="flex items-center justify-between rounded-lg border border-border bg-surface/60 px-4 py-3 backdrop-blur"
            >
              <span class="font-mono text-sm">{{ name }}</span>
              <span class="text-xs text-muted-foreground">{{ role }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="relative py-24">
      <div class="mx-auto max-w-4xl px-4 text-center md:px-6">
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 mx-auto max-w-2xl blur-3xl"
          style="background: var(--grad-hero)"
        />
        <div
          v-reveal
          class="relative"
        >
          <h2 class="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Your next event's visuals — <span class="prism-grad-text">on your laptop</span>, tonight.
          </h2>
          <p class="mx-auto mt-5 max-w-xl text-muted-foreground">
            No login. No trial. No feature tier. Grab it, wire a few nodes, and go live.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#download"
              class="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.72_0.20_295_/_0.8)] transition-transform hover:scale-[1.02]"
            >
              Download CutWire Prism
            </a>
            <a
              :href="gh"
              target="_blank"
              rel="noreferrer"
              class="rounded-md border border-border bg-surface/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-surface-2"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
