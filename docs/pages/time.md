---
sidebar: false  # 隐藏侧边栏
aside: false    # 隐藏右侧大纲
footer: false      # 隐藏页脚
editLink: false # 隐藏编辑链接
lastUpdated: false # 隐藏最后更新时间
---


# 时间轴

<script setup>
const timelineData = [
  {
    date: '2023-12-01',
    title: '发布 v2.0 版本',
    tag: 'Release',
    content: '重构了底层架构，性能提升 50%。新增了暗黑模式适配。'
  },
  {
    date: '2023-10-15',
    title: '开始接入 VitePress',
    tag: 'Milestone',
    content: '决定迁移旧的文档系统，采用 Vue 3 生态。'
  },
  {
    date: '2023-08-20',
    title: '项目立项',
    content: '确立了核心功能需求，完成了原型设计。'
  }
]
</script>
<!-- 时间轴组件 -->
<Timeline :items="timelineData" />