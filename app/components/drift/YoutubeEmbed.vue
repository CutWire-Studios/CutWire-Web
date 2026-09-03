<script setup lang="ts">
const props = defineProps<{
  videoId: string
  title: string
}>()

const playing = ref(false)

const thumb = `https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`
const embedSrc = computed(() =>
  `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&rel=0`,
)

function play() {
  playing.value = true
}
</script>

<template>
  <div class="relative aspect-video overflow-hidden bg-background">
    <iframe
      v-if="playing"
      class="absolute inset-0 h-full w-full"
      :src="embedSrc"
      :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <button
      v-else
      type="button"
      class="group absolute inset-0 cursor-pointer"
      :aria-label="`Play video: ${title}`"
      @click="play"
    >
      <img
        :src="thumb"
        :alt="title"
        class="block h-full w-full object-cover transition-transform duration-500 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]"
        width="1280"
        height="720"
        loading="lazy"
        decoding="async"
      >
      <span
        aria-hidden="true"
        class="absolute inset-0 bg-gradient-to-t from-background/70 via-background/15 to-transparent"
      />
      <span
        class="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/50 bg-primary text-primary-foreground shadow-[0_12px_40px_-8px_color-mix(in_srgb,#fcad01_80%,transparent)] transition-transform duration-160 ease-out group-active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          class="ml-0.5 h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5.14v13.72L19.5 12 8 5.14z" />
        </svg>
      </span>
    </button>
  </div>
</template>
