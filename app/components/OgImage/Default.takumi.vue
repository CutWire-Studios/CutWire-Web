<script setup lang="ts">
// Rendered by nuxt-og-image (takumi) at 1200x630 — the size Open Graph and
// Twitter large cards expect. The renderer supports a subset of CSS, so this
// uses flex + explicit colors only: no oklch, no backdrop-filter, no CSS vars.
withDefaults(defineProps<{
  title?: string
  description?: string
  eyebrow?: string
}>(), {
  title: 'CutWire Studios',
  description: 'Open-source live media software for operators.',
  eyebrow: 'CutWire Studios',
})
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between bg-[#131316] p-[70px]">
    <div class="flex flex-col">
      <div class="flex items-center text-[24px] font-semibold uppercase tracking-[4px] text-[#FF4D00]">
        {{ eyebrow }}
      </div>
      <div class="mt-[28px] flex text-[68px] font-extrabold leading-[1.08] tracking-[-2px] text-[#F5F5F7]">
        {{ title }}
      </div>
      <div
        v-if="description"
        class="mt-[26px] flex max-w-[900px] text-[30px] leading-[1.4] text-[#A9AAB4]"
      >
        {{ description }}
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="flex h-[16px] w-[16px] rounded-full bg-[#FF4D00]" />
        <div class="ml-[16px] flex text-[26px] font-semibold text-[#F5F5F7]">
          cutwire.org
        </div>
      </div>
      <div class="flex text-[24px] text-[#A9AAB4]">
        Free &amp; open source · GPLv3
      </div>
    </div>

    <div class="absolute bottom-0 left-0 flex h-[8px] w-full bg-[#FF4D00]" />
  </div>
</template>
