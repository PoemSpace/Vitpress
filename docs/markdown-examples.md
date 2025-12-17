---
date: 2025-12-16
title: Markdown 示例
tags: [Markdown]
icon: skill-icons:html
---

# 探索 Markdown 的奇妙世界

欢迎来到 Markdown 的奇妙世界！无论你是写作爱好者、开发者、博主，还是想要简单记录点什么的人，Markdown 都能成为你新的好伙伴。它不仅让写作变得简单明了，还能轻松地将内容转化为漂亮的网页格式。今天，我们将全面探讨 Markdown 的基础和进阶语法，让你在这个过程中充分享受写作的乐趣！

Markdown 是一种轻量级标记语言，用于格式化纯文本。它以简单、直观的语法而著称，可以快速地生成 HTML。Markdown 是写作与代码的完美结合，既简单又强大。

## Markdown 基础语法

### 1. 标题：让你的内容层次分明

用 `#` 号来创建标题。标题从 `#` 开始，`#` 的数量表示标题的级别。

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题
```

以上代码将渲染出一组层次分明的标题，使你的内容井井有条。

### 2. 段落与换行：自然流畅

Markdown 中的段落就是一行接一行的文本。要创建新段落，只需在两行文本之间空一行。

### 3. 字体样式：强调你的文字

- **粗体**：用两个星号或下划线包裹文字，如 `**粗体**` 或 `__粗体__`。
- _斜体_：用一个星号或下划线包裹文字，如 `*斜体*` 或 `_斜体_`。
- ~~删除线~~：用两个波浪线包裹文字，如 `~~删除线~~`。
- ==高亮==：用两个等号包裹文字，如 `==高亮==`。
- ++下划线++：用两个加号包裹文字，如 `++下划线++`。
- ~波浪线~：用一个波浪线包裹文字，如 `~波浪线~`。

这些简单的标记可以让你的内容更有层次感和重点突出。

### 4. 列表：整洁有序

- **无序列表**：用 `-`、`*` 或 `+` 加空格开始一行。
- **有序列表**：使用数字加点号（`1.`、`2.`）开始一行。

在列表中嵌套其他内容？只需缩进即可实现嵌套效果。

- 无序列表项 1
  1. 嵌套有序列表项 1
  2. 嵌套有序列表项 2
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2

### 5. 链接与图片：丰富内容

- **链接**：用方括号和圆括号创建链接 `[显示文本](链接地址)`。
- **图片**：和链接类似，只需在前面加上 `!`，如 `![描述文本](图片链接)`。

[访问 Doocs](https://github.com/doocs)

![doocs](https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/logo-2.png)

轻松实现富媒体内容展示！

> 因微信公众号平台不支持除公众号内容以外的链接，故其他平台的链接，会呈现链接样式但无法点击跳转。

> 对于这些链接请注意明文书写，或点击左上角「格式->微信外链接转底部引用」开启引用，这样就可以在底部观察到链接指向。

另外，使用 `<![alt](url),![alt](url)>` 语法可以创建横屏滑动幻灯片，支持微信公众号平台。建议使用相似尺寸的图片以获得最佳显示效果。

### 6. 引用：引用名言或引人深思的句子

使用 `>` 来创建引用，只需在文本前面加上它。多层引用？在前一层 `>` 后再加一个就行。

> 这是一个引用
>
> > 这是一个嵌套引用

这让你的引用更加富有层次感。

### 7. 代码块：展示你的代码

- **行内代码**：用反引号包裹，如 `code`。
- **代码块**：用三个反引号包裹，并指定语言，如：

```js
console.log(`Hello, Doocs!`)
```

语法高亮让你的代码更易读。

### 8. 分割线：分割内容

用三个或更多的 `-`、`*` 或 `_` 来创建分割线。

---

为你的内容添加视觉分隔。

### 9. 表格：清晰展示数据

Markdown 支持简单的表格，用 `|` 和 `-` 分隔单元格和表头。

| 项目人员                                    | 邮箱                   | 微信号       |
| ------------------------------------------- | ---------------------- | ------------ |
| [yanglbme](https://github.com/yanglbme)     | contact@yanglibin.info | YLB0109      |
| [YangFong](https://github.com/YangFong)     | yangfong2022@gmail.com | yq2419731931 |
| [thinkasany](https://github.com/thinkasany) | thinkasany@gmail.com   | thinkasany   |

这样的表格让数据展示更为清爽！

> 手动编写标记太麻烦？我们提供了便捷方式。左上方点击「编辑->插入表格」，即可快速实现表格渲染。

## Markdown 进阶技巧

### 1. LaTeX 公式：完美展示数学表达式

Markdown 允许嵌入 LaTeX 语法展示数学公式：

- **行内公式**：用 `$` 包裹公式，如 $E = mc^2$。
- **块级公式**：用 `$$` 包裹公式，如：

$$
\begin{aligned}
d_{i, j} &\leftarrow d_{i, j} + 1 \\
d_{i, y + 1} &\leftarrow d_{i, y + 1} - 1 \\
d_{x + 1, j} &\leftarrow d_{x + 1, j} - 1 \\
d_{x + 1, y + 1} &\leftarrow d_{x + 1, y + 1} + 1
\end{aligned}
$$

现在还支持 **LaTeX 标准格式**：

- **行内公式**：用 `\(...\)` 包裹公式，如 \(x^2 + y^2 = z^2\)。
- **块级公式**：用 `\[...\]` 包裹公式，如：

\[
\int\_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
\]

混合使用示例：传统格式 $a + b = c$ 和 LaTeX 格式 \(d + e = f\) 可以在同一段落中共存。

1. 列表内块公式 1

$$
\chi^2 = \sum \frac{(O - E)^2}{E}
$$

2. 列表内块公式 2

$$
\chi^2 = \sum \frac{(|O - E| - 0.5)^2}{E}
$$

这是展示复杂数学表达的利器！

### 2. Mermaid 流程图：可视化流程

Mermaid 是强大的可视化工具，可以在 Markdown 中创建流程图、时序图等。

```mermaid
graph LR
  A[GraphCommand] --> B[update]
  A --> C[goto]
  A --> D[send]

  B --> B1[更新状态]
  C --> C1[流程控制]
  D --> D1[消息传递]
