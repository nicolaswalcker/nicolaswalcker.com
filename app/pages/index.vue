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
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
})
</script>

<template>
  <section class="prose">
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>
      Página não encontrada.
    </div>
  </section>
</template>
