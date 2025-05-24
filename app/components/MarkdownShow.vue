<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3" />

          <v-col cols="12" md="6">
            <div v-if="pending">載入中...</div>
            <div v-else-if="error">載入失敗：{{ error.message }}</div>
            <div v-else>
              <h1 class="text-h4 my-4">{{ doc?.title }}</h1>
              <ContentRenderer class="markdown-content" :value="doc?.body" />
            </div>
          </v-col>

          <v-col cols="12" md="3" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup lang="ts">
import { useRoute } from 'vue-router'

// 定義組件 Props
const props = defineProps({
  collectionName: { type: String, required: true },
  basePath: { type: String, required: true },
})

const route = useRoute()
const slug = (route.params.slug as string) || ''
const fullPath = `${props.basePath}/${slug}`

// 使用 useAsyncData 取得對應文件
const { data: doc, pending, error } = await useAsyncData(
  `${props.collectionName}-${slug}`,
  () => queryCollection(props.collectionName)
           .path(fullPath)
           .first()
)
</script>

<style scoped>
.markdown-content {
  /* 根據需求加入自訂樣式 */
}
</style>
