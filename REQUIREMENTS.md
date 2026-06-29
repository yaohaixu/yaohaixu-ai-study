# Requirements — yaohaixu-ai-study

> **编写人**: 产品经理 Kant
> **日期**: 2026-06-29
> **来源**: 用户反馈（子页面眉标间距）

---

## REQ-001 · 眉标与返回链接间距不足

**问题描述**

两个子页面（AI Mindset / Agent Framework）的 hero 区域中，眉标 `.eyebrow`（"模块 01 · 学习中"）与上方的返回链接 `.back-link`（"返回学习框架"）之间视觉呼吸感不够。

当前间距由 `.back-link` 的 `margin-bottom: 32px` 与 `.eyebrow` inline 的 `margin-top: 60px` 叠加构成（约 92px）。但由于 `.eyebrow` 字号仅 11.5px，在 hero 区域整体偏紧凑的背景下，眉标与上方导航之间的留白不足以形成清晰的视觉层次——返回链接（轻量导航）与眉标（章节标识）在视觉上粘连感明显。

**涉及文件**
- [projects/ai-mindset/index.html](/Users/yaohaixu/yaohaixu-ai-study/projects/ai-mindset/index.html:37)
- [projects/agent-framework/index.html](/Users/yaohaixu/yaohaixu-ai-study/projects/agent-framework/index.html:35)
- [assets/css/style.css](/Users/yaohaixu/yaohaixu-ai-study/assets/css/style.css) — `.back-link` / `.eyebrow` 定义

**期望效果**

将眉标与返回链接之间的间距从约 92px 增加至 112px，使 hero 区域形成以下清晰的三段式视觉层次：

```
返回学习框架     (轻量导航，左对齐，14px 字号)
    ↓  ~112px 留白
模块 01 · 学习中  (眉标，居中，11.5px 字号)
    ↓   16px 留白
大标题           (heading-xl，居中)
```

**优先级**: P0 — 用户直接反馈，视觉体验问题

---

## REQ-002 · 眉标 display 属性异常导致 ::before 装饰线失效

**问题描述**

`.eyebrow` 在 `style.css` 中设计为 `display: inline-flex`，配合 `::before` 伪元素（16px 横线）和 `gap: 8px` 实现"装饰线 + 文字"的行内横向布局。但两个子页面均通过 inline style `display:block` 覆盖了此属性。

结果：`::before` 装饰线变为块级元素，与文字上下堆叠而非左右排列，破坏了眉标原有的视觉设计。眉标应恢复为一根短横线 + 文字的 inline-flex 形态。

**涉及文件**
- [projects/ai-mindset/index.html](/Users/yaohaixu/yaohaixu-ai-study/projects/ai-mindset/index.html:37)
- [projects/agent-framework/index.html](/Users/yaohaixu/yaohaixu-ai-study/projects/agent-framework/index.html:35)
- [assets/css/style.css](/Users/yaohaixu/yaohaixu-ai-study/assets/css/style.css) — `.eyebrow` 定义（第 37-41 行）

**期望效果**

- 移除两个子页面眉标的 inline `display:block`
- 眉标恢复 `display: inline-flex`，`::before` 横线与文字左右排列
- 如眉标在 hero 中需要整体居中，通过在外层包裹一个居中容器实现（而非修改 `.eyebrow` 自身 display）

**优先级**: P1 — 视觉还原问题，与 P0 同步修复

---

## REQ-003 · hero 区域间距依赖 inline style，缺乏统一管理

**问题描述**

两个子页面 hero 区域的间距均通过 inline style 设置：
- `.eyebrow` 上：`margin-top:60px`、`text-align:center`、`display:block`
- `.body-lg` 上：`margin-top:16px`

这种写法不便于统一调整（如本次修改需同时改两个文件），且与项目"不拆分 CSS"的决策不一致。

**期望效果**

1. 在 `style.css` 中新增 `.project-hero .eyebrow` 规则，统一管理 hero 区域眉标的 `margin-top`（调整至约 80px）以及 `text-align: center`
2. 在 `style.css` 中新增 `.project-hero .body-lg` 规则，统一管理副标题间距
3. 从两个子页面 HTML 中移除对应的 inline style

**优先级**: P2 — 代码可维护性改进，可与 P0/P1 同步实施

---

## REQ-004 · 首页 hero 区域间距回归验证

**问题描述**

在完成上述间距调整后，需要验证首页 hero 区域的 `.eyebrow`（首页用 `.eyebrow` 展示子标题）的 CSS 默认规则是否受影响。首页 hero 的 `.eyebrow` 不被 `.project-hero` 包裹，不受新规则影响——但需确保 `margin-bottom: 16px` 仍适用于首页场景。

**期望效果**

- 首页 hero 区域眉标间距不受影响
- 调整完成后在浏览器中目视验证两个子页面 + 首页的 hero 区域间距一致性

**优先级**: P3 — 回归验证

---

## 实施建议

1. **先修 REQ-002**：移除两个 HTML 中眉标的 inline `display:block`，恢复 `::before` 装饰线
2. **再修 REQ-001**：将眉标 `margin-top` 从 60px 调整为 80px，拉开与返回链接的距离
3. **同步 REQ-003**：将调整后的间距规则从 inline style 迁移到 `style.css` 的 `.project-hero .eyebrow` 选择器
4. **验证 REQ-004**：检查首页不受影响