```

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```

```mermaid
pie
  title Key elements in Product X
  "Calcium" : 42.96
  "Potassium" : 50.05
  "Magnesium" : 10.01
  "Iron" : 5
```

```mermaid
pie
  title 为什么总是宅在家里？
  "喜欢宅" : 45
  "天气太热" : 70
  "穷" : 500
  "没人约" : 95
```

这种方式不仅能直观展示流程，还能提升文档的专业性。

> 更多用法，参见：[Mermaid User Guide](https://mermaid.js.org/intro/getting-started.html)。

### 3. PlantUML 流程图：可视化流程

PlantUML 是强大的可视化工具，可以在 Markdown 中创建流程图、时序图等。

```plantuml
@startuml
participant Participant as Foo
actor       Actor       as Foo1
boundary    Boundary    as Foo2
control     Control     as Foo3
entity      Entity      as Foo4
database    Database    as Foo5
collections Collections as Foo6
queue       Queue       as Foo7
Foo -> Foo1 : To actor
Foo -> Foo2 : To boundary
Foo -> Foo3 : To control
Foo -> Foo4 : To entity
Foo -> Foo5 : To database
Foo -> Foo6 : To collections
Foo -> Foo7: To queue
@enduml
```

> 更多用法，参见：[PlantUML 主页](https://plantuml.com/zh/)。

### 4. Ruby 注音：注音标注

支持两种格式：

```md
1. [文字]{注音}
2. [文字]^(注音)
```

渲染效果如下：

[你好]{nǐ hǎo} [世界]{shì jiè}

支持四种分隔符： `・`（中点）、`．` (全角句点)、`。` (中文句号)、`-` (英文减号)

示例：

```md
[你好世界]{nǐ・hǎo・shì・jiè}
[小夜時雨]^(さ・よ・しぐれ)
```

[你好世界]{nǐ・hǎo・shì・jiè}
[小夜時雨]^(さ・よ・しぐれ)

当字符串数量与分隔符数量不匹配时，会自动匹配到最合适的分隔符。

```md
[小夜時雨]{さ・よ・しぐれ}
[小夜時雨]{さ・よ}
[小夜]{さ・よ・しぐれ}
[小夜時雨]{さ・よ・しぐれ・extra}
```

[小夜時雨]{さ・よ・しぐれ}
[小夜時雨]{さ・よ}
[小夜]{さ・よ・しぐれ}
[小夜時雨]{さ・よ・しぐれ・extra}

## 结语

Markdown 是一种简单、强大且易于掌握的标记语言，通过学习基础和进阶语法，你可以快速创作内容并有效传达信息。无论是技术文档、个人博客还是项目说明，Markdown 都是你的得力助手。希望这篇内容能够带你全面了解 Markdown 的潜力，让你的写作更加丰富多彩！

现在，拿起 Markdown 编辑器，开始创作吧！探索 Markdown 的世界，你会发现它远比想象中更精彩！

#### 推荐阅读

- [阿里又一个 20k+ stars 开源项目诞生，恭喜 fastjson！](https://mp.weixin.qq.com/s/RNKDCK2KoyeuMeEs6GUrow)
- [刷掉 90% 候选人的互联网大厂海量数据面试题（附题解 + 方法总结）](https://mp.weixin.qq.com/s/rjGqxUvrEqJNlo09GrT1Dw)
- [好用！期待已久的文本块功能究竟如何在 Java 13 中发挥作用？](https://mp.weixin.qq.com/s/kalGv5T8AZGxTnLHr2wDsA)
- [2019 GitHub 开源贡献排行榜新鲜出炉！微软谷歌领头，阿里跻身前 12！](https://mp.weixin.qq.com/s/_q812aGD1b9QvZ2WFI0Qgw)

---

<center>
    <img src="https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/1648303220922-7e14aefa-816e-44c1-8604-ade709ca1c69.png" style="width: 100px;">
</center>



* VitePress <Badge type="info" text="default" />
* VitePress <Badge type="tip" text="^1.9.0" />
* VitePress <Badge type="warning" text="beta" />
* VitePress <Badge type="danger" text="caution" />

::: code-group
```sh [pnpm]
pnpm -v
```

```sh [yarn]
yarn -v
```

```sh [bun]
bun -v
```
:::


#### 后端技术栈

<p>
  <img src="https://img.shields.io/badge/-Spring-6DB33F?logo=Spring&logoColor=FFF" alt="Spring" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Spring%20Boot-6DB33F?logo=Spring-Boot&logoColor=FFF" alt="Spring Boot" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-MySQL-4479A1?logo=MySQL&logoColor=FFF" alt="MySQL" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-MariaDB-A9A9A9?logo=MariaDB&logoColor=003545" alt="MariaDB" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-PostgreSQL-C0C0C0?logo=PostgreSQL&logoColor=4169E1" alt="PostgreSQL" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Oracle-C0C0C0?logo=Oracle&logoColor=F80000" alt="Oracle" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Microsoft%20SQL%20Server-D3D3D3?logo=Microsoft-SQL-Server&logoColor=CC2927" alt="Microsoft SQL Server" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Redis-DC382D?logo=Redis&logoColor=FFF" alt="Redis" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-MongoDB-47A248?logo=MongoDB&logoColor=FFF" alt="MongoDB" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-RabbitMQ-FF6600?logo=RabbitMQ&logoColor=FFF" alt="RabbitMQ" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Solr-D9411E?logo=Apache-Solr&logoColor=FFF" alt="Solr" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-ElasticSearch-005571?logo=ElasticSearch&logoColor=FFF" alt="ElasticSearch" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Logstash-A9A9A9?logo=Logstash&logoColor=005571" alt="Logstash" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Kibana-A9A9A9?logo=Kibana&logoColor=005571" alt="Kibana" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Kafka-C0C0C0?logo=Apache-Kafka&logoColor=231F20" alt="Kafka" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Consul-F24C53?logo=Consul&logoColor=FFF" alt="Consul" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Tomcat-F8DC75?logo=Apache-Tomcat&logoColor=000" alt="Tomcat" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-JUnit5-25A162?logo=JUnit5&logoColor=FFF" alt="JUnit5" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Liquibase-2962FF?logo=Liquibase&logoColor=FFF" alt="Liquibase" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Maven-C71A36?logo=Apache-Maven&logoColor=FFF" alt="Maven" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Gradle-D3D3D3?logo=Gradle&logoColor=02303A" alt="Gradle" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Spring%20Security-6DB33F?logo=Spring-Security&logoColor=FFF" alt="Spring Security" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Hibernate-59666C?logo=Hibernate&logoColor=FFF" alt="Hibernate" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-JSON-000?logo=JSON&logoColor=FFF" alt="JSON" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-JWT-000?logo=JSON-Web-Tokens&logoColor=FFF" alt="JWT" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Java-F78C40?logo=OpenJDK&logoColor=FFF" alt="Java" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Python-A9A9A9?logo=Python&logoColor=3776AB" alt="Python" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Android-C0C0C0?logo=Android&logoColor=3DDC84" alt="Android" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Go-DCDCDC?logo=Go&logoColor=00ADD8" alt="Go" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-GraphQL-FFF?logo=GraphQL&logoColor=E10098" alt="GraphQL" style="display: inline-block;" /> 
</p>

#### 前端技术栈

<p>
  <img src="https://img.shields.io/badge/-Vue3-C0C0C0?logo=Vue.js&logoColor=4FC08D" alt="Vue3" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-TypeScript-C0C0C0?logo=TypeScript&logoColor=3178C6" alt="TypeScript" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Ant%20Design-C0C0C0?logo=Ant-Design&logoColor=0170FE" alt="Ant Design" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Node.js-D3D3D3?logo=Node.js&logoColor=339933" alt="Node.js" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Vite-D3D3D3?logo=Vite&logoColor=646CFF" alt="Vite" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Webpack-D3D3D3?logo=Webpack&logoColor=8DD6F9" alt="Webpack" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-NPM-C0C0C0?logo=npm&logoColor=CB3837" alt="NPM" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Axios-C0C0C0?logo=Axios&logoColor=5A29E4" alt="Axios" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-ESLint-C0C0C0?logo=ESLint&logoColor=4B32C3" alt="ESLint" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-jQuery-0769AD?logo=jQuery&logoColor=FFF" alt="jQuery" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Bootstrap-7952B3?logo=Bootstrap&logoColor=FFF" alt="BootStrap" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-ECharts-C0C0C0?logo=Apache-ECharts&logoColor=AA344D" alt="ECharts" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-JavaScript-A9A9A9?logo=JavaScript&logoColor=F7DF1E" alt="JavaScript" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-HTML5-A9A9A9?logo=HTML5&logoColor=E34F26" alt="HTML5" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-CSS3-A9A9A9?logo=CSS3&logoColor=1572B6" alt="CSS3" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Tailwind%20CSS-FFF?logo=Tailwind-CSS&logoColor=06B6D4" alt="Tailwind CSS" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Less-D3D3D3?logo=Less&logoColor=1D365D" alt="Less" style="display: inline-block;" /> 
</p>

#### DevOps

<p>
  <img src="https://img.shields.io/badge/-Git-F05032?logo=Git&logoColor=FFF" alt="Git" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-GitHub-181717?logo=GitHub&logoColor=FFF" alt="GitHub" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Gitee-C71D23?logo=Gitee&logoColor=FFF" alt="Gitee" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-GitLab-FC6D26?logo=GitLab&logoColor=FFF" alt="gitlab" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-GitHub%20Actions-2088FF?logo=GitHub-Actions&logoColor=FFF" alt="GitHub Actions" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Jenkins-D24939?logo=Jenkins&logoColor=000" alt="Jenkins" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-SonarQube-A9A9A9?logo=SonarQube&logoColor=4E9BCD" alt="SonarQube" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Docker-2496ED?logo=Docker&logoColor=FFF" alt="Docker" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Harbor-FFF?logo=Harbor&logoColor=60B932" alt="Harbor" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Kubernetes-326CE5?logo=Kubernetes&logoColor=FFF" alt="Kubernetes" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-CentOS-262577?logo=CentOS&logoColor=FFF" alt="CentOS" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Ubuntu-E95420?logo=Ubuntu&logoColor=FFF" alt="Ubuntu" style="display: inline-block;" /> 
</p>

#### 运维技术栈

<p>
  <img src="https://img.shields.io/badge/-阿里云-FF6A00?logo=Alibaba-Cloud&logoColor=FFF" alt="阿里云" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Nginx-009639?logo=Nginx&logoColor=FFF" alt="Nginx" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-VMware-607078?logo=VMware&logoColor=FFF" alt="VMware" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Prometheus-C0C0C0?logo=Prometheus&logoColor=E6522C" alt="Prometheus" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Grafana-DCDCDC?logo=Grafana&logoColor=F46800" alt="Grafana" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Ansible-FFF?logo=Ansible&logoColor=EE0000" alt="Ansible" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Lua-FFF?&logo=Lua&logoColor=2C2D72" alt="Lua" style="display: inline-block;" /> 
</p>

#### 测试技术栈

<p>
  <img src="https://img.shields.io/badge/-Postman-FF6C37?logo=Postman&logoColor=FFF" alt="Postman" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-JMeter-D3D3D3?logo=Apache-JMeter&logoColor=D22128" alt="JMeter" style="display: inline-block;" /> 
</p>

#### 开发工具

<p>
  <img src="https://img.shields.io/badge/-Intellij%20IDEA-000?logo=Intellij-IDEA&logoColor=FFF" alt="Intellij IDEA" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Eclipse-2C2255?logo=Eclipse&logoColor=FFF" alt="Eclipse" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-WebStorm-000?logo=WebStorm&logoColor=FFF" alt="WebStorm" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-PyCharm-C0C0C0?logo=PyCharm&logoColor=000" alt="PyCharm" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Android%20Studio-C0C0C0?logo=Android-Studio&logoColor=3DDC84" alt="Android Studio" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-VSCode-C0C0C0?logo=Visual-Studio-Code&logoColor=007ACC" alt="VSCode" style="display: inline-block;" /> 
</p>

#### 其他

<p>
  <img src="https://img.shields.io/badge/-Markdown-000?logo=Markdown&logoColor=FFF" alt="Markdown" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-WordPress-21759B?logo=WordPress&logoColor=FFF" alt="WordPress" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-GitHub%20Pages-222?logo=GitHub-Pages&logoColor=FFF" alt="GitHub Pages" style="display: inline-block;" /> 
  <img src="https://img.shields.io/badge/-Adobe%20Photoshop-A9A9A9?logo=Adobe-Photoshop&logoColor=31A8FF" alt="Adobe Photoshop" style="display: inline-block;" /> 
</p>


<Linkcard url="https://vitepress.yiov.top/" title="Vitepress中文搭建教程" description="https://vitepress.yiov.top/" logo="https://vitepress.yiov.top/logo.png"/>