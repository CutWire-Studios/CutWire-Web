<script setup lang="ts">
const props = withDefaults(defineProps<{
  product: 'prism' | 'drift'
  showDownload?: boolean
}>(), {
  showDownload: true,
})

const route = useRoute()
const downloadOpen = ref(false)

const isPrism = computed(() => props.product === 'prism')

const pills = [
  { label: 'Overview', to: '/drift' },
  { label: 'Features', to: '/drift/features' },
  { label: 'MCP', to: '/drift/mcp' },
  { label: 'Alternatives', to: '/drift/alternatives' },
  { label: 'FAQ', to: '/drift/faq' },
]

function isActive(to: string) {
  if (to.startsWith('#'))
    return route.hash === to
  if (to === '/drift')
    return route.path === '/drift'
  return route.path === to || route.path.startsWith(`${to}/`)
}

const downloadClass = computed(() => (isPrism.value ? 'btn-prism' : 'btn-drift'))
const activeFill = computed(() =>
  isPrism.value
    ? 'bg-prism text-prism-foreground'
    : 'bg-drift text-drift-foreground',
)
</script>

<template>
  <div
    class="flex flex-col gap-3 sm:flex-row sm:items-center"
    :class="showDownload ? 'sm:justify-between' : ''"
  >
    <nav
      class="flex flex-wrap items-center gap-1"
      aria-label="Product sections"
    >
      <NuxtLink
        v-for="pill in pills"
        :key="pill.to"
        :to="pill.to"
        class="inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium transition-opacity duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
        :class="isActive(pill.to)
          ? activeFill
          : 'glass text-on-surface opacity-70 hover:opacity-100'"
      >
        {{ pill.label }}
      </NuxtLink>
    </nav>
    <button
      v-if="showDownload"
      type="button"
      :class="downloadClass"
      class="min-h-11 shrink-0 px-5 text-sm"
      @click="downloadOpen = true"
    >
      Download
    </button>
    <MarketingProductDownloadDialog
      v-if="showDownload"
      v-model:open="downloadOpen"
      :product="product"
    />
  </div>
</template>
