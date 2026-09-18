<script setup lang="ts">
const route = useRoute()
const isActive = (href: string) => route.path === href || route.path.startsWith(`${href}/`)

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Docs', href: 'https://docs.cutwire.org' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pt-4 md:px-6">
      <NuxtLink
        to="/"
        class="glass flex min-h-11 items-center rounded-full px-3 py-1 transition-opacity duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:opacity-80"
      >
        <LayoutSiteLogo />
      </NuxtLink>

      <div class="glass hidden items-center rounded-full px-1.5 py-1 md:flex">
        <nav class="flex items-center gap-0.5 text-sm">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="inline-flex min-h-11 items-center rounded-full px-3.5 font-medium text-on-surface transition-opacity duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
            :class="isActive(link.href) ? '' : 'opacity-70 hover:opacity-100'"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <LayoutThemeToggle />
        <NuxtLink
          to="/prism"
          class="btn-prism ml-1 min-h-11 px-4 text-sm"
        >
          Prism
        </NuxtLink>
        <NuxtLink
          to="/drift"
          class="btn-drift min-h-11 px-4 text-sm"
        >
          Drift
        </NuxtLink>
      </div>

      <div class="glass flex items-center rounded-full px-1 py-0.5 md:hidden">
        <LayoutThemeToggle />
        <LayoutMobileNav />
      </div>
    </div>
  </header>
</template>
