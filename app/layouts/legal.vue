<template>
  <div class="flex min-h-screen flex-col">
    <LayoutSiteHeader />
    <main class="flex-1 pt-16">
      <div class="container-cutwire max-w-2xl py-12 md:py-16">
        <article class="prose-cutwire">
          <slot />
        </article>
      </div>
    </main>
    <LayoutSiteFooter />
  </div>
</template>
