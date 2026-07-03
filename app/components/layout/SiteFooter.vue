<script setup lang="ts">
const footerLinks = {
  Product: [
    { label: 'CutWire Prism', href: '/prism' },
    { label: 'Download', href: '/download' },
    { label: 'Docs', href: 'https://docs.cutwire.org' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: 'https://blog.cutwire.org' },
    { label: 'Support', href: '/support' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'License', href: '/license' },
  ],
}
</script>

<template>
  <footer class="mt-20 w-full border-t border-outline-variant bg-surface">
    <div class="container-cutwire grid grid-cols-2 gap-6 py-20 md:grid-cols-4 lg:grid-cols-6">
      <div class="col-span-2 lg:col-span-2">
        <p class="flex items-center gap-2 text-xl font-bold text-on-surface">
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
          CutWire Studios
        </p>
        <p class="mt-4 max-w-xs text-body-md text-on-surface-variant">
          Live media tools for creators who run the show.
        </p>
      </div>

      <div
        v-for="(links, group) in footerLinks"
        :key="group"
      >
        <p class="text-label-sm text-on-surface">
          {{ group }}
        </p>
        <ul class="mt-4 space-y-3">
          <li
            v-for="link in links"
            :key="link.href"
          >
            <NuxtLink
              :to="link.href"
              class="text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-cutwire flex flex-col items-center justify-between gap-4 border-t border-outline-variant py-6 text-label-sm text-on-surface-variant/60 sm:flex-row">
      <p>CutWire Prism 0.1 · macOS · Windows · Linux · GPLv3</p>
      <p>© {{ new Date().getFullYear() }} CutWire Studios. All rights reserved.</p>
    </div>
  </footer>
</template>
