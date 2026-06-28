<script setup lang="ts">
const route = useRoute()
const isActive = (href: string) => route.path === href || route.path.startsWith(`${href}/`)

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Docs', href: 'https://docs.cutwire.org' },
  { label: 'Blog', href: 'https://blog.cutwire.org' },
  { label: 'About', href: '/about' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <!-- primary bar -->
    <div class="border-b border-hairline bg-surface-2/90 backdrop-blur-md">
      <div class="container-cutwire flex h-16 items-center justify-between">
        <NuxtLink
          to="/"
          class="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-text"
        >
          <span class="relative flex size-5 overflow-hidden rounded-[5px] ring-1 ring-hairline">
            <span class="w-1/2 bg-live" />
            <span class="w-1/2 bg-cue transition-all duration-300 group-hover:w-1/3" />
          </span>
          CutWire
          <span class="font-mono text-[0.625rem] font-normal uppercase tracking-[0.18em] text-text-faint">Studios</span>
        </NuxtLink>

        <nav class="hidden items-center gap-8 md:flex">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="relative text-sm transition-colors hover:text-text"
            :class="isActive(link.href) ? 'text-text' : 'text-text-muted'"
          >
            {{ link.label }}
            <span
              v-if="isActive(link.href)"
              class="absolute -bottom-1 left-0 h-px w-full bg-crossfade"
            />
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <UiButton
            as-child
            size="sm"
            class="btn-signal hidden md:inline-flex"
          >
            <NuxtLink to="/switchx">
              Get SwitchX
            </NuxtLink>
          </UiButton>
          <LayoutMobileNav />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
