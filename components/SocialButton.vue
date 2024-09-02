<script lang="ts" setup>
const props = defineProps<{
  href: string
  icon: string
}>()
</script>

<template>
  <NuxtLink external :href="props.href" target="_blank" class="flex items-center justify-center p-1 text-gray-700 transition-colors hover:text-gray-950">
    <Icon :name="props.icon" size="20" />
  </NuxtLink>
</template>
