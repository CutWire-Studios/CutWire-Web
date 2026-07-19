<script setup lang="ts">
const route = useRoute()
const isActive = (href: string) => route.path === href || route.path.startsWith(`${href}/`)

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Docs', href: 'https://docs.cutwire.org' },
  { label: 'About', href: '/about' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
      <NuxtLink
        to="/"
        class="flex items-center transition-opacity hover:opacity-80"
      >
        <NuxtImg
          src="/logo-with-name.svg"
          alt="CutWire Studios"
          class="h-8 w-auto"
          width="180"
          height="48"
        />
      </NuxtLink>

      <nav class="hidden items-center gap-7 text-sm md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="transition-colors"
          :class="isActive(link.href) ? 'text-on-surface' : 'text-on-surface-variant hover:text-on-surface'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <a
          href="https://github.com/CutWire-Studios/Prism"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden rounded-md border border-border px-3 py-1.5 text-sm text-on-surface/90 transition-colors hover:bg-card sm:inline-block"
        >
          GitHub
        </a>
        <NuxtLink
          to="/prism"
          class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(255,77,0,0.7)] transition-transform hover:scale-[1.02]"
        >
          Get Prism
        </NuxtLink>
        <LayoutMobileNav />
      </div>
    </div>
  </header>
</template>
