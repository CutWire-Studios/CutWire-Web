<script setup lang="ts">
import { Menu } from 'lucide-vue-next'

const open = ref(false)

const links = [
  { label: 'Products', href: '/products' },
  { label: 'Docs', href: 'https://docs.cutwire.org' },
  { label: 'Blog', href: 'https://blog.cutwire.org' },
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
        class="md:hidden"
        aria-label="Open menu"
      >
        <Menu class="size-5" />
      </UiButton>
    </UiSheetTrigger>
    <UiSheetContent
      side="right"
      class="w-full border-hairline bg-ink sm:max-w-sm"
    >
      <UiSheetHeader>
        <UiSheetTitle class="font-display text-text">
          CutWire
        </UiSheetTitle>
      </UiSheetHeader>
      <nav class="mt-8 flex flex-col gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="rounded-md px-3 py-3 text-lg text-text-muted transition-colors hover:bg-surface-1 hover:text-text"
          @click="open = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="mt-8">
        <UiButton
          as-child
          class="btn-signal w-full"
        >
          <NuxtLink
            to="/switchx"
            @click="open = false"
          >
            Get SwitchX
          </NuxtLink>
        </UiButton>
      </div>
    </UiSheetContent>
  </UiSheet>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
