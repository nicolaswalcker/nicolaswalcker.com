<script lang="ts" setup>
const config = useRuntimeConfig()
const links = ref([
  {
    href: 'https://www.instagram.com/nicaaaaoo/',
    icon: 'lucide:instagram',
  },
  {
    href: 'https://bsky.app/profile/nicolaswalcker.com',
    icon: 'tabler:brand-bluesky',
  },
  {
    href: 'https://www.linkedin.com/in/nicolas-walcker/',
    icon: 'lucide:linkedin',
  },
  {
    href: 'https://github.com/nicolaswalcker',
    icon: 'lucide:github',
  },
  {
    href: `${config.public.siteUrl}/rss.xml`,
    icon: 'lucide:rss',
    external: false,
  },
])
</script>

<template>
  <div class="container mx-auto flex size-full max-w-2xl flex-col items-start p-4">
    <header class="flex w-full flex-col items-center justify-between md:flex-row md:items-end">
      <NuxtLink to="/" class="group transition-transform">
        <h1 class="text-center text-3xl font-bold transition-transform group-active:-translate-x-3 md:text-left">
          Nicolas Walcker
        </h1>
        <p class="text-center transition-transform group-active:-translate-x-3 md:text-left">
          Frontend Engineer
        </p>
      </NuxtLink>
    </header>
    <main class="w-full flex-1 py-10">
      <slot />
    </main>
    <footer class="flex w-full items-center justify-start py-3">
      <div class="flex items-center gap-2">
        <SocialButton v-for="link in links" :key="link.href" :external="link.external" :href="link.href" :icon="link.icon" />
      </div>
    </footer>
  </div>
</template>
