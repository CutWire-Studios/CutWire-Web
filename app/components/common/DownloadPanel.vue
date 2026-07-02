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
  console.info('download_click', { platform: activePlatform.value, product: props.productName })
}
</script>

<template>
  <div>
    <UiTabs v-model="activePlatform">
      <UiTabsList class="grid w-full grid-cols-3 bg-surface">
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
          <p class="font-mono text-sm text-on-surface-variant">
            Version {{ currentDownload.version || '1.0' }} · {{ currentDownload.size }}
          </p>
          <a
            :href="currentDownload.url"
            download
            class="glow-button-primary mt-4 inline-flex px-8 py-3 text-label-md"
            @click="onDownload"
          >
            Download for {{ platform }}
          </a>
          <p
            v-if="currentDownload.checksum"
            class="mt-4 font-mono text-xs text-on-surface-variant/60"
          >
            SHA256: {{ currentDownload.checksum }}
          </p>
        </template>
        <p
          v-else
          class="text-sm text-on-surface-variant"
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
