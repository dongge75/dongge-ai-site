---
name: ai-poju-recommend-page
description: AI 破局俱乐部推荐页 /recommend/paiju 的开发状态、视觉决策、待办
metadata:
  node_type: memory
  type: project
  originSessionId: e403ca5e-3aaa-458c-ae14-46b9fe6e1d03
  modified: 2026-10-13T15:14:36.586Z
---

2026-10-13 启动 /recommend/paiju（AI 破局俱乐部推荐页）开发，作为 [[x-zhongcao-playbook]] 闭环的一部分。

**已实现（2026-10-13 第一版）**：
- [src/pages/recommend/paiju.astro](D:\ObsidianVaults\024grwangye\src\pages\recommend\paiju.astro) — 完整页面
- [BaseLayout.astro](D:\ObsidianVaults\024grwangye\src\layouts\BaseLayout.astro) — 加了 standalone prop（跳过 Header/Footer 给落地页用）
- [public/images/paiju/](D:\ObsidianVaults\024grwangye\public\images\paiju) — 7 张破局邀请卡 + qr.png（从邀请卡-06 裁剪）

**视觉决策**：
- 参考 [https://whenreset.dev/scys](https://whenreset.dev/scys) 的设计 token（暖白 `#f7f8f1` 底 + 深绿青 `#007e6c` 主色 + 紧凑 4-16px 圆角 + 系统字体），但**非 1:1 复刻**——做了 ~8 处主动调整避免侵权（见下方）。
- 资源下载备份：[D:\ObsidianVaults\024grwangye\_reference\](_reference/)（whenreset-scys-preview.png / whenreset-invite-qr.png / brand-light.webp + 两个 CSS）
- 顶层沿用 [BaseLayout.astro](src\layouts\BaseLayout.astro) standalone={true}，保留 Tailwind 全局 CSS。

**相比 whenreset/scys 已有的 8 处主动改动**：
1. 品牌区：原是 Codex reset 红色钟表 LOGO → 改"东"+ "东歌AI · 个人推荐"
2. Hero 数字：原"3 天 / 9 次" → 改"7 天"+ 破局权益数字
3. 体验卡：原"3 天 / SHENG CAI YOU SHU" → 改"7 天 / DONG GE · 1"
4. CSS 类名：原 CSS Modules（_xxx_xxx_数字）→ 改通用语义类
5. 体验卡装饰：原大"¥"背景 → 同样保留大"¥"但配色微调
6. 内容文案：原 95% 都是生财 → 改"我推荐 AI 破局俱乐部"
7. Header 导航：原 4-5 项 → 改 3 项 + 主站入口
8. 加了原页面没有的 Footer + Disclaimer（明确"本页为个人推荐页"）

**当前 Hero / Join 区还有 2 段占位**：
1. Hero 副标："我用了 X 个月，把 AI 真正用进日常做事里。"
2. Join 区东哥1 头像下："我用 AI 做了自己的 [产品/工具/网站]..."

**2026-10-13 更新**：
- 用户提供完整个人档案（[dongge-personal-profile.md](dongge-personal-profile.md)）
- 2 段占位已替换为"东哥1 真实版"：
  - Hero 副标 → "51 岁，**审计人**。最近 **1 年**我把 AI 用进公众号、视频号图书带货、AI 电商全链路创作三个方向。其中对我帮助最大的社群，是 AI 破局俱乐部。"
  - Join 卡片 → "我做审计 20 多年，最近 2 年用 AI 写了 100 多篇公众号、做视频号图书带货、搭了 AI 电商全链路创作平台。没人带容易绕弯路，我把走通的路整理在这里，希望帮你少走点弯路。"
- 删 heroNote 的"与折扣"字眼
- **新增 TOOLKIT section**（在 BENEFITS 之后、CASES 之前）：
  - 标题："我目前在用的 AI 工具"
  - 4 张卡片：写代码（Claude Code/Codex/WorkBuddy）/ 写文案（ChatGPT/Claude Code）/ 做带货（ChatGPT/WorkBuddy）/ 写公众号（Obsidian/飞书/Claude Code）
  - 每张卡片对应 1 个未来可展开成"AI 工具教程"系列内容的目录项
- 用户核心改动意图："以后写如何使用AI工具的"——TOOLKIT section 是这个目录的雏形
- **Hero 主标 h1 决策**：候选 3 句（"AI 时代，先学先赢" / "拥抱 AI，先用先赢" / "拥抱 AI，用出先机"），用户选 A
  - 选 A 理由：① 最贴 51 岁审计人 IP（"用出"= 强调做出结果）；② 节奏对仗 4+4；③ 与 whenreset 原版差异最大、侵权风险最低
  - 候选 B"拥抱 AI，先用先赢"被弃原因：和 whenreset 原版"AI 时代，先用先赢"只差 4 个字，结构高度相似，侵权风险比当前版高
  - **未来同类页面（推生财/推米核）默认沿用"拥抱 AI，[动词]出[结果]"句式**

**下次迭代方向**（用户表示要继续改）：
- 微调色板 / 字体 / 间距，让最终成稿和 whenreset 视觉再"拉开 20%"距离
- 替换 2 段占位为东哥1 真实推荐语
- 决定要不要从首页 platforms 数组加链接（让 whenreset.dev/scys 的访客能跳到 /recommend/paiju）
- 决定 7 张原邀请卡是不是用作「区块素材」展示（要解决合规标注问题）

**Why:** 这是用户从「读生财三篇文案」到「真正有产出物」的第一步产物。视觉已锁定方向、代码已可跑，等推荐语替换 + 后续微调。

**How to apply:** 用户下次问"破局推荐页做到哪了""我自己推荐语还没给""要不要进一步改"时，先看上面"已实现 + 视觉决策 + 占位 + 迭代方向"四块，定位当前状态，再决定下一步。建议用户口述推荐语时，同时给"我用了 AI 做了 [具体事] 拿到 [结果]"三件套。
