<script setup lang="ts">
import { Menu } from 'lucide-vue-next'

const open = ref(false)

const links = [
  { label: 'Products', href: '/products' },
  { label: 'Docs', href: 'https://docs.cutwire.org' },
  { label: 'About', href: '/about' },
  { label: 'Support', href: '/support' },
]
</script>

<template>
  <UiSheet v-model:open="open">
    <UiSheetTrigger as-child>
      <UiButton
        variant="ghost"
        size="icon"
        class="text-on-surface md:hidden"
        aria-label="Open menu"
      >
        <Menu class="size-5" />
      </UiButton>
    </UiSheetTrigger>
    <UiSheetContent
      side="right"
      class="w-full border-outline-variant bg-background sm:max-w-sm"
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
          class="rounded-lg px-3 py-3 text-lg text-on-surface-variant transition-colors hover:bg-surface hover:text-on-surface"
          @click="open = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="mt-8">
        <NuxtLink
          to="/products"
          class="glow-button-primary flex w-full items-center justify-center px-6 py-3 text-label-md"
          @click="open = false"
        >
          Explore products
        </NuxtLink>
      </div>
    </UiSheetContent>
  </UiSheet>
</template>
