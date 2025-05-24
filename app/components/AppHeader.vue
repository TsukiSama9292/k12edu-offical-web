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
        v-for="item in items"
        :key="item"
        class="mx-2"
        color="white"
        variant="tonal"
        rounded="xl"
        @click="navigate(item)"
      >
        {{ item }}
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
        v-for="item in items"
        :key="item"
        @click="navigate(item)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item }}</v-list-item-title>
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

const items = ref(['About', 'Blogs', 'Products', 'Supports'])

function navigate(title: string) {
  drawer.value = false
  router.push(`/${title.toLowerCase()}`)
}
</script>