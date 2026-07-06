# yaohaixu-ai-study — 个人 AI 知识库

> **仓库**: https://github.com/yaohaixu/yaohaixu-ai-study
> **线上**: https://yaohaixu.github.io/yaohaixu-ai-study/
> **当前 main commit**: `132144d` (2026-07-01)
> **当前 dev commit**: `0cbf0ef` (2026-07-01)
> **维护者**: Codex AI Agent (Project Memory Keeper)

---

## 目录

1. [项目介绍](#1-项目介绍)
2. [项目整体结构](#2-项目整体结构)
3. [系统架构](#3-系统架构)
4. [技术栈](#4-技术栈)
5. [环境配置](#5-环境配置)
6. [设计决策](#6-设计决策)
7. [当前开发状态](#7-当前开发状态)
8. [待开发任务 (TODO)](#8-待开发任务-todo)
9. [已知问题](#9-已知问题)
10. [Agent 开发历史](#10-agent-开发历史)
11. [Agent 交接说明](#11-agent-交接说明)
12. [重要文件说明](#12-重要文件说明)
13. [API 文档](#13-api-文档)
14. [数据库说明](#14-数据库说明)
15. [编码规范](#15-编码规范)
16. [开发流程](#16-开发流程)
17. [架构决策日志 (Decision Log)](#17-架构决策日志-decision-log)
18. [未来路线图](#18-未来路线图)
19. [版本变更日志 (Changelog)](#19-版本变更日志-changelog)

---

## 1. 项目介绍

### 项目是什么

**yaohaixu-ai-study** 是一个托管在 GitHub Pages 的纯静态个人 AI 知识库网站。它将 yaohaixu 在 AI 学习过程中积累的阅读笔记、课程理解、实践经验编译成结构化知识体系，以可浏览的 Web 形式呈现。

### 为什么创建

- yaohaixu 在系统学习 AI 过程中积累了大量的阅读材料、课程笔记和实践经验，需要一个地方集中整理
- 参考 Social Layer (sola.wamo.city) 的高质量内容组织方式作为设计灵感
- 选择零成本方案，GitHub Pages 免费托管，无需维护服务器

### 项目目标

1. **知识整理**：将零散的 AI 学习笔记编译成结构化的知识体系
2. **内容沉淀**：从 LLM 基础到 Agent 实战，建立完整的技术知识地图
3. **持续积累**：随着学习深入，不断扩展模块和知识点
4. **作品呈现**：作为 yaohaixu 的个人技术作品展示

### 面向用户

- **主要用户**: yaohaixu 本人（个人知识管理）
- **次要用户**: 对 AI 学习路径感兴趣的读者
- **技术背景**: 假设读者有基础编程概念，但不要求 AI 专业背景

### 当前开发阶段

**v4 稳定期** — 框架完成，内容持续扩展。

| 模块 | 状态 | 完成度 |
|------|------|--------|
| 首页 (Hero + 导航) | ✅ 已完成 | 100% |
| 模块 01: AI Mindset 转变 | ✅ 已完成 | 100% |
| 模块 02: Agent Framework 入门 | ✅ 已完成 | 100% |
| AI 基础知识库(框架) | ✅ 已完成 | 100% |
| 78 个知识点子页面(结构) | ✅ 已完成 | 100% |
| 78 个知识点子页面(内容) | ⏳ 占位中 | ~5% |
| 模块 03: Prompt Engineering | 🔜 未开始 | 0% |
| 模块 04: AI 工具栈 | 🔜 未开始 | 0% |
| 模块 05: Capstone 终极项目 | 🔜 未开始 | 0% |

**总体完成度估计**: 约 40%（框架 100%，内容 ~5%，模块 3-5 未开始）

---

## 2. 项目整体结构

```
yaohaixu-ai-study/
├── index.html                       # 首页 - 入口点
├── README.md                        # 本文档（项目交接手册）
├── CHANGELOG.md                     # 版本日志（按 PR 记录）
├── REQUIREMENTS.md                  # 需求文档（产品经理 Kant 维护）
├── PROJECT_HANDOFF.md               # 前任 Agent 交接文档（已归档）
├── TASK_ASSIGNMENT.md               # 任务分配记录
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages 部署 Workflow（v4: 仅 upload artifact, 无构建）
│
├── assets/
│   ├── css/
│   │   └── style.css               # Aurora 设计系统（409 行，单文件）
│   ├── js/
│   │   └── main.js                 # 全局 JS（104 行，Canvas 粒子动画 + 进度条）
│   ├── img/                         # 图片资源（54 张）
│   │   ├── *.svg                   # 信息图（35 张，模块01 复用参考站）
│   │   ├── *.png / *.jpg           # 截图/照片（19 张，部分未压缩）
│   │   └── agent-framework/        # 模块02 专属截图（10 张，含代理框架产品截图）
│   │
│   └── knowledge-base/             # 知识库原始内容
│       ├── PERSONAL_COGNITIVE_MODEL.md    # 认知模型 Markdown（分析原始数据）
│       └── yourself-model/               # 自我建模分析（飞书原始内容）
│           ├── meta.json
│           ├── persona.md
│           └── self.md
│
├── projects/
│   ├── ai-mindset/
│   │   └── index.html              # 模块01: AI Mindset（5幕, 41张信息图）
│   ├── agent-framework/
│   │   └── index.html              # 模块02: Agent Framework（5幕, 14张配图）
│   │
│   └── knowledge-base/             # AI 基础知识库（84 个子页面）
│       ├── personal-cognitive-model.html  # 个人认知模型（~300行内容）
│       ├── identity-model.html           # 人格画像（占位）
│       ├── thinking-model.html           # 思维方式与决策（占位）
│       ├── work-style.html               # 学习与工作风格（占位）
│       ├── ai-attitude-shift.html        # 对AI提问的态度转变（占位）
│       ├── learning-list.html            # 待学习清单（占位）
│       ├── learning-progress.html        # 学习进程图（占位）
│       │
│       └── topics/                # 77 个知识点子页面（占位状态）
│           ├── 什么是大语言模型.html      # 1.1
│           ├── transformer-架构详解.html  # 1.2
│           ├── ...                 # 详见下一节
│           └── 高级-rag.html             # 14.2
│
└── requirements/                   # 需求存档（预留目录，当前为空）
```

### 目录说明

| 目录/文件 | 类型 | 状态 | 说明 |
|-----------|------|------|------|
| `index.html` | 首页 | ✅ 稳定 | 不可轻易修改 `.project-card` 结构（多个脚本依赖） |
| `.github/workflows/deploy.yml` | CI/CD | ✅ 稳定 | 自 v4 简化后稳定运行，无需修改 |
| `assets/css/style.css` | CSS | ✅ 稳定 | 所有 UI 组件都在此，`:root` 变量不可修改 |
| `assets/js/main.js` | JS | ✅ 稳定 | Canvas 粒子 + 进度条，各页面通过 `<script>` 引用 |
| `assets/img/` | 资源 | ✅ 稳定 | 图片按模块分目录，相对路径 `../../assets/img/` |
| `projects/ai-mindset/` | 项目 | ✅ 稳定 | 五幕完整内容 + TOC 侧边栏 |
| `projects/agent-framework/` | 项目 | ✅ 稳定 | 五幕完整内容 + TOC 侧边栏 |
| `projects/knowledge-base/` | 项目 | ✅ 框架稳定，⚠️ 内容占位 | 14 章 77 知识点 + 7 认知模型子页面 |
| `projects/knowledge-base/topics/` | 子页面 | ⚠️ 内容占位 | 77 个 HTML 文件，内容均为"内容正在整理中" |

### 知识库 14 章知识点分布

| 章 | 章节名 | 节数 | 状态 |
|----|--------|------|------|
| 1 | 大语言模型基础原理 | 8 节 | ⚠️ 占位 |
| 2 | 大模型微调 | 8 节 | ⚠️ 占位 |
| 3 | Prompt Engineering | 6 节 | ⚠️ 占位 |
| 4 | RAG | 8 节 | ⚠️ 占位 |
| 5 | AI Agent 原理 | 6 节 | ⚠️ 占位 |
| 6 | Agent 框架 | 4 节 | ⚠️ 占位 |
| 7 | Tool Calling 与 MCP | 5 节 | ⚠️ 占位 |
| 8 | Agent 记忆系统 | 5 节 | ⚠️ 占位 |
| 9 | AI Agent 系统架构设计 | 4 节 | ⚠️ 占位 |
| 10 | Multi-Agent 系统 | 4 节 | ⚠️ 占位 |
| 11 | Agent 评估体系 | 4 节 | ⚠️ 占位 |
| 12 | Agent 工程实践 | 5 节 | ⚠️ 占位 |
| 13 | Claude Code 深度解析 | 8 节 | ⚠️ 占位 |
| 14 | AI Agent 项目实战 | 2 节 | ⚠️ 占位 |
| **总计** | | **77 节** | |

---

## 3. 系统架构

### 总体架构

这是一个零依赖纯静态网站，无后端、无数据库、无 API 服务。

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Pages (CDN)                       │
│  https://yaohaixu.github.io/yaohaixu-ai-study/              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐  ┌────────────────┐  ┌──────────────────┐  │
│  │  index.html  │  │  projects/     │  │  projects/       │  │
│  │  (首页)      │  │  ai-mindset/   │  │  agent-framework/│  │
│  │  56KB        │  │  index.html    │  │  index.html      │  │
│  └──────┬───────┘  └───────┬────────┘  └────────┬─────────┘  │
│         └──────────────────┼────────────────────┘            │
│                            │                                 │
│  ┌─────────────────────────▼────────────────────────────┐   │
│  │             projects/knowledge-base/                   │   │
│  │  ┌─────────────────────────────────────────────────┐ │   │
│  │  │ 7 个认知模型子页面 (personal-cognitive-model等)   │ │   │
│  │  └─────────────────────────────────────────────────┘ │   │
│  │  ┌─────────────────────────────────────────────────┐ │   │
│  │  │ 77 个知识点子页面 (topics/ 目录)                 │ │   │
│  │  └─────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │  assets/css/     │  │  assets/js/      │                 │
│  │  style.css       │  │  main.js         │                 │
│  │  409 行          │  │  104 行          │                 │
│  └──────────────────┘  └──────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 前端架构

- **渲染方式**: 纯客户端渲染（CSR），无服务端渲染（SSR）
- **路由**: 无路由系统，使用物理 HTML 文件和超链接导航
- **状态管理**: 无（纯展示型网站）
- **样式**: 单文件 CSS，`:root` CSS 变量设计系统
- **动画**: CSS `@keyframes` + JavaScript Canvas
- **响应式**: CSS Media Query (768px 断点)

### 页面导航流程

```
首页 ⟶ 项目卡片 (ai-mindset / agent-framework)
     ⟶ 知识库章节卡片 (展开/折叠)
         ⟶ 知识点子页面 (topics/xxx.html)
         ⟶ 认知模型子页面 (personal-cognitive-model 等)
     ⟶ GitHub 外链
```

### 关键 CSS 组件关系

```
style.css :root (CSS 变量 - 设计 Token)
    ├── .site-header (sticky 导航栏, 64px 高度)
    ├── .hero (首页 Hero 区, Canvas 粒子背景)
    ├── .projects-grid > .project-card (项目卡片网格)
    ├── .projects-head (居中标题块)
    ├── .page-width (1200px 最大宽度容器)
    ├── .project-hero (子页面标题区)
    │   ├── .back-link (返回链接)
    │   ├── .eyebrow (章节标识)
    │   └── .heading-xl (标题)
    ├── .project-layout (TOC + 内容布局)
    │   ├── .toc-sidebar (sticky 侧边栏)
    │   └── .project-content (主内容区)
    ├── .kb-toc (知识库章节折叠卡片)
    │   └── .kb-chapter (单个章节)
    │       ├── .kb-chapter-head (章节标题行, 可点击)
    │       ├── .kb-ch-items (知识点列表, max-height 折叠)
    │       └── .kb-item-link (单个知识点链接)
    └── Various .concept-grid, .phase-timeline, .callout (内容组件)
```

### 数据流

```
① 用户访问  https://yaohaixu.github.io/yaohaixu-ai-study/
② GitHub Pages CDN 返回 index.html
③ 浏览器加载 style.css (外链 Google Fonts)
④ 浏览器加载 main.js
⑤ main.js 初始化 Canvas 粒子动画
⑥ 用户点击链接 → 浏览器加载对应的 .html 文件
⑦ 每个子页面独立加载 style.css + main.js
```

### 部署架构

```
GitHub Repo (main 分支 / 根目录)
    │  git push
    ▼
GitHub Actions (deploy.yml)
    │  upload-pages-artifact@v3
    ▼
GitHub Pages (legacy 模式, main 分支 / 根目录)
    │  CDN 分发
    ▼
用户浏览器
```

---

## 4. 技术栈

| 类别 | 技术 | 版本/说明 |
|------|------|-----------|
| **语言** | HTML5 | — |
| **样式** | CSS3 | 单文件 409 行，`:root` 变量设计系统 |
| **脚本** | JavaScript (ES6) | 104 行，Canvas + 滚动事件 |
| **字体** | Google Fonts | Inter, Playfair Display, Noto Sans/Serif SC, JetBrains Mono |
| **图标** | Lucide (内联 SVG) | 各按钮/链接图标 |
| **部署** | GitHub Pages | Legacy 模式，main 分支 `/` 根目录 |
| **CI/CD** | GitHub Actions | `actions/configure-pages@v4` + `upload-pages-artifact@v3` + `deploy-pages@v4` |
| **版本控制** | Git + GitHub | `gh pr merge --merge` (保留完整历史) |

### 无外部依赖

本项目的关键设计选择是 **零构建工具、零包管理器、零运行时依赖**：
- 无 npm / yarn / pnpm
- 无 webpack / vite / parcel
- 无 React / Vue / Angular
- 无后端框架
- 无数据库
- 无 API 服务

唯一的外链资源是 Google Fonts CDN 字体文件。

---

## 5. 环境配置

### 前置要求

- Git >= 2.x
- GitHub CLI (`gh`) — 用于 PR 工作流
- 任意浏览器 — 本地预览不需要服务器

### 本地开发

本项目的纯静态特性意味着无需构建即可直接预览:

```bash
# 1. 克隆仓库
git clone https://github.com/yaohaixu/yaohaixu-ai-study.git
cd yaohaixu-ai-study

# 2. 切换到 dev 分支
git checkout dev

# 3. 直接用浏览器打开 index.html
open index.html

# 或启动本地服务器
python3 -m http.server 8000
# 访问 http://localhost:8000
```

### 验证命令

```bash
# 检查文件结构
find . -name "*.html" | wc -l          # 应输出 87
find assets/img -type f | wc -l         # 应输出 54
wc -l assets/css/style.css              # 应输出 409

# 验证 HTML 标签平衡
python3 -c "
with open('index.html') as f:
    h = f.read()
print(f'<a>: {h.count(\"<a \")}, </a>: {h.count(\"</a>\")}')
"

# 验证知识点文件夹
ls projects/knowledge-base/topics/ | wc -l  # 应输出 77
```

### 部署命令

```bash
# 推代码前检查连通性
curl -s -o /dev/null -w "%{http_code}" https://github.com
# 若返回 200 则继续

# 标准部署流程（详见开发流程）
git add <files>
git commit -m "feat/fix/refactor/docs: 中文描述"
git push origin dev
gh pr create --title "type: 中文描述" --body "变更说明..."
gh pr merge --merge
# GitHub Actions 自动部署到 main → Pages
```

### 环境变量

本项目 **零环境变量**。无 API Key，无敏感配置。

### GitHub Pages 配置

| 配置项 | 值 |
|--------|-----|
| Source | Deploy from a branch |
| Branch | `main` |
| Folder | `/` (root) |
| 模式 | Legacy (非 GitHub Actions 模式) |
| 自定义域名 | 无（使用默认 github.io） |

**注意**: Actions 中的 `deploy.yml` 仅用于上传 artifact，Pages 的 source 仍然设置为 main 分支 `/` 根目录的 legacy 模式。两者必须保持一致。

---

## 6. 设计决策

### 架构决策

| 决策 | 选择 | 理由 |
|------|------|------|
| 构建方式 | 纯静态 HTML/CSS/JS | 零依赖，GitHub Pages 原生支持，无需构建步骤 |
| 配色方案 | Aurora 暖白 (#fafaf9) | 避免 AI 网站"科技蓝紫"同质化，个人知识库需安静感 |
| 内容结构 | 五幕叙事风格 | 参考 Social Layer (sola.wamo.city) 高质量内容组织 |
| 图片来源 | 本地存放 | 外链可能失效，按模块分目录管理 |
| CSS 组织 | 单文件不拆分 | ~400 行规模小，分拆反而增加管理负担 |
| 语言 | 中文内容 + 英文 slug | URL 可读性 + 内容本地化 |
| TOC 侧边栏 | sticky (top: 88px) | 匹配 header 高度，滚动时始终可见 |
| 折叠动画 | max-height (非 grid-template-rows) | 所有现代浏览器兼容性更好 |
| 知识库宽度 | max-width: 900px 居中 | 与页面其他内容区宽度一致 |
| PR 合并策略 | `gh pr merge --merge` | 保留完整 commit 历史（非 rebase/squash） |
| 分支策略 | dev → PR → main | 保护 main 分支，禁止直接推送 |

### 为什么不用...

| 方案 | 不考虑的原因 |
|------|-------------|
| React / Vue / SPA | 小题大做，纯展示型网站不需要 JS 框架 |
| Build 工具 (Vite/Webpack) | 增加复杂度，无编译需求 |
| Markdown → HTML 生成器 | 用户熟悉直接写 HTML，且内容中有复杂自定义组件 |
| Tailwind CSS | 单文件 CSS 已够用，避免 class 爆炸 |
| `details/summary` 折叠 | 原生控件太简陋，与 Aurora 风格不匹配 |
| `grid-template-rows: 0fr` 折叠 | 浏览器兼容性差，早版本不支持 |
| 暗色模式 | 需要额外维护一套颜色系统，当前规模下不值得 |

### 不能轻易修改的部分

- `style.css :root` 中的 CSS 变量 — 整个设计系统依赖它们
- 首页 `.project-card` 的 HTML 结构 — `main.js` 的动画脚本依赖卡片 DOM 结构
- 图片相对路径 `../../assets/img/` — 所有子页面硬编码了这个路径
- `.project-layout` 的 `grid-template-columns: 220px 1fr` — TOC 侧边栏宽度
- `.toc-sidebar` 的 `top: 88px` — 匹配 header 高度，改动会导致定位错位

---

## 7. 当前开发状态

### ✅ 已完成

| 功能 | 详情 | 验证方式 |
|------|------|---------|
| 首页 | Hero + 5 个项目卡片（2 个可点击 + 3 个"即将推出"） | 浏览器打开 |
| 模块 01: AI Mindset | 5 幕完整内容，41 张信息图，49 项 TOC | 访问页面验证 |
| 模块 02: Agent Framework | 5 幕完整内容，14 张配图，56 项 TOC | 访问页面验证 |
| AI 基础知识库 | 14 章卡片式折叠导航 | 首页展开验证 |
| 7 个认知模型子页面 | personal-cognitive-model 有内容，其余占位 | 点击验证 |
| 77 个知识点子页面 | 所有页面独立 HTML，占位状态 | 访问 topics/ 目录 |
| Aurora 设计系统 | 409 行 CSS，`:root` 变量+组件 | 查看 style.css |
| Canvas 粒子动画 | 首页 Hero 背景动效 | 刷新首页验证 |
| 页面进度条 | 子页面顶部阅读进度条 | 滚动子页面验证 |
| GitHub Pages 部署 | 自动部署 main → 线上 | push 后 1-3 分钟访问 |
| 移动端自适应 | 768px 断点响应式 | 缩小浏览器验证 |

### ⚠️ 部分完成

| 功能 | 完成度 | 说明 |
|------|--------|------|
| 77 个知识点内容 | ~5% | HTML 框架就绪，内容全为"内容正在整理中"占位符 |
| 知识点子页面 hero | 已修复 | eyebrow 格式已改为"第 N 章 · X.Y"居中显示 |

### 🔜 未开始

| 功能 | 说明 |
|------|------|
| 模块 03: Prompt Engineering | 首页卡片已预留（"即将推出"状态） |
| 模块 04: AI 工具栈与工作流 | 首页卡片已预留 |
| 模块 05: AI Agent 与自动化 | 首页卡片已预留 |
| 模块 06: 终极项目 | 首页卡片已预留 |
| OpenGraph meta tags | 首页已有简单 description，其余页面缺失 |
| 移动端 TOC 折叠 | 侧边栏在 <860px 无折叠按钮 |
| sitemap.xml | 未生成 |
| 404 页面 | 未创建 |
| 搜索功能 | 未创建 |

---

## 8. 待开发任务 (TODO)

### High 优先级

| # | 任务 | 说明 | 依赖 | 风险 | 预计修改文件 |
|---|------|------|------|------|-------------|
| 1 | 77 个知识点填充内容 | 从飞书 Wiki 搬运正文和图片到 topics/*.html | 用户提供飞书内容 | 低（纯内容操作） | 77× topics/*.html + 新增图片 |
| 2 | 下载嵌入飞书 Wiki 图片 | 下载配图到 assets/img/ 对应目录 | 任务 1 | 低 | 新增图片文件 |
| 3 | 删除公众号二维码图片 | 用户明确要求删除，需确认具体文件名 | 无 | 低 | 删除图片文件 |
| 4 | 创建模块 03 Prompt Engineering | 新建 projects/prompt-engineering/ | 用户提供内容 | 中（新模块） | 新建目录+index.html |

### Medium 优先级

| # | 任务 | 说明 | 风险 | 预计修改文件 |
|---|------|------|------|-------------|
| 5 | OpenGraph meta tags | 所有页面增加 og:title/description/image | 低 | index.html + 84× 子页面 |
| 6 | 移动端 TOC 折叠按钮 | <860px 时侧边栏可折叠/展开 | 中（JS 改动） | style.css + main.js + 2× 项目页面 |
| 7 | 大图压缩 | PNG → WebP 转换（最大 795KB） | 低 | 图片文件 |

### Low 优先级

| # | 任务 | 说明 | 风险 | 预计修改文件 |
|---|------|------|------|-------------|
| 8 | 404 页面 | 用户访问不存在页面时展示 | 低 | 404.html |
| 9 | sitemap.xml | 搜索引擎爬虫 | 低 | sitemap.xml |
| 10 | 暗色模式 | 添加媒体查询 + CSS 变量覆盖 | 中（CSS 重构） | style.css |
| 11 | 搜索功能 | 站内全文搜索 | 中（JS 新模块） | main.js + index.html |

---

## 9. 已知问题

### Bug

| # | 问题 | 严重度 | 状态 |
|---|------|--------|------|
| B1 | 模块 03-05 首页卡片指向 `#` 锚点（死链接） | 🟡 中 | 开放 |
| B2 | 部分 PNG 图片过大（最大 795KB） | 🟢 低 | 开放（影响加载速度） |

### 技术债务

| # | 问题 | 说明 |
|---|------|------|
| T1 | `projects/ai-mindset/.github/workflows/` 空目录 | 无实际 Workflow，可删除 |
| T2 | `requirements/` 目录为空 | 需求文档已合并到 REQUIREMENTS.md |
| T3 | `TASK_ASSIGNMENT.md` 内容可能过时 | 在 Agent 工作流初期使用过 |
| T4 | `PROJECT_HANDOFF.md` 与 README 部分重复 | 归档文件，建议新 Agent 读 README 即可 |

### Hack / 临时方案

| # | 方案 | 说明 | 何时修复 |
|---|------|------|---------|
| H1 | 77 个知识点 = 原 78 减去 function-calling 重复 | 原计划 78 个知识点，因重复删除 1 个 | 内容填充时自然解决 |
| H2 | `style="margin-top:60px"` 被移除 | 之前用于调整子页面 hero 间距，现已迁移到 CSS | 已修复 |

### 不可重构的部分

- `style.css :root` 的 CSS 变量名和值
- 首页 `.project-card` 的 DOM 结构
- 所有 `.toc-sidebar` 的 sticky 定位逻辑
- 图片相对路径 `../../assets/img/`
- `max-height` 折叠方案（不要改为 `grid-template-rows`）

### 最危险的文件

| 文件 | 风险 | 原因 |
|------|------|------|
| `index.html` | 🔴 高 | 所有页面依赖首页结构，误改可能导致脚本失效 |
| `style.css` | 🔴 高 | 全站样式依赖，`:root` 变量错误会导致全局混乱 |
| `projects/knowledge-base/topics/*.html` | 🟡 中 | 77 个文件批量操作易出错，建议用 Python 脚本统一处理 |

---

## 10. Agent 开发历史

### Version 1.0

**日期**: 2026-06-30
**Agent**: Codex AI Agent (接手 Session #1)
**Git Commit**: `59af6c5`
**分支**: dev

**本次目标**: 项目接手后的清理和修复

**修改文件**:
- `index.html` (11 行修改)
- `assets/css/style.css` (2 行修改)

**新增功能**:
- kb-toc 移动端增加左右留白 `padding: 0 24px`
- 移除 function-calling.html 在章节5中的重复引用

**修复 Bug**:
- function-calling.html 被第5章和第7章同时引用 → 保留第7章，移除第5章
- 知识库章节数从 78 修正为 77（原因重复引用）

**架构变化**:
- 无

**影响范围**: 首页 (index.html)、全局 CSS (style.css)

**是否存在 Breaking Change**: 否

**为什么这样修改**: 
1. function-calling 属于第7章"Tool Calling 与 MCP"的核心内容，更适合放在第7章；第5章（AI Agent 原理）已有 Tool Use 覆盖
2. 移动端 kb-toc 缺 padding 导致内容贴边，与网站其他模块不一致

**副作用**: 知识库总知识点从 78 减为 77

**需要继续完善**: 无

---

### Version 1.1

**日期**: 2026-07-01
**Agent**: Codex AI Agent (接手 Session #1, 续)
**Git Commit**: `0cbf0ef`
**分支**: dev

**PR**: [#13](https://github.com/yaohaixu/yaohaixu-ai-study/pull/13)

**本次目标**: 知识库子页面 hero 区域视觉重构

**修改文件**:
- 77 个 `projects/knowledge-base/topics/*.html` (308 行新增, 154 行删除)

**新增功能**:
- 77 个子页面 eyebrow + h1 统一包裹进 `.projects-head` 实现居中
- eyebrow 文本从 "章节名 · X.Y" 重构为 "第 N 章 · X.Y"
- 移除内联 `style="margin-top:60px;"`，让 CSS 默认 80px margin 接管

**修复 Bug**:
- 子页面 eyebrow 与"返回首页"链接视觉重合
- 章节名在 eyebrow 中重复出现在标题上方，视觉冗余

**影响范围**: 77 个知识点子页面

**是否存在 Breaking Change**: 否（仅视觉变化）

**为什么这样修改**:
- 原格式 "大语言模型基础原理 · 1.1" 在子页面 hero 中显得拥挤且不美观
- 内联 60px margin 覆盖了 CSS 80px 默认值，导致 eyebrow 过于靠近返回链接
- 章节名在 eyebrow 和 home 页面中重复，不如使用简洁的"第 N 章 · X.Y"格式

**需要继续完善**: 无

---

## 11. Agent 交接说明

### 当前项目的真正状态

- **框架已完成**：首页、两个完整模块、知识库 14 章结构均已就绪
- **内容为占位**：77 个知识点子页面全部显示"内容正在整理中"
- **视觉已调优**：移动端 padding、子页面 hero 居中均已修复
- **生产可用**：线上 https://yaohaixu.github.io/yaohaixu-ai-study/ 稳定运行

### 还没做的事情

1. **最重要的**：填充 77 个知识点内容（用户飞书 Wiki 中有原始素材）
2. 新建模块 03-05
3. 修复首页 3 个"即将推出"卡片的死链接
4. 添加 OpenGraph / sitemap / 404
5. 大图压缩

### 千万不能动的地方

- `style.css :root` 中的 CSS 变量
- 首页 `.project-card` 的 HTML 结构（JS 脚本依赖卡片 DOM）
- 所有图片的相对路径 `../../assets/img/`
- `.toc-sidebar` 的 `top: 88px`（匹配 header 高度）
- `max-height` 折叠方案（不要改成 `grid-template-rows 0fr`）

### 文件依赖关系

```
index.html ──→ style.css ──→ Google Fonts
            ──→ main.js (Canvas 粒子 + 进度条)
            ──→ 所有子页面通过超链接引用

每个子页面独立 ──→ style.css (通过 <link> 引用)
              ──→ main.js (通过 <script> 引用)
              ──→ 图片通过相对路径 ../../assets/img/
```

### 进入项目后的第一件事

```bash
# 1. 切到 dev 分支
git checkout dev

# 2. 完整阅读 README
# 3. 确认 dev 与 main 的差异
git log main..dev --oneline

# 4. 拉取最新
git pull origin dev

# 5. 验证项目完整性
find . -name "*.html" | wc -l    # 87
ls projects/knowledge-base/topics/ | wc -l  # 77
```

### 最大的风险

1. **GitHub 网络不稳定**：推送/PR 操作可能超时，需要重试
2. **Pages CDN 延迟**：push 后 1-3 分钟才生效，用 `raw.githubusercontent.com` 提前验证源文件
3. **批量修改 77 个知识点文件**：必须用 Python 脚本统一操作，不要逐一手动改
4. **中文文件名**：部分 HTML 文件含中文字符，shell 命令需注意转义

### 开发原则

- **只用 dev 分支**，不直接推 main
- **用 Python 脚本**写/改 HTML，不用 apply_patch
- **复用现有 CSS 组件**，不新建重复样式
- **Commit 格式**: `feat/fix/refactor/docs: 中文描述`
- **Commit 前**先测连通：`curl -s -o /dev/null -w "%{http_code}" https://github.com`
- **完工后**用 `curl + grep` 验证线上

---

## 12. 重要文件说明

### 首页

```html
<!-- index.html (56KB) -->
```

| 属性 | 说明 |
|------|------|
| 用途 | 网站入口，展示 Hero + 项目卡片 + 知识库导航 |
| 主要部分 | Hero (Canvas 背景) → 学习笔记 (项目卡片网格) → AI 基础知识库 (章节折叠卡片) → Footer |
| 依赖 | style.css, main.js, 图片资源 |
| 被依赖 | 所有子页面通过 `header-brand` 中的 `/yaohaixu-ai-study/` 链接回首页 |
| 稳定性 | ✅ 稳定 |
| 修改风险 | 🔴 高（脚本依赖 `.project-card` DOM 结构） |
| 未来方向 | 可能增加搜索框、暗色模式切换 |

### Aurora 设计系统

```css
/* assets/css/style.css (409 行) */
```

| 属性 | 说明 |
|------|------|
| 用途 | 全站唯一 CSS 文件，定义所有 UI 组件 |
| 主要部分 | `:root` 变量(颜色/字体/阴影/圆角) → Header → Hero → Project Cards → Footer → Project Detail → TOC Sidebar → KB TOC → 内容组件 → 响应式 |
| 依赖 | Google Fonts |
| 被依赖 | 所有 HTML 文件 |
| 稳定性 | ✅ 稳定 |
| 修改风险 | 🔴 高（全局影响，`:root` 变量尤其敏感） |
| 关键约定 | 不要移除 CSS 变量；新增组件优先复用 `.callout` `.concept-grid` 等已有组件 |

### 全局 JavaScript

```javascript
// assets/js/main.js (104 行)
```

| 属性 | 说明 |
|------|------|
| 用途 | Canvas 粒子动画 + 页面滚动进度条 |
| 主要函数 | 1) Canvas 粒子生成 + 鼠标交互 2) 滚动事件监听更新 `.progress-fill` |
| 依赖 | 无 |
| 被依赖 | 所有页面通过 `<script src="../../../assets/js/main.js">` 引用 |
| 稳定性 | ✅ 稳定 |
| 修改风险 | 🟢 低 |

### AI Mindset (模块 01)

**文件**: `projects/ai-mindset/index.html`

| 属性 | 说明 |
|------|------|
| 用途 | 5 幕叙事结构：AI 发展阶段 → 学习模型 → 生产模型 → 成长模型 → AI 核心概念 |
| 内容量 | 41 张信息图(SVG)、49 项 TOC、约 15000 字内容 |
| CSS 组件 | `.act-header`, `.concept-grid`, `.phase-timeline`, `.compound-grid`, `.callout`, `.num-list` |
| 稳定性 | ✅ 稳定（完整内容，不再修改） |
| 特殊 | 使用 `.project-layout` grid 布局（220px 侧边栏 + 1fr 内容） |

### Agent Framework (模块 02)

**文件**: `projects/agent-framework/index.html`

| 属性 | 说明 |
|------|------|
| 用途 | 5 幕：什么是 Agent → 核心条件 → 框架选型 → 快速开始 → 实操项目 |
| 内容量 | 14 张配图、56 项 TOC |
| 稳定性 | ✅ 稳定（完整内容，不再修改） |
| 特殊 | 包含 `.agent-table` 对比表格，多个产品截图 |

### 知识库子页面模板

**文件代表**: `projects/knowledge-base/topics/什么是大语言模型.html`

| 属性 | 说明 |
|------|------|
| 用途 | 77 个知识点子页面的标准模板 |
| 结构 | header → section.project-hero (back-link + projects-head + eyebrow + h1) → section.section (content-block) → footer |
| 当前状态 | ⚠️ 占位（`<!-- CONTENT_PLACEHOLDER -->`） |
| 修改建议 | 用 Python 脚本批量操作，每个页面填充 `content-block` 内容 |

---

## 13. API 文档

**本项目为零后端纯静态网站，无 API 接口。**

所有交互均为浏览器端超链接跳转。无 HTTP API、无 WebSocket、无 Server-Sent Events。

如果需要站外接口，未来可能考虑：
- GitHub API (通过 `gh` CLI 在本机操作，非线上接口)
- 第三方搜索服务 (新增功能时考虑)

---

## 14. 数据库说明

**本项目无数据库。**

所有内容存储在 HTML 文件中。知识库数据以文件系统目录结构维护：

| "数据库表" | 对应文件系统 | 记录数 |
|-----------|-------------|--------|
| topic (知识点) | `topics/*.html` | 77 |
| cognitive_model (认知模型) | `knowledge-base/*.html` | 7 |
| module (项目模块) | `projects/*/index.html` | 2 (完整) + 3 (占位) |

"查询"通过文件路径静态导航实现：
- 首页目录 → 章节 → 知识点文件路径
- 所有链接在 index.html 中硬编码

---

## 15. 编码规范

### 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| CSS 类名 | `.kebab-case` | `.project-card`, `.kb-chapter-head` |
| HTML ID | `kebab-case` | `#s-tool-use---function-calling` |
| 文件名 | `kebab-case` | `什么是-ai-agent.html` |
| CSS 变量 | `--kebab-case` | `--font-display`, `--accent-soft` |
| 目录 | `kebab-case` | `agent-framework/`, `knowledge-base/` |
| Commit 类型 | `<type>: ` | `feat:`, `fix:`, `refactor:`, `docs:`, `chore:` |

### 目录规范

- 项目模块放入 `projects/<module-name>/`
- 图片按模块放入 `assets/img/<module-name>/`
- 全局资源放入 `assets/css/`、`assets/js/`
- 所有知识点子页面放在 `topics/` 目录下（扁平结构）

### HTML 规范

- 使用 UTF-8 编码
- 所有 `<a>` 链接使用绝对路径 `/yaohaixu-ai-study/xxx`
- 图片使用相对路径 `../../assets/img/xxx`
- 每个子页面独立一个 `.html` 文件
- Google Fonts 在 `<head>` 中引用

### CSS 规范

- 所有样式在 `style.css` 一个文件中
- 使用 `:root` CSS 变量定义设计 token
- 颜色、阴影、圆角等从 `:root` 引用
- 响应式通过 `@media (max-width: 768px)` 处理
- 不使用 inline style（特殊视觉修复除外）

### 代码风格

- CSS 每个属性一行，4 空格缩进
- HTML 嵌套 2 空格缩进
- JavaScript 使用 ES6 语法

### 开发原则

- **不自动重构已有代码**
- **不复用不修改**：不需要改的代码不要碰
- **批量操作用 Python 脚本**：不要逐一手动修改 77 个文件
- **中文优先**：内容、导航、commit 描述全部中文

---

## 16. 开发流程

### 四角色工作流

```
产品经理(需求) → PM(审核) → 开发(dev分支) → 测试(验证) → PM(合并main)
```

角色映射到当前项目：
- **产品经理 (Kant)**: 提出需求，编写 REQUIREMENTS.md
- **PM**: 审核需求，验收结果
- **开发**: Codex AI Agent — 在 dev 分支实现
- **测试**: Codex AI Agent — 验证修改

### 新增功能流程

```bash
# 1. 确认在 dev 分支
git checkout dev
git pull origin dev

# 2. 阅读 README 了解完整上下文

# 3. 实现（用 Python 脚本写/改 HTML）
python3 /path/to/script.py

# 4. 验证
# - 文件数量
# - HTML 标签平衡
# - CSS 规则
# - 图片引用
curl -s https://github.com  # 检查连通

# 5. Commit
git add <files>
git commit -m "feat/fix/refactor/docs: 中文描述"

# 6. Push
git push origin dev

# 7. 创建 PR
gh pr create --title "type: 中文描述" --body "变更说明..."

# 8. Merge（确认后）
gh pr merge --merge
```

### 验证流程

```bash
# 本地验证
python3 -c "
with open('index.html') as f:
    h = f.read()
print(f'<a>: {h.count(\"<a \")}, </a>: {h.count(\"</a>\")}, balanced: {h.count(\"<a \") == h.count(\"</a>\")}')
"

# 线上验证（Pages CDN 有 1-3 分钟延迟）
# 先用 raw 源文件验证
curl -sL 'https://raw.githubusercontent.com/yaohaixu/yaohaixu-ai-study/main/index.html' | grep '目标文本'

# 再等 CDN 更新后验证线上
curl -sL 'https://yaohaixu.github.io/yaohaixu-ai-study/' | grep '目标文本'
```

### 回滚流程

```bash
# 方式1: 撤销 dev 上的最新 commit
git revert HEAD --no-edit
git push origin dev

# 方式2: 重置 main
git checkout main
git reset --hard HEAD~1
git push origin main --force  # 谨慎使用
```

### Debug 方法

- **检查页面渲染**: 直接用浏览器打开本地 HTML 文件
- **检查线上**: `curl -sL URL | grep PATTERN`
- **检查 CSS 生效**: 浏览器开发者工具查看 Computed Styles
- **检查 JS 错误**: 浏览器 Console 查看
- **Git 恢复误改**: `git checkout <file>` 或 `git checkout HEAD~1`

---

## 17. 架构决策日志 (Decision Log)

| # | 日期 | Agent | 决策 | 备选方案 | 为什么选 | 影响 |
|---|------|-------|------|---------|---------|------|
| 1 | 2026-06 | 前任 Agent | 纯静态 HTML/CSS/JS | React/Vue 等 SPA | 零依赖，GitHub Pages 原生支持 | 无构建步骤，部署快 |
| 2 | 2026-06 | 前任 Agent | Aurora 暖白配色 | 科技蓝紫 | 避免同质化，个人知识库需安静感 | 设计风格独特 |
| 3 | 2026-06 | 前任 Agent | 单文件 CSS | 多文件拆分 | ~400 行，分拆增加管理成本 | 单文件易管理 |
| 4 | 2026-06 | 前任 Agent | `max-height` 折叠 | `grid-template-rows: 0fr` | 浏览器兼容性更好 | 动画流畅度略低 |
| 5 | 2026-06 | 前任 Agent | KB 卡片 `max-width: 900px` | 1200px 默认 | 与其他内容区宽度一致 | 阅读体验一致 |
| 6 | 2026-06 | 前任 Agent | `gh pr merge --merge` | rebase/squash | 保留完整 commit 历史 | 历史清晰但较长 |
| 7 | 2026-06 | 前任 Agent | 内联 style 迁移到 CSS | 保留 inline | 维护性考虑 | 一些历史 inline 需逐步清理 |
| 8 | 2026-06-30 | Codex Agent | 移除 function-calling 重复引用 | 拆分两个页面 | 内容占位，拆分为时过早 | 知识点从 78 减为 77 |
| 9 | 2026-07-01 | Codex Agent | 知识点子页面 hero 居中 + 重构 eyebrow | 保持左对齐 | 用户反馈要求 | 77 个文件同时修改 |

---

## 18. 未来路线图

### 立即要做

1. **填充 77 个知识点内容** — 从飞书 Wiki 搬运正文和图片（需要用户提供素材）
2. **删除公众号二维码图片** — 用户明确要求

### 短期 (1-2 周)

3. 创建模块 03: Prompt Engineering
4. 修复首页 3 个"即将推出"卡片死链接
5. 添加 OpenGraph meta tags

### 中期 (1-2 个月)

6. 创建模块 04: AI 工具栈与工作流
7. 创建模块 05: AI Agent 与自动化
8. 大图压缩 (PNG → WebP)
9. 移动端 TOC 折叠按钮

### 长期

10. 创建模块 06: 终极项目
11. sitemap.xml
12. 搜索功能
13. 暗色模式
14. 404 页面

### 最终目标

一个覆盖从 LLM 基础到 Agent 全栈实践的完整个人 AI 知识库，包含：
- 5-6 个深度项目模块
- 约 100+ 个知识点
- 完善的搜索和导航
- 一个可供他人参考和学习的高质量技术知识库网站

---

## 19. 版本变更日志 (Changelog)

| 版本 | 日期 | 说明 |
|------|------|------|
| v4.13 | 2026-07-01 | 知识库子页面 hero 居中 + eyebrow 重构 (PR #13) |
| v4.12 | 2026-07-01 | function-calling 重复引用修复 + kb-toc 移动端 padding (PR #12) |
| v4.11 | 2026-06-30 | KB 卡片默认折叠修复 + 宽度约束 900px 居中 (PR #11) |
| v4.10 | 2026-06-30 | KB heading 居中 + 折叠 CSS overflow 修复 (PR #10) |
| v4.9 | 2026-06-30 | 知识库导航改为卡片式章节设计 - Aurora 风格 (PR #9) |
| v4.8 | 2026-06-29 | 14 章 77 个知识点子页面批量生成 + 层级导航 (PR #8) |
| v4.7 | 2026-06-29 | AI 基础知识库 section + 7 个认知模型子页面 (PR #7) |
| v4.6 | 2026-06-29 | 中文 README + CHANGELOG (PR #6) |
| v4.5 | 2026-06-29 | 眉标间距 + 装饰线恢复 + CSS 规则迁移 (PR #5) |
| v4.4 | 2026-06-28 | 四角色工作流首次完整运行 (PR #4) |
| v4.3 | 2026-06-28 | Agent Framework 模块 (模块02) (PR #3) |
| v4.2 | 2026-06-28 | 全面中文化 + AI Mindset 五幕内容 (PR #2) |
| v4.1 | 2026-06-28 | 项目初始化 + AI Mindset v1 (PR #1) |
| v1.0 | 2026-06-25 | 初始提交 - 项目创建 |

---

## README 更新规则（强制）

任何情况下，只要发生以下事情，就必须更新 README：

- 修改代码
- 修改目录结构
- 新增/删除文件
- 修改部署流程
- 新增/删除依赖
- 重构
- 修复 Bug
- 新增功能
- 修改架构
- 修改设计方案
- 修改 TODO

**禁止只改代码，不更新 README。**

README 更新属于开发工作的一部分。在 Pull Request 合并前，必须确认 README 已同步更新。

## Agent 工作规范

未来所有 Agent 必须遵守：

1. **开始开发前**，必须完整阅读 README
2. 如果 README 与代码不一致，应先修正文档或代码，再继续开发
3. 每完成一次开发，都必须新增一个 **Version** 记录（追加到第 10 节）
4. 不允许覆盖历史，只允许追加
5. 必须记录 "为什么这样改"，而不仅仅是 "改了什么"
6. 不允许依赖聊天记录或历史上下文，README 是唯一可信的信息源
7. 每次提交代码前，都必须确认 README 已与当前代码保持一致

---

> **最终目标**: 任何一个全新的 AI Agent，仅凭这个 README 和仓库代码，就能无歧义地理解项目历史、当前状态、设计思路和下一步开发计划，实现无缝接手。
