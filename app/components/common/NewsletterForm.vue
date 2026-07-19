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
  <div class="relative overflow-hidden rounded-xl border border-border bg-surface/70 p-12 text-center backdrop-blur md:p-16">
    <div class="ambient-glow opacity-60" />
    <div class="relative z-10 mx-auto max-w-xl">
      <h2 class="text-3xl font-bold tracking-tight text-on-surface">
        Stay in the loop
      </h2>
      <p class="mt-4 text-on-surface-variant">
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
          class="flex-1 rounded-md border border-border bg-card px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary/50 focus:outline-none"
        >
        <button
          type="submit"
          :disabled="loading"
          class="glow-button-primary whitespace-nowrap px-6 py-3 text-sm disabled:opacity-50"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template>
