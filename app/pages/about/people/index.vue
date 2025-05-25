<template>
  <div v-if="$route.path === '/about/people'">
    <Card :title="pageTitle" :items="links" />
  </div>
  <NuxtPage v-else />
</template>

<script setup lang="ts">
import Card from '~/components/Card.vue'

const pageTitle = '成員'

const links = [
  {
    title: '林宣佑',
    to: '/about/people/xuanyoulin',
    icon: 'mdi-account-tie',
    desc: '組織創辦人，專攻各類技術與管理',
  },
  {
    title: '吳享恩',
    to: '/about/people/hsiangenwu',
    icon: 'mdi-gamepad-variant',
    desc: '原始團隊成員，遊戲前端開發者',
  },
  {
    title: '陳柏豪',
    to: '/about/people/pohaochen',
    icon: 'mdi-web-box',
    desc: '原始團隊成員，全端開發者',
  },
  {
    title: '黃啟庭',
    to: '/about/people/chitinghuang',
    icon: 'mdi-api',
    desc: '原始團隊成員，後端開發者',
  },
]
</script>

<style>

</style>