<!-- components/Card.vue -->
<template>
  <v-container max-width="60%" class="py-12">
    <h1 class="text-h3 mb-8 font-weight-bold pl-8">{{ title }}</h1>

    <v-row dense direction="column" align="center" class="gap-y-8 mb-6">
      <v-col
        cols="12"
        v-for="item in items"
        :key="item.title"
        class="mb-8"
      >
        <v-card
          hover
          elevation="2"
          rounded="xl"
          max-width="50%"
          class="mx-auto hover:shadow-lg transition-shadow"
        >
          <v-card-title class="d-flex align-center justify-start">
            <v-icon size="48">{{ item.icon }}</v-icon>
            <span class="ml-4 text-h5 font-weight-bold">
              {{ item.title }}
            </span>
          </v-card-title>

          <v-card-text class="text-center text-h6 font-weight-bold">
            {{ item.desc }}
          </v-card-text>

          <v-card-actions class="justify-center">
            <NuxtLink :to="item.to" class="text-decoration-none">
              <v-btn text rounded="pill" class="text-h6 font-weight-bold">
                前往
              </v-btn>
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  items: {
    title: string
    to: string
    icon: string
    desc: string
  }[]
}>()
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}
</style>
