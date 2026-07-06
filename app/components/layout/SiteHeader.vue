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
  <header class="fixed inset-x-0 top-0 z-50 border-b border-outline-variant bg-background/80 backdrop-blur-2xl">
    <div class="container-cutwire flex h-[72px] items-center justify-between">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 text-xl font-bold tracking-tight text-on-surface"
      >
        <NuxtImg
          src="/logo-with-name.svg"
          alt="CutWire Studios"
          class="h-12 w-auto"
          width="180"
          height="48"
        />
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
        <a
          href="https://github.com/CutWire-Studios/Prism"
          target="_blank"
          rel="noopener noreferrer"
          class="glow-button-secondary hidden px-6 py-2 text-label-md md:inline-flex"
        >
          Get CutWire Prism
        </a>
        <LayoutMobileNav />
      </div>
    </div>
  </header>
</template>
