<script lang="ts" setup>
// defineOgImage({
//   component: 'ArticleOgImage',
// })
</script>

<template>
  <article class="prose prose-pre:bg-amber-100/35">
    <ContentDoc>
      <template #not-found>
        <p>Postagem nao encontrada</p>
      </template>
      <template #article="{ doc }">
        <ContentRenderer :value="doc" />
      </template>
    </ContentDoc>
  </article>
</template>
