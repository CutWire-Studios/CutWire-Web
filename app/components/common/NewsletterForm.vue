<script setup lang="ts">
import { toast } from 'vue-sonner'

const email = ref('')
const loading = ref(false)

async function submit() {
  if (!email.value) return
  loading.value = true
  try {
    await $fetch('/api/newsletter', {
      method: 'POST',
      body: { email: email.value },
    })
    toast.success('You\'re on the list.')
    email.value = ''
  }
  catch {
    toast.error('Something went wrong. Try again.')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="glass-card relative overflow-hidden rounded-[24px] border border-outline-variant p-12 text-center shadow-2xl md:p-16">
    <div class="ambient-glow opacity-80" />
    <div class="relative z-10 mx-auto max-w-xl">
      <h2 class="text-headline-md text-on-surface">
        Stay in the loop
      </h2>
      <p class="mt-4 text-body-md text-on-surface-variant">
        Product updates and release notes. No spam.
      </p>
      <form
        class="mt-8 flex flex-col gap-3 sm:flex-row"
        @submit.prevent="submit"
      >
        <input
          v-model="email"
          type="email"
          placeholder="you@example.com"
          required
          class="flex-1 rounded-full border border-outline-variant bg-surface px-6 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/40 transition-colors focus:border-primary/50 focus:outline-none"
        >
        <button
          type="submit"
          :disabled="loading"
          class="glow-button-primary whitespace-nowrap px-8 py-3 text-label-md disabled:opacity-50"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template>
