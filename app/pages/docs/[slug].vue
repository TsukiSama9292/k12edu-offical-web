<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const { data: doc } = await useAsyncData(
  `docs-${slug}`,
  () => queryCollection('docs').path(`/docs/${slug}`).first()
)
</script>

<template>
  <h1>{{ doc?.title }}</h1>
  <ContentRenderer :value="doc?.body" />
</template>