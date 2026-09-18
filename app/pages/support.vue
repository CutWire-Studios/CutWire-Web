<script setup lang="ts">
definePageMeta({ layout: 'default' })

const faqs = [
  {
    q: 'Where do I download CutWire software?',
    a: 'Prism and Drift are both available from their product pages — Flathub or an AppImage on Linux, an installer or portable zip on Windows, a disk image on macOS (Apple Silicon), and an Android APK for Drift. Start at cutwire.org/prism or cutwire.org/drift, or grab builds from GitHub releases.',
  },
  {
    q: 'Is Drift a free CapCut alternative?',
    a: 'Yes. Drift is a free, open-source desktop video editor with no watermark and no account. The Drift FAQ and feature list cover captions, cutouts, Linux support and how it compares to other editors.',
  },
  {
    q: 'How do I report a bug?',
    a: 'Open an issue on the relevant GitHub repo (Prism or Drift) with your OS, app version and what you were doing. If it involves a crash, the log helps. You can also email contact@cutwire.org.',
  },
  {
    q: 'Is there a community?',
    a: 'Join our Discord for operator tips, editing help, and release announcements.',
  },
  {
    q: 'Are CutWire tools really free?',
    a: 'Yes — Prism and Drift are GPLv3, with no account, no telemetry and no feature tier. If you can run it, you have all of it.',
  },
]

const channels = [
  {
    title: 'Documentation',
    body: 'Setup guides, references and troubleshooting. Start here — most answers are already written down.',
    action: 'Read the docs',
    href: 'https://docs.cutwire.org',
  },
  {
    title: 'GitHub issues',
    body: 'Bug reports and feature requests for Prism and Drift. Public, tracked, and the fastest route to a fix landing in a release.',
    action: 'Browse repositories',
    href: 'https://github.com/CutWire-Studios',
  },
  {
    title: 'Email',
    body: 'For anything that doesn\'t belong in public — licensing questions, security reports, press.',
    action: 'contact@cutwire.org',
    href: 'mailto:contact@cutwire.org',
  },
]

const site = useSiteConfig()
const pageTitle = 'Support — CutWire Studios'
const pageDescription = 'Get help with CutWire Prism and Drift — documentation, GitHub issues, Discord and direct support. Answers to common setup, download and bug-reporting questions.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: 'Support — CutWire Studios',
  ogDescription: 'Documentation, GitHub issues, Discord and direct support for CutWire Prism and Drift.',
  ogType: 'website',
  ogUrl: `${site.url}/support`,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}/support` }] })

defineOgImageComponent('Default', {
  title: 'How can we help?',
  description: 'Docs, GitHub issues, Discord and direct support for CutWire tools.',
  eyebrow: 'Support',
})
</script>

<template>
  <LayoutStudioFrost>
    <section class="px-4 pt-16 pb-12 md:px-6 md:pt-24 md:pb-16">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
          How can we help?
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/70">
          Check the docs first — then pick whichever channel fits. If it's the middle of a show,
          Discord is the fastest.
        </p>
      </div>
    </section>

    <section class="px-4 pb-16 md:px-6 md:pb-24">
      <div class="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        <a
          v-for="channel in channels"
          :key="channel.title"
          :href="channel.href"
          target="_blank"
          rel="noopener"
          class="frost-card flex flex-col rounded-2xl p-6 transition-colors duration-150 hover:border-white/35"
        >
          <h2 class="font-semibold text-white">
            {{ channel.title }}
          </h2>
          <p class="mt-2 flex-1 text-sm text-white/70">
            {{ channel.body }}
          </p>
          <span class="mt-5 text-sm font-medium text-white">
            {{ channel.action }}
          </span>
        </a>
      </div>
    </section>

    <section class="border-y border-white/10 px-4 py-20 md:px-6 md:py-28">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Common questions.
        </h2>

        <UiAccordion
          type="single"
          collapsible
          class="mt-10 max-w-3xl"
        >
          <UiAccordionItem
            v-for="(faq, i) in faqs"
            :key="i"
            :value="`faq-${i}`"
            class="border-white/15"
          >
            <UiAccordionTrigger class="text-left font-semibold text-white">
              {{ faq.q }}
            </UiAccordionTrigger>
            <UiAccordionContent class="text-white/70">
              {{ faq.a }}
            </UiAccordionContent>
          </UiAccordionItem>
        </UiAccordion>
        <p class="mt-8 text-sm text-white/70">
          Editing questions live on the
          <NuxtLink
            to="/drift/faq"
            class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >Drift FAQ</NuxtLink>
          and the
          <NuxtLink
            to="/drift/features"
            class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >full feature list</NuxtLink>.
          Comparing CapCut or another editor?
          <NuxtLink
            to="/drift/alternatives"
            class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >See alternatives</NuxtLink>.
        </p>
      </div>
    </section>

    <section class="px-4 py-20 md:px-6 md:py-28">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Still stuck? Write to us.
        </h2>
        <a
          href="mailto:contact@cutwire.org"
          class="mt-6 inline-block text-lg font-medium text-white hover:underline"
        >
          contact@cutwire.org
        </a>
        <p class="mx-auto mt-4 max-w-xl text-white/70">
          Include which product (Prism or Drift), your OS, app version, and what you were doing
          when it went wrong.
        </p>
      </div>
    </section>
  </LayoutStudioFrost>
</template>
