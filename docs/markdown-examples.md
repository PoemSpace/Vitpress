---
date: 2025-12-16
title: Markdown 示例
tags: [Markdown]
icon: skill-icons:html
---

# 目录

```
[[toc]]
```

[[toc]]

## 折叠

```
<details>
  <summary>点我展开</summary>
  [[toc]]
</details>
```

<details>
  <summary>点我展开</summary>
  [toc]
</details>

## 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 段落

翩若惊鸿，婉若游龙。荣曜秋菊，华茂春松。

```
**加粗**
<u>下划线</u>
~~删除线~~
*斜体*
H<sub>2</sub>O
29<sup>th</sup>
<mark>mark</mark>
----
```

**加粗**

<u>下划线</u>

~~删除线~~

*斜体*

H<sub>2</sub>O

29<sup>th</sup>

<mark>mark</mark>

----

## 图片

```markdown
![图片描述](图片链接)
```

![图片描述](https://www.ysjf.com/assets/ysjf@2x-DcH_D2DE.png)

## 链接

```markdown
[链接描述](链接地址)
```

[百度](https://www.baidu.com)

## 引用

> 引用内容

## Emoji

```
:tada: :100:
```

:tada: :100:

[更多](https://www.emojiall.com/zh-hans)

## 记号笔

```
<sapn class="marker-text">记号笔</sapn>
```

<sapn class="marker-text">记号笔</sapn>

## 荧光笔

```
<sapn class="marker-text-highlight">这里是荧光笔</sapn>
```

<sapn class="marker-text-highlight">这里是荧光笔</sapn>

## 徽章

```
<Badge text="信息" type="info"/>

<Badge text="提示" type="tip"/>

<Badge text="警告" type="warning"/>

<Badge text="危险" type="danger" />
```

<Badge text="信息" type="info"/>

<Badge text="提示" type="tip"/>

<Badge text="警告" type="warning"/>

<Badge text="危险" type="danger" />

## 视频

Video 容器可以快速嵌入不同平台的视频：

- `bilibili`：Bilibili 视频
- `tencent`：腾讯视频
- `youku`：优酷视频
- `youtube`：YouTube 视频
- `vimeo`：Vimeo 视频
- `xigua`：西瓜视频
- 自定义视频链接：https://

```
::: video bilibili
BV1EA411t7u7
:::

::: video
https://www.bilibili.com/bangumi/play/ep326711/?share_source=copy_web
:::
```

::: video bilibili
BV1EA411t7u7
:::

## 表格

```markdown
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

| Tables        |      Are      |  Cool |
|---------------|:-------------:|------:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## 公式块

```markdown
When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
```

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

## 列表

### 有序列表

```markdown
1. 第一项
2. 第二项
3. 第三项
```

1. 第一项
2. 第二项
3. 第三项

### 无序列表

```markdown
- 第一项
- 第二项
- 第三项
```

- 第一项
- 第二项
- 第三项

### 任务列表

```markdown
- [ ] 未完成的任务
- [x] 已完成的任务
- [ ] 另一个未完成的任务
```

- [ ] 未完成的任务
- [x] 已完成的任务
- [ ] 另一个未完成的任务

## 内容居中容器

```
::: center
Markdown 拓展
:::

::: center

`Markdown`
:::
```

::: center
Markdown 拓展
:::

::: center

`Markdown`
:::

## 内容居右容器

```
::: right
@Teek
:::

::: tip 摘要
很久之前，我决定踏上的这条路，映照了我与未来的因果。
::: right
2021-11-13 @Teek
:::
```

::: right
@Teek
:::

::: tip 摘要
很久之前，我决定踏上的这条路，映照了我与未来的因果。
::: right
2021-11-13 @Teek
:::

## 自定义容器

```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，页面载入时会自动展开，点击可收起
:::

## 笔记容器

```
::: note
这是一个笔记 Note 容器。
:::
```

::: note
这是一个笔记 Note 容器。
:::

## 分享卡片

````
::: shareCard <每行显示数量 | auto>

```yaml
- name: 名称
  desc: 描述
  avatar: https://xxx.jpg # 头像，可选。
  link: https://xxx/ # 链接，可选
  bgColor: "#CBEAFA" # 背景色，可选。
  textColor: "#6854A1" # 文本色，可选。
```

:::
````

::: shareCard

```yaml
- name: George Chan
  desc: 让我给你讲讲他的传奇故事吧
  avatar: https://z3.ax1x.com/2021/09/30/4oKMVI.jpg
  link: https://cyc0819.top/
  bgColor: "#FFB6C1"
  textColor: "#621529"

- name: butcher2000
  desc: 即使再小的帆，也能远航
  avatar: https://gcore.jsdelivr.net/gh/Kele-Bingtang/static/user/20211029181901.png
  link: https://blog.csdn.net/weixin_46827107
  bgColor: "#CBEAFA"
  textColor: "#6854A1"

- name: Evan's blog
  desc: 前端的小学生
  avatar: https://gcore.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg
  link: https://xugaoyi.com/
  bgColor: "#B9D59C"
  textColor: "#3B551F"
```

:::

## 图文卡片

````
::: imgCard <每行显示数量 | auto>

```yaml
- img: https://abc.jpg # 图片地址
  link: https://abc.com # 链接地址
  name: 标题
  desc: 描述 # 可选
  author: 作者名称 # 可选
  avatar: https://abc.jpg # 作者头像，可选。
```

:::
````

::: imgCard

```yaml
- img: https://vp.teek.top/blog/bg1.webp
  link: https://penx.cn
  name: 标题
  desc: 描述内容
  author: Teek
  avatar: https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar1.png
- img: https://vp.teek.top/blog/bg2.webp
  link: https://penx.cn
  name: 标题
  desc: 描述内容
  author: Teek
  avatar: https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar1.png
- img: https://vp.teek.top/blog/bg3.webp
  link: https://penx.cn
  name: 标题
  desc: 描述内容
```

:::

## 导航卡片

````
::: navCard <每行显示数量 | auto>

```yaml
- name: 标题
  desc: 描述
  link: 链接地址 # 可选
  img: 图片地址 # 可选
  badge: 徽章内容 # 可选
  badgeType: 徽章类型 # 可选
```

:::
````

::: navCard

```yaml
- name: 百度
  desc: 百度——全球最大的中文搜索引擎及最大的中文网站，全球领先的人工智能公司
  link: http://www.baidu.com/
  img: https://www.baidu.com/favicon.ico
  badge: 搜索引擎
- name: Google
  desc: 全球最大的搜索引擎公司
  link: http://www.google.com/
  img: https://ts1.cn.mm.bing.net/th/id/R-C.58c0f536ec073452434270fb559c3f8c?rik=SnOUNtUtPLX6ww&riu=http%3a%2f%2fwww.sz4a.cn%2fPublic%2fUploads%2fimage%2f20230303%2f1677839482835474.png&ehk=J1lqoeszPGEWzDOSZQ3JxzXsklfd0QzgrJu6ZVvESKk%3d&risl=&pid=ImgRaw&r=0
  badge: 搜索引擎
  badgeType: tip
```

:::

## 代码

### 行内代码

```markdown
`printf()` 函数
```

`printf()` 函数

### 代码区块

````
```javascript
$(document).ready(function () {
    alert('无限进步');
});
```
````

```javascript
$(document).ready(function () {
    alert('RUNOOB');
});
```

### 代码行高亮

````
```markdown{2,5}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

```javascript{2,5}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

### 代码块中聚焦

```markdown
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

```javascript
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

### 代码块中的颜色差异

```markdown
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

```javascript
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

### 高亮“错误”和“警告”

```markdown
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

```javascript
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## 代码组

```markdown
::: code-group

:::


```

::: code-group

```sh [pnpm]
pnpm -v
```

```sh [yarn]
yarn -v
```

:::

