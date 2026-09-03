<script setup lang="ts">
import type { DriftIconName } from '~/components/drift/Icon.vue'

definePageMeta({ layout: 'drift' })

const { gh, flathub, issues, docs, downloadWindows, downloadWindowsPortable, downloadLinux, downloadMacos, downloadAndroid, downloadAndroid32 } = useDriftLinks()
const { version, featureList } = useDriftProduct()

const site = useSiteConfig()

// Search titles truncate near 60 chars once the site name is appended, so the
// CapCut-alternative keyword is kept front-loaded for the SERP snippet.
const pageTitle = 'CutWire Drift — Free CapCut Alternative'
const socialTitle = 'CutWire Drift — Free CapCut alternative for desktop'
const pageDescription = 'Free CapCut alternative for desktop. Open-source video editor with a multi-track timeline, effects, stickers, auto captions, cutouts, and export — no subscription, no watermark, no account.'
const socialDescription = 'A free CapCut alternative that runs on your desktop. Drop in clips, add effects and stickers, generate captions, and export polished videos. Open source under GPLv3.'
const pageUrl = `${site.url}/drift`

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: socialTitle,
  ogDescription: socialDescription,
  ogType: 'website',
  ogUrl: pageUrl,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: socialTitle,
  twitterDescription: socialDescription,
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
})

defineOgImageComponent('Default', {
  title: 'Free CapCut alternative for desktop',
  description: 'Open-source video editor. No subscription, no watermark, no account.',
  eyebrow: 'CutWire Drift',
})

useSchemaOrg([
  defineSoftwareApp({
    name: 'CutWire Drift',
    description: pageDescription,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Linux, Windows, macOS, Android',
    softwareVersion: version,
    screenshot: `${site.url}/images/drift-main-window.avif`,
    downloadUrl: `${site.url}/drift#download`,
    featureList: [...featureList],
    isAccessibleForFree: true,
    license: 'https://www.gnu.org/licenses/gpl-3.0.html',
    url: pageUrl,
    offers: { price: '0.00', priceCurrency: 'USD' },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Erickson Lourenco',
          url: 'https://www.youtube.com/@Ericksonloure',
        },
        inLanguage: 'pt',
        reviewBody: 'Um editor 100% gratuito, ilimitado e sem marca d\'água. Um editor que com toda certeza vai superar o CapCut.',
      },
    ],
  }),
])

const audiences = [
  'For creators',
  'For educators',
  'For social video',
  'For AI agents',
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
    icon: 'audio',
    title: 'Mix and clean audio',
    body: 'Balance tracks with an effect chain, then quiet background noise when a take is rough.',
  },
  {
    icon: 'agent',
    title: 'MCP agent access',
    body: 'Turn on a local MCP server so Cursor, Claude Code or another agent can edit the real timeline. Off until you enable it. Undo anything.',
  },
]

const shots: {
  title: string
  src: string
  w: number
  h: number
}[] = [
  {
    src: '/images/drift-text-styles.avif',
    w: 456,
    h: 534,
    title: 'Titles with real style control',
  },
  {
    src: '/images/drift-stickers.avif',
    w: 454,
    h: 535,
    title: 'Stickers & emoji on demand',
  },
  {
    src: '/images/drift-effects.avif',
    w: 454,
    h: 535,
    title: 'Looks you can reuse',
  },
  {
    src: '/images/drift-transitions.avif',
    w: 462,
    h: 537,
    title: 'Transitions between clips',
  },
  {
    src: '/images/drift-captions.avif',
    w: 459,
    h: 703,
    title: 'Captions without the busywork',
  },
  {
    src: '/images/drift-cutout.avif',
    w: 777,
    h: 715,
    title: 'Cut subjects out of the frame',
  },
  {
    src: '/images/drift-speed.avif',
    w: 455,
    h: 535,
    title: 'Speed that feels intentional',
  },
  {
    src: '/images/drift-audio.avif',
    w: 455,
    h: 532,
    title: 'Audio effects that fit the track',
  },
  {
    src: '/images/drift-export.avif',
    w: 656,
    h: 515,
    title: 'Export formats that match preview',
  },
  {
    src: '/images/drift-addons.avif',
    w: 657,
    h: 585,
    title: 'Start light, grow as you go',
  },
]

