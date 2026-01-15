<script lang="ts" setup>
const { data: posts } = await useAsyncData('blogs', () =>
  queryCollection('posts').where('draft', 'IS NULL', false).order('date', 'DESC').all())
if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'blogs posts not found',
    fatal: true,
  })
}

function formatDate(date: string) {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <section class="not-prose">
    <template v-if="posts?.length">
      <ul>
        <li v-for="post in posts" :key="post.path" class="border-b border-b-gray-300 transition-colors last:border-none hover:bg-amber-100/30">
          <NuxtLink class="flex w-full justify-between gap-2 px-2 py-3" :to="post.path">
            <h3 class="flex-1 truncate text-nowrap">
              {{ post.title }}
            </h3>
            <time>{{ formatDate(post.date) }}</time>
          </NuxtLink>
        </li>
      </ul>
    </template>
    <template v-else>
      <p>Nenhum artigo encontrado</p>
    </template>
  </section>
</template>
