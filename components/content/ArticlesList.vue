<script lang="ts" setup>
const { data } = await useAsyncData('articles', () =>
  queryContent('/articles').only(['_path', 'title', 'publishedAt']).where({ _path: { $ne: '/articles', $not: '/articles/template' } }).sort({ publishedAt: -1 }).find())

const articles = computed(() => {
  if (!data.value)
    return []
  return data.value.map(article => ({
    ...article,
    publishedAt: new Date(article.publishedAt).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }),
  }))
})
</script>

<template>
  <section class="not-prose">
    <template v-if="articles.length">
      <ul>
        <li v-for="article in articles" :key="article._path" class="border-b border-b-gray-300 transition-colors last:border-none hover:bg-amber-100/30">
          <NuxtLink class="flex w-full justify-between gap-2 px-2 py-3" :to="article._path">
            <h3 class="flex-1 truncate text-nowrap">
              {{ article.title }}
            </h3>
            <time>{{ article.publishedAt }}</time>
          </NuxtLink>
        </li>
      </ul>
    </template>
    <template v-else>
      <p>Nenhum artigo encontrado</p>
    </template>
  </section>
</template>
