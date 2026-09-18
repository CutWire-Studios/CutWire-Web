<script setup lang="ts">
import type { DriftIconName } from '~/components/drift/Icon.vue'

definePageMeta({ layout: 'default' })

const { gh, issues, docs } = useDriftLinks()
const { version, featureList } = useDriftProduct()

const site = useSiteConfig()

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
    downloadUrl: `${site.url}/drift`,
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
</script>

<template>
  <MarketingProductHero
    product="drift"
    line1="Throw the edit into Drift,"
    line2="it comes back swift."
    lede="CutWire Drift is a free desktop video editor an agent can control, or you can cut by hand. Captions and cutouts run locally. We don't sell your data. No account, no watermark — free forever."
    platforms="Linux · Windows · macOS · Android · GPLv3"
    photo-alt="Motion-blurred view from a car driving through a yellow-lit tunnel"
  >
    <!-- Photo: Alimuart / Pexels License — 18304959 -->
    <div class="px-4 pt-8 md:px-6 md:pt-10">
      <div class="mx-auto max-w-6xl">
        <MarketingProductChrome
          product="drift"
          :show-download="false"
        />
      </div>
    </div>

    <section class="px-4 py-10 md:px-6 md:py-14">
      <div class="mx-auto max-w-6xl">
        <figure class="frost-card rounded-xl">
          <div class="overflow-hidden rounded-xl">
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
        </figure>
      </div>
    </section>

    <section
      id="features"
      class="scroll-mt-28 px-4 py-16 md:px-6 md:py-24"
    >
      <div class="mx-auto max-w-6xl">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Creator-speed editing. Desktop freedom.
          </h2>
          <p class="mt-4 text-white/70 md:text-lg">
            CapCut is fast — until the watermark, the account wall, or the cloud lock-in.
            Drift keeps the approachable workflow and leaves the strings off.
          </p>
        </div>
        <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="card in features"
            :key="card.title"
            class="frost-card rounded-xl p-5"
          >
            <div class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white">
              <DriftIcon
                :name="card.icon"
                class="h-4 w-4"
              />
            </div>
            <h3 class="mt-3 font-semibold text-white">
              {{ card.title }}
            </h3>
            <p class="mt-1.5 text-sm text-white/70">
              {{ card.body }}
            </p>
          </div>
        </div>
        <p class="mt-6 text-sm text-white/70">
          <NuxtLink
            to="/drift/features"
            class="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >Every feature</NuxtLink>
          ·
          <NuxtLink
            to="/drift/alternatives"
            class="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >vs CapCut and others</NuxtLink>
          ·
          <NuxtLink
            to="/drift/faq"
            class="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >FAQ</NuxtLink>
        </p>
      </div>
    </section>

    <DriftTestimonials />

    <section
      id="screens"
      class="scroll-mt-28 px-4 py-16 md:px-6 md:py-24"
    >
      <div class="mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Real UI. Not concept art.
        </h2>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                loading="lazy"
              />
            </div>
            <figcaption class="p-4">
              <h3 class="font-semibold text-white">
                {{ shot.title }}
              </h3>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section
      id="mcp"
      class="scroll-mt-28 px-4 py-16 md:px-6 md:py-24"
    >
      <div class="mx-auto max-w-6xl">
        <div class="frost-card rounded-xl p-6 md:p-8">
          <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div class="max-w-2xl">
              <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Let Cursor or Claude edit the real timeline.
              </h2>
              <p class="mt-4 text-white/70">
                Localhost MCP — import, trim, caption, effects, export. Off until you enable it.
                Undo anything. Not a chatbot bolted onto a webpage.
              </p>
            </div>
            <div class="flex flex-wrap gap-3">
              <NuxtLink
                to="/drift/mcp"
                class="btn-drift min-h-11 px-5 text-sm"
              >
                How MCP works
              </NuxtLink>
              <a
                href="https://github.com/CutWire-Studios/Drift/blob/main/docs/MCP.md"
                target="_blank"
                rel="noreferrer"
                class="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white/10 px-5 text-sm font-semibold text-white"
              >
                Protocol guide
              </a>
            </div>
          </div>
        </div>
        <p class="mt-8 text-sm text-white/70">
          Version {{ version }} is early —
          <a
            :href="issues"
            target="_blank"
            rel="noreferrer"
            class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >file the bugs you hit</a>,
          <a
            :href="gh"
            target="_blank"
            rel="noreferrer"
            class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >read the source</a>,
          or
          <a
            :href="docs"
            target="_blank"
            rel="noreferrer"
            class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >open the docs</a>.
        </p>
      </div>
    </section>
  </MarketingProductHero>
</template>
