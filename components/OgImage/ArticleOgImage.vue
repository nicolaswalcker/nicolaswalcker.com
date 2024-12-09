<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
  category: string
}>()
</script>

<template>
  <div class="flex w-full flex-col items-start justify-center bg-amber-50 text-gray-950">
    <div class="mx-auto flex w-4/5 flex-col items-start gap-4">
      <h2>Confira esse artigo!</h2>
      <h1 class="m-0 text-6xl">
        {{ props.title }}
      </h1>
      <p class="m-0 text-3xl">
        {{ props.description }}
      </p>
      <span class="m-0 border border-gray-950 px-1 text-2xl">
        {{ props.category }}
      </span>
    </div>
  </div>
</template>
