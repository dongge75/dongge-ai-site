---
name: dongge-ai-project
description: 「东歌AI」个人一站式平台项目，技术栈、品牌信息、当前阶段
metadata:
  node_type: memory
  type: project
  originSessionId: 399e79f1-473a-4195-99f6-f518b0a3723a
  modified: 2026-10-12T15:18:55.778Z
---

用户（东歌）在建的「东歌AI」个人一站式平台项目，参见 [[dongge-ai-brand]] 与 [[dongge-ai-tech-stack]]。

**项目位置**：`D:\ObsidianVaults\024grwangye`（同时是 Obsidian Vault）

**核心诉求**：
- 个人作品 + 公众号 + 视频号 + 自研小工具的一站式入口
- 参考站：https://canghe.ai/（布局节奏感、01-06 版块编号）

**当前阶段（2026-10-12）**：
- ✅ 阶段 1：本地可跑、Astro 骨架 + 7 个页面 + 1 个可用工具（MD 转公众号）+ 占位公众号二维码 + 占位作品/文章数据
- ⏳ 阶段 2 待启动：RSSHub 公众号同步、第二个工具、备案号、上线部署
- ❌ 未做：视频号板块（已确认不做）、第二个工具（封面/配色）

**关键文件**：
- [网站搭建方案.md](网站搭建方案.md) — 完整方案
- [页面原型.md](页面原型.md) — 9 张 ASCII 低保真原型
- `src/consts.ts` — 所有品牌信息都在这里集中维护
- `public/images/wechat-qr.jpg` — 公众号二维码占位（用户后续手动放）

**本地预览**：
```bash
cd "D:/ObsidianVaults/024grwangye"
npm run dev          # http://localhost:4321/
```

**用户画像**：
- 非技术背景（「不懂技术」「什么是 GitHub」）
- 不写代码，未来内容更新由 Claude 协助完成
- 偏好先看方案/原型再动手实现

**Why:** 这是用户首个个人网站项目，技术决策影响后续多年。
**How to apply:** 继续推进时优先复用已有结构，先填内容再加新功能。任何新决策先在 `网站搭建方案.md` 加一节再动代码。
