// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["normalize.css", "@/assets/css/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/css/variables.scss" as *;`,
        },
      },
    },
  },
});
