<script setup lang="ts">
import type { DriftIconName } from '~/components/drift/Icon.vue'

definePageMeta({ layout: 'drift' })

const { gh, releases, flathub, issues, docs } = useDriftLinks()

const site = useSiteConfig()

// Search titles truncate near 60 chars once the site name is appended, so the
// CapCut-alternative keyword is kept front-loaded for the SERP snippet.
const pageTitle = 'CutWire Drift — Free CapCut Alternative'
const socialTitle = 'CutWire Drift — Free CapCut alternative for desktop'
const pageDescription = 'Free CapCut alternative for desktop. Open-source video editor with a multi-track timeline, effects, stickers, auto captions, cutouts, and export — no subscription, no watermark, no account.'
const socialDescription = 'A free CapCut alternative that runs on your desktop. Drop in clips, add effects and stickers, generate captions, and export polished videos. Open source under GPLv3.'
const pageUrl = `${site.url}/drift`
const ogImage = `${site.url}/images/drift-cover.png`
const ogImageAlt = 'CutWire Drift — Free CapCut alternative'

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
    name: 'CutWire Drift',
    description: pageDescription,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Linux, Windows, macOS',
    softwareVersion: '0.1.0',
    screenshot: `${site.url}/images/drift-main-window.avif`,
    offers: { price: '0.00', priceCurrency: 'USD' },
  }),
])

const audiences = [
  'For creators',
  'For educators',
  'For social video',
  'For explainers',
  'For everyday edits',
  'For open-source fans',
]

const features: { icon: DriftIconName, title: string, body: string }[] = [
  {
    icon: 'timeline',
    title: 'A timeline that stays out of the way',
    body: 'Stack video, audio, text and shapes. Trim, split, snap and undo — edits feel immediate.',
  },
  {
    icon: 'spark',
    title: 'Effects, transitions & templates',
    body: 'Style clips with GPU effects and transitions, then save looks you like as reusable templates.',
  },
  {
    icon: 'sticker',
    title: 'Stickers, emoji, titles & shapes',
    body: 'Finish the frame without leaving the editor. Optional packs install only when you need them.',
  },
  {
    icon: 'captions',
    title: 'Auto captions from speech',
    body: 'Generate captions from talking clips, then tweak timing and wording on the timeline.',
  },
  {
    icon: 'cutout',
    title: 'Cutouts, masks & green screen',
    body: 'Isolate a subject, mask a clip, or key out a green screen when you need a clean composite.',
  },
  {
    icon: 'speed',
    title: 'Speed, reverse & beat motion',
    body: 'Ramp speed, flip playback, fade in and out, and animate to the beat of your music.',
  },
  {
    icon: 'audio',
    title: 'Mix and clean audio',
    body: 'Balance tracks with an effect chain, then quiet background noise when a take is rough.',
  },
  {
    icon: 'package',
    title: 'Projects that travel',
    body: 'Bundle a project with its media so collaborators and backups stay together.',
  },
]

const steps = [
  'Import video, photos and music into your media library.',
  'Drop clips onto the multi-track timeline.',
  'Trim, split and arrange — snap when you want precision.',
  'Add effects, text, stickers or shapes.',
  'Generate captions, cut out a subject, or clean the audio.',
  'Export an MP4 that matches what you saw in preview.',
]

const shots: {
  title: string
  body: string
  label: string
  src: string
  w: number
  h: number
}[] = [
  {
    src: '/images/drift-text-styles.avif',
    w: 456,
    h: 534,
    label: 'Text style inspector',
    title: 'Titles with real style control',
    body: 'Pick a style pack, then tune font, color, outline, shadow and alignment — titles that match the cut without leaving the editor.',
  },
  {
    src: '/images/drift-stickers.avif',
    w: 454,
    h: 535,
    label: 'Stickers panel',
    title: 'Stickers & emoji on demand',
    body: 'Browse sticker packs and drop emoji onto the timeline — optional packs install from Extras when you want more.',
  },
  {
    src: '/images/drift-effects.avif',
    w: 454,
    h: 535,
    label: 'Effects browser',
    title: 'Looks you can reuse',
    body: 'Browse GPU effects by category, then save combinations as templates for the next project.',
  },
  {
    src: '/images/drift-transitions.avif',
    w: 462,
    h: 537,
    label: 'Transitions panel',
    title: 'Transitions between clips',
    body: 'Drag a style onto overlapping clips — crossfades, wipes, glitch and cinematic blends with adjustable duration.',
  },
  {
    src: '/images/drift-captions.avif',
    w: 459,
    h: 703,
    label: 'Auto captions on the subtitle track',
    title: 'Captions without the busywork',
    body: 'Speech becomes editable cues on a dedicated track — ready for social or accessibility.',
  },
  {
    src: '/images/drift-cutout.avif',
    w: 777,
    h: 715,
    label: 'Subject cutout / mask session',
    title: 'Cut subjects out of the frame',
    body: 'Mark what to keep, generate a matte, and composite without a studio setup.',
  },
  {
    src: '/images/drift-speed.avif',
    w: 455,
    h: 535,
    label: 'Speed & fade controls',
    title: 'Speed that feels intentional',
    body: 'Change playback rate, reverse clips, and fade edges — or open a custom speed curve when you need more control.',
  },
  {
    src: '/images/drift-audio.avif',
    w: 455,
    h: 532,
    label: 'Audio effects library',
    title: 'Audio effects that fit the track',
    body: 'Chain EQ, space, voice and utility presets from the Sounds library — mix and clean without a separate DAW.',
  },
  {
    src: '/images/drift-export.avif',
    w: 656,
    h: 515,
    label: 'Export dialog',
    title: 'Export formats that match preview',
    body: 'Pick a size, then choose H.264, H.265, AV1, ProRes and more — with quality or bitrate control and matching audio codecs.',
  },
  {
    src: '/images/drift-addons.avif',
    w: 657,
    h: 585,
    label: 'Addon Manager',
    title: 'Start light, grow as you go',
    body: 'Fonts, stickers and speech models install on demand so the base download stays lean.',
  },
]

const audienceRows = [
  {
    t: 'Social & short-form creators',
    d: 'Cut, caption and style clips for the platforms you already post to — without a subscription wall.',
  },
  {
    t: 'Teachers & course makers',
    d: 'Explainers, lesson clips and demos with titles, shapes and clean audio in one pass.',
  },
  {
    t: 'YouTubers & podcasters',
    d: 'Multi-track edits, noise cleanup and captions that match what you see in preview.',
  },
  {
    t: 'Teams that share projects',
    d: 'Bundle media with the project file so nothing goes missing when someone else opens it.',
  },
  {
    t: 'Open-source builders',
    d: 'GPLv3 desktop app on Qt 6 and FFmpeg — fork it, ship addons, or just use it.',
  },
]

const downloads = [
  {
    os: 'Linux',
    tag: 'Recommended',
    body: 'Install from Flathub when available, or build from source with CMake.',
    code: 'flatpak install flathub org.cutwire.Drift\nflatpak run org.cutwire.Drift',
    primary: { label: 'Open on Flathub', href: flathub },
    secondary: { label: 'Releases on GitHub', href: releases },
  },
  {
    os: 'Windows',
    tag: 'Installer',
    body: 'Download the Windows installer from GitHub Releases, or build from source with CMake and Qt 6.',
    code: '# Grab Drift-Setup-*.exe from\n# github.com/CutWire-Studios/Drift/releases',
    primary: { label: 'Download installer', href: releases },
    secondary: { label: 'Source on GitHub', href: gh },
  },
  {
    os: 'macOS',
    tag: 'Build from source',
    body: 'No prebuilt binary yet — clone the repo and build with CMake and Qt 6.',
    code: 'git clone https://github.com/CutWire-Studios/Drift\ncmake -B build && cmake --build build',
    primary: { label: 'Build instructions', href: gh },
    secondary: { label: 'Track macOS binary', href: issues },
  },
]

