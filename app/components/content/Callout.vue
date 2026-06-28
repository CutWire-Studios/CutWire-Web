<script setup lang="ts">
const props = defineProps<{
  type?: 'tip' | 'warning' | 'info'
}>()

const styles = {
  tip: 'border-cue/30 bg-cue/5 text-text',
  warning: 'border-live/30 bg-live/5 text-text',
  info: 'border-hairline bg-surface-1 text-text-muted',
}
</script>

<template>
  <div
    class="my-6 rounded-lg border p-4"
    :class="styles[props.type || 'info']"
  >
    <slot />
  </div>
</template>
