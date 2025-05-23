<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const { data: doc } = await useAsyncData(
  `aboutPeople-${slug}`,
  () => queryCollection('aboutPeople').path(`/about/people/${slug}`).first()
)
</script>

<template>
  <v-app>
    <!-- Header -->
    <v-app-bar color="primary" dark flat>
      <v-toolbar-title>K12EDU 成員介紹</v-toolbar-title>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <v-row>
          <!-- 左側空白 20% -->
          <v-col cols="12" md="3" />

          <!-- 中間內容 60% -->
          <v-col cols="12" md="6">
            <h1 class="text-h4 my-4">{{ doc?.title }}</h1>
            <ContentRenderer class="markdown-content" :value="doc?.body" />
          </v-col>

          <!-- 右側空白 20% -->
          <v-col cols="12" md="3" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>