# yaohaixu-ai-study

> yaohaixu 的个人 AI 知识库 —— 把 AI 学习与实践沉淀为结构化知识体系。
>
> 线上：[yaohaixu.github.io/yaohaixu-ai-study](https://yaohaixu.github.io/yaohaixu-ai-study/)

---

## 目录结构

```
yaohaixu-ai-study/
├── index.html                          # 首页：Hero + 学习路径卡片
├── projects/
│   ├── ai-mindset/index.html           # 模块 01：AI Mindset 转变
│   └── agent-framework/index.html      # 模块 02：Agent Framework 入门
├── assets/
│   ├── css/style.css                   # Aurora 设计系统（全局 CSS）
│   ├── js/main.js                      # 粒子动画 / 进度条 / 卡片效果
│   └── img/
│       ├── *.svg, *.png, *.jpg         # 模块 01 信息图 (~41 张)
│       └── agent-framework/            # 模块 02 配图 (~13 张)
├── .github/workflows/deploy.yml        # GitHub Actions 自动部署
├── CHANGELOG.md                        # 版本变更日志
└── README.md                           # 本文件
```

---

## 学习路径

| # | 模块 | 状态 | 说明 |
|---|---|---|---|
| 01 | AI Mindset 转变 | 已完成 | 五幕：AI 发展阶段 → 学习模型 → 生产模型 → 成长模型 → AI 核心概念 |
| 02 | Agent Framework 入门 | 已完成 | 五幕：什么是 Agent → 核心条件 → 框架选型 → 快速开始 → 实操项目 |
| 03 | Prompt Engineering | 规划中 | Prompt 架构与编排 |
| 04 | AI Agents & 自动化 | 规划中 | 智能体设计与工作流自动化 |
| 05 | 终极项目 | 规划中 | 端到端 AI 应用实践 |

---

## 技术栈

- **HTML / CSS / JS**：纯静态，零框架依赖
- **Aurora 设计系统**：暖白配色，Inter + Playfair Display 字体
- **Canvas 粒子动画**：首页 Hero 背景
- **托管**：GitHub Pages，GitHub Actions 自动部署

---

## 开发工作流

项目采用**四角色智能体协作**模式，所有开发在 `dev` 分支进行：

| 角色 | Agent | 职责 |
|---|---|---|
| 产品经理 | Kant | 需求分析、文档编写 |
| 开发 | Sagan | 代码编写，Python 脚本生成 HTML/CSS/JS |
| 测试 | Leibniz | 功能验证、视觉回归检查 |
| DevOps | Gauss | 部署管理、线上验证 |

```
feature → dev 分支（开发 + 测试）→ PR → main 分支（生产）→ GitHub Pages 自动部署
```

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/yaohaixu/yaohaixu-ai-study.git
cd yaohaixu-ai-study
git checkout dev

# 直接打开浏览器预览
open index.html
# 或启动本地服务器
python3 -m http.server 8080
```

### Commit 规范

- 格式：`feat: <描述>` / `fix: <描述>` / `refactor: <描述>`
- 语言：中文
- 分支：所有改动在 `dev`，合并后上线

---

## 线上地址

[https://yaohaixu.github.io/yaohaixu-ai-study/](https://yaohaixu.github.io/yaohaixu-ai-study/)

---

## Credits

- **内容与设计**：[yaohaixu](https://github.com/yaohaixu)
- **字体**：Google Fonts — Inter, Playfair Display, Noto Sans SC, Noto Serif SC, JetBrains Mono
- **部署**：[GitHub Pages](https://pages.github.com)
