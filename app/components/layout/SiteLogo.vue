<script setup lang="ts">
withDefaults(defineProps<{
  heightClass?: string
}>(), {
  heightClass: 'h-8',
})
</script>

<template>
  <span class="relative inline-flex items-center">
    <NuxtImg
      src="/logo-with-name-light.svg"
      alt="CutWire Studios"
      :class="['w-auto dark:hidden', heightClass]"
      width="180"
      height="48"
    />
    <NuxtImg
      src="/logo-with-name.svg"
      alt=""
      :class="['hidden w-auto dark:block', heightClass]"
      width="180"
      height="48"
      aria-hidden="true"
    />
  </span>
</template>
