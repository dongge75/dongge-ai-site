---
name: domain-payment-cardholder-info
description: 域名 / 海外服务付款时，账单信息必须和卡主一致（手机号/全名/账单地址），否则 3D Secure 验证会失败
metadata:
  node_type: memory
  type: feedback
  originSessionId: e403ca5e-3aaa-458c-ae14-46b9fe6e1d03
  modified: 2026-10-15T01:16:39.842Z
---

# 海外付款时账单信息必须和卡主一致

**事件**：2026-10-14 用户注册 donggeai.com（Cloudflare Registrar）时借朋友双标 Visa 卡付款。

**踩坑**：付款页让填"手机号 / 全名 / 账单地址"三个字段。**这三个必须填卡主（朋友）的信息，不能填用户自己的**。

**原因**：
- **3D Secure OTP**：银行会给卡主手机发短信验证码，必须卡主手机能收到
- **AVS 验证**（Address Verification System）：银行会校 zip code，账单地址必须和卡行预留地址一致
- 不一致 → 付款失败 / 卡被锁 / 留下可疑交易记录

**延伸适用**：
- 任何海外服务（Namesilo / Porkbun / Namecheap / Cloudflare / Vercel / GitHub Sponsors / AWS）
- 任何不支持国内单标卡的服务
- 任何需要卡主本人信息核验的场景

**Why:** 51 岁 + 不熟悉海外付款流程的人容易默认填自己的信息，导致付款失败 + 留下可疑交易记录。
**How to apply:** 借卡付款前，**先问朋友拿 3 样东西**——卡主手机号、卡主中文/英文全名、卡的账单地址（精确到 zip code）。填完告诉朋友留意 3D Secure 验证码。


---

> **v12 skill 整合声明**（2026-10-17）：
> - 本素材按 [[wechat-content-mining]] skill v12 模板 F 整理
> - 工具描述按"必须提实际工具+不预设清单"（v9+v10 立）
> - 不写"为商家做"导向（一箭双雕=内容真实>商单入口，v8 立）
> - 不写"为别人看"导向（复盘=看有多少事，v11+v12 立）
> - 不预设工具清单（实际用了哪个就写哪个，不从 8 个工具栈里选）
> - 通用句池用 v12 短语版（3-7 字短语，参见 [[general-sentence-pool-a-b-v12]]）
> - 完整 v12 演化日志见 [[template-f-evolution-log]]
