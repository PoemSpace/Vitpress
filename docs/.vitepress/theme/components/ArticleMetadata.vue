<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed, ref, onMounted } from 'vue'
import { countWord } from '../untils/functions'
import { Icon } from '@iconify/vue'

const { page } = useData()
const date = computed(
    () => new Date(page.value.lastUpdated!)
)

const wordCount = ref(0)
const imageCount = ref(0)

const wordTime = computed(() => {
    return ((wordCount.value / 275) * 60)
})

const imageTime = computed(() => {
    const n = imageCount.value
    if (imageCount.value <= 10) {
        // 等差数列求和
        return n * 13 + (n * (n - 1)) / 2
    }
    return 175 + (n - 10) * 3
})

// 阅读时间
const readTime = computed(() => {
    return Math.ceil((wordTime.value + imageTime.value) / 60)
})

function analyze() {
    document.querySelectorAll('.meta-des').forEach(v => v.remove())
    const docDomContainer = window.document.querySelector('#VPContent')
    const imgs = docDomContainer?.querySelectorAll<HTMLImageElement>(
        '.content-container .main img'
    )
    imageCount.value = imgs?.length || 0
    const words = docDomContainer?.querySelector('.content-container .main')?.textContent || ''
    wordCount.value = countWord(words)
}

onMounted(() => {
    analyze()
})
</script>

<template>
    <div class="meta-compact">
        <div class="meta-item">
            <Icon icon="ph:user-circle-fill" width="14" height="14" class="meta-icon author-icon" />
            <span class="meta-text">新一</span>
        </div>

        <div class="meta-separator"></div>

        <div class="meta-item">
            <Icon icon="lucide:file-text" width="14" height="14" class="meta-icon word-icon" />
            <span class="meta-text">{{ wordCount }}字</span>
        </div>

        <div class="meta-separator"></div>

        <div class="meta-item">
            <Icon icon="lucide:clock" width="14" height="14" class="meta-icon time-icon" />
            <span class="meta-text">{{ readTime }}分钟</span>
        </div>

        <div class="meta-separator"></div>

        <div class="meta-item">
            <Icon icon="lucide:calendar" width="14" height="14" class="meta-icon date-icon" />
            <span class="meta-text">{{ date.toLocaleDateString() }}</span>
        </div>
    </div>
</template>

<style scoped>
.meta-compact {
    display: flex;
    align-items: center;
    gap: 0;
    /* padding: 8px 16px; */
    /* background: var(--vp-c-bg-soft); */
    border-radius: 8px;
    /* border: 1px solid var(--vp-c-border); */
    font-size: 13px;
    line-height: 1.4;
    color: var(--vp-c-text-2);
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-top: 10px;
}

.meta-compact::-webkit-scrollbar {
    display: none;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.2s ease;
    flex-shrink: 0;
}

.meta-item:hover {
    background: var(--vp-c-bg-mute);
}

.meta-icon {
    flex-shrink: 0;
    opacity: 0.8;
}

.author-icon {
    color: var(--vp-c-brand);
}

.word-icon {
    color: var(--vp-c-green);
}

.time-icon {
    color: var(--vp-c-yellow);
}

.date-icon {
    color: var(--vp-c-purple);
}

.meta-text {
    font-weight: 500;
    color: var(--vp-c-text-1);
    white-space: nowrap;
}

.meta-separator {
    width: 1px;
    height: 14px;
    background: var(--vp-c-border);
    opacity: 0.5;
    flex-shrink: 0;
}

/* 移动端微调 */
@media (max-width: 768px) {
    .meta-compact {
        padding: 6px 12px;
        font-size: 12px;
    }

    .meta-item {
        padding: 3px 6px;
        gap: 5px;
    }

    .meta-icon {
        width: 13px;
        height: 13px;
    }

    .meta-separator {
        height: 13px;
    }
}

/* 超小屏幕适配 */
@media (max-width: 480px) {
    .meta-compact {
        padding: 5px 10px;
        font-size: 11px;
    }

    .meta-item {
        padding: 2px 4px;
        gap: 4px;
    }

    .meta-icon {
        width: 12px;
        height: 12px;
    }
}
</style>