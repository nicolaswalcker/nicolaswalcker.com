<script setup lang="ts">
defineOgImage({
  component: 'Main',
})
useSeoMeta({
  title: 'Nicolas Walcker',
  ogTitle: 'Nicolas Walcker',
  description: 'Sou um desenvolvedor frontend que mora e trabalha no Brasil. Gosto muito de desenvolver coisas novas e diferentes.',
  ogDescription: 'Sou um desenvolvedor frontend que mora e trabalha no Brasil. Gosto muito de desenvolver coisas novas e diferentes.',
})
</script>

<template>
  <section class="prose">
    <ContentDoc path="/articles" />
  </section>
</template>
