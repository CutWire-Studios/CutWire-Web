<script setup lang="ts">
import { toast } from 'vue-sonner'

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Support — CutWire Studios',
  description: 'Get help with CutWire products.',
})

const faqs = [
  {
    q: 'Where do I download SwitchX?',
    a: 'Visit the download page for macOS, Windows, or Linux installers.',
  },
  {
    q: 'How do I report a bug?',
    a: 'Open an issue on GitHub or email support@cutwire.org.',
  },
  {
    q: 'Is there a community?',
    a: 'Join our Discord for operator tips and release announcements.',
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
</script>

<template>
  <div class="relative overflow-hidden section-y">
    <div class="ambient-glow top-0 opacity-40" />

    <div class="container-cutwire relative z-10 max-w-2xl">
      <p class="text-label-sm uppercase tracking-widest text-primary">
        Support
      </p>
      <h1 class="mt-4 text-display-xl text-on-surface">
        How can we help?
      </h1>
      <p class="mt-4 text-on-surface-variant">
        Check the
        <a
          href="https://docs.cutwire.org"
          class="text-primary underline-offset-4 hover:underline"
        >docs</a>
        first, then reach out if you're stuck.
      </p>

      <UiAccordion
        type="single"
        collapsible
        class="mt-12"
      >
        <UiAccordionItem
          v-for="(faq, i) in faqs"
          :key="i"
          :value="`faq-${i}`"
          class="border-outline-variant"
        >
          <UiAccordionTrigger class="text-on-surface">
            {{ faq.q }}
          </UiAccordionTrigger>
          <UiAccordionContent class="text-on-surface-variant">
            {{ faq.a }}
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>

      <form
        class="glass-card mt-16 space-y-4 rounded-[24px] p-8"
        @submit.prevent="submit"
      >
        <h2 class="text-headline-md text-on-surface">
          Contact us
        </h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <input
            v-model="form.name"
            placeholder="Name"
            required
            class="rounded-lg border border-outline-variant bg-background px-4 py-3 text-on-surface focus:border-primary/50 focus:outline-none"
          >
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
            class="rounded-lg border border-outline-variant bg-background px-4 py-3 text-on-surface focus:border-primary/50 focus:outline-none"
          >
        </div>
        <textarea
          v-model="form.message"
          placeholder="How can we help?"
          required
          rows="5"
          class="w-full rounded-lg border border-outline-variant bg-background px-4 py-3 text-on-surface focus:border-primary/50 focus:outline-none"
        />
        <button
          type="submit"
          :disabled="loading"
          class="glow-button-primary px-8 py-3 text-label-md disabled:opacity-50"
        >
          Send message
        </button>
      </form>
    </div>
  </div>
</template>
