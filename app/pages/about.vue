<template>
  <div v-if="$route.path === '/about'">
    About Page Content
  </div>
  <NuxtPage v-else />
</template>