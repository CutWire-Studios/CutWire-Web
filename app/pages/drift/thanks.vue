<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeoMeta({ title: 'Thank you — CutWire Drift', robots: 'noindex, nofollow' })

const route = useRoute()
const router = useRouter()
const status = ref<'none' | 'paid' | 'failed'>('none')
const downloadOpen = ref(false)

// Dodo Payments sends the buyer back here with ?status=... appended.
// Nothing is gated on payment, so the redirect status is trusted as is.
onMounted(() => {
  const result = route.query.status
  if (typeof result !== 'string')
    return
  // processing / requires_* settle later; show the neutral page for those.
  if (result === 'succeeded')
    status.value = 'paid'
  else if (result === 'failed' || result === 'expired')
    status.value = 'failed'
  router.replace({ query: {} })
  if (status.value === 'paid')
    downloadOpen.value = true
})
</script>

<template>
  <section class="mx-auto grid max-w-xl gap-6 px-4 py-32 text-center">
    <template v-if="status === 'failed'">
      <h1 class="text-3xl font-bold tracking-tight">
        The donation did not go through
      </h1>
      <p class="text-on-surface-variant">
        You have not been charged. Drift is free to download either way.
      </p>
    </template>
    <template v-else>
      <h1 class="text-3xl font-bold tracking-tight">
        {{ status === 'paid' ? 'Thank you for supporting Drift' : 'Download Drift' }}
      </h1>
      <p
        v-if="status === 'paid'"
        class="text-on-surface-variant"
      >
        Your donation helps cover hosting for add-ons and assets, and keeps us going.
      </p>
      <p class="text-on-surface-variant">
        Pick your system to start the download.
      </p>
    </template>

    <div
      class="flex flex-wrap justify-center gap-3"
    >
      <button
        type="button"
        class="btn-drift min-h-11 px-6 text-sm"
        @click="downloadOpen = true"
      >
        Download
      </button>
      <NuxtLink
        to="/drift"
        class="btn-secondary min-h-11 px-6 text-sm"
      >
        Back to Drift
      </NuxtLink>
    </div>

    <MarketingProductDownloadDialog
      v-model:open="downloadOpen"
      product="drift"
      skip-pay
      :paid="status === 'paid'"
    />
  </section>
</template>