const stack: [string, string][] = [
  ['Qt 6 · QML', 'UI'],
  ['C++20 · CMake', 'Core'],
  ['FFmpeg', 'Decode & encode'],
  ['FrameCompositor', 'Preview = export'],
  ['OpenGL / GPU effects', 'Looks'],
  ['ONNX Runtime', 'Captions & ML'],
  ['Addon packages', 'Fonts & stickers'],
  ['GPLv3', 'License'],
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
        class="drift-grid-bg absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0"
        style="background: var(--grad-hero)"
      />
      <div class="relative mx-auto max-w-6xl px-4 pt-20 pb-16 md:px-6 md:pt-28 md:pb-24">
        <div class="animate-rise-in mx-auto max-w-3xl text-center">
          <NuxtImg
            src="/images/drift-icon.png"
            alt="CutWire Drift app icon"
            class="mx-auto mb-7 h-20 w-20 drop-shadow-[0_12px_40px_-12px_color-mix(in_srgb,#fcad01_55%,transparent)]"
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
            Free &amp; open source · GPLv3 · v0.1.0
          </a>
          <h1 class="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Create polished videos <span class="drift-grad-text">fast</span> — free, open, and yours.
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Drift is a free desktop video editor that feels simple from the first cut. Drop in
            video, photos and music, add effects and stickers, generate captions, and export —
            no subscription, no watermark, no account.
          </p>
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#download"
              class="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_color-mix(in_srgb,#fcad01_80%,transparent)] transition-transform hover:scale-[1.02]"
            >
              Download Drift
            </a>
            <a
              :href="docs"
              target="_blank"
              rel="noreferrer"
              class="rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground/90 backdrop-blur transition-colors hover:bg-surface-2"
            >
              Read the docs →
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
            Linux · Windows &amp; macOS (source build)
          </p>
        </div>

        <div
          v-reveal
          class="relative mx-auto mt-14 max-w-6xl"
        >
          <div
            aria-hidden="true"
            class="absolute -inset-x-8 -inset-y-6 rounded-3xl opacity-70 blur-2xl"
            style="background: linear-gradient(120deg, color-mix(in srgb, #fcad01 28%, transparent), color-mix(in srgb, #fcad01 12%, transparent))"
          />
          <div class="drift-glow-ring relative overflow-hidden rounded-xl border border-border bg-surface">
            <NuxtImg
              src="/images/drift-main-window.avif"
              alt="CutWire Drift main window: effects library, video preview and multi-track timeline"
              class="block w-full"
              width="1866"
              height="1134"
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
            Creator-speed editing. Desktop freedom.
          </h2>
          <p class="mt-5 text-lg text-muted-foreground">
            CapCut is fast — until the watermark, the account wall, or the cloud lock-in.
            Drift is a free CapCut alternative that keeps the approachable workflow and leaves
            the strings off.
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
              style="background: color-mix(in srgb, #fcad01 35%, transparent)"
            />
            <div class="relative">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary">
                <DriftIcon
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
        style="background: linear-gradient(90deg, transparent, color-mix(in srgb, #fcad01 55%, transparent), transparent)"
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
            Import. Edit. Export what you previewed.
          </h2>
          <p class="mt-5 text-lg text-muted-foreground">
            Preview and export share the same compositor — so the MP4 matches the timeline, not
            a second rendering path.
          </p>
        </div>

        <div class="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div
            v-reveal
            class="drift-glow-ring overflow-hidden rounded-xl border border-border bg-surface"
          >
            <NuxtImg
              src="/images/drift-timeline.avif"
              alt="CutWire Drift multi-track timeline with video, effects and audio"
              class="block w-full"
              width="1833"
              height="520"
              sizes="xs:100vw sm:100vw md:100vw lg:556px"
              loading="lazy"
            />
          </div>
          <div v-reveal="1">
            <h3 class="text-2xl font-semibold tracking-tight md:text-3xl">
              Six steps to a finished cut
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
              <span class="text-foreground">Export:</span> H.264 + AAC MP4 with quality presets
              that keep your project aspect ratio.
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
            Real UI from the editor.
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
            People who want results without the learning curve tax.
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
            GPLv3, no account, no telemetry, no upsell. Version 0.1.0 is early and under active
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
              Native desktop. One compositor.
            </h2>
            <p class="mt-5 text-muted-foreground">
              Drift is a Qt 6 + FFmpeg app — not a browser tab. Preview and export share
              FrameCompositor so what you see is what you ship.
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
            Your next video — <span class="drift-grad-text">on your desktop</span>, tonight.
          </h2>
          <p class="mx-auto mt-5 max-w-xl text-muted-foreground">
            No login. No trial. No feature tier. Import a clip, make a cut, export.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#download"
              class="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_color-mix(in_srgb,#fcad01_80%,transparent)] transition-transform hover:scale-[1.02]"
            >
              Download CutWire Drift
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
