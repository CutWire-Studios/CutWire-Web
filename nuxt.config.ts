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

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: '/images/icon-192.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800] },
      { name: 'JetBrains Mono', provider: 'google', weights: [500] },
    ],
  },

  routeRules: {
    '/': { prerender: true },
    '/prism': { prerender: true },
    '/products/**': { prerender: true },
    '/about': { prerender: true },
    '/download': { redirect: { to: '/prism#download', statusCode: 301 } },
    '/download/**': { redirect: { to: '/prism#download', statusCode: 301 } },
    '/api/**': { cors: false },
    '/products/prism': { redirect: { to: '/prism', statusCode: 301 } },
    '/switchx': { redirect: { to: '/prism', statusCode: 301 } },
  },

  typescript: {
    strict: true,
  },
})
