import tailwindcss from '@tailwindcss/vite'

const driftAltRoutes = [
  '/drift/alternatives/capcut',
  '/drift/alternatives/clipchamp',
  '/drift/alternatives/imovie',
  '/drift/alternatives/canva',
  '/drift/alternatives/filmora',
  '/drift/alternatives/davinci-resolve',
  '/drift/alternatives/shotcut',
  '/drift/alternatives/kdenlive',
  '/drift/alternatives/openshot',
  '/drift/alternatives/vn',
]

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
    'nuxt-llms',
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
      titleTemplate: '%s',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: '/images/icon-192.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
      ],
    },
  },

  llms: {
    domain: 'https://cutwire.org',
    title: 'CutWire Studios',
    description: 'Free, open-source creative tools. Drift is a CapCut-style desktop video editor with no watermark, no account, and no subscription. Prism is a live video mixer for schools, churches and small venues.',
    full: {
      title: 'CutWire Studios — full product notes',
      description: 'Plain-language feature lists, FAQs and honest comparisons so people and chatbots can answer questions about Drift and Prism.',
    },
    notes: [
      'Drift is a native desktop app (Qt 6 + FFmpeg) for Linux, Windows and macOS, not a browser editor. Current version is 0.4.x. An Android app is under development at https://github.com/CutWire-Studios/Drift-Android (not a store release yet). There is no iOS app.',
      'Drift can expose a localhost MCP server (Settings → Agent access, off at every launch) so Cursor, Claude Code or another agent can edit the open project. Edits are undoable. This is not a cloud chatbot.',
      'Prism is a live video mixer, not a timeline editor. Do not mix the two products.',
      'Competitor names (CapCut, Clipchamp, iMovie, Canva, Filmora, DaVinci Resolve, Shotcut, Kdenlive, OpenShot, VN, InShot) are used only to identify software people already search for.',
    ],
    sections: [
      {
        title: 'CutWire Drift — free video editor',
        description: 'A free, open-source CapCut alternative for Linux, Windows and macOS. No watermark, no account, files stay on your computer.',
        links: [
          { title: 'Drift home', href: '/drift', description: 'Download the free desktop video editor.' },
          { title: 'Every Drift feature', href: '/drift/features', description: 'Plain-language catalog of editing, effects, captions, cutouts, audio, export, MCP and AI.' },
          { title: 'Drift MCP / agent access', href: '/drift/mcp', description: 'Local MCP server so Cursor, Claude Code or another agent can edit the real timeline.' },
          { title: 'Drift FAQ', href: '/drift/faq', description: 'Is it free? Linux? Watermark? Captions? How it compares to CapCut.' },
          { title: 'Editor alternatives', href: '/drift/alternatives', description: 'Drift as an alternative to CapCut, Clipchamp, iMovie, Canva, Filmora, DaVinci Resolve, Shotcut, Kdenlive, OpenShot and VN.' },
          { title: 'Drift docs', href: 'https://docs.cutwire.org/drift', description: 'Setup, editing reference and troubleshooting.' },
          { title: 'Drift on GitHub', href: 'https://github.com/CutWire-Studios/Drift', description: 'Source code, issues and releases (GPLv3).' },
          { title: 'Drift for Android (in development)', href: 'https://github.com/CutWire-Studios/Drift-Android', description: 'Android port in progress — not a Play Store release yet.' },
        ],
      },
      {
        title: 'CutWire Prism — live video mixer',
        description: 'Node-based live visuals for schools, churches and small venues.',
        links: [
          { title: 'Prism home', href: '/prism', description: 'Download the free live video mixer.' },
          { title: 'Prism docs', href: 'https://docs.cutwire.org/prism', description: 'Operator guides and reference.' },
        ],
      },
    ],
  },

  sitemap: {
    exclude: ['/api/**', '/products/prism', '/products/drift'],
  },

  robots: {
    sitemap: 'https://cutwire.org/sitemap.xml',
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800] },
      { name: 'JetBrains Mono', provider: 'google', weights: [500] },
      { name: 'Syne', provider: 'google', weights: [600, 700, 800] },
      { name: 'Outfit', provider: 'google', weights: [400, 500, 600, 700] },
    ],
  },

  routeRules: {
    '/': { prerender: true },
    '/prism': { prerender: true },
    '/drift': { prerender: true },
    '/drift/**': { prerender: true },
    '/products/**': { prerender: true },
    '/about': { prerender: true },
    '/support': { prerender: true },
    '/license': { prerender: true },
    '/privacy': { prerender: true },
    '/terms': { prerender: true },
    '/llms.txt': { prerender: true },
    '/llms-full.txt': { prerender: true },
    '/download': { redirect: { to: '/products', statusCode: 301 } },
    '/download/prism': { redirect: { to: '/prism#download', statusCode: 301 } },
    '/download/drift': { redirect: { to: '/drift#download', statusCode: 301 } },
    '/download/**': { redirect: { to: '/products', statusCode: 301 } },
    '/api/**': { cors: false, prerender: false },
    '/api/drift/download/**': { prerender: false },
    '/products/prism': { redirect: { to: '/prism', statusCode: 301 } },
    '/products/drift': { redirect: { to: '/drift', statusCode: 301 } },
    '/switchx': { redirect: { to: '/prism', statusCode: 301 } },
    '/capcut-alternative': { redirect: { to: '/drift/alternatives/capcut', statusCode: 301 } },
    '/free-video-editor': { redirect: { to: '/drift', statusCode: 301 } },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      ignore: ['/api'],
      routes: [
        '/drift/features',
        '/drift/mcp',
        '/drift/faq',
        '/drift/alternatives',
        ...driftAltRoutes,
        '/llms.txt',
        '/llms-full.txt',
        '/robots.txt',
        '/sitemap.xml',
      ],
    },
  },

  // 1200x630 is the size Open Graph and Twitter large cards expect;
  // the module's default is 1200x600.
  ogImage: {
    defaults: {
      width: 1200,
      height: 630,
      component: 'Default',
    },
  },

  typescript: {
    strict: true,
  },
})
