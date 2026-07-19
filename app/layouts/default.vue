<template>
  <div class="flex min-h-screen flex-col">
    <LayoutSiteHeader />
    <main class="flex-1 pt-16">
      <slot />
    </main>
    <LayoutSiteFooter />
  </div>
</template>
