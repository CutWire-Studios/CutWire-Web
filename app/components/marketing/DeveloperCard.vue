<script setup lang="ts">
const props = defineProps<{
  name: string
  handle: string
  github: string
}>()

const avatar = computed(() => `https://github.com/${props.handle}.png?size=460`)
const avatarSmall = computed(() => `https://github.com/${props.handle}.png?size=80`)
</script>

<template>
  <a
    :href="github"
    target="_blank"
    rel="noopener"
    :aria-label="`${name} on GitHub`"
    class="developer-card group relative block aspect-square overflow-hidden rounded-[2rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  >
    <img
      :src="avatar"
      :alt="name"
      width="460"
      height="460"
      class="absolute inset-0 h-full w-full object-cover object-center"
    >
    <div
      class="developer-card-scrim pointer-events-none absolute inset-0"
      aria-hidden="true"
    />

    <div class="absolute inset-x-0 top-0 px-5 pt-6 text-center">
      <h3 class="text-balance text-xl font-semibold leading-tight tracking-tight text-white [text-shadow:0_1px_10px_rgb(0_0_0_/_0.55)] md:text-2xl">
        {{ name }}
      </h3>
      <p class="mt-1 text-sm text-white/85 [text-shadow:0_1px_8px_rgb(0_0_0_/_0.5)]">
        Developer
      </p>
    </div>

    <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
      <div class="flex min-w-0 items-center gap-2.5">
        <img
          :src="avatarSmall"
          alt=""
          width="40"
          height="40"
          class="size-10 shrink-0 rounded-full object-cover ring-2 ring-white/50"
        >
        <p class="truncate text-sm font-medium text-white [text-shadow:0_1px_8px_rgb(0_0_0_/_0.5)]">
          @{{ handle }}
        </p>
      </div>
      <span class="shrink-0 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-transform duration-150 group-hover:scale-[1.03]">
        GitHub
      </span>
    </div>
  </a>
</template>
