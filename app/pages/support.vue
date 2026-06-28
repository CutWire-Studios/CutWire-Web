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
  <div class="section-y">
    <div class="container-cutwire max-w-2xl">
      <h1 class="text-display-l text-text">
        Support
      </h1>
      <p class="mt-4 text-text-muted">
        Check the
        <a
          href="https://docs.cutwire.org"
          class="text-cue underline underline-offset-4 hover:text-text"
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
          class="border-hairline"
        >
          <UiAccordionTrigger class="text-text">
            {{ faq.q }}
          </UiAccordionTrigger>
          <UiAccordionContent class="text-text-muted">
            {{ faq.a }}
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>

      <form
        class="mt-16 space-y-4"
        @submit.prevent="submit"
      >
        <h2 class="text-xl font-semibold text-text">
          Contact us
        </h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <UiInput
            v-model="form.name"
            placeholder="Name"
            required
            class="border-hairline bg-surface-2"
          />
          <UiInput
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
            class="border-hairline bg-surface-2"
          />
        </div>
        <UiTextarea
          v-model="form.message"
          placeholder="How can we help?"
          required
          rows="5"
          class="border-hairline bg-surface-2"
        />
        <UiButton
          type="submit"
          :disabled="loading"
          class="glow-live bg-live text-ink hover:bg-live/90"
        >
          Send message
        </UiButton>
      </form>
    </div>
  </div>
</template>
