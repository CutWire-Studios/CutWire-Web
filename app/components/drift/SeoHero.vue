<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  crumbs: { name: string, to?: string }[]
  wide?: boolean
}>()
</script>

<template>
  <section class="relative overflow-hidden">
    <div
      aria-hidden="true"
      class="drift-grid-bg absolute inset-0 opacity-60"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0"
      style="background: var(--grad-hero)"
    />
    <div
      class="relative mx-auto px-4 pt-16 pb-12 md:px-6 md:pt-20 md:pb-16"
      :class="wide ? 'max-w-6xl' : 'max-w-3xl'"
    >
      <UiBreadcrumb>
        <UiBreadcrumbList>
          <template
            v-for="(crumb, i) in crumbs"
            :key="crumb.name"
          >
            <UiBreadcrumbItem>
              <UiBreadcrumbLink
                v-if="crumb.to"
                as-child
              >
                <NuxtLink :to="crumb.to">
                  {{ crumb.name }}
                </NuxtLink>
              </UiBreadcrumbLink>
              <UiBreadcrumbPage v-else>
                {{ crumb.name }}
              </UiBreadcrumbPage>
            </UiBreadcrumbItem>
            <UiBreadcrumbSeparator v-if="i < crumbs.length - 1" />
          </template>
        </UiBreadcrumbList>
      </UiBreadcrumb>
      <p class="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {{ eyebrow }}
      </p>
      <h1 class="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
        {{ title }}
      </h1>
      <p class="mt-5 text-pretty text-lg text-muted-foreground">
        {{ description }}
      </p>
      <slot name="after" />
    </div>
  </section>
</template>
