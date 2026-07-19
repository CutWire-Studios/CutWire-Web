<script setup lang="ts">
const links: [string, string][] = [
  ['Features', '#features'],
  ['How it works', '#how'],
  ['Screenshots', '#screens'],
  ['Download', '#download'],
  ['Built with', '#tech'],
]

const { gh, releases, flathub, issues } = usePrismLinks()
const year = new Date().getFullYear()
</script>

<template>
  <div class="theme-prism flex min-h-screen flex-col">
    <header class="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <div class="flex items-center gap-2.5 font-semibold tracking-tight">
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
          <a
            href="#top"
            class="flex items-center gap-2.5"
          >
            <span class="text-lg">Prism</span>
            <span class="hidden rounded-full border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-block">
              v0.1.2
            </span>
          </a>
        </div>
        <ul class="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <li
            v-for="[label, href] in links"
            :key="href"
          >
            <a
              :href="href"
              class="transition-colors hover:text-foreground"
            >{{ label }}</a>
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
          <a
            href="#download"
            class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-8px_oklch(0.72_0.20_295_/_0.7)] transition-transform hover:scale-[1.02]"
          >
            Download
          </a>
        </div>
      </nav>
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
            <span class="font-semibold">Prism</span>
          </div>
          <div class="text-sm text-muted-foreground">
            © {{ year }} CutWire Studios · GPLv3
          </div>
        </div>
        <nav class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
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
