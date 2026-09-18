<script setup lang="ts">
import type { ProductOs } from '~/composables/useProductOs'

const props = defineProps<{
  product: 'prism' | 'drift'
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const prism = usePrismLinks()
const drift = useDriftLinks()

const os = ref<ProductOs>('linux')
const otherAndroid = ref(false)

const isPrism = computed(() => props.product === 'prism')
const name = computed(() => (isPrism.value ? 'Prism' : 'Drift'))
const downloadClass = computed(() => (isPrism.value ? 'btn-prism' : 'btn-drift'))

const osOptions = computed(() => {
  const base: { value: ProductOs, label: string }[] = [
    { value: 'linux', label: 'Linux' },
    { value: 'windows', label: 'Windows' },
    { value: 'macos', label: 'macOS' },
  ]
  if (!isPrism.value)
    base.push({ value: 'android', label: 'Android' })
  return base
})

watch(
  () => props.open,
  (open) => {
    if (!open)
      return
    const detected = detectProductOs()
    os.value = isPrism.value && detected === 'android' ? 'linux' : detected
    otherAndroid.value = false
  },
)
</script>

<template>
  <UiDialog
    :open="open"
    @update:open="emit('update:open', $event)"
  >
    <UiDialogContent class="border-border bg-popover sm:max-w-md">
      <UiDialogHeader>
        <UiDialogTitle>Download {{ name }}</UiDialogTitle>
        <UiDialogDescription>
          Pick your system. {{ name }} is free, GPLv3, and does not need an account.
        </UiDialogDescription>
      </UiDialogHeader>

      <div class="grid gap-4">
        <div class="grid gap-2">
          <label
            class="text-sm font-medium text-on-surface"
            for="product-os"
          >Your system</label>
          <UiSelect v-model="os">
            <UiSelectTrigger
              id="product-os"
              class="!h-12 w-full min-h-12 rounded-lg border-2 border-outline-variant bg-muted px-3 text-base text-on-surface"
            >
              <UiSelectValue placeholder="Choose your system" />
            </UiSelectTrigger>
            <UiSelectContent
              position="popper"
              class="w-(--reka-select-trigger-width)"
            >
              <UiSelectItem
                v-for="option in osOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </UiSelectItem>
            </UiSelectContent>
          </UiSelect>
        </div>

        <div
          v-if="os === 'linux'"
          class="grid gap-3"
        >
          <p class="text-sm text-on-surface-variant">
            Install from Flathub, or grab an AppImage from GitHub releases.
          </p>
          <a
            :href="isPrism ? prism.flathub : drift.flathub"
            target="_blank"
            rel="noreferrer"
            :class="downloadClass"
            class="min-h-11 px-4 text-sm"
          >
            Open on Flathub
          </a>
          <a
            :href="isPrism ? prism.downloadLinux : drift.downloadLinux"
            class="btn-secondary min-h-11 px-4 text-sm"
          >
            Download AppImage
          </a>
        </div>

        <div
          v-else-if="os === 'windows'"
          class="grid gap-3"
        >
          <p
            v-if="isPrism"
            class="text-sm text-on-surface-variant"
          >
            Download the latest installer from GitHub releases.
          </p>
          <p
            v-else
            class="text-sm text-on-surface-variant"
          >
            Use the installer, or the portable zip if you prefer not to install.
          </p>
          <a
            :href="isPrism ? prism.downloadWindows : drift.downloadWindows"
            :class="downloadClass"
            class="min-h-11 px-4 text-sm"
          >
            Windows installer
          </a>
          <a
            :href="isPrism ? prism.releases : drift.downloadWindowsPortable"
            :target="isPrism ? '_blank' : undefined"
            :rel="isPrism ? 'noreferrer' : undefined"
            class="btn-secondary min-h-11 px-4 text-sm"
          >
            {{ isPrism ? 'All releases' : 'Portable zip' }}
          </a>
        </div>

        <div
          v-else-if="os === 'macos'"
          class="grid gap-3"
        >
          <template v-if="isPrism">
            <p class="text-sm text-on-surface-variant">
              No prebuilt binary yet — build from source with CMake. Virtual camera output is not available on macOS.
            </p>
            <a
              :href="prism.gh"
              target="_blank"
              rel="noreferrer"
              :class="downloadClass"
              class="min-h-11 px-4 text-sm"
            >
              Build instructions
            </a>
            <a
              :href="prism.issues"
              target="_blank"
              rel="noreferrer"
              class="btn-secondary min-h-11 px-4 text-sm"
            >
              Track macOS binary
            </a>
          </template>
          <template v-else>
            <p class="text-sm text-on-surface-variant">
              Apple Silicon disk image. First launch: right-click the app, then Open. Intel Macs can build from source.
            </p>
            <a
              :href="drift.downloadMacos"
              :class="downloadClass"
              class="min-h-11 px-4 text-sm"
            >
              Download disk image
            </a>
            <a
              :href="drift.gh"
              target="_blank"
              rel="noreferrer"
              class="btn-secondary min-h-11 px-4 text-sm"
            >
              Build from source
            </a>
          </template>
        </div>

        <div
          v-else-if="os === 'android' && !isPrism"
          class="grid gap-3"
        >
          <p class="text-sm text-on-surface-variant">
            Sideload the APK. Not on the Play Store yet. There is no iOS app.
          </p>
          <p class="text-sm text-on-surface">
            Most phones use the 64-bit build (arm64-v8a).
          </p>
          <a
            :href="drift.downloadAndroid"
            :class="downloadClass"
            class="min-h-11 px-4 text-sm"
          >
            Download APK
          </a>
          <UiCollapsible v-model:open="otherAndroid">
            <UiCollapsibleTrigger class="text-left text-sm font-medium text-on-surface underline decoration-on-surface/30 underline-offset-4">
              Other devices
            </UiCollapsibleTrigger>
            <UiCollapsibleContent class="mt-3 grid gap-3">
              <p class="text-sm text-on-surface-variant">
                Older 32-bit phones use armeabi-v7a. If you are unsure, the 64-bit APK above is the right one.
              </p>
              <a
                :href="drift.downloadAndroid32"
                class="btn-secondary min-h-11 px-4 text-sm"
              >
                Download 32-bit APK
              </a>
            </UiCollapsibleContent>
          </UiCollapsible>
        </div>
      </div>
    </UiDialogContent>
  </UiDialog>
</template>
