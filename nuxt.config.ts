/*
    File Name: nuxt.config.js
    Description: config Component in full page
    Component Name: config component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

*/
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    defaults: {
      useAsyncData: {
        deep: false
      },
      useFetch: {
        retry: false,
        retryDelay: 100,
        retryStatusCodes: [500],
        timeout: 100
      }
    }
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false
      }
    }
  },
  vite: {
    optimizeDeps: {
      exclude: [
        'cookie'
      ]
    }
  },
  runtimeConfig: {
    public: {
      WEBSITE_NAME_EN: process.env.WEBSITE_NAME_EN,
      WEBSITE_ADDRESS: process.env.WEBSITE_ADDRESS,
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  nitro: {
    baseURL: "http://localhost:8000",
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  }, routeRules: {
    "/**": { swr: true },
    "/dashboard/**": { ssr: false },
  },
  ssr: true,
  devtools: { enabled: true },

  build: {
    transpile: ["primevue"]
  },
  ///@ts-ignore
  modules: ["@bootstrap-vue-next/nuxt", "@kevinmarrec/nuxt-pwa",],
  ///@ts-ignore
 
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=600,initial-scale=1',
      title: 'فنام',
    }
  },
  pwa: {
    manifest: {
      name: 'فنام',
      short_name: 'فنام',
      description: "فنام"
    },

    icon: {
      source: './public/logofanam.png',
      fileName: 'logofanam.png',
      sizes: [64, 128, 256, 384, 512]
    },
    workbox: {

    }
  },

  bootstrapVueNext: {
    //@ts-ignore
    icons: true,
    composables: true, // Will include all composables
    // composables: {useBreadcrumb: true, useColorMode: true, all: false}, // Will include only useBreadcrumb & useColorMode
    // composables: {useBreadcrumb: false, useColorMode: false, all: true} // Will include everything except useBreadcrumb & useColorMode
  },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primeicons/primeicons.css",
    "~/assets/css/scss/font/iransans.scss",
    "~/assets/css/font-awesome.css",
    "~/assets/css/bootstrap.css",
    "~/assets/css/global.css",
    "~/assets/css/header.css",
    "~/assets/css/responsive.css",
    "~/assets/css/style.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "~/assets/css/scss/index.scss"
  ],
  plugins: [{ src: "@/plugins/i18n.ts" },


  { src: "@/plugins/primevue.ts" }],
});
