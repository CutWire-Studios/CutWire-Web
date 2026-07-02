import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  shadcn: {
    prefix: 'Ui',
    componentDir: '~/components/ui',
  },

  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },

  site: {
    url: 'https://cutwire.org',
    name: 'CutWire Studios',
  },

  fonts: {
    families: [
      { name: 'Hanken Grotesk', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [500] },
    ],
  },

  routeRules: {
    '/': { prerender: true },
    '/switchx': { prerender: true },
    '/products/**': { prerender: true },
    '/about': { prerender: true },
    '/download/**': { prerender: true },
    '/api/**': { cors: false },
    '/products/switchx': { redirect: { to: '/switchx', statusCode: 301 } },
  },

  typescript: {
    strict: true,
  },
})
