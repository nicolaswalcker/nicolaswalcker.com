import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/seo',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  theme: 'light',
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'one-light',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL,
    },
  },
  site: {
    url: process.env.SITE_URL || 'http://localhost:3000',
    name: 'nicolaswalcker.com',
    defaultLocale: 'pt-BR',
  },
  ogImage: {
    componentOptions: {
      global: true,
    },
    fonts: [
      {
        name: 'Zodiak',
        weight: '400',
        path: '/fonts/Zodiak-Regular.ttf',
      },
      {
        name: 'Zodiak',
        weight: '700',
        path: '/fonts/Zodiak-Bold.ttf',
      },
    ],
  },
})
