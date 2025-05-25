<template>
  <div v-if="$route.path === '/about/labs'">
    <Card :title="pageTitle" :items="links" />
  </div>
  <NuxtPage v-else />
</template>

<script setup lang="ts">
import Card from '~/components/Card.vue'

const pageTitle = '實驗室'

const links = [
  {
    title: 'RFID 實驗室',
    to: '/about/labs/rfid',
    icon: 'mdi-access-point',
    desc: '原始團隊所在的實驗室',
  },
]
</script>

<style>

</style>