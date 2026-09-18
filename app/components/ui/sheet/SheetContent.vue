<script setup lang="ts">
import { XIcon } from '@lucide/vue';

import type { DialogContentEmits, DialogContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  DialogClose,
  DialogContent,
  DialogPortal,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import SheetOverlay from "./SheetOverlay.vue"

interface SheetContentProps extends /* @vue-ignore */ DialogContentProps {
  class?: HTMLAttributes["class"]
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps</* @vue-ignore */ SheetContentProps>(), {
  side: "right",
  showCloseButton: true,
})
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, "class", "side", "showCloseButton")

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const sideClass = {
  top: 'inset-x-0 top-0 h-auto border-b data-open:slide-in-from-top-10 data-closed:slide-out-to-top-10',
  bottom: 'inset-x-0 bottom-0 h-auto border-t data-open:slide-in-from-bottom-10 data-closed:slide-out-to-bottom-10',
  left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm data-open:slide-in-from-left-10 data-closed:slide-out-to-left-10',
  right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm data-open:slide-in-from-right-10 data-closed:slide-out-to-right-10',
} as const
</script>

<template>
  <DialogPortal>
    <SheetOverlay />
    <DialogContent
      data-slot="sheet-content"
      v-bind="{ ...$attrs, ...forwarded, 'data-side': props.side }"
      :class="cn('bg-popover text-popover-foreground fixed inset-y-0 top-0 z-[100] flex h-dvh flex-col gap-4 bg-clip-padding p-6 text-sm shadow-lg transition duration-200 ease-in-out data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0', sideClass[props.side], props.class)"
    >
      <slot />

      <DialogClose
        v-if="showCloseButton"
        data-slot="sheet-close"
        as-child
      >
        <Button variant="ghost" class="absolute top-3 right-3" size="icon-sm">
          <XIcon />
          <span class="sr-only">Close</span>
        </Button>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
