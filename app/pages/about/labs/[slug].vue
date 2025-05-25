<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const { data: doc } = await useAsyncData(
  `aboutLabs-${slug}`,
  () => queryCollection('aboutLabs').path(`/about/labs/${slug}`).first()
)
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3" />

          <v-col cols="12" md="6">
            <h1 class="text-h4 my-4">{{ doc?.title }}</h1>
            <ContentRenderer class="markdown-content" :value="doc?.body" />
          </v-col>

          <v-col cols="12" md="3" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>