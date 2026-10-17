---
name: auto-save-conversation-facts
description: 每次对话结束前主动扫一遍，把"值得写公众号"的事实存进 memory/，用户不用提醒
metadata:
  node_type: memory
  type: feedback
  originSessionId: e403ca5e-3aaa-458c-ae14-46b9fe6e1d03
  modified: 2026-10-15T01:16:15.817Z
---

# 对话结束前主动存记忆（用户硬性要求）

**用户原话**（2026-10-15）：
> "以后我们所有的聊天内容，你都要记录下来，以便于你帮我写公众号和主页使用AI工具的体验或复盘内容。"

**用户希望达到的目的**：未来能基于这些记忆，帮用户写公众号 / 主页 AI 工具体验 / 复盘内容。

## 唯一规则

**每次对话结束前（或重要任务完成时），我主动扫一遍刚才的对话，把"值得留"的事实存进 `memory/`。用户不用提醒、不用拍板。**

## 4 个判断标准（任一满足就存）

| # | 触发模式 | 存什么 | 文件类型 |
|---|---|---|---|
| 1 | 用户说"我刚用 X 工具做了 Y" | 工具 + 场景 + 体感 + 结果 | `feedback` (ai-tool-usage) |
| 2 | 用户学到 / 踩到坑 | 什么坑 + 根因 + 解法 | `feedback` (lesson) |
| 3 | 用户做了决策 + 理由 | 选了什么 + 为什么不选另一个 | `project` (decision) |
| 4 | 用户口述经历 / 金句 | 原文 + 上下文 + 为什么打动人 | `user` (story / quote) |

## 关键事实格式（每条 memory 一个文件，50-200 字）

```yaml
---
name: <kebab-case-slug>
description: <一句话事实>
type: user | feedback | project | reference
---
<事实>
**Why:** <为什么重要>
**How to apply:** <以后怎么用>
```

## 用户使用流程（无需用户操作）

1. 用户完成一件值得写公众号的事（比如跑通一个 AI 工具工作流）
2. 我在对话结束前主动 write 1-3 个 memory 文件
3. 我 edit `MEMORY.md` 加一行索引
4. 用户关电脑
5. 下次新对话，MEMORY.md 加载，我能看到所有历史事实
6. 用户让我"写一篇 X 的复盘"，我直接调 3-5 个相关 memory 拼

## 重要原则

- **不要记录每一句话** — token 成本高、信号弱
- **记录提炼过的事实** — 用户的决策、教训、故事、工具体感
- **一个文件一个事实** — 不要把多条混在一起（除非强相关）
- **保留用户原话** — 金句 / 故事必须原文记，不要改写

## 相关

- [[dongge-personal-profile]] — 用户身份（写公众号的锚点）
- [[building-website-article-material]] — 公众号素材模板
- [[canghe-geo-playbook]] — 写公众号时的 GEO 检查
