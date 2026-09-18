<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const label = computed(() =>
  isDark.value ? 'Switch to light mode' : 'Switch to dark mode',
)

function toggle() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-on-surface transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
    :aria-label="label"
    @click="toggle"
  >
    <Sun
      v-if="isDark"
      class="size-5"
      aria-hidden="true"
    />
    <Moon
      v-else
      class="size-5"
      aria-hidden="true"
    />
  </button>
</template>
