<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'

const emit = defineEmits<{ done: [paid: boolean] }>()

const marks = [0, 1, 5]

const sliderAmount = ref(0)
const custom = ref(false)
const customText = ref('')
const customInput = ref<HTMLInputElement>()
const status = ref<'idle' | 'redirecting' | 'error'>('idle')
const colorMode = useColorMode()

const amount = computed(() => {
  if (custom.value)
    return Number.parseFloat(customText.value) || 0
  return sliderAmount.value
})
const cents = computed(() => Math.round(amount.value * 100))
const digits = computed(() => [
  Math.floor(cents.value / 100),
  Math.floor(cents.value / 10) % 10,
  cents.value % 10,
])

// $0 is free; anything above snaps straight to the $1 floor.
function setAmount(raw: number) {
  sliderAmount.value = raw > 0 && raw < 1 ? (raw < 0.5 ? 0 : 1) : Math.round(raw * 100) / 100
}

watch(custom, (on) => {
  if (on)
    nextTick(() => customInput.value?.focus())
})

function onCustomInput(event: Event) {
  const input = event.target as HTMLInputElement
  const clean = input.value.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1').replace(/(\.\d{2})\d+/, '$1')
  input.value = clean
  customText.value = clean
}

async function pay() {
  if (status.value === 'redirecting')
    return
  status.value = 'redirecting'
  try {
    const { checkoutUrl } = await $fetch<{ checkoutUrl: string }>('/api/checkout', {
      method: 'POST',
      body: { amount: cents.value / 100, theme: colorMode.value },
    })
    window.location.assign(checkoutUrl)
  }
  catch {
    status.value = 'error'
  }
}

// Coming back via the browser's back button restores this page from cache.
useEventListener('pageshow', () => {
  status.value = 'idle'
})
</script>

<template>
  <div class="grid gap-6">
    <div class="flex items-center gap-3 rounded-xl border border-drift/40 bg-drift/10 p-3">
      <span class="grid size-9 shrink-0 place-items-center rounded-lg bg-drift text-drift-foreground">
        <HeartIcon
          class="size-5"
          aria-hidden="true"
        />
      </span>
      <p class="text-sm text-on-surface">
        <strong class="font-semibold">Drift is free and open source</strong>, and it always will be. Donating is optional.
      </p>
    </div>
    <label
      v-if="custom"
      class="flex items-start justify-center font-bold leading-none text-on-surface tabular-nums"
    >
      <span class="sr-only">Custom amount in US dollars</span>
      <span
        aria-hidden="true"
        class="mt-2 text-3xl text-on-surface-variant"
      >$</span>
      <input
        ref="customInput"
        :value="customText"
        type="text"
        inputmode="decimal"
        autocomplete="off"
        placeholder="10"
        class="h-[1em] min-w-[2ch] border-b-2 border-drift bg-transparent text-center text-7xl leading-none outline-none! placeholder:text-on-surface-variant/40"
        :style="{ width: `${Math.max(customText.length, 2) + 0.5}ch` }"
        @input="onCustomInput"
      >
    </label>
    <p
      v-else
      class="flex items-start justify-center font-bold leading-none text-on-surface tabular-nums"
    >
      <span class="sr-only">{{ `$${(cents / 100).toFixed(2)}` }}</span>
      <span
        aria-hidden="true"
        class="mt-2 text-3xl text-on-surface-variant"
      >$</span>
      <span
        aria-hidden="true"
        class="text-7xl"
      >
        <span class="reel-window"><span
          class="reel"
          :style="{ transform: `translateY(-${digits[0]! * 10}%)` }"
        ><span
          v-for="n in 10"
          :key="n"
        >{{ n - 1 }}</span></span></span>
      </span>
      <span
        aria-hidden="true"
        class="mt-2 text-4xl text-on-surface-variant"
      >.<span
        v-for="i in [1, 2]"
        :key="i"
        class="reel-window"
      ><span
        class="reel"
        :style="{ transform: `translateY(-${digits[i]! * 10}%)` }"
      ><span
        v-for="n in 10"
        :key="n"
      >{{ n - 1 }}</span></span></span></span>
    </p>
    <div class="grid gap-1">
      <div
        class="relative h-5 text-xs text-on-surface-variant tabular-nums"
        :class="custom && 'opacity-50'"
      >
        <button
          v-for="mark in marks"
          :key="mark"
          type="button"
          tabindex="-1"
          :disabled="custom"
          class="absolute top-0 transition-colors enabled:hover:text-on-surface"
          :class="[
            mark === 0 ? 'left-0' : mark === 5 ? 'right-0' : 'left-1/5 -translate-x-1/2',
            !custom && sliderAmount === mark && 'font-semibold text-on-surface',
          ]"
          @click="setAmount(mark)"
        >
          ${{ mark }}
        </button>
      </div>
      <div class="relative">
        <span
          aria-hidden="true"
          class="pointer-events-none absolute top-1/2 left-1/5 z-10 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-on-surface/25"
        />
        <UiSlider
          :model-value="[sliderAmount]"
          :min="0"
          :max="5"
          :step="0.01"
          :disabled="custom"
          aria-label="Donation amount"
          class="py-3 [&_[data-slot=slider-range]]:bg-(--drift) [&_[data-slot=slider-thumb]]:z-20 [&_[data-slot=slider-thumb]]:size-7 [&_[data-slot=slider-thumb]]:border-2 [&_[data-slot=slider-thumb]]:border-(--drift) [&_[data-slot=slider-thumb]]:shadow-md [&_[data-slot=slider-track]]:h-3! [&_[data-slot=slider-track]]:bg-outline-variant"
          @update:model-value="setAmount($event?.[0] ?? 0)"
        />
      </div>
      <label class="flex min-h-11 cursor-pointer items-center gap-2 justify-self-start text-sm text-on-surface">
        <input
          v-model="custom"
          type="checkbox"
          class="size-4 accent-(--drift)"
        >
        Custom amount
      </label>
    </div>
    <div class="grid gap-3">
      <button
        type="button"
        class="btn-drift min-h-11 px-4 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        :disabled="status === 'redirecting' || (custom && cents < 100)"
        @click="cents === 0 && !custom ? emit('done', false) : pay()"
      >
        <template v-if="cents === 0 && !custom">
          Download for Free
        </template>
        <template v-else>
          {{ cents < 100 ? 'Enter $1 or more' : `Donate $${(cents / 100).toFixed(2)}` }}
        </template>
      </button>
      <!-- Always takes up its row so the dialog doesn't jump when the amount leaves $0. -->
      <p class="grid h-5 place-items-center text-sm text-on-surface-variant">
        <template v-if="status === 'redirecting'">
          Taking you to checkout…
        </template>
        <button
          v-else
          type="button"
          class="underline decoration-on-surface/30 underline-offset-4"
          :class="cents === 0 && !custom && 'invisible'"
          @click="emit('done', false)"
        >
          Skip and download for free
        </button>
      </p>
    </div>
    <p
      v-if="status === 'error'"
      class="text-center text-sm text-destructive"
    >
      The donation did not go through. Try again, or skip and download for free.
    </p>
  </div>
</template>

<style scoped>
.reel-window {
  display: inline-block;
  height: 1em;
  overflow-x: visible;
  overflow-y: clip;
  vertical-align: top;
}

.reel {
  display: flex;
  flex-direction: column;
  transition: transform 250ms cubic-bezier(0.23, 1, 0.32, 1);
}

.reel > span {
  height: 1em;
  line-height: 1;
}

@media (prefers-reduced-motion: reduce) {
  .reel {
    transition: none;
  }
}
</style>
