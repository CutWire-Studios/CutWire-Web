<script setup lang="ts">
import { toast } from 'vue-sonner'

definePageMeta({ layout: 'default' })

const faqs = [
  {
    q: 'Where do I download CutWire software?',
    a: 'Prism and Drift are both available from their product pages — Flathub or an AppImage on Linux, an installer on Windows, or build from source on macOS. Start at cutwire.org/prism or cutwire.org/drift, or grab builds from GitHub releases.',
  },
  {
    q: 'How do I report a bug?',
    a: 'Open an issue on the relevant GitHub repo (Prism or Drift) with your OS, app version and what you were doing. If it involves a crash, the log helps. You can also email support@cutwire.org.',
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
    action: 'support@cutwire.org',
    href: 'mailto:support@cutwire.org',
  },
]

const form = reactive({ name: '', email: '', message: '' })
const loading = ref(false)

async function submit() {
  loading.value = true
  try {
    await $fetch('/api/support', { method: 'POST', body: form })
    toast.success('Message sent. We\'ll get back to you.')
    Object.assign(form, { name: '', email: '', message: '' })
  }
  catch {
    toast.error('Failed to send. Try again or email us directly.')
  }
  finally {
    loading.value = false
  }
}

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
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div
        aria-hidden="true"
        class="grid-bg absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0"
        style="background: var(--grad-hero)"
      />
      <div class="relative mx-auto max-w-6xl px-4 pt-20 pb-16 md:px-6 md:pt-28">
        <div class="animate-rise-in mx-auto max-w-3xl text-center">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Support
          </p>
          <h1 class="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            How can we <span class="grad-text">help</span>?
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg text-on-surface-variant">
            Check the docs first — then pick whichever channel fits. If it's the middle of a show,
            Discord is the fastest.
          </p>
        </div>
      </div>
    </section>

    <!-- Channels -->
    <section class="relative py-16 md:py-24">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div class="grid gap-4 md:grid-cols-3">
          <a
            v-for="(channel, i) in channels"
            :key="channel.title"
            v-reveal="i"
            :href="channel.href"
            target="_blank"
            rel="noopener"
            class="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors hover:border-primary/50"
          >
            <div
              aria-hidden="true"
              class="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              style="background: rgba(255, 77, 0, 0.35)"
            />
            <div class="relative flex flex-1 flex-col">
              <h2 class="font-semibold text-on-surface">
                {{ channel.title }}
              </h2>
              <p class="mt-2 flex-1 text-sm text-on-surface-variant">
                {{ channel.body }}
              </p>
              <span class="mt-5 inline-flex items-center gap-1.5 text-sm text-primary transition-all group-hover:gap-2.5">
                {{ channel.action }} →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="relative border-y border-border/60 bg-surface/40 py-24">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div
          v-reveal
          class="max-w-2xl"
        >
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            FAQ
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Common questions.
          </h2>
        </div>

        <UiAccordion
          v-reveal
          type="single"
          collapsible
          class="mt-10 max-w-3xl"
        >
          <UiAccordionItem
            v-for="(faq, i) in faqs"
            :key="i"
            :value="`faq-${i}`"
            class="border-border"
          >
            <UiAccordionTrigger class="text-left font-semibold text-on-surface">
              {{ faq.q }}
            </UiAccordionTrigger>
            <UiAccordionContent class="text-on-surface-variant">
              {{ faq.a }}
            </UiAccordionContent>
          </UiAccordionItem>
        </UiAccordion>
      </div>
    </section>

    <!-- Contact -->
    <section class="relative py-24 md:py-32">
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div v-reveal>
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Still stuck? Tell us what's happening.
            </h2>
            <p class="mt-5 text-on-surface-variant">
              The more detail the better — which product (Prism or Drift), your OS, app version, and
              what you were doing when it went wrong. We read everything.
            </p>
          </div>

          <form
            v-reveal="1"
            class="space-y-4 rounded-xl border border-border bg-surface/70 p-6 backdrop-blur md:p-8"
            @submit.prevent="submit"
          >
            <div class="grid gap-4 sm:grid-cols-2">
              <input
                v-model="form.name"
                placeholder="Name"
                required
                class="rounded-md border border-border bg-card px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary/50 focus:outline-none"
              >
              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                required
                class="rounded-md border border-border bg-card px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary/50 focus:outline-none"
              >
            </div>
            <textarea
              v-model="form.message"
              placeholder="How can we help?"
              required
              rows="6"
              class="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary/50 focus:outline-none"
            />
            <button
              type="submit"
              :disabled="loading"
              class="glow-button-primary px-6 py-3 text-sm disabled:opacity-50"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
