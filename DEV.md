# K12EDU 官方網頁
### 原始安裝過程
```bash
npm create vuetify@latest
>> Nuxt(推薦)
>> All Yes
>> npm
>> Don't init git
...
```
### RUN
```bash
npm run dev
```
### 資料夾結構
```bash
app/                                   # 專案根目錄
├── app.vue                         # Nuxt 應用的主組件入口，通常包含 <NuxtLayout />
│
├── assets/                         # 靜態資源（不會經過 webpack 打包的 public 資源）
│   ├── logo.png                   # 網站圖示（可用於 Favicon、品牌標誌）
│   ├── logo.svg                   # 向量版 Logo，適用於高解析畫面
│   └── settings.scss              # 全站共用 SCSS 設定（變數、混合、基礎樣式）
│
├── components/                     # 可重複使用的 Vue 元件
│   ├── AppFooter.vue              # 網站 Footer 區塊元件
│   └── HelloWorld.vue             # 範例元件（可移除或改為展示用元件）
│
├── content/                        # Markdown 內容資料夾（供 @nuxt/content 使用）
│   ├── about/                     # 關於我們頁面內容
│   │   └── team.md               # 團隊介紹 Markdown 文件
│   │
│   ├── blogs/                     # 部落格/新聞文章內容
│   │   ├── competitions/         # 競賽相關文章
│   │   ├── marketing/            # 行銷宣傳文章
│   │   └── updates/              # 新聞更新、系統公告
│   │
│   ├── products/                  # 產品介紹（數位教育、遊戲、AI 工具）
│   │   ├── ai/                   # AI 相關產品內容
│   │   ├── courses/              # 教學課程與教材內容
│   │   └── games/                # 遊戲產品內容
│   │
│   └── supports/                  # 支援與合作內容
│       ├── partners/              # 合作夥伴內容
│       └── sponsors/              # 贊助商介紹內容
│
├── layouts/                        # 網站版面配置
│   └── default.vue                # 預設佈局，通常包含 Header、Footer 和 <NuxtPage />
│
├── pages/                          # Nuxt 路由頁面
│   └── index.vue                  # 首頁頁面（對應 `/` 路由）
│
└── plugins/                        # 外掛與初始化程式碼
    └── vuetify.ts                  # Vuetify 3 插件初始化設定（於 Nuxt 中註冊 Vuetify）
nuxt.config.ts                         # Nuxt 設定檔
```

```bash
content/                               # Markdown 內容資料夾（供 @nuxt/content 使用）
├── about                           # 關於我們頁面內容
│   ├── labs                       # 實驗室介紹
│   ├── people                     # 團隊成員介紹
│   └── teams                      # 團隊介紹
│       └── original-team.md       # 原始團隊介紹 Markdown 文件
├── blogs                           # 部落格/新聞文章內容
│   ├── competitions               # 競賽相關文章
│   ├── marketing                  # 行銷宣傳文章
│   └── updates                    # 更新、系統公告
├── docs                            # 文件資料夾
│   └── hello.md                   # 文件範例
├── products                        # 產品介紹（數位教育、遊戲、AI 工具）
│   ├── ai                         # AI 相關產品內容
│   ├── courses                    # 教學課程與教材內容
│   └── games                      # 遊戲產品內容
└── supports                        # 支援與合作內容
    ├── partners                    # 合作夥伴內容
    └── sponsors                    # 贊助商介紹內容
```