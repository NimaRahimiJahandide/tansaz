import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    css: ["~/assets/css/tailwind.css"],

    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
      },

    modules: [
      "@vueuse/nuxt",
      "@pinia/nuxt",
      "@nuxt/icon",
      "nuxt-swiper",
      'nuxt-aos',
      "nuxt-schema-org",
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});