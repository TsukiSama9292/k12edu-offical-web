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
      <v-toolbar-title>K12EDU成員介紹</v-toolbar-title>
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

    <!-- Footer -->
    <v-footer color="grey-lighten-4" app>
      <v-col class="text-center" cols="12">
        © {{ new Date().getFullYear() }} K12EDU
      </v-col>
    </v-footer>
  </v-app>
</template>

/* markdown-styles.css */
.markdown-content {
  line-height: 1.8;
  font-size: 1rem;
  color: #333;
  padding: 1rem;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-weight: bold;
}

.markdown-content p {
  margin-bottom: 1em;
  text-indent: 2em; /* 首行縮排 */
}

.markdown-content ul,
.markdown-content ol {
  padding-left: 2em;
  margin-bottom: 1em;
}

.markdown-content blockquote {
  border-left: 4px solid #ccc;
  padding-left: 1em;
  color: #666;
  margin: 1em 0;
  background-color: #f9f9f9;
}
