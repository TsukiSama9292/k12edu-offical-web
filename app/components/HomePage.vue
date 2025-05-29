<template>
  <v-container fluid class="pa-0">
    <v-sheet
      height="100vh"
      class="d-flex align-center justify-center pa-12"
    >
      <v-row align="center" justify="center" class="text-center">
        <v-col cols="12" md="8">
          <v-img
            src="/logo.png"
            max-width="200"
            class="mx-auto mb-6"
          />
          <h1 class="text-h2 font-weight-bold mb-2">K12EDU</h1>
          <p class="text-h5">讓學習變得有趣、有挑戰性、有益！</p>
          
          <v-btn
            color="primary"
            href="https://discord.gg/dFf4cG33dT"
            target="_blank"
            class="mx-2 font-weight-bold my-4"
            size="x-large"
            rounded="xl"
          >
            加入 Discord 社群
          </v-btn>
          <v-btn
            color="secondary"
            href="https://game.k12edu.com"
            target="_blank"
            class="mx-2 font-weight-bold my-4"
            size="x-large"
            rounded="xl"
          >
            免費開始遊戲
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet height="100vh">
      <v-row align="center" justify="center">
        <v-col cols="12" md="10">
          <h2 class="text-h4 font-weight-bold mb-6 text-center">我們的服務</h2>
          <div class="service-carousel mx-auto">
            <v-carousel
              hide-delimiter-background
              cycle
              continuous
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
              >
                <v-img
                  :src="slide.src"
                  class="fill-height"
                  gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.7)"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <h3 class="white--text font-weight-bold text-h4">{{ slide.title }}</h3>
                  </v-row>
                </v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
    
    <v-sheet height="100vh">
      <v-row align="center" justify="center" class="text-center">
        <v-col cols="12" md="10">
          <h2 class="text-h4 font-weight-bold mb-6 text-center">介紹影片</h2>
          <div class="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/qR2zTcbmtkU?si=wjzhk3Kd_oMJjvIB"
              title="K12EDU 介紹影片"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 路徑從 public 資料夾根目錄開始
const slides = ref([
  { src: '/service1.png', title: '數位學習教育遊戲' },
  { src: '/service2.png', title: 'AI 學習助理' },
  { src: '/service3.png', title: '教師管理網站' },
  { src: '/service4.png', title: '線上程式解題網站' },
])
</script>


<style scoped>
/* 限制寬度為視窗 60%，並保持 16:9 比例 */
.service-carousel {
  max-width: 60vw;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
/* 讓 carousel 滿版顯示父容器 */
.service-carousel .v-carousel {
  height: 100% !important;
}
.video-wrapper {
  position: relative;
  /* 16:9 高寬比：9 / 16 = 56.25% */
  padding-bottom: 56.25%;  /* 定義容器高度 */
  height: 0;               /* 高度由 padding-bottom 決定 */
  overflow: hidden;
}
.video-wrapper iframe {
  position: absolute;
  /* 左右邊界都設 0，元素寬度小於容器時可居中 */
  left: 0; right: 0;
  margin: 0 auto;
  width: 80%;                       
  height: 80%;
}
</style>