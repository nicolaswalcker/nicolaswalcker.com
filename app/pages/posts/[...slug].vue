<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('posts').path(route.path).first())

function formatDate(date: string | undefined) {
  if (!date)
    return ''
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
}
</script>

<template>
  <main>
    <header class="flex flex-col gap-4">
      <h1 class="font-bold text-3xl">
        {{ page?.title }}
      </h1>
      <div class="flex items-center justify-between pb-4">
        <time class="flex items-center gap-2"><Icon name="lucide:calendar" /> {{ formatDate(page?.date) }}</time>
      </div>
    </header>
    <article class="prose">
      <ContentRenderer v-if="page" :value="page" />
    </article>
  </main>
</template>

<style>

</style>
