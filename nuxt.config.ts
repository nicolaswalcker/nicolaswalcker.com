import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon'],
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
})
