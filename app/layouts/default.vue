<template>
  <div class="flex min-h-screen flex-col">
    <LayoutSiteHeader />
    <main class="flex-1 pt-24">
      <slot />
    </main>
    <LayoutSiteFooter />
  </div>
</template>
