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
      class="d-none d-md-flex mx-auto align-center"
      v-show="!drawer"
    >
      <v-btn
        v-for="[title, path] in Object.entries(items)"
        :key="title"
        @click="navigate(path)"
        class="mx-2 font-weight-bold"
        color="white"
        variant="tonal"
        rounded="xl"
        size="large"
      >
        {{ title }}
      </v-btn>
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
        v-for="[title, path] in Object.entries(items)"
        :key="title"
        @click="navigate(path)"
      >
        <v-list-item-content>
          <v-list-item-title class="text-h5 py-4">{{ title }}</v-list-item-title>
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

const items = {
  '關於': 'about',
  '文章': 'blogs',
  '產品': 'products',
  '協作': 'supports'
}

// 點擊時使用路由 path
function navigate(path: string) {
  drawer.value = false
  router.push(`/${path}`)
}
</script>