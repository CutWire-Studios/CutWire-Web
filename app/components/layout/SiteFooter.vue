<script setup lang="ts">
const footerLinks = {
  Product: [
    { label: 'SwitchX', href: '/switchx' },
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
  <footer class="border-t border-hairline bg-ink">
    <div class="h-px w-full bg-crossfade" />

    <div class="container-cutwire section-y pb-12 pt-16">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-1">
          <p class="font-display text-lg font-semibold text-text">
            CutWire Studios
          </p>
          <p class="mt-3 text-sm text-text-muted">
            Live media tools for creators who run the show.
          </p>
        </div>

        <div
          v-for="(links, group) in footerLinks"
          :key="group"
        >
          <p class="text-eyebrow text-text-faint">
            {{ group }}
          </p>
          <ul class="mt-4 space-y-2">
            <li
              v-for="link in links"
              :key="link.href"
            >
              <NuxtLink
                :to="link.href"
                class="text-sm text-text-muted transition-colors hover:text-text"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 border-t border-hairline pt-12">
        <CommonNewsletterForm />
      </div>

      <div class="mt-12 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p class="font-mono text-xs text-text-faint">
          SwitchX 1.0 · macOS · Windows · Linux
        </p>
        <p class="text-xs text-text-faint">
          © {{ new Date().getFullYear() }} CutWire Studios
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}

.font-mono {
  font-family: var(--font-mono);
}
</style>
