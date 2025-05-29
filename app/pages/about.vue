<!-- pages/about.vue -->
<template>
  <div v-if="$route.path === '/about/'">
    <Card :title="pageTitle" :items="links" />
  </div>
  <NuxtPage v-else />
</template>

<script setup lang="ts">
import Card from '~/components/Card.vue'

const pageTitle = '關於我們'

const links = [
  {
    title: '團隊',
    to: '/about/teams',
    icon: 'mdi-account-group',
    desc: '了解我們的核心團隊成員',
  },
  {
    title: '成員',
    to: '/about/people',
    icon: 'mdi-account-circle',
    desc: '瀏覽所有成員與個人檔案',
  },
  {
    title: '實驗室',
    to: '/about/labs',
    icon: 'mdi-flask',
    desc: '探索我們的研發實驗室與項目',
  },
]
</script>
