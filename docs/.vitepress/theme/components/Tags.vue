<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { data as posts } from '../posts.data'
import { useData, withBase } from 'vitepress'

// --- 核心逻辑：提取并统计所有标签 ---
const tags = computed(() => {
    const map = new Map<string, number>()

    posts.forEach(post => {
        if (Array.isArray(post.tags)) {
            post.tags.forEach(tag => {
                map.set(tag, (map.get(tag) || 0) + 1)
            })
        }
    })

    // 转为数组并按文章数量倒序排列
    return Array.from(map.entries())
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
})

// --- 状态管理：当前选中的标签 ---
const activeTag = ref('')

// 点击标签切换状态
const toggleTag = (tag: string) => {
    if (activeTag.value === tag) {
        activeTag.value = '' // 取消选中
    } else {
        activeTag.value = tag
    }
}

// 根据当前标签筛选文章
const filteredPosts = computed(() => {
    if (!activeTag.value) return []
    return posts.filter(post => post.tags && post.tags.includes(activeTag.value))
})

// --- 辅助功能：自动生成确定性颜色 ---
// 简单的哈希函数，让同一个标签名字总是对应同一个颜色
function getTagColor(name: string) {
    const colors = [
        '#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981',
        '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef', '#f43f5e'
    ]
    let hash = 0
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return colors[Math.abs(hash) % colors.length]
}

// 支持通过 URL 哈希直接定位标签 (例如 /tags#Vue)
onMounted(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1))
    if (hash && tags.value.some(t => t.name === hash)) {
        activeTag.value = hash
    }
})
</script>

<template>
    <div class="tags-page">
        <div class="header-section">
            <h1 class="page-title">全部文章</h1>
        </div>

        <div class="tags-cloud card">
            <div v-for="tag in tags" :key="tag.name" class="tag-item" :class="{ 'active': activeTag === tag.name }"
                @click="toggleTag(tag.name)">
                <span class="tag-name" :style="{ color: getTagColor(tag.name) }">
                    {{ tag.name }}
                </span>
                <span class="tag-count">{{ tag.count }}</span>
            </div>
        </div>

        <div v-if="activeTag" class="results-section">
            <div class="section-header">
                <h2 class="section-title">
                    {{ activeTag }}
                    <span class="section-count">- {{ filteredPosts.length }} 篇</span>
                </h2>
            </div>

            <div class="posts-grid">
                <a v-for="post in filteredPosts" :key="post.url" :href="withBase(post.url)" class="post-card">
                    <div class="card-header">
                        <span class="card-date">{{ post.date.string }}</span>
                        <div class="card-badge" :style="{ backgroundColor: getTagColor(activeTag) }">
                            {{ activeTag }}
                        </div>
                    </div>
                    <h3 class="card-title">{{ post.title }}</h3>
                    <p class="card-excerpt" v-if="post.excerpt" v-html="post.excerpt"></p>

                    <div class="card-tags">
                        <span v-for="t in post.tags.slice(0, 3)" :key="t" class="mini-tag">#{{ t }}</span>
                    </div>
                </a>
            </div>
        </div>

        <div v-else class="empty-state">
            <p>点击上方标签查看相关文章</p>
        </div>

    </div>
</template>

<style scoped>
.tags-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 24px;
}

.header-section {
    margin-bottom: 30px;
}

.page-title {
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
    color: var(--vp-c-text-1);
}

/* --- 标签云样式 --- */
.tags-cloud {
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* 间距 */
    margin-bottom: 60px;
    border: 1px solid var(--vp-c-bg-mute);
    justify-content: center;
    /* 居中对齐，像参考图那样 */
}

.tag-item {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    transition: transform 0.2s;
    padding: 4px 8px;
    border-radius: 8px;
}

.tag-item:hover {
    background-color: var(--vp-c-bg-mute);
    transform: translateY(-2px);
}

.tag-item.active {
    background-color: var(--vp-c-bg-mute);
    box-shadow: inset 0 0 0 1px var(--vp-c-brand-1);
}

.tag-name {
    font-size: 1.1rem;
    font-weight: 600;
    margin-right: 4px;
}

.tag-count {
    font-size: 0.75rem;
    color: var(--vp-c-text-3);
    position: relative;
    top: -4px;
    /* 上标效果 */
}

/* --- 结果列表样式 --- */
.section-header {
    display: flex;
    align-items: center;
    justify-content: center;
    /* 标题居中 */
    margin-bottom: 40px;
    position: relative;
}

.section-header::before,
.section-header::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--vp-c-divider);
    margin: 0 20px;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    color: var(--vp-c-text-1);
}

.section-count {
    font-size: 1rem;
    color: var(--vp-c-text-2);
    font-weight: 400;
    margin-left: 8px;
}

/* --- 网格卡片样式 (复用之前的 ArchiveGrid 风格) --- */
.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
}

.post-card {
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-bg-mute);
    border-radius: 12px;
    padding: 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    border-color: var(--vp-c-brand-1);
    background-color: var(--vp-c-bg);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.card-date {
    font-size: 0.85rem;
    color: var(--vp-c-text-3);
}

.card-badge {
    font-size: 0.7rem;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 600;
}

.card-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--vp-c-text-1);
    margin: 0 0 10px 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-excerpt {
    font-size: 0.9rem;
    color: var(--vp-c-text-2);
    line-height: 1.6;
    margin: 0 0 16px 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex-grow: 1;
}

.card-tags {
    display: flex;
    gap: 8px;
}

.mini-tag {
    font-size: 0.75rem;
    color: var(--vp-c-text-2);
    background-color: var(--vp-c-bg-mute);
    padding: 2px 6px;
    border-radius: 4px;
}

.empty-state {
    text-align: center;
    padding: 60px 0;
    color: var(--vp-c-text-3);
    font-size: 1.1rem;
}

/* 移动端适配 */
@media (max-width: 640px) {
    .tags-cloud {
        padding: 20px;
        gap: 15px;
    }

    .tag-name {
        font-size: 1rem;
    }

    .posts-grid {
        grid-template-columns: 1fr;
    }
}
</style>