<script setup lang="ts">
const route = useRoute()
const { version } = useDriftProduct()
const { gh, releases, flathub, issues, docs, downloadAndroid } = useDriftLinks()
const year = new Date().getFullYear()

const links = [
  { label: 'Overview', to: '/drift' },
  { label: 'Features', to: '/drift/features' },
  { label: 'Creators', to: '/drift#creators' },
  { label: 'MCP', to: '/drift/mcp' },
  { label: 'Alternatives', to: '/drift/alternatives' },
  { label: 'FAQ', to: '/drift/faq' },
]

function isActive(to: string) {
  if (to === '/drift')
    return route.path === '/drift'
  return route.path === to || route.path.startsWith(`${to}/`)
}
</script>

<template>
  <div class="theme-drift flex min-h-screen flex-col">
    <header class="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <div class="flex min-w-0 items-center gap-2.5 font-semibold tracking-tight">
          <NuxtLink
            to="/"
            aria-label="CutWire Studios home"
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
          <NuxtLink
            to="/drift"
            class="flex items-center gap-2.5"
          >
            <span
              class="text-lg"
              style="font-family: var(--font-display)"
            >Drift</span>
            <span class="hidden rounded-full border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-block">
              v{{ version }}
            </span>
          </NuxtLink>
        </div>
        <ul class="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          <li
            v-for="link in links"
            :key="link.to"
          >
            <NuxtLink
              :to="link.to"
              class="transition-colors hover:text-foreground"
              :class="isActive(link.to) ? 'text-foreground' : ''"
            >{{ link.label }}</NuxtLink>
          </li>
        </ul>
        <div class="flex items-center gap-2">
          <a
            :href="gh"
            target="_blank"
            rel="noreferrer"
            class="hidden rounded-md border border-border px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:bg-surface-2 sm:inline-block"
          >
            GitHub
          </a>
          <NuxtLink
            to="/drift#download"
            class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-8px_color-mix(in_srgb,#fcad01_70%,transparent)] transition-transform hover:scale-[1.02]"
          >
            Download
          </NuxtLink>
        </div>
      </nav>
      <ul class="flex gap-4 overflow-x-auto border-t border-border/40 px-4 py-2 text-xs text-muted-foreground lg:hidden">
        <li
          v-for="link in links"
          :key="`m-${link.to}`"
        >
          <NuxtLink
            :to="link.to"
            class="whitespace-nowrap transition-colors hover:text-foreground"
            :class="isActive(link.to) ? 'text-foreground' : ''"
          >{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-border/60 bg-surface/40">
      <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2.5">
            <NuxtImg
              src="/logo-with-name.svg"
              alt="CutWire Studios"
              class="h-7 w-auto"
              width="180"
              height="48"
            />
            <span
              class="font-semibold"
              style="font-family: var(--font-display)"
            >Drift</span>
          </div>
          <div class="text-sm text-muted-foreground">
            © {{ year }} CutWire Studios · GPLv3 · v{{ version }}
          </div>
        </div>
        <nav class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <NuxtLink
            to="/drift/features"
            class="hover:text-foreground"
          >Features</NuxtLink>
          <NuxtLink
            to="/drift/mcp"
            class="hover:text-foreground"
          >MCP</NuxtLink>
          <NuxtLink
            to="/drift/alternatives"
            class="hover:text-foreground"
          >Alternatives</NuxtLink>
          <NuxtLink
            to="/drift/faq"
            class="hover:text-foreground"
          >FAQ</NuxtLink>
          <NuxtLink
            to="/drift#creators"
            class="hover:text-foreground"
          >Creators</NuxtLink>
          <a
            :href="docs"
            target="_blank"
            rel="noreferrer"
            class="hover:text-foreground"
          >Docs</a>
          <a
            :href="gh"
            target="_blank"
            rel="noreferrer"
            class="hover:text-foreground"
          >GitHub</a>
          <a
            :href="releases"
            target="_blank"
            rel="noreferrer"
            class="hover:text-foreground"
          >Releases</a>
          <a
            :href="downloadAndroid"
            class="hover:text-foreground"
          >Android</a>
          <a
            :href="flathub"
            target="_blank"
            rel="noreferrer"
            class="hover:text-foreground"
          >Flathub</a>
          <a
            :href="issues"
            target="_blank"
            rel="noreferrer"
            class="hover:text-foreground"
          >Report an issue</a>
          <a
            href="https://www.gnu.org/licenses/gpl-3.0.html"
            target="_blank"
            rel="noreferrer"
            class="hover:text-foreground"
          >License</a>
        </nav>
      </div>
    </footer>
  </div>
</template>
