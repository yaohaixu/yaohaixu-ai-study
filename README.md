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

- **内容与设计**：[yaohaixu](https://github.com/yaohaixu)
- **字体**：Google Fonts — Inter, Playfair Display, Noto Sans SC, Noto Serif SC, JetBrains Mono
- **部署**：[GitHub Pages](https://pages.github.com)
