// 导入 VitePress 核心配置函数
import { defineConfig } from 'vitepress'
// 导入侧边栏生成工具
import { withSidebar } from 'vitepress-sidebar'
// 导入导航栏配置
import { nav } from './configs/nav.mts'
// 导入社交链接配置
import { socialLinks } from './configs/socialLinks.mts'
// 导入页脚配置
import { footer } from './configs/footer.mts'
// 导入代码组图标插件
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
// 导入侧边栏配置
import { sidebarConfig } from './configs/sidebar.mts'

// 基础配置对象
const baseConfig = {
  // 网站标题
  title: "如梦令",
  // 网站描述
  description: "观看和感受正在经历的事物本相，而不是其名称。",
  // 启用干净的URL（移除.html后缀）
  cleanUrls: true,
  // 显示最后更新时间
  lastUpdated: true,
  // 设置网站默认语言
  lang: "zh-CN",
  
  // 主题配置
  themeConfig: {
    // 导航栏配置
    nav,
    // 社交链接配置
    socialLinks,
    // 侧边栏配置
    sidebarConfig,
    // 页脚配置
    footer,
    // 网站Logo
    logo: "/logo-light.png",
    // 深色模式切换按钮文本
    darkModeSwitchLabel: "主题",
    // 侧边栏菜单标签
    sidebarMenuLabel: "菜单",
    // 返回顶部按钮文本
    returnToTopLabel: "返回顶部",
    // 文档大纲配置
    outline: {
      // 显示的标题级别范围
      level: [2, 4],
      // 大纲标题文本
      label: "目录",
    },
    // 文档底部导航配置
    docFooter: {
      // 上一页按钮文本
      prev: "上一页",
      // 下一页按钮文本
      next: "下一页",
    },
    // 搜索配置
    search: {
      // 使用本地搜索
      provider: "local",
    },
    // 编辑链接配置
    editLink: {
      // 编辑链接文本
      text: "在 GitHub 上编辑此页",
      // 编辑链接模板
      pattern: "https://github.com/PoemSpace",
    },
    // 最后更新时间配置
    lastUpdated: {
      // 更新时间文本
      text: '最后更新于',
      // 时间格式化选项
      formatOptions: {
        // 显示完整日期
        dateStyle: 'true',
        // 显示简短时间
        timeStyle: 'short'
      }
    },
    // Carbon广告配置
    // carbonAds: {
    //   // Carbon广告代码
    //   code: 'your-carbon-code',
    //   // Carbon广告位置
    //   placement: 'your-carbon-placement',
    // },
  },
  
  // Markdown配置
  markdown: {
    // 配置Markdown插件
    config(md) {
      // 使用代码组图标插件
      md.use(groupIconMdPlugin)
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      }
    },
    // 启用代码行号
    lineNumbers: true,
    // 启用数学公式支持
    math: true,
    // 图片配置
    image: {
      // 启用图片懒加载
      lazyLoading: true
    },
    // 代码高亮主题配置
    theme: {
      // 浅色模式主题
      light: "github-light",
      // 深色模式主题
      dark: "one-dark-pro",
    },
    // 自定义容器标签配置
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
      noteLabel: "笔记",
    },
  },
  
  // Vite配置
  vite: {
    // Vite插件配置
    plugins: [
      // 使用代码组图标插件
      groupIconVitePlugin()
    ],
  },
}

// 使用withSidebar包装基础配置，自动生成侧边栏
export default defineConfig(withSidebar(baseConfig, sidebarConfig))
