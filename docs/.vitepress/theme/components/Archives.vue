<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../posts.data'
import { Icon } from '@iconify/vue' // 1. 引入 Icon 组件

// 2. 辅助函数：判断是 Iconify ID (包含冒号) 还是普通 Emoji
const isIconify = (text: string) => {
    return text && text.includes(':')
}

// 按年份分组逻辑
const archives = computed(() => {
    const groups = {}
    posts.forEach((post) => {
        const date = new Date(post.date.time)
        const year = date.getFullYear()
        if (!groups[year]) groups[year] = []
        groups[year].push(post)
    })

    return Object.keys(groups)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => ({
            year,
            posts: groups[year],
        }))
})
</script>

<template>
    <div class="archive-grid-page">
        <div class="header-bar">
            <h2 class="page-title">全部文章</h2>
            <span class="meta-info">共 {{ posts.length }} 篇</span>
        </div>

        <div v-for="group in archives" :key="group.year" class="year-section">
            <h2 class="year-title">{{ group.year }}</h2>

            <div class="card-grid">
                <a
                    v-for="post in group.posts"
                    :key="post.url"
                    :href="post.url"
                    class="article-card">
                    <div class="card-header">
                        <span class="card-date">{{ post.date.string }}</span>

                        <div class="card-icon">
                            <Icon
                                v-if="isIconify(post.icon)"
                                :icon="post.icon"
                                class="dynamic-icon" />
                            <span v-else>{{ post.icon }}</span>
                        </div>
                    </div>

                    <div class="card-body">
                        <h3 class="card-title">{{ post.title }}</h3>
                        <p class="card-excerpt" v-if="post.excerpt" v-html="post.excerpt"></p>
                        <p class="card-excerpt" v-else>点击阅读全文...</p>
                    </div>

                    <div class="card-footer" v-if="post.tags && post.tags.length">
                        <span v-for="tag in post.tags.slice(0, 3)" :key="tag" class="tag-pill">
                            #{{ tag }}
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* --- 全屏容器布局 --- */
.archive-grid-page {
    max-width: 1200px;
    /* 超大宽度 */
    margin: 0 auto;
    padding: 40px 24px;
}

/* 顶部标题栏 */
.header-bar {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 40px;
    border-bottom: 1px solid var(--vp-c-divider);
    padding-bottom: 20px;
    text-align: center;
}

.page-title {
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
    letter-spacing: -0.5px;
}

.meta-info {
    font-size: 1rem;
    color: var(--vp-c-text-2);
}

/* 年份标题 */
.year-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 40px 0 20px;
}

/* --- 网格布局的核心 --- */
.card-grid {
    display: grid;
    /* 响应式列宽：最小300px，自动填充 */
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
}

/* --- 卡片样式 --- */
.article-card {
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-bg-mute);
    border-radius: 12px;
    padding: 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.article-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    /* 优化悬浮阴影 */
    border-color: var(--vp-c-brand-1);
    background-color: var(--vp-c-bg);
}

/* 顶部日期栏 */
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    font-size: 0.85rem;
    color: var(--vp-c-text-3);
}

/* 图标容器 */
.card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
}

/* Iconify 图标样式 */
.dynamic-icon {
    font-size: 1.5em;
    /* 放大一点图标 */
    vertical-align: middle;
}

/* 标题和摘要 */
.card-body {
    flex: 1;
}

.card-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--vp-c-text-1);
    margin: 0 0 10px 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.article-card:hover .card-title {
    color: var(--vp-c-brand-1);
}

.card-excerpt {
    font-size: 0.9rem;
    color: var(--vp-c-text-2);
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    opacity: 0.8;
}

/* 底部标签栏 */
.card-footer {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag-pill {
    font-size: 0.75rem;
    color: var(--vp-c-brand-1);
    background-color: var(--vp-c-brand-soft);
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 500;
}

/* --- 移动端适配 --- */
@media (max-width: 768px) {
    .archive-grid-page {
        padding: 20px;
    }

    .card-grid {
        grid-template-columns: 1fr;
    }
}
</style>
