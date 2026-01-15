<script lang="ts" setup>
const props = withDefaults(defineProps<{
  href: string
  icon: string
  external?: boolean
}>(), {
  external: true,
})
</script>

<template>
  <NuxtLink :external="props.external" :href="props.href" :target="props.external ? '_blank' : '_self'" class="flex items-center justify-center p-1 text-gray-700 transition-colors hover:text-gray-950">
    <Icon :name="props.icon" size="20" />
  </NuxtLink>
</template>
