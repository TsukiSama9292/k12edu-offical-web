<template>
  <h1>{{ doc?.title }}</h1>
  <ContentRenderer :value="doc?.body" />
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const { data: doc } = await useAsyncData(
  `aboutLabs-${slug}`,
  () => queryCollection('aboutLabs').path(`/about/labs/${slug}`).first()
)
</script>