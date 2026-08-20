<script setup lang="ts">
const { releases } = useDriftLinks()
</script>

<template>
  <section class="relative border-t border-border/60 py-20">
    <div class="relative mx-auto max-w-3xl px-4 text-center md:px-6">
      <h2 class="text-balance text-3xl font-bold tracking-tight md:text-4xl">
        Download Drift — <span class="drift-grad-text">free, no watermark</span>
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-muted-foreground">
        Linux, Windows and macOS. GPLv3, no account, no subscription. What you preview is what you export.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <NuxtLink
          to="/drift#download"
          class="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_color-mix(in_srgb,#fcad01_80%,transparent)] transition-transform hover:scale-[1.02]"
        >
          Get Drift
        </NuxtLink>
        <a
          :href="releases"
          target="_blank"
          rel="noreferrer"
          class="rounded-md border border-border bg-surface/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-surface-2"
        >
          GitHub Releases
        </a>
      </div>
    </div>
  </section>
</template>
