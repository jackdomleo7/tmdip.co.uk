require('dotenv').config();
const siteconfig = require('./siteconfig.json')
const Prismic = require('@prismicio/client')

interface IGenerateRoute {
  route: string;
  payload?: Record<string, any>;
}

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
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no,date=no,address=no,email=no,url=no' },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
      { hid: 'color-scheme', name: 'color-scheme', content: 'light' }
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
  components: false,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: process.env.PRISMIC_ENDPOINT!,
    apiOptions: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN!
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
    Allow: '/',
    Sitemap: `${siteconfig.base_url}/sitemap.xml`
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: siteconfig.base_url,
    exclude: ['/_icons', '/preview']
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      ogHost: siteconfig.base_url,
      ogSiteName: siteconfig.brand_name.full,
      ogType: 'website',
      ogImage: {
        path: '/open-graph.png',
        width: '1200',
        height: '630',
        type: 'image/png'
      },
      twitterCard: 'summary_large_image'
    },
    manifest: {
      name: siteconfig.brand_name.full,
      short_name: siteconfig.brand_name.short,
      /* icons: handled by pwa.icons module, */
      description: 'Experts in interior fit-outs with over 30 years\' experience available all across the East Midlands, UK.',
      start_url: '/',
      display: 'browser',
      useWebmanifestExtension: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    fallback: '404.html',
    async routes (): Promise<IGenerateRoute[]> {
      let generatedRoutes: IGenerateRoute[] = []

      // Policy pages
      const client = Prismic.client(process.env.PRISMIC_ENDPOINT, {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
      })
      const policies = await client.query(Prismic.Predicates.at('document.type', 'policy'))
      policies.results.forEach((policyPage: Record<string, any>) => {
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
