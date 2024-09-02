import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    resendKey: process.env.RESEND_API_KEY,
  },
  content: {
    highlight: {
      theme: 'vitesse-light',
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/icon', '@nuxtjs/color-mode'],
})
