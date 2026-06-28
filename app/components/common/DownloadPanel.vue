<script setup lang="ts">
import type { ProductDownload } from '~/types/product'

const props = defineProps<{
  downloads: ProductDownload[]
  productName: string
}>()

const platforms = ['macOS', 'Windows', 'Linux'] as const
const activePlatform = ref<(typeof platforms)[number]>('macOS')

const currentDownload = computed(() =>
  props.downloads.find(d => d.platform === activePlatform.value),
)

function onDownload() {
  if (!currentDownload.value) return
  // Analytics hook — wire to Plausible/Vercel Analytics in Phase 4
  console.info('download_click', { platform: activePlatform.value, product: props.productName })
}
</script>

<template>
  <div class="rounded-lg border border-hairline bg-surface-1 p-6">
    <UiTabs v-model="activePlatform">
      <UiTabsList class="grid w-full grid-cols-3 bg-surface-2">
        <UiTabsTrigger
          v-for="platform in platforms"
          :key="platform"
          :value="platform"
        >
          {{ platform }}
        </UiTabsTrigger>
      </UiTabsList>
      <UiTabsContent
        v-for="platform in platforms"
        :key="platform"
        :value="platform"
        class="mt-6"
      >
        <template v-if="currentDownload">
          <p class="font-mono text-sm text-text-muted">
            Version {{ currentDownload.version || '1.0' }} · {{ currentDownload.size }}
          </p>
          <UiButton
            as-child
            class="mt-4 glow-live bg-live text-ink hover:bg-live/90"
            @click="onDownload"
          >
            <a
              :href="currentDownload.url"
              download
            >
              Download for {{ platform }}
            </a>
          </UiButton>
          <p
            v-if="currentDownload.checksum"
            class="mt-4 font-mono text-xs text-text-faint"
          >
            SHA256: {{ currentDownload.checksum }}
          </p>
        </template>
        <p
          v-else
          class="text-sm text-text-muted"
        >
          Not available for {{ platform }} yet.
        </p>
      </UiTabsContent>
    </UiTabs>
  </div>
</template>

<style scoped>
.font-mono {
  font-family: var(--font-mono);
}
</style>
