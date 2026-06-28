<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AccordionItem, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<{
  value: string
  disabled?: boolean
  unmountOnHide?: boolean
  class?: HTMLAttributes["class"]
}>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionItem
    v-slot="slotProps"
    data-slot="accordion-item"
    v-bind="forwardedProps"
    :class="cn('not-last:border-b', props.class)"
  >
    <slot v-bind="slotProps" />
  </AccordionItem>
</template>
