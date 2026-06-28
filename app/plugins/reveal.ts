// v-reveal — one-shot staggered scroll reveal (DESIGN.md §6)
// Usage: v-reveal or v-reveal="2" (stagger index → 60ms steps)
// Registered universally so SSR can resolve the directive; the observer is client-only.
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  if (import.meta.client) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced) {
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
    }
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps(binding) {
      // Render hidden on the server so there's no visible→hidden flash on hydrate.
      const index = Number(binding.value) || 0
      return { class: 'reveal', style: { '--reveal-delay': `${index * 60}ms` } }
    },
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal')
      const index = Number(binding.value) || 0
      el.style.setProperty('--reveal-delay', `${index * 60}ms`)
      if (observer) observer.observe(el)
      else el.classList.add('is-visible')
    },
    unmounted(el: HTMLElement) {
      if (observer) observer.unobserve(el)
    },
  })
})
