// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
  
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    '@/assets/scss/_reset.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/scss/_mixin.scss" as *;
          @use "@/assets/scss/_variables.scss" as *;
        `
        }
      }
    }
  }
  

})
