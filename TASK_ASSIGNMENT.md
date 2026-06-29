# Task Assignment — Developer Sagan

> **From**: PM Huygens
> **Date**: 2026-06-29
> **Branch**: `dev` (local commit `0710640`, push to origin pending — GitHub network)
> **Requirements**: [REQUIREMENTS.md](REQUIREMENTS.md)

---

## Approved: 4 Requirements

All requirements **APPROVED** with one implementation note.

### REQ-001 · P0 — 眉标间距 92px → 112px
- **Files**: `projects/ai-mindset/index.html` (L37), `projects/agent-framework/index.html` (L35)
- **Action**: Increase `.eyebrow` `margin-top` from 60px → 80px
- **Verification**: `.back-link` `margin-bottom:32px` + `.eyebrow` `margin-top:80px` = 112px total

### REQ-002 · P1 — 恢复 ::before 装饰线
- **Files**: same two HTML files
- **Action**: Remove inline `display:block` from both `.eyebrow` elements
- **Verification**: `::before` 16px horizontal line should render to the LEFT of eyebrow text (per CSS `display: inline-flex; gap: 8px;`)

### REQ-003 · P2 — 间距规则迁移到 CSS
- **CSS file**: `assets/css/style.css` — add rules for `.project-hero .eyebrow` and `.project-hero .body-lg`
- **HTML files**: Remove inline `margin-top`, `text-align`, `display` styles from both `.eyebrow` and `.body-lg` elements
- **⚠️ PM Note**: `text-align:center` on an `inline-flex` element does not center the element within its parent. Sagan — choose your approach: either add `text-align:center` to `.project-hero .page-width`, or wrap eyebrow in a centering container, or switch to `display:flex` with `justify-content:center`. Do NOT break the `::before` line (REQ-002).

### REQ-004 · P3 — 首页回归验证
- **File**: `index.html` (L30, L55) — `.eyebrow` uses CSS defaults, not inside `.project-hero`
- **Action**: After changes, visually confirm homepage eyebrow间距 is unchanged

---

## Implementation Order (Recommended)
1. **REQ-002 first**: remove `display:block` → unbreaks `::before`
2. **REQ-003**: migrate spacing to CSS via `.project-hero .eyebrow` + `.project-hero .body-lg`
3. **REQ-001**: set `margin-top: 80px` in the new CSS rule (combined with REQ-003)
4. **REQ-004 last**: open all 3 pages and eyeball-check

## Design Constraints
- Do NOT modify `:root` variables in style.css
- Do NOT refactor unrelated code
- Use Python to write HTML if editing long files (apply_patch unstable with CJK)
- Commit format: `feat/fix/refactor: 中文描述`
- Commit to `dev` branch only

## Verify Before Handoff
- [ ] Both subpages: `::before` horizontal line visible left of eyebrow text
- [ ] Both subpages: gap between back-link and eyebrow ≈ 112px
- [ ] Homepage: `.eyebrow` appearance unchanged
- [ ] No inline `margin-top` / `text-align:center` / `display:block` on subpage eyebrows
