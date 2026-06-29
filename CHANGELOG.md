# Changelog

All notable changes to yaohaixu-ai-study.

---

## [v4.1] - 2026-06-29

### Added
- 四角色智能体工作小组建立（PM Kant + Dev Sagan + QA Leibniz + DevOps Gauss）
- REQUIREMENTS.md 需求文档规范化流程
- PROJECT_HANDOFF.md 项目交接文档
- CHANGELOG.md 版本变更日志
- README.md 中文完整版（替换原英文版本）

### Changed
- 眉标间距调整：`.project-hero .eyebrow` margin-top 60px → 80px（REQ-001）
- Hero 区域间距规则从 inline style 迁移到 style.css，统一管理（REQ-003）
- `.project-hero .back-link` 新增 margin-bottom: 24px
- `.project-hero .body-lg` 新增 margin-top: 16px

### Fixed
- 修复子页面眉标 `display:block` 覆盖 `.eyebrow` 默认 `inline-flex`，恢复 `::before` 装饰线左右排列（REQ-002）
- 修复 Agent Framework 标题多余换行
- 修复眉标与返回链接在 Agent Framework 页面的间距

---

## [v4.0] - 2026-06-29

### Added
- **模块 02：Agent Framework 入门**（`projects/agent-framework/index.html`）
  - 五幕结构：什么是 Agent → 核心条件 → 框架选型 → 快速开始 → 实操项目
  - 14 张参考站配图（Claude Code、Codex、Hermes、OpenClaw、Trae Solo、WorkBuddy 等）
  - 56 项 TOC 侧边栏目录
  - Agent 框架对比表格（`.agent-table`）
- `assets/img/agent-framework/` 图片目录及 14 张截图
- 首页项目卡片新增模块 02 入口

### Changed
- 品牌重构：从 "AI 学习框架" 改为 "yaohaixu · AI 知识库"
- 页面标题、导航文案全面中文化

---

## [v3.0] - 2026-06-28

### Added
- **模块 01：AI Mindset 转变**（`projects/ai-mindset/index.html`）
  - 五幕深度内容：AI 发展阶段 → 学习模型 → 生产模型 → 成长模型 → AI 核心概念
  - 41 张信息图（SVG + PNG），涵盖知识管理迁移、复利效应、快速失败、心智复原等主题
  - 49 项 TOC 侧边栏目录
  - Canvas 粒子背景（首页 Hero）
- `assets/img/` 目录，存放全部信息图
- 内容排版组件：概念卡片（`.concept-grid`）、阶段时间线（`.phase-timeline`）、复利卡片（`.compound-grid`）、提示框（`.callout`）等

### Changed
- 首页全面中文化
- 首页项目卡片从纯展示改为带描述 + 状态标识

---

## [v2.0] - 2026-06-28

### Added
- 完整首页（`index.html`）：Hero 区域 + 项目卡片列表
- Aurora 设计系统（`assets/css/style.css`）
  - CSS 变量体系：13 色板、4 级阴影、4 级圆角、5 种字体
  - 组件：Header、Hero、项目卡片、按钮、页面布局
- 全局 JS（`assets/js/main.js`）：Canvas 粒子动画、滚动进度条、平滑锚点导航、卡片 3D 视差效果
- 5 个学习模块卡片占位（模块 03-05 为 "规划中"）
- Google Fonts 字体栈（Inter、Playfair Display、Noto Sans SC、Noto Serif SC、JetBrains Mono）
- GitHub Actions 自动部署（`.github/workflows/deploy.yml`）
- 英文 README.md（初版）

---

## [v1.0] - 2026-06-28

### Added
- 项目初始化（`chore: init project`）
- 基础 `index.html` 页面骨架
- 项目仓库创建于 GitHub Pages
