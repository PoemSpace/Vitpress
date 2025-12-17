<script setup lang="ts">
interface TimelineItem {
    date: string
    title: string
    content?: string
    tag?: string
}

defineProps<{
    items: TimelineItem[]
}>()
</script>

<template>
    <div class="timeline-container">
        <div v-for="(item, index) in items" :key="index" class="timeline-item">
            <div class="timeline-marker">
                <div class="timeline-dot"></div>
                <div class="timeline-line" v-if="index !== items.length - 1"></div>
            </div>

            <div class="timeline-content card">
                <div class="timeline-header">
                    <span class="timeline-date">{{ item.date }}</span>
                    <span v-if="item.tag" class="timeline-tag">{{ item.tag }}</span>
                </div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <p v-if="item.content" class="timeline-desc">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.timeline-container {
    max-width: 1200px;
    /* 超大宽度 */
    margin: 0 auto;
    padding: 40px 24px;
}

.timeline-item {
    display: flex;
    gap: 20px;
    position: relative;
    padding-bottom: 30px;
    /* 卡片之间的间距 */
}

/* 时间轴标记区域 */
.timeline-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 20px;
}

.timeline-dot {
    width: 14px;
    height: 14px;
    /* border-radius: 50%; */
    background-color: var(--vp-c-brand-1);
    /* 使用 VitePress 主题色 */
    border: 3px solid var(--vp-c-bg);
    /* 外圈镂空效果 */
    box-shadow: 0 0 0 2px var(--vp-c-brand-1);
    z-index: 2;
    margin-top: 60px;
    /* 调整圆点与标题对齐 */
}

.timeline-line {
    flex-grow: 1;
    width: 2px;
    background-color: var(--vp-c-divider);
    margin-top: 4px;
    margin-bottom: -60px;
    /* 稍微延伸以连接下一个点 */
}

/* 内容卡片 */
.timeline-content {
    flex: 1;
    background-color: var(--vp-c-bg-soft);
    padding: 16px 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

/* .timeline-content:hover {
    transform: translateY(-2px);
    background-color: var(--vp-c-bg-mute);
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
} */

.timeline-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
}

.timeline-date {
    font-size: 1rem;
    color: var(--vp-c-text-2);
}

.timeline-tag {
    font-size: 0.75rem;
    padding: 2px 8px;
    border-radius: 10px;
    background-color: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    font-weight: 600;
}

.timeline-title {
    margin: 0 !important;
    /* 覆盖 markdown 默认样式 */
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--vp-c-text-1);
    line-height: 1.4;
}

.timeline-desc {
    margin: 8px 0 0 0 !important;
    font-size: 0.95rem;
    color: var(--vp-c-text-2);
    line-height: 1.6;
}

/* 移动端适配 */
@media (max-width: 640px) {
    .timeline-item {
        gap: 15px;
    }

    .timeline-content {
        padding: 12px 15px;
    }
}
</style>