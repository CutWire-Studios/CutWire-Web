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
  <header class="fixed inset-x-0 top-0 z-50 border-b border-outline-variant bg-background/80 backdrop-blur-2xl">
    <div class="container-cutwire flex h-[72px] items-center justify-between">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 text-xl font-bold tracking-tight text-on-surface"
      >
        <span class="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-4"
          >
            <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />
          </svg>
        </span>
        CutWire
        <span class="text-label-sm font-normal normal-case tracking-normal text-on-surface-variant">Studios</span>
      </NuxtLink>

      <nav class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="text-label-md transition-colors duration-300"
          :class="isActive(link.href) ? 'border-b-2 border-primary pb-0.5 text-on-surface' : 'text-on-surface/70 hover:text-on-surface'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <NuxtLink
          to="/switchx"
          class="glow-button-secondary hidden px-6 py-2 text-label-md md:inline-flex"
        >
          Get SwitchX
        </NuxtLink>
        <LayoutMobileNav />
      </div>
    </div>
  </header>
</template>
