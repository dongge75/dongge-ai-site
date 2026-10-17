---
name: donggeai-cloudflare-pages-deploy
description: donggeai.com 部署关键事实：Pages 走 legacy 流程、域名自动绑定、Cloudflare Registrar 买的域名 CNAME 自动签证书
metadata:
  node_type: memory
  type: project
  originSessionId: e403ca5e-3aaa-458c-ae14-46b9fe6e1d03
  modified: 2026-10-14T15:15:45.405Z
---

# donggeai.com Cloudflare Pages 部署关键事实

**事件**：2026-10-14 晚完成首次部署，`dongge-ai-site.pages.dev` 预览可访问，主页 + `/recommend/paiju` 子页都正常；同晚绑定自定义域名 `donggeai.com`，**用户已确认浏览器可以正常打开 https://donggeai.com**。

**当前线上状态（2026-10-14 晚）**：
- ✅ `https://donggeai.com` 可访问（主域 + Cloudflare 自动证书）
- ✅ `https://www.donggeai.com` 已绑 + **301 永久重定向到主域**（Page Rules 配：URL `www.donggeai.com/*` → 301 → `https://donggeai.com/$1`）
- ⏳ 内容持续优化中（用户在 push 即可，2-3 分钟自动部署）

**2026-10-14 commit 信息已改**：从 "Initial commit: 东歌 AI 个人主页 + 破局推荐页" 改成 "Initial commit: 东歌 AI 个人主页"（`git commit --amend` + `git push --force`，单人仓库安全）。

## 关键流程坑（下次再部署别再踩）

### 1. 走 Pages 必须用 legacy 入口
Cloudflare 新版 UI 把 Workers / Pages 合并到 "Workers & Pages" 主面板，**默认 "Create application" 创建的是 Worker**（要 wrangler.toml、Deploy command、API token，**没有 Build output directory 字段**）。

**正确入口**："Create application" → 屏幕**最底部**小字 "Need to use the legacy Pages workflow? **Continue to Pages**" → 跳到真正的 Pages 创建页（左侧导航会出现 "Create a Worker" 返回链接以示区别）。

### 2. Pages 配置三件套
- Framework preset：**选 Astro**（自动填好下面两项，不要手填）
- Build command：`npm run build`
- Build output directory：`dist`

### 3. 域名绑定（donggeai.com）
- 因为域名是 **Cloudflare Registrar 买的**（at-cost 注册）
- 绑 Custom domain 时 Cloudflare **自动加 CNAME + 自动签证书**，不用手动改 DNS
- 建议同时加 `www.donggeai.com`（301 到主域）

## 部署架构现状

| 角色 | 值 |
|---|---|
| 域名 | `donggeai.com`（Cloudflare Registrar） |
| 托管 | Cloudflare Pages |
| 仓库 | `https://github.com/dongge75/dongge-ai-site` |
| 预览 | `dongge-ai-site.pages.dev` |
| Cloudflare 账号 | QQ 邮箱注册 |

## 部署相关人的关键信息

- **GitHub 真实账号**：`dongge75`（**不是 donggeai**）— 见 [[dongge75-github-account]]
- **支付方式**：朋友的双标 Visa（Cloudflare 不支持国内单标卡）
- **.cn 域名**：Cloudflare 不支持，donggeai.cn 待定（需大陆注册商 + 备案）

## 重新部署 / 改代码后的流程

1. 本地改代码
2. `git add . && git commit -m "..." && git push origin main`
3. Cloudflare Pages 自动触发 build（不用手动点）
4. 2-3 分钟后看 Deployments tab，build 通过就是新版

## 关联

- [[dongge75-github-account]] — GitHub 账号
- [[dongge-ai-project]] — 项目总览
- [[dongge-ai-tech-stack]] — Astro 技术栈
