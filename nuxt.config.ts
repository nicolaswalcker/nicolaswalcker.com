import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/css/fonts.css'],
  runtimeConfig: {
    resendKey: process.env.RESEND_API_KEY,
  },
  content: {
    highlight: {
      theme: 'vitesse-light',
    },
  },
  site: {
    url: 'https://nicolaswalcker.com',
    defaultLocale: 'pt-BR',
    name: 'nicolaswalcker.com',
  },
  app: {
    head: {
      titleTemplate: '',
    },
  },
  ogImage: {
    componentOptions: {
      global: true,
    },
    fonts: [
      {
        name: 'Zodiak',
        weight: 400,
        path: '/fonts/Zodiak-Regular.woff',
      },
      {
        name: 'Zodiak',
        weight: 700,
        path: '/fonts/Zodiak-Bold.woff',
      },
    ],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@nuxt/image',
  ],
})
