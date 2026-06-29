# Project Handoff — yaohaixu-ai-study

> **生成时间**: 2026-06-29
> **当前 commit**: `56d6c58` (本地 ahead of origin/main by 1)
> **线上地址**: https://yaohaixu.github.io/yaohaixu-ai-study/
> **仓库**: https://github.com/yaohaixu/yaohaixu-ai-study

---

## 1. 项目目标（Project Goal）

### 最终目标
为 yaohaixu 搭建一个**个人 AI 知识库网站**，托管于 GitHub Pages。将零散的 AI 学习笔记、课程阅读、实践经验编译成结构化知识，沉淀为可复用的体系。

### 为什么要做
- yaohaixu 在学习 AI 过程中积累了大量的阅读和课程材料，需要一个地方整理
- 参考 Social Layer（sola.wamo.city）的高质量内容组织方式，制作自己的知识库
- 通过 GitHub Pages 实现零成本托管和版本管理

### 当前阶段
**v4 早期**——框架与内容初始化阶段。已搭建首页 + 2 个完整项目子页面。

### 已完成程度
| 模块 | 状态 | 内容量 |
|---|---|---|
| 首页 | 完成 | 品牌中文、Hero、5 个项目卡片 |
| 模块 01: AI Mindset 转变 | 完成 | 5 幕、41 张信息图、49 项 TOC |
| 模块 02: Agent Framework 入门 | 完成 | 5 幕、14 张配图、56 项 TOC |
| 模块 03-05 | 规划中 | 卡片位已预留 |

### 接下来准备做什么
1. 创建模块 03: Prompt Engineering（参考站内容搬运）
2. 创建模块 04: AI Agent & 自动化
3. 创建模块 05: 终极项目
4. 首页 SEO 优化（OpenGraph 标签等）
5. 移动端 TOC 侧边栏体验优化

---

## 2. 项目整体架构

### 目录结构
```
yaohaixu-ai-study/
├── index.html                              # 首页：Hero + 项目卡片列表
├── projects/
│   ├── ai-mindset/index.html               # 模块 01：AI Mindset 转变
│   └── agent-framework/index.html          # 模块 02：Agent Framework 入门
├── assets/
│   ├── css/style.css                       # 全局 CSS（Aurora 设计系统）
│   ├── js/main.js                          # 全局 JS（粒子动画、进度条、卡片效果）
│   └── img/                               # 模块 01 的图片
│       ├── *.svg, *.png, *.jpg            # ~41 张 AI Mindset 信息图
│       └── agent-framework/               # 模块 02 的图片
│           └── *.png, *.jpg               # 13 张 Agent Framework 配图
├── .github/workflows/deploy.yml           # GitHub Actions 自动部署
├── README.md
└── PROJECT_HANDOFF.md                     # 本文档
```

### 模块职责
| 模块 | 职责 |
|---|---|
| index.html | 展示所有项目的卡片概览，导航入口 |
| ai-mindset/ | 五幕深度内容：AI 发展阶段 → 学习模型 → 生产模型 → 成长模型 → AI 核心概念 |
| agent-framework/ | 五幕内容：什么是 Agent → 核心条件 → 框架选型 → 快速开始 → 实操项目 |
| style.css | 全局设计系统（Aurora 主题）、TOC 侧边栏、卡片等 UI 组件 |
| main.js | Canvas 粒子动画、页面进度条、卡片 3D 视差效果 |

### 工作流
```
dev 分支（开发）→ 测试验证 → main 分支（生产）→ GitHub Pages 自动部署
```

---

## 3. 当前工作状态（Current State）

### 最近完成
1. v4：新建 Agent Framework 项目页面（模块 02），含 5 幕 + 14 张配图
2. 品牌重构：从"AI 学习框架"改为"yaohaixu · AI 知识库"
3. TOC 侧边栏：两个子页面都添加了 sticky 侧边栏目录 + 章节高亮

### 待 push 的 commit
```
56d6c58 fix: AI Mindset 页面添加 TOC 侧边栏目录
```
该 commit 修复了 AI Mindset 的 project-layout 空壳问题，正确插入 49 项 TOC。等待网络恢复后 push。

### 为什么停在这里
GitHub 持续断网，commit 已本地保存但无法 push。

---

## 4. 重要设计决策

