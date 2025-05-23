<template>
  <v-app>
    <!-- App Bar: add mt-4 for vertical offset and align-center for centering content -->
    <v-app-bar app color="primary" dark class="d-flex align-center">
      <!-- Logo: remove bottom margin, add right margin to move a bit left → tighter to content -->
      <v-img
        class="mr-4"
        height="40"
        src="~/assets/logo.png"
        contain
      />

      <!-- Navigation items: center horizontally and vertically, and enlarge text -->
      <v-toolbar-items class="d-none d-md-flex mx-auto d-flex align-center">
        <div v-for="item in items" :key="item.title" class="mx-3">
          <v-menu offset-y open-on-hover>
            <template #activator="{ props }">
              <!-- Apply text-h6 for larger font size -->
              <v-btn text class="text-h6" v-bind="props">
                {{ item.title }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="sub in item.children"
                :key="sub"
                @click="$router.push(`/${item.title.toLowerCase()}/${sub.toLowerCase()}`)"
              >
                <v-list-item-title>{{ sub }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-toolbar-items>

      <v-spacer />

      <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = !drawer" />
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
    >
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.open"
          no-action
        >
          <template #activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>
          <v-list-item
            v-for="sub in item.children"
            :key="sub"
            @click="navigate(item.title, sub)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ sub }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Main content -->
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const drawer = ref(false)
const router = useRouter()

const items = ref([
  { title: 'About', children: ['Teams', 'People', 'Labs'], open: false },
  { title: 'Blogs', children: ['Competitions', 'Marketing', 'Updates'], open: false },
  { title: 'Products', children: ['AI', 'Games', 'Courses'], open: false },
  { title: 'Supports', children: ['Partners', 'Sponsors'], open: false },
])

function navigate(parent: string, sub: string) {
  drawer.value = false
  router.push(`/${parent.toLowerCase()}/${sub.toLowerCase()}`)
}
</script>

<style scoped>
/* Ensure buttons remain white */
.v-btn--text {
  color: white;
}
</style>