<script setup lang="ts">
import { Menu } from 'lucide-vue-next'

const open = ref(false)

const links = [
  { label: 'Docs', href: 'https://docs.cutwire.org' },
  { label: 'About', href: '/about' },
  { label: 'Support', href: '/support' },
]
</script>

<template>
  <UiSheet v-model:open="open">
    <UiSheetTrigger as-child>
      <button
        type="button"
        class="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-on-surface transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] md:hidden"
        aria-label="Open menu"
      >
        <Menu class="size-5" />
      </button>
    </UiSheetTrigger>
    <UiSheetContent
      side="right"
      class="w-full border-border bg-background sm:max-w-sm"
    >
      <UiSheetHeader>
        <UiSheetTitle class="text-on-surface">
          CutWire Studios
        </UiSheetTitle>
      </UiSheetHeader>
      <nav class="mt-8 flex flex-col gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="rounded-lg px-3 py-3 text-lg text-on-surface-variant hover:bg-muted hover:text-on-surface"
          @click="open = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="mt-8 grid gap-2">
        <NuxtLink
          to="/prism"
          class="btn-prism flex w-full min-h-11 px-6 py-3 text-sm"
          @click="open = false"
        >
          Prism
        </NuxtLink>
        <NuxtLink
          to="/drift"
          class="btn-drift flex w-full min-h-11 px-6 py-3 text-sm"
          @click="open = false"
        >
          Drift
        </NuxtLink>
      </div>
    </UiSheetContent>
  </UiSheet>
</template>
