<script setup lang="ts">
const creator = {
  name: 'Erickson Lourenco',
  handle: '@Ericksonloure',
  url: 'https://www.youtube.com/@Ericksonloure',
}

const stories = [
  {
    id: 'w-UZKfn0j1o',
    title: 'CapCut e Filmora JÁ ERA — novo editor com IA, grátis e sem marca d\'água',
    quote: 'Um editor 100% gratuito, ilimitado e sem marca d\'água. Um editor que com toda certeza vai superar o CapCut.',
    translation: 'A 100% free editor — unlimited, no watermark. One that will definitely surpass CapCut.',
  },
  {
    id: '6lhI4Zx7fJI',
    title: 'Levei a IA ao limite — editei o vídeo inteiro com Drift',
    quote: 'Será que já era o CapCut? Eu levei o Drift e a IA ao limite. O Drift é gratuito, ele é open source.',
    translation: 'Is this the end for CapCut? I pushed Drift and the AI to the limit. Drift is free — it’s open source.',
  },
]
</script>

<template>
  <section
    id="creators"
    class="relative scroll-mt-28 border-y border-border/60 bg-surface/40 py-16 md:py-20"
  >
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <div
        v-reveal
        class="flex flex-wrap items-end justify-between gap-4"
      >
        <div class="max-w-xl">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            In the wild
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Creators are already cutting with Drift.
          </h2>
        </div>
        <a
          :href="creator.url"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-4 w-4 text-primary"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.2c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.2A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
          </svg>
          {{ creator.name }} · {{ creator.handle }}
        </a>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-2">
        <article
          v-for="(story, i) in stories"
          :key="story.id"
          v-reveal="i"
          class="flex flex-col overflow-hidden rounded-xl border border-border bg-background/60"
        >
          <DriftYoutubeEmbed
            :video-id="story.id"
            :title="story.title"
          />
          <blockquote class="flex flex-1 flex-col p-5">
            <p
              class="text-base font-medium leading-snug tracking-tight text-foreground md:text-lg"
              lang="pt"
              style="font-family: var(--font-display)"
            >
              <span
                aria-hidden="true"
                class="mr-1 text-primary"
              >“</span>{{ story.quote }}”
            </p>
            <p class="mt-2 text-sm text-muted-foreground">
              {{ story.translation }}
            </p>
            <footer class="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
              <cite class="not-italic text-muted-foreground">{{ creator.name }} · YouTube · PT</cite>
              <a
                :href="`https://www.youtube.com/watch?v=${story.id}`"
                target="_blank"
                rel="noreferrer"
                class="text-primary hover:underline"
              >Watch →</a>
            </footer>
          </blockquote>
        </article>
      </div>
    </div>
  </section>
</template>
