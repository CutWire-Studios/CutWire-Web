<script setup lang="ts">
const footerLinks = {
  Product: [
    { label: 'CutWire Prism', href: '/prism' },
    { label: 'CutWire Drift', href: '/drift' },
    { label: 'Drift features', href: '/drift/features' },
    { label: 'Editor alternatives', href: '/drift/alternatives' },
    { label: 'Docs', href: 'https://docs.cutwire.org' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Support', href: '/support' },
    { label: 'Drift FAQ', href: '/drift/faq' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'License', href: '/license' },
  ],
}
</script>

<template>
  <footer class="mt-20 w-full border-t border-border/60 bg-surface/40">
    <div class="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-16 md:grid-cols-4 md:px-6 lg:grid-cols-6">
      <div class="col-span-2 lg:col-span-2">
        <NuxtImg
          src="/logo-with-name.svg"
          alt="CutWire Studios"
          class="h-8 w-auto"
          width="180"
          height="48"
        />
        <p class="mt-4 max-w-xs text-sm text-on-surface-variant">
          Live mixers and a free desktop video editor for people who create and go live.
        </p>
      </div>

      <div
        v-for="(links, group) in footerLinks"
        :key="group"
      >
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {{ group }}
        </p>
        <ul class="mt-4 space-y-3">
          <li
            v-for="link in links"
            :key="link.label"
          >
            <NuxtLink
              v-if="link.href"
              :to="link.href"
              class="text-sm text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {{ link.label }}
            </NuxtLink>
            <span
              v-else
              class="text-sm text-on-surface-variant/70"
            >
              {{ link.label }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border/60 px-4 py-6 text-sm text-on-surface-variant md:px-6 sm:flex-row">
      <p>CutWire Studios · Prism &amp; Drift · Linux · Windows · macOS · GPLv3</p>
      <p>© {{ new Date().getFullYear() }} CutWire Studios. All rights reserved.</p>
    </div>
  </footer>
</template>
