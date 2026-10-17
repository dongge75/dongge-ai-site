---
name: building-website-article-material
description: 建站手记《我是如何建立自己的个人主页》公众号第一篇素材底稿，10 步 + 5 决策 + 8 踩坑
metadata:
  node_type: memory
  type: project
  originSessionId: e403ca5e-3aaa-458c-ae14-46b9fe6e1d03
  modified: 2026-10-14T15:24:30.140Z
---

# 建站手记 · 公众号第一篇素材

**素材文件**：[D:\ObsidianVaults\024grwangye\建站手记_我是如何建立自己的个人主页.md](../024grwangye/建站手记_我是如何建立自己的个人主页.md)（22KB / 514 行）

**用途**：公众号 / X / 小红书 / 视频号第一篇文案的素材底稿。

**用户原话**（2026-10-14 晚）：
> "这个主网页上、还有公众号上的第一篇文案，就是'我是如何建立自己的个人主页的'。所以你先把前面的内容都详细地记录下来。"

## 内容结构（10 步 + 5 决策 + 8 踩坑）

### 10 步流程
0. 起点：Obsidian Vault 准备
1. 技术选型：为什么选 Astro
2. 主页：5 个版块的"我是谁"
3. 子页：AI 破局推荐页（含 8 处主动调整避免侵权）
4. 破局 CLI：抓取真实圈友复盘（陈木木 8 字段结构）
5. 体验卡：引流到私域（"长按保存 → 微信扫相册"）
6. 买域名：Cloudflare Registrar 实战
7. 上线：Cloudflare Pages 自动部署（3 个坑：GitHub 用户名混淆 / Workers 流程 / Astro preset）
8. 域名绑定：CNAME + 自动证书
9. www 重定向：301 Page Rules
10. 复盘：5 个关键决策 + 8 个踩坑

### 5 个关键决策（用户已认可，作为文案的"主线"）
1. **先文案后代码** — Claude 5 分钟搭出来
2. **真实 > 包装** — 51 岁 + 20+ 年审计 + 100+ 篇原创已够硬
3. **反 AI 味** — 8 字段结构 + 真实圈友复盘
4. **推荐页不引出站** — 去掉 aipoju.com 链接，所有流量进私域
5. **Cloudflare 全家桶** — 注册商 + DNS + Pages 一个账号最少摩擦

### 8 个踩坑（每个都有解法，是文案的"硬核干货"）
1. GitHub 账号 `dongge75` vs `donggeai` 混淆（[[dongge75-github-account]]）
2. Cloudflare Workers 流程陷阱（要 legacy "Continue to Pages"）
3. Framework preset 必须选 Astro
4. Cloudflare 不支持国内单标卡
5. 卡信息必须和卡主一致
6. .cn 域名 Cloudflare 不支持
7. 手机端扫码跳企业微信失效 → 改"长按保存 → 微信扫相册"
8. 子页底部"原帖来源"链接反引流

## 写作分发建议（手记末尾已写）

| 平台 | 角度 | 切片 |
|---|---|---|
| **公众号** | 全流程 | 第 0 步到第 10 步，每步 1-2 张截图，"决策 → 踩坑 → 解决"三段式 |
| **X 长 Thread** | 踩坑为主 | 1-8 坑，每坑配 1 张图 |
| **小红书图文** | 51 岁叙事 | 5-6 张卡片，主线"3 天建站" |
| **视频号口播** | 3 天时间线 | 每步 15 秒，配屏幕录屏 |

## 下一步打磨建议（2026-10-14 用户确认接收）

**3 个候选打磨切入点**（用户提的"要不要开始打磨某一段"已收）：

1. **第 7 步：上线踩坑** → 适合做 X Thread 草稿（3 个坑：GitHub 用户名混淆 / Workers 流程 / Astro preset，技术干密度高）
2. **第 0 步：起点** → 适合做公众号开头（"先文案后代码"心法 + 51 岁叙事钩子）
3. **第 4 步：破局 CLI 抓取** → 适合做"AI 实战"系列内容（8 字段结构 + 真实 vs 假数据反思）

**已知手记不完整的地方**（写作时需补充）：
- ⚠️ **过程截图**：手记里只写了文字"5 分钟搞定"，**用户写公众号前需要回填每个步骤的截图**（每步 1-2 张）
- ⚠️ **Cloudflare 仪表盘截图**：Workers 流程陷阱 / Pages 入口 / Page Rules 配置 这 3 张关键截图
- ⚠️ **GitHub 仓库截图**：dongge75/dongge-ai-site 仓库主页
- ⚠️ **域名注册截图**：Cloudflare Registrar 付款页

**用户写公众号时建议流程**：
1. 先选定 1 个平台（推荐公众号，全流程叙事）
2. 复制手记对应章节文字
3. 回填该章节的过程截图
4. 改写"第 0 步"和"第 10 步"为用户第一人称口吻（短句 + 自嘲 + 家庭导向 — 见 [[dongge-personal-profile]] 文风特征）
5. 发布前过一遍 [[canghe-geo-playbook]] 5 步法检查清单（标题 / 第一段 / 数据 / 结构 / 身份）

## 关键事实速查（写文案时直接引用）

| 字段 | 值 |
|---|---|
| 域名 | donggeai.com（Cloudflare Registrar at-cost）|
| 仓库 | github.com/dongge75/dongge-ai-site |
| 预览 | dongge-ai-site.pages.dev |
| 托管 | Cloudflare Pages |
| 技术栈 | Astro 4.16.19 + Tailwind 3 + React 18 |
| 域名花费 | $9.85/年 + 托管 $0 |
| 总耗时 | 3 天（2026-10-12 → 2026-10-14）|
| GitHub 真实账号 | dongge75（**不是 donggeai**）|
| 域名付款卡 | 朋友的双标 Visa（国内单标卡不支持）|

## 关联

- [[dongge-ai-project]] — 项目总览
- [[dongge-ai-brand]] — 品牌信息（Hero tagline / 配色 / 公众号名）
- [[dongge-ai-tech-stack]] — Astro 技术栈
- [[ai-poju-recommend-page]] — /recommend/paiju 子页（含 8 处主动调整）
- [[dongge-personal-profile]] — 用户身份档案
- [[chenmumu-recommend-methodology]] — 4 字段结构
- [[canghe-geo-playbook]] — A 标签公式
- [[dongge75-github-account]] — GitHub 账号名坑
- [[donggeai-cloudflare-pages-deploy]] — Cloudflare 部署全流程
- [[x-zhongcao-playbook]] — X 中文 AI 种草闭环
- [[dongge-main-vs-paiju-split]] — 主页 vs 子页分工


---

> **v12 skill 整合声明**（2026-10-17）：
> - 本素材按 [[wechat-content-mining]] skill v12 模板 F 整理
> - 工具描述按"必须提实际工具+不预设清单"（v9+v10 立）
> - 不写"为商家做"导向（一箭双雕=内容真实>商单入口，v8 立）
> - 不写"为别人看"导向（复盘=看有多少事，v11+v12 立）
> - 不预设工具清单（实际用了哪个就写哪个，不从 8 个工具栈里选）
> - 通用句池用 v12 短语版（3-7 字短语，参见 [[general-sentence-pool-a-b-v12]]）
> - 完整 v12 演化日志见 [[template-f-evolution-log]]
