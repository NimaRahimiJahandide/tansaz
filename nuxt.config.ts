import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    css: ["~/assets/css/tailwind.css"],

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
          title: 'تن ساز',
          htmlAttrs: {
            lang: 'fa',
          },
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          ],
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        }
      },

    modules: [
      "@vueuse/nuxt",
      "@pinia/nuxt",
      "@nuxt/icon",
      "nuxt-swiper",
      'nuxt-aos',
      "nuxt-schema-org",
      "@nuxtjs/sitemap",
      // "@nuxtjs/seo",
      "@nuxt/image",
      'nuxt-vitalizer',
    ],

    site: { 
      url: 'https://tansazmed.com/', 
      name: 'تن ساز',
      gzip: true,
      trailingSlash: true,
    }, 
    // seo: {
    //   redirectToCanonicalSiteUrl: true,
    // },
    sitemap: {
      defaults: {
        lastmod: new Date().toISOString(),
        priority: 0.5,
        changefreq: 'weekly'
      }
    },
    image: {
      presets: {
        default: {
          modifiers: {
            format: 'webp'
          }
        }
      }
    },
    vitalizer: {
      disableStylesheets: 'entry',
      disablePrefetchLinks: true,
      delayHydration: {
        hydrateOnEvents: ['mousemove', 'scroll', 'keydown', 'click', 'touchstart', 'wheel'],
        idleCallbackTimeout: 8000,
        postIdleTimeout: 4000
      }
    },
    vite: {
        plugins: [tailwindcss()],
    },
});