---
name: dongge-ai-brand
description: 东歌AI 个人品牌的视觉与文案信息
metadata:
  node_type: memory
  type: project
  originSessionId: 399e79f1-473a-4195-99f6-f518b0a3723a
  modified: 2026-10-12T16:40:12.804Z
---

「东歌AI」是用户的个人品牌，参见 [[dongge-ai-project]]。

**品牌信息**（用户于 2026-10-12 提供）：

| 字段 | 值 |
|---|---|
| 品牌名 | **东歌AI** |
| 一句话定位（Hero tagline） | 构建面向电商和OPC的 AI 产品 |
| 用户称呼 | 东歌 |
| 邮箱 | 308949371@qq.com |
| 微信公众号 | 东哥副业笔记 |
| GitHub | 不需要（用户不写代码） |
| 域名 | 暂未注册，先用 Vercel 子域 |
| 个人简介 150 字 | 暂未想好（占位中） |
| 头像 | 暂无（用「东」字橙色圆形渐变占位） |

**视觉系统**：
- 主色：琥珀色 `#f59e0b`（`accent-500` 在 tailwind.config.mjs）
- 强调渐变：`from-accent-400 to-orange-500`
- 字体：英文 Inter + 中文 Noto Sans SC / PingFang SC / 微软雅黑 fallback
- 风格：白底 + 黑色文字 + 琥珀强调色（类似 canghe.ai 的简洁现代感）
- 编号：每个版块用 01-06 数字标识，沿用 canghe.ai 风格

**如何更新**：
- 改文案 / 邮箱 / 公众号：编辑 `src/consts.ts` 一个文件，所有页面自动更新
- 改颜色：编辑 `tailwind.config.mjs` 的 `accent` 色板
- 改 Hero 标题：编辑 `src/components/Hero.astro`
- 加新工具：在 `src/pages/tools/` 加新页面 + 在 `src/tools-react/` 加 React 组件


---

> **v12 skill 整合声明**（2026-10-17）：
> - 本素材按 [[wechat-content-mining]] skill v12 模板 F 整理
> - 工具描述按"必须提实际工具+不预设清单"（v9+v10 立）
> - 不写"为商家做"导向（一箭双雕=内容真实>商单入口，v8 立）
> - 不写"为别人看"导向（复盘=看有多少事，v11+v12 立）
> - 不预设工具清单（实际用了哪个就写哪个，不从 8 个工具栈里选）
> - 通用句池用 v12 短语版（3-7 字短语，参见 [[general-sentence-pool-a-b-v12]]）
> - 完整 v12 演化日志见 [[template-f-evolution-log]]