const downloads = [
  {
    os: 'Linux',
    tag: 'Recommended',
    body: 'Install from Flathub, or download the latest AppImage.',
    code: 'flatpak install flathub org.cutwire.Drift\nflatpak run org.cutwire.Drift',
    primary: { label: 'Open on Flathub', href: flathub },
    secondary: { label: 'Download AppImage', href: downloadLinux },
  },
  {
    os: 'Windows',
    tag: 'Installer + portable',
    body: 'Download the latest Windows installer, or the portable zip if you prefer not to install.',
    code: '# Latest Drift-Setup-*-x64.exe or Drift-Portable-*-x64.zip',
    primary: { label: 'Download for Windows', href: downloadWindows },
    secondary: { label: 'Download portable zip', href: downloadWindowsPortable },
  },
  {
    os: 'macOS',
    tag: 'Apple Silicon',
    body: 'Download the latest disk image and drag Drift to Applications. Intel Macs can build from source.',
    code: '# Latest Drift-*-arm64.dmg\n# First launch: right-click the app → Open',
    primary: { label: 'Download disk image', href: downloadMacos },
    secondary: { label: 'Build from source', href: gh },
  },
  {
    os: 'Android',
    tag: 'Sideload APK',
    body: 'Install the latest APK on a 64-bit phone. Not on the Play Store yet. There is no iOS app.',
    code: '# Phones: Drift-*-arm64-v8a.apk\n# Older 32-bit: Drift-*-armeabi-v7a.apk',
    primary: { label: 'Download APK', href: downloadAndroid },
    secondary: { label: 'Download 32-bit APK', href: downloadAndroid32 },
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
      <div class="relative mx-auto max-w-6xl px-4 pt-16 pb-12 md:px-6 md:pt-24 md:pb-16">
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
            Free &amp; open source · GPLv3 · v{{ version }}
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
          </div>
          <p class="mt-4 font-mono text-xs text-muted-foreground">
            Linux · Windows · macOS · Android
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
      <div class="mx-auto flex max-w-6xl flex-nowrap items-center justify-center gap-x-8 overflow-x-auto px-4 py-4 text-xs uppercase tracking-[0.18em] text-muted-foreground md:px-6">
        <span
          v-for="item in audiences"
          :key="item"
        >{{ item }}</span>
      </div>
    </div>

    <!-- Features -->
    <section
      id="features"
      class="relative py-16 md:py-20"
    >
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Features
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Creator-speed editing. Desktop freedom.
          </h2>
          <p class="mt-4 text-muted-foreground md:text-lg">
            CapCut is fast — until the watermark, the account wall, or the cloud lock-in.
            Drift keeps the approachable workflow and leaves the strings off.
          </p>
        </div>
        <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(card, i) in features"
            :key="card.title"
            v-reveal="i % 3"
            class="group relative overflow-hidden rounded-xl border border-border bg-surface/70 p-5 backdrop-blur transition-colors hover:border-primary/50"
          >
            <div
              aria-hidden="true"
              class="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              style="background: color-mix(in srgb, #fcad01 35%, transparent)"
            />
            <div class="relative">
              <div class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary">
                <DriftIcon
                  :name="card.icon"
                  class="h-4 w-4"
                />
              </div>
              <h3 class="mt-3 font-semibold">
                {{ card.title }}
              </h3>
              <p class="mt-1.5 text-sm text-muted-foreground">
                {{ card.body }}
              </p>
            </div>
          </div>
        </div>
        <p
          v-reveal
          class="mt-6 text-sm text-muted-foreground"
        >
          <NuxtLink
            to="/drift/features"
            class="font-medium text-primary hover:underline"
          >Every feature</NuxtLink>
          ·
          <NuxtLink
            to="/drift/alternatives"
            class="font-medium text-primary hover:underline"
          >vs CapCut and others</NuxtLink>
          ·
          <NuxtLink
            to="/drift/faq"
            class="font-medium text-primary hover:underline"
          >FAQ</NuxtLink>
        </p>
      </div>
    </section>

    <DriftTestimonials />

    <DriftScreenshotStrip :shots="shots" />

    <!-- MCP / agent access -->
    <section
      id="mcp"
      class="relative border-y border-border/60 bg-surface/40 py-16 md:py-20"
    >
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div class="max-w-2xl">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Agent access
            </p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Let Cursor or Claude edit the <span class="drift-grad-text">real timeline</span>.
            </h2>
            <p class="mt-4 text-muted-foreground">
              Localhost MCP — import, trim, caption, effects, export. Off until you enable it.
              Undo anything. Not a chatbot bolted onto a webpage.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
              to="/drift/mcp"
              class="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_color-mix(in_srgb,#fcad01_80%,transparent)] transition-transform hover:scale-[1.02]"
            >
              How MCP works
            </NuxtLink>
            <a
              href="https://github.com/CutWire-Studios/Drift/blob/main/docs/MCP.md"
              target="_blank"
              rel="noreferrer"
              class="rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-surface-2"
            >
              Protocol guide →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Download -->
    <section
      id="download"
      class="relative py-16 md:py-20"
    >
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Download
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Free. Open source. Actually free.
          </h2>
          <p class="mt-4 text-muted-foreground">
            GPLv3, no account, no telemetry, no upsell. Version {{ version }} is early —
            please file the bugs you hit.
          </p>
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="(card, i) in downloads"
            :key="card.os"
            v-reveal="i"
            class="flex flex-col rounded-xl border border-border bg-surface/70 p-5 backdrop-blur"
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
            <div class="mt-auto flex flex-col gap-2 pt-4">
              <a
                :href="card.primary.href"
                :target="card.primary.href.startsWith('http') ? '_blank' : undefined"
                :rel="card.primary.href.startsWith('http') ? 'noreferrer' : undefined"
                class="rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                {{ card.primary.label }}
              </a>
              <a
                :href="card.secondary.href"
                :target="card.secondary.href.startsWith('http') ? '_blank' : undefined"
                :rel="card.secondary.href.startsWith('http') ? 'noreferrer' : undefined"
                class="rounded-md border border-border bg-surface-2 px-4 py-2 text-center text-sm text-foreground/90 transition-colors hover:bg-surface"
              >
                {{ card.secondary.label }}
              </a>
            </div>
          </div>
        </div>
        <p
          v-reveal
          class="mt-6 text-sm text-muted-foreground"
        >
          Android is a sideloaded APK from GitHub — not on the Play Store yet. There is no iOS app.
        </p>
      </div>
    </section>

    <!-- Built with -->
    <section
      id="tech"
      class="relative border-t border-border/60 py-16 md:py-20"
    >
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div class="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div v-reveal>
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Under the hood
            </p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Native desktop. One compositor.
            </h2>
            <p class="mt-4 text-muted-foreground">
              Drift is a Qt 6 + FFmpeg app — not a browser tab. Preview and export share
              FrameCompositor so what you see is what you ship.
            </p>
            <div class="mt-5 flex flex-wrap gap-3">
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
  </div>
</template>
