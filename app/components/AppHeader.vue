<template>
  <v-app-bar
    app
    color="primary"
    dark
    class="px-0"
    content-class="px-0"
  >
    <!-- 官方 Logo -->
    <v-app-bar-title
      class="d-flex align-center justify-start px-0"
      style="cursor: pointer"
      @click="$router.push('/')"
    >
      <img
        src="@/assets/logo.png"
        alt="Logo"
        height="40"
        style="width: auto; display: block;"
      />
    </v-app-bar-title>

    <!-- 導航按鈕 -->
    <div
      class="d-none d-md-flex align-center"
      style="position: absolute; left: 50%; transform: translateX(-50%);"
      v-show="!drawer"
    >
      <v-tooltip v-for="item in items" :text="item.hint" content-class="rounded-pill white-tooltip">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            :key="item.title"
            @click="navigate(item.path)"
            class="mx-2 font-weight-bold"
            color="white"
            variant="tonal"
            rounded="xl"
            size="large"
          >
            {{ item.title }}
          </v-btn>
        </template>
      </v-tooltip>
    </div>

    <v-spacer />
    
    <!-- 手機版導航欄位 -->
    <v-app-bar-nav-icon
      class="d-flex d-md-none"
      @click="drawer = !drawer"
    />
  </v-app-bar>

  <!-- 手機版導航抽屜 -->
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    right
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="navigate(item.path)"
      >
        <v-list-item-content>
          <v-list-item-title class="text-h5 py-4">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const drawer = ref(false)
const router = useRouter()

const items = [
  { title: '關於', path: 'about', hint: '關於我們' },
  { title: '文章', path: 'blogs', hint: '最新文章' },
  { title: '產品', path: 'products', hint: '我們的產品' },
  { title: '協作', path: 'supports', hint: '合作與贊助' },
  { title: '聯絡', path: 'contact', hint: '聯絡我們' }
]

// 點擊時使用路由 path
function navigate(path: string) {
  drawer.value = false
  router.push(`/${path}/`)
}
</script>

<style scoped>
.v-tooltip> ::v-deep(.v-overlay__content) {
background: white;
color: black;
}
</style>