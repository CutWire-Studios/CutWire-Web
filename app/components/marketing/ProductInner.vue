<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description: string
  wide?: boolean
}>(), {
  wide: false,
})
</script>

<template>
  <LayoutProductFrost product="drift">
    <section class="px-4 pt-16 pb-8 md:px-6 md:pt-20">
      <div class="mx-auto max-w-6xl">
        <MarketingProductChrome product="drift" />
        <div
          class="mt-10"
          :class="wide ? 'max-w-6xl' : 'max-w-3xl'"
        >
          <h1 class="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
            {{ title }}
          </h1>
          <p class="mt-5 max-w-2xl text-pretty text-lg text-white/70">
            {{ description }}
          </p>
          <slot name="after" />
        </div>
      </div>
    </section>
    <div
      class="mx-auto px-4 pb-16 md:px-6"
      :class="wide ? 'max-w-6xl' : 'max-w-3xl'"
    >
      <slot />
    </div>
  </LayoutProductFrost>
</template>
