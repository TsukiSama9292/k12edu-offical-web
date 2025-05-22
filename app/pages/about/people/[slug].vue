<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const fullPath = `/about/people/${slug}`

const { data: doc, pending, error } = await useAsyncData(
  `aboutPeople-${slug}`,
  () =>
    queryCollection('aboutPeople')
      .path(fullPath)   // 一定要帶絕對路徑、大小寫要吻合
      .first()
)
</script>

<template>
  <div v-if="pending">載入中…</div>
  <div v-else-if="error || !doc">
    <p>路徑 {{ fullPath }} 沒找到對應 Markdown。</p>
  </div>
  <div v-else>
    <h1>{{ doc.title }}</h1>
    <ContentRenderer :value="doc.body" />
  </div>
</template>
