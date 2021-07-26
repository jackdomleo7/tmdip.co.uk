require('dotenv').config();
const siteconfig = require('./siteconfig.json')

export default {
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s | ${siteconfig.brand_name.full}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no,date=no,address=no,email=no,url=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'modern-normalize/modern-normalize.css',
    'node_modules/cooltipz-css/src/cooltipz',
    '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  components: false, // Set to true when Jest has resolved auto-components
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: process.env.PRISMIC_ENDPOINT,
    apiOptions: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/svg-sprite',
    '@nuxt/image',
    '@nuxtjs/sitemap' // Always declare last
  ],
  robots: {
    UserAgent: '*',
    Allow: '/'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: siteconfig.base_url,
    exclude: ['/_icons', '/preview']
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    fallback: '404.html',
    async routes () {
      const Prismic = require('@prismicio/client');
      let generatedRoutes = []

      // Policy pages

      const client = Prismic.client(process.env.PRISMIC_ENDPOINT, {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
      })
      let policies = await client.query(Prismic.Predicates.at('document.type', 'policy'))
      policies.results.forEach((policyPage) => {
        generatedRoutes.push(
          {
            route: `/policies/${policyPage.uid}`,
            payload: policyPage
          }
        )
      })

      return generatedRoutes
    }
  }
}
