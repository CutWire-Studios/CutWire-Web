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
  <div class="max-w-md">
    <p class="text-eyebrow text-text-faint">
      Newsletter
    </p>
    <p class="mt-2 font-display text-xl font-semibold text-text">
      Stay in the loop
    </p>
    <p class="mt-2 text-sm text-text-muted">
      Product updates and release notes. No spam.
    </p>
    <form
      class="mt-6 flex gap-2"
      @submit.prevent="submit"
    >
      <UiInput
        v-model="email"
        type="email"
        placeholder="you@example.com"
        required
        class="border-hairline bg-surface-2 text-text"
      />
      <UiButton
        type="submit"
        :disabled="loading"
        class="shrink-0 glow-live bg-live text-ink hover:bg-live/90"
      >
        Subscribe
      </UiButton>
    </form>
  </div>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
