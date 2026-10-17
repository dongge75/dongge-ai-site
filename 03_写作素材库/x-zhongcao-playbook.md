---
name: x-zhongcao-playbook
description: 东歌的「X 中文 AI 种草闭环」三文关联实操计划，已落成一份独立 md 文档
metadata:
  node_type: memory
  type: project
  originSessionId: e403ca5e-3aaa-458c-ae14-46b9fe6e1d03
  modified: 2026-10-13T06:27:32.320Z
---

2026-10-13 与 [[wangkedong]] 一起把生财三篇精华帖（[[超级标18_重置Reset流量_亦仁]]、[[超级标19_X中文AI自媒体_亦仁]]、[[生财MCP_精选副业种草页_Jedee陈木木]]）关联成一个完整闭环分析，并产出一份独立可读的实操指南：

**文档位置**：[D:\ObsidianVaults\024grwangye\X种草闭环_三文关联实操指南.md](X种草闭环_三文关联实操指南.md)

**关键结论**（按性价比排序的下一步）：
1. **先用生财官方分销落地页**（半天 0 代码）→ 拿专属链接挂到 whenreset.dev
2. **再做东歌AI 的 /recommend 页**（1-2 天 Claude Code 协助）→ 挂 AI 破局、做长期流量承接
3. **最后才做 X 账号起号**（1-2 个月才有反馈）→ 用板块 A/B/C 框架（自我介绍推 / 单条干货推 / 长 Thread）

**关键发现**：
- `whenreset.dev/scys` 不是自建站，是**生财官方的分销商落地页系统**（search01.shengcaiyoushu.com/test/ + Vue + Arco），自动渲染最新精华帖
- 鱼总商单群累计接单 200 万+，单条报价 6K-1W，「加发 X 就加价」2-3 倍
- 中文 AI 账号前 100 粉丝中位数才 4 万 → 现在做进前排容易
- 陈木木种草页第一个月转化约 4 万（48 领卡 / 4 付费）的关键是「接 MCP 后挂精华帖解读」
- X 上写此类工具/种草内容的 7 个入口：个人推文流、置顶推、回复大号、长推、DM 自动回复、Bio 链接、X Community

**东歌AI 项目里的具体落地**：
- 新增 `src/pages/recommend.astro`（种草页）
- 新增 `prompts/zhongcao-prompt.md`（解读说明书）
- 改 `src/pages/index.astro` 的 platforms 数组（加 recommend 链接 + X 链接）
- X 账号计划用名 `donggeai`，Bio 已写好草稿

**Why:** 这份文档是用户从「读三篇生财文案」到「接下来 1-3 个月实际要做的事」的整套打法。
**How to apply:** 用户下次问「我 X 账号开始做了吗」「那个种草页呢」「生财分销怎么搞」时，先打开这份文档对照进度，再决定是接着推进还是开新方案。如果用户开始动手了，记得把推进状态同步回来。

---

> **v12 skill 整合声明**（2026-10-17）：
> - 本素材按 [[wechat-content-mining]] skill v12 模板 F 整理
> - 工具描述按"必须提实际工具+不预设清单"（v9+v10 立）
> - 不写"为商家做"导向（一箭双雕=内容真实>商单入口，v8 立）
> - 不写"为别人看"导向（复盘=看有多少事，v11+v12 立）
> - 不预设工具清单（实际用了哪个就写哪个，不从 8 个工具栈里选）
> - 通用句池用 v12 短语版（3-7 字短语，参见 [[general-sentence-pool-a-b-v12]]）
> - 完整 v12 演化日志见 [[template-f-evolution-log]]