| 决策 | 原因 |
|---|---|
| 纯静态 HTML/CSS/JS | 零依赖，GitHub Pages 原生支持 |
| Aurora 暖白配色 | 避免"科技蓝紫"同质化，个人知识库需要安静感 |
| 五幕结构 | 参考 Social Layer 的叙事风格 |
| 图片本地存放 | 外链可能失效，本地确保稳定；按模块分目录 |
| 不拆分 CSS | 单文件管理方便，项目规模小 |
| 中文内容 + 英文 slug | URL 可读性 + 内容本地化 |
| TOC 49-56 项 | 宁可多不可少，sticky 侧边栏支持滚动 |

---

## 5. 用户偏好

- **内容驱动**：先研读参考站完整内容再动手
- **一次性完成**：不分多次迭代
- **喜欢搬图**：参考站配图原样下载放进对应位置
- **中文优先**：内容、导航全部中文
- **Commit 格式**：`feat/fix/refactor: 中文描述`
- **直接验证**：用 curl + grep 验证线上内容
- **不喜欢过度抽象**：能简单做的不要复杂化

---

## 6. 核心 CSS 组件

| 组件 | CSS 类 | 用途 |
|---|---|---|
| TOC 侧边栏 | `.toc-sidebar` + `.project-layout` | sticky 目录，220px 宽 |
| 概念卡片网格 | `.concept-grid` > `.concept-card` | 自适应 2-3 列卡片 |
| 阶段时间线 | `.phase-timeline` > `.phase-card` | Gartner 曲线等步骤展示 |
| 复利卡片 | `.compound-grid` > `.compound-card` | 带 SVG 图标的卡片 |
| 幕级标题 | `.act-header` > `.act-num` + `h2` | 大号数字 + 副标题 |
| 图片网格 | `.img-grid` | 2-3 列自适应图片 |
| 提示框 | `.callout.tip/.insight/.warning` | 彩色左边框 |
| 对比表格 | `.agent-table` | Agent 框架对比 |
| 编号列表 | `.num-list` | 带数字圆圈的列表 |
| 引用框 | `blockquote.insight-quote` | 蓝底斜体引用 |

---

## 7. 已知问题

1. **AI Mindset TOC 未上线**：commit `56d6c58` 未 push，线上该页面无 TOC 侧边栏
2. **Div 标签 -1 不平衡**：不影响渲染，属于 inline-img 嵌套的微小偏差
3. **Pages CDN 缓存延迟**：push 后需 1-3 分钟才能看到更新
4. **模块 03-05 为空**：卡片已预留，指向死链接
5. **部分 PNG 图片过大**：最大 795KB，未压缩

---

## 8. TODO

**High**
- Push commit `56d6c58`（修复 AI Mindset TOC）
- 创建模块 03

**Medium**
- OpenGraph meta tags
- 移动端 TOC 折叠按钮
- 404 页面
- 大图压缩

**Low**
- sitemap.xml
- 暗色模式

---

## 9. 工作原则

- 用 Python 脚本写 HTML，不用 apply_patch（对中文不稳定）
- 每个子页面独立一个 HTML 文件
- 图片用相对路径 `../../assets/img/`
- 不要自动重构已有代码
- 完工后验证：检查图片数、TOC 项数、标签平衡
- Push 前先 `curl -s https://github.com` 测连通性

---

## 10. 踩过的坑

1. apply_patch 对中文/长文件不稳定 → 改用 Python 写文件
2. TOC 脚本曾把 act-1 等 ID 替换成空 → 用 git checkout HEAD~1 恢复
3. h3 被加 ID 后后续脚本找不到纯 `<h3>` 标签 → 用带 ID 的完整标签匹配
4. GitHub 网络不稳定 → commit 后可能需多次重试 push
5. Pages CDN 延迟 → 用 raw.githubusercontent.com 即时验证源文件
6. git checkout 时工作目录有文件会失败 → 用 `git checkout -B` 强制

---

## 11. Bootstrap Prompt

可直接发给新 Session：

```
你正在接手 yaohaixu-ai-study 项目，仓库在 ~/yaohaixu-ai-study。

线上：https://yaohaixu.github.io/yaohaixu-ai-study/

当前状态：首页 + 2 个子页面完成，模块 03-05 待建。

紧急：运行 cd ~/yaohaixu-ai-study && git push origin main 推送待定 commit。

工作方式：先研读参考站 sola.wamo.city → 下载图片 → Python 写 HTML → 更新首页卡片 → commit + push。

设计系统在 assets/css/style.css 的 :root 里，不要动。五幕结构是内容标准。

详细上下文见 PROJECT_HANDOFF.md。
```
