const companyName = 'TMD Interior Projects & Building Services';

export default {
  mode: 'universal',
  head: {
    titleTemplate: `%s | Shop fitting, Interior fit-outs, Timber homes | ${companyName}`,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#f0592a' }
    ]
  },
  pwa: {
    meta: {
      name: companyName,
      author: `Jack Domleo, ${companyName}`,
      description:
        'Experts in retail, interior fit-outs and timber homes. From building new bespoke houses to HMOs, from shops to offices and pubs to restaurants.',
      ogType: 'website',
      ogHost: 'https://www.tmdip.co.uk',
      ogImage: {
        path: '/open-graph.png',
        width: '1200',
        height: '630',
        type: 'image/png'
      },
      twitterCard: 'summary_large_image',
      twitterSite: '@jackdomleo7',
      twitterCreator: '@jackdomleo7'
    }
  },
  loading: { color: '#fff' },
  css: [
    'normalize.css',
    'node_modules/cooltipz-css/src/cooltipz',
    '@/assets/styles/main.scss'
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/svg-sprite',
    'nuxt-leaflet'
  ],
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
        cssnano: {}
      }
    }  
  },
  generate: {
    dir: 'docs'
  },
  publicPath: '/'
}
