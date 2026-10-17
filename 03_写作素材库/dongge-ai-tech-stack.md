---
name: dongge-ai-tech-stack
description: "东歌AI 项目的技术栈细节与版本锁定，参见 [[dongge-ai-project]]"
metadata:
  node_type: memory
  type: project
  originSessionId: 399e79f1-473a-4195-99f6-f518b0a3723a
  modified: 2026-10-12T16:40:18.781Z
---

**技术栈版本**（2026-10-12 锁定，验证可工作）：

```json
{
  "astro": "^4.16.18",
  "@astrojs/react": "^3.6.3",
  "@astrojs/tailwind": "^5.1.4",
  "tailwindcss": "^3.4.17",
  "@tailwindcss/typography": "^0.5.15",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

**为什么 Astro 4 而不是 5 / Tailwind 4？**
- 这是当下文档最多、社区方案最稳定的组合
- 未来升级 Astro 5 / Tailwind 4 不需要动业务代码，只需 bump 版本 + 改 CSS `@import` 语法 + 替换 `@astrojs/tailwind` 集成为 `@tailwindcss/vite`
- 实际安装：astro 4.16.19，dev 启动耗时 762ms

**项目结构关键约定**：

```
src/
├── consts.ts              ← 唯一改这里更新全站文案（公众号名/邮箱/t tagline）
├── layouts/BaseLayout.astro
├── components/            ← 复用 Astro 组件（含 PlatformCard 用于外部平台入口）
├── pages/                 ← 路由即文件结构
│   ├── index.astro        ← 首页
│   ├── about.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── sample.astro
│   ├── projects/
│   │   └── index.astro
│   └── tools/
│       ├── index.astro    ← 工具集导航
│       └── md2wechat.astro  ← 单工具（导入 React 组件）
├── tools-react/           ← 仅工具页用的 React 组件
│   └── Md2WeChat.tsx
├── lib/markdown.ts        ← 自研轻量 MD 解析（不依赖 marked）
└── styles/global.css      ← Tailwind + 公众号预览样式 (.wx-preview)
```

**外部平台 URL**（在 `src/pages/index.astro` 的 `platforms` 数组里改）：
- AI 购物平台：https://aishopdg.quantv.com/
- AI 破俱乐部：https://whenreset.dev/scys

**已安装依赖陷阱**：
- `npm install` 在该环境下首次运行遇到 `ECONNRESET` + `EPERM`，需要 `npm cache verify` + 重试
- 已知警告：esbuild 和 sharp 的 postinstall 脚本不自动批准，需手动 `npm rebuild esbuild sharp`
- 实际：通过先 `npm install --no-audit --no-fund` 再 `npm rebuild esbuild sharp` 完成

**dev server 重启陷阱**：
- `TaskStop` 关闭后台进程时，只会关掉 Claude 这边的句柄，**真正的 node 进程仍占着端口**
- 重启 dev server 时如果旧进程没死，会自动改用 4322 等端口
- 正确做法：先 `netstat -ano | grep :4321` 查到 PID，再 `taskkill //F //PID <pid>`
- 或更暴力：`taskkill //F //IM node.exe`（杀全部 node）

**调试流程**：浏览器报错时先 `tail dev server log` 再改代码 + 让用户硬刷新（`Ctrl+Shift+R`），不要假定用户浏览器是新的

**未来阶段需要装的依赖**：
- RSSHub 公众号同步：暂用 fetch 调用 RSSHub API，无需新依赖
- 邮件订阅：集成 mailgun/Resend 时再加 SDK
- 评论：Giscus（无需后端）
- 搜索：Pagefind（无需后端，build 时生成）


---

> **v12 skill 整合声明**（2026-10-17）：
> - 本素材按 [[wechat-content-mining]] skill v12 模板 F 整理
> - 工具描述按"必须提实际工具+不预设清单"（v9+v10 立）
> - 不写"为商家做"导向（一箭双雕=内容真实>商单入口，v8 立）
> - 不写"为别人看"导向（复盘=看有多少事，v11+v12 立）
> - 不预设工具清单（实际用了哪个就写哪个，不从 8 个工具栈里选）
> - 通用句池用 v12 短语版（3-7 字短语，参见 [[general-sentence-pool-a-b-v12]]）
> - 完整 v12 演化日志见 [[template-f-evolution-log]]
