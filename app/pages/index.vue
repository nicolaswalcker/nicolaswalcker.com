<script setup lang="ts">
const { data: page } = await useAsyncData(() => queryCollection('index').path('/').first())

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}

useSeoMeta({
  title: 'Nicolas Walcker',
  ogTitle: 'Nicolas Walcker',
  description: 'Sou um desenvolvedor frontend que mora e trabalha no Brasil. Gosto muito de desenvolver coisas novas e diferentes.',
  ogDescription: 'Sou um desenvolvedor frontend que mora e trabalha no Brasil. Gosto muito de desenvolver coisas novas e diferentes.',
})

defineOgImageComponent('Main')
</script>

<template>
  <section class="prose">
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>
      Página não encontrada.
    </div>
  </section>
</template>
