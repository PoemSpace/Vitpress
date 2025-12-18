import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './styles/index.css'
import 'virtual:group-icons.css'
import backtotop from "./components/backtotop.vue" // 引入返回顶部组件
import Linkcard from "./components/Linkcard.vue" // 引入链接卡片
import Timeline from './components/Timeline.vue' // 引入时间轴组件
import Archives from './components/Archives.vue' // 引入归档组件
import Tags from './components/Tags.vue' // 引入标签组件

// import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
// import 'nprogress-v2/dist/index.css' // 进度条样式

import ArticleMetadata from "./components/ArticleMetadata.vue" // 引入文章元数据组件


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(backtotop),
    })
  },
  enhanceApp({ app, router }) {
    // 注册全局组件
    app.component('Linkcard', Linkcard)
    app.component('Timeline', Timeline)
    app.component('Archives', Archives)
    app.component('Tags', Tags)
    app.component('ArticleMetadata', ArticleMetadata) // 注册文章元数据组件

    // 确保路由正常工作
    if (typeof window !== 'undefined') {
      router.onBeforeRouteChange = () => {
        // 路由切换前的处理
        // NProgress.start() // 开始进度条
      }
      router.onAfterRouteChanged = () => {
        // 路由切换后的处理
        // NProgress.done() // 结束进度条
      }
    }
  }

}
