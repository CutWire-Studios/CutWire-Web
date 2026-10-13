<script setup lang="ts">
const article = {
  url: 'https://www.xda-developers.com/stopped-looking-for-free-video-editor-after-finding-one-that-handles-keyframing-like-adobe/',
  title: 'I stopped looking for a free video editor after finding one that handles keyframing like Adobe and CapCut (and it\'s only two months old)',
  quote: 'Two months in and Drift already has a mature keyframe editor',
  author: 'Nolen Jonker',
  publication: 'XDA Developers',
}
</script>

<template>
  <section
    id="creators"
    class="scroll-mt-28 px-4 py-16 md:px-6 md:py-24"
  >
    <div class="mx-auto max-w-6xl">
      <div class="max-w-xl">
        <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">
          What people are saying about Drift.
        </h2>
      </div>

      <article class="frost-card mt-10 grid overflow-hidden rounded-xl md:grid-cols-2">
        <a
          :href="article.url"
          target="_blank"
          rel="noreferrer"
          class="block"
        >
          <NuxtImg
            src="/images/xda-drift-keyframes.jpeg"
            :alt="article.title"
            class="block h-full w-full object-cover"
            width="1600"
            height="900"
            sizes="xs:100vw sm:100vw md:50vw lg:576px"
            loading="lazy"
          />
        </a>
        <blockquote class="flex flex-col justify-center p-6 md:p-8">
          <p class="text-xl font-medium leading-snug tracking-tight text-white md:text-2xl">
            “{{ article.quote }}”
          </p>
          <p class="mt-3 text-sm text-white/70">
            {{ article.title }}
          </p>
          <footer class="mt-6 flex flex-wrap items-center justify-between gap-2 text-sm">
            <cite class="not-italic text-white/70">{{ article.author }} · {{ article.publication }}</cite>
            <a
              :href="article.url"
              target="_blank"
              rel="noreferrer"
              class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >Read on XDA</a>
          </footer>
        </blockquote>
      </article>
    </div>
  </section>
</template>
