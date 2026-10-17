---
name: dongge-main-vs-paiju-split
description: 主页 vs /recommend/paiju 子页内容分工——CLI 内容归属规则
metadata:
  node_type: memory
  type: feedback
  originSessionId: e403ca5e-3aaa-458c-ae14-46b9fe6e1d03
  modified: 2026-10-14T05:11:42.655Z
---

# 主页 vs /recommend/paiju 内容分工（2026-10-14 用户明确要求）

**核心规则**：
- **主页（`donggeai.com/` / `index.astro`）**：放"**东歌1 自己**用 CLI / AI 赚钱"的内容（个人实战、第一视角）
- **子页（`/recommend/paiju`）**：放"**圈友**复盘/推荐"内容（第三方视角、链接到 aipoju.com）

**具体归属（2026-10-14 当前）**：
| 内容类型 | 归属 | 现有形式 |
|---|---|---|
| 东歌1 用 CLI 赚 3 个场景（公众号/视频号/电商） | 主页 | index.astro `03 用 CLI 赚钱` 板块，3 张卡 + 双 CTA |
| 圈友 CLI 复盘 4 篇（smarts/西昂/福多多/可人） | 子页 | paiju.astro cases 列表 07-10 项 |
| 3 张破局精华帖（西堂/流月/米一） | 子页 | paiju.astro cases 列表 04-06 项 |
| 3 个圈友复盘（二宝/05后/失业程序员，假数据） | 子页 | paiju.astro cases 列表 01-03 项，链 #card 锚 |
| 破局官方产品（skill-store / cli） | 主页 + 子页 | 主页 08 community / 子页 OFFICIAL 板块 |

**用户原话**：
> "你给我推荐的用cli赚钱的内容，要放在主页；圈友的cli复盘可以放在子页面。"

**Why:** 用户希望主页承担"个人 IP + 自我背书"角色，子页承担"推荐+第三方背书"角色。两边都重要但定位不同——主页是"我说我做了"，子页是"圈友说他们做了"。

**How to apply:**
- 以后写新内容，先问"这是东歌1 自己的，还是圈友的？"——自己→主页，圈友→子页
- 不要把圈友复盘堆到主页，主页要保持"东歌1 第一视角"
- 子页不要再加"东歌1 自己"的内容，主页和子页要保持清晰边界
- 主页 CLI 板块底部已有"看 7 篇圈友 CLI 复盘 →"链接到子页，形成自然引流

**相关**：
- [[dongge-ai-project]] — 项目总览
- [[dongge-personal-profile]] — 东歌1 个人 IP 锚点
- [[dongge-ai-brand]] — 品牌信息
