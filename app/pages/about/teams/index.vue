<template>
  <div v-if="$route.path === '/about/teams'">
    <Card :title="pageTitle" :items="links" />
  </div>
  <NuxtPage v-else />
</template>

<script setup lang="ts">
import Card from '~/components/Card.vue'

const pageTitle = '實驗室'

const links = [
  {
    title: '原始團隊',
    to: '/about/teams/original',
    icon: 'mdi-school',
    desc: '四人組成，專注於教育與數位科技的結合',
  },
]
</script>

<style>

</style>