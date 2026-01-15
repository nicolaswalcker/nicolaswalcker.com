<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
  date?: string
}>()
</script>

<template>
  <div class="flex size-full flex-col items-start justify-center bg-amber-50 text-gray-950">
    <div class="mx-auto flex w-4/5 flex-col items-start gap-4">
      <h2>Confira essa postagem!</h2>
      <h1 class="m-0 text-6xl">
        {{ props.title }}
      </h1>
      <p class="m-0 text-3xl">
        {{ props.description }}
      </p>
      <time class="flex items-center gap-2"><Icon name="lucide:calendar" mode="svg" /> {{ formatDate(props.date) }}</time>
    </div>
  </div>
</template>
