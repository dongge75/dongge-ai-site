// ============================================================
// 破局推荐页 · 10 条案例数据源（陈木木 8 字段结构）
// 用于 /recommend/paiju 列表 + /recommend/paiju/case/[slug] 子页
//
// 2026-10-15 重大修订（不杜撰铁律）：
// - 10 个案例中只有 2 个有原文支撑，已用真实内容重写：
//   · cli09 福多多（来源：D:/ObsidianVaults/013AIpoju/02_整理汇总/福多多-三娃宝妈如何把破局CLI装进工作台.md）
//   · essence06 米一（来源：https://my.feishu.cn/docx/TwMVdzrDUoN30FxNm12cWFednuh）
// - 其余 8 个因本地+飞书双线均未找到原文，「成绩板 / 讲了什么 / 问题清单 / 原话」
//   统一改为「⚠ 待核 — 需要原文」占位，等用户补充原文后再恢复
// - lark-cli 搜索 16 个候选 URL（review01-03/essence04-05/cli07-08/10 共 8 个 case × 平均 2 候选），
//   全部命中主题不符或不同作者，详见 2026-10-15 每日日志 + 报告
// - 详见 [[no-fabrication-case-data]] 铁律
// ============================================================

export type CaseType = '圈友复盘' | '精华帖' | 'CLI 实战';

export interface CaseStudy {
  /** 编号 01-10 */
  id: string;
  /** URL 段（拼音） */
  slug: string;
  /** 类型显示名 */
  type: CaseType;
  /** 类型 key（用于 class） */
  typeKey: 'review' | 'essence' | 'cli';
  /** 头像渐变 + 首字 */
  avatar: { initial: string; gradient: string };
  /** 类型色（用于子页左侧色条） */
  typeColor: { from: string; to: string };
  /** 列表标题 */
  title: string;
  /** 作者署名 */
  author: string;
  /** 发布日期 */
  date: string;
  /** 列表简介（1 行） */
  desc: string;
  /** 数字 / 单位（用于列表 metric） */
  metric: { num: string; label: string };
  /** 标签 */
  tags: string[];
  /** 原帖链接（aipoju.com）或 null（回到列表/锚点） */
  sourceUrl: string | null;
  /** 来源标注 */
  sourceLabel: string;
  /** 完整 4 字段内容（成绩板 / 讲了什么 / 问题清单 / 原话） */
  full: {
    /** 1. 成绩板（数字 + 身份） */
    成绩板: string;
    /** 2. 这篇讲了什么（80-140 字脱敏摘要） */
    讲了什么: string;
    /** 3. 解决了什么问题（5-7 个问题清单） */
    问题清单: string[];
    /** 4. 原作者原话（2 句金句） */
    原话: string[];
  };
  /** 适用人群 */
  适用人群: string[];
  /** 东哥1 第一视角使用体验（80-120 字） */
  我的使用体验?: string;
}

// ============================================================
// 01-03 圈友复盘（无原文 ⚠ 待核）
// ============================================================

const review01: CaseStudy = {
  id: '01',
  slug: 'erbao-mama-47w',
  type: '圈友复盘',
  typeKey: 'review',
  avatar: { initial: '妈', gradient: 'linear-gradient(135deg, #fde68a, #f59e0b)' },
  typeColor: { from: '#fde68a', to: '#f59e0b' },
  title: '35岁二胎宝妈，靠AI带货单月收入20w+',
  author: '圈友复盘 · AI 破局俱乐部',
  date: '2026-10-13',
  desc: '35 岁二胎宝妈，用 AI 工具批量产出带货内容，单月稳定 20W+ 收入。',
  metric: { num: '20W+', label: '月收入' },
  tags: ['AI带货', '宝妈'],
  sourceUrl: null,
  sourceLabel: '',
  full: {
    成绩板: '⚠ 待核 — 原文未提供（35岁二胎宝妈，AI 带货方向）',
    讲了什么: '⚠ 待核 — 需原文提取后才能补充',
    问题清单: [],
    原话: [],
  },
  适用人群: ['想了解 AI 带货方向的副业人'],
};

const review02: CaseStudy = {
  id: '02',
  slug: 'yuanxin-fde-50w',
  type: '圈友复盘',
  typeKey: 'review',
  avatar: { initial: '袁', gradient: 'linear-gradient(135deg, #cffafe, #06b6d4)' },
  typeColor: { from: '#cffafe', to: '#06b6d4' },
  title: '做 FDE，如何让老板交出关键信息：用情绪价值转动服务飞轮，带来转介绍',
  author: '袁欣就是圆心 · AI 破局俱乐部',
  date: '2026-10-14',
  desc: '5 个多月，16 家企业，营收 50W+，客户基本全部来自转介绍。',
  metric: { num: '50W+', label: '5 个月' },
  tags: ['FDE', '转介绍'],
  sourceUrl: null,
  sourceLabel: '',
  full: {
    成绩板: '⚠ 待核 — 原文未提供（5 个多月 16 家企业 50W+ 营收）',
    讲了什么: '⚠ 待核 — 需原文提取后才能补充',
    问题清单: [],
    原话: [],
  },
  适用人群: ['做 FDE / AI 定制服务的人'],
};

const review03: CaseStudy = {
  id: '03',
  slug: 'wangzhongyang-fukou',
  type: '圈友复盘',
  typeKey: 'review',
  avatar: { initial: '王', gradient: 'linear-gradient(135deg, #fed7aa, #f97316)' },
  typeColor: { from: '#fed7aa', to: '#f97316' },
  title: '企业 AI 项目交付完才是开始：我把第一单做成复购客户，靠的是交付后这 3 件事',
  author: '王中阳讲Agent · AI 破局俱乐部',
  date: '2026-10-14',
  desc: '杭州智航星辰 CEO，3 个月把第一单做成复购客户。',
  metric: { num: '3 个月', label: '首单复购' },
  tags: ['企业AI', '复购'],
  sourceUrl: null,
  sourceLabel: '',
  full: {
    成绩板: '⚠ 待核 — 原文未提供（杭州智航星辰 CEO，3 个月首单复购）',
    讲了什么: '⚠ 待核 — 需原文提取后才能补充',
    问题清单: [],
    原话: [],
  },
  适用人群: ['做企业 AI 项目的乙方'],
};

// ============================================================
// 04-06 破局精华帖（西堂/流月/米一）— 无原文 ⚠ 待核
// ============================================================

const essence04: CaseStudy = {
  id: '04',
  slug: 'xiting-jujiao',
  type: '精华帖',
  typeKey: 'essence',
  avatar: { initial: '西', gradient: 'linear-gradient(135deg, #d1fae5, #10b981)' },
  typeColor: { from: '#d1fae5', to: '#10b981' },
  title: '越是聚焦，越有可能做出结果',
  author: '西堂AI视频 · 破局精华帖',
  date: '2026-10-13',
  desc: '实战派从"五件事"收到"一件事"，3 条核心感悟。',
  metric: { num: '—', label: '感悟类' },
  tags: ['定位', '减法'],
  sourceUrl: null,
  sourceLabel: '',
  full: {
    成绩板: '⚠ 待核 — 原文未提供（感悟类文章，无具体数字）',
    讲了什么: '⚠ 待核 — 需原文提取后才能补充',
    问题清单: [],
    原话: [],
  },
  适用人群: ['同时看好几个方向的人'],
};

const essence05: CaseStudy = {
  id: '05',
  slug: 'liuyue-biaoti',
  type: '精华帖',
  typeKey: 'essence',
  avatar: { initial: '流', gradient: 'linear-gradient(135deg, #cffafe, #06b6d4)' },
  typeColor: { from: '#cffafe', to: '#06b6d4' },
  title: '一种 90% 入池的爆款标题公式，一文讲透背后底层逻辑',
  author: '流月｜AIP 爆文教练 · 破局精华帖',
  date: '2026-10-13',
  desc: '"过来人忠告型"标题 4 要点：过来人感 + 强判断 + 认知差。',
  metric: { num: '10W+', label: '几十篇' },
  tags: ['公众号', '标题'],
  sourceUrl: null,
  sourceLabel: '',
  full: {
    成绩板: '⚠ 待核 — 原文未提供（公众号长图文几十篇 10W+）',
    讲了什么: '⚠ 待核 — 需原文提取后才能补充',
    问题清单: [],
    原话: [],
  },
  适用人群: ['公众号创作者'],
};

// essence06 米一 — 原文已核实 ✅
// 原文：https://my.feishu.cn/docx/TwMVdzrDUoN30FxNm12cWFednuh
// 已用 lark-cli fetch + 提取 4 块结构
const essence06: CaseStudy = {
  id: '06',
  slug: 'miyi-workbuddy',
  type: '精华帖',
  typeKey: 'essence',
  avatar: { initial: '米', gradient: 'linear-gradient(135deg, #fed7aa, #f97316)' },
  typeColor: { from: '#fed7aa', to: '#f97316' },
  title: '不会写代码，我把 HR 的破事和副业的累活，都丢给 WorkBuddy 了',
  author: '米一 · WorkBuddy 铸造营 · 0 代码 HR 牛马人',
  date: '2026-10-13',
  desc: '0 代码 HR 牛马，WorkBuddy 搭 2 套系统：内部问答资料库 + 公众号自动化管线。',
  metric: { num: '4', label: '条方法' },
  tags: ['WorkBuddy', 'HR', '公众号'],
  sourceUrl: 'https://my.feishu.cn/docx/TwMVdzrDUoN30FxNm12cWFednuh',
  sourceLabel: '飞书原文',
  full: {
    成绩板:
      '**用 WorkBuddy 搭了 2 套系统**：① HR 端——制度手册/薪酬资料全灌进去，用 iam 分类做成部门内部资料库，**目标 80% 重复咨询归资料库**；② 副业端——公众号自动化管线（生成人设→自动写稿→排版→落盘→到点提醒），**每天 3 篇待发稿躺草稿箱**。训练关键：**填 159 问生成"个人说明书"** + 投喂历史文章稳定风格。',
    讲了什么:
      '米一是个**0 代码 HR 牛马人**（主业）+ 副业做社保规划/理财/写公众号（"忙的鸡飞狗跳"）。在 WorkBuddy 铸造行动营里，他**没去追高深功能，就盯着两件最累的活：HR 重复咨询 + 公众号每日生产**。\n\n**HR 端**：把公司所有制度手册、薪酬方案、产品材料全灌进 WorkBuddy，用 iam 分类做成资料库，部门内部联动审批共享。目标是"80% 重复性咨询归资料库，零散问题归指定岗位"，**把人从"答到第八遍"里解放出来**。\n\n**副业端**：公众号自动化管线 = 生成人设文风 → 自动写稿 → 排版 → 本地落盘 → 到点提醒推送。**核心训练是"填 159 问生成个人说明书"**，再投喂历史手写文章稳定风格。\n\n**4 条方法论**：① 大需求拆小步（先跑通小闭环）② 素材库当"另一个自己"（投喂人设/文风/成稿）③ 先干再完美（第一版惨不忍睹，让 AI 反复改）④ 说人话下指令（把自己当老板布置任务）。',
    问题清单: [
      'HR 反复被问"产假/报销/薪酬"等相同问题，怎么从"答到第八遍"里解放？',
      '公众号每天想选题、写稿、搬多个平台，怎么搭自动化管线？',
      '0 代码 0 基础的人，怎么用 WorkBuddy 搭"系统"？（"我也有自知之明，看见代码就头晕"）',
      '"个人说明书"159 问到底填什么？生成出来怎么用？',
      '自动推送微信草稿箱总失败（白名单）怎么办？',
      '"搭系统"是不是只有程序员才干？普通人怎么也能指挥 AI？',
    ],
    原话: [
      '"省下的不是时间，是心力。"',
      '"以前觉得搭系统是有程序员才干的事，现在我知道，用大白话把需求说清楚，AI 就能帮你搭。"',
    ],
  },
  适用人群: [
    '0 代码但被 HR/运营/销售等"重复咨询"消耗的人',
    '想搭一套公众号自动化管线的人',
    '觉得"搭系统是程序员的事"的普通人',
  ],
  我的使用体验:
    '我跟米一背景神似——**主业审计 + 副业写公众号 + 0 代码 0 基础**。**"省下的不是时间，是心力"** 这句戳中我了：我之前想一上来搭一整套"个人主页 + 工作台"，结果啥也没跑通。**米一 4 条方法论**里我立刻能用的是「**大需求拆小步**」——**先让它跑通一个小闭环，再慢慢加**。这周我准备用 WorkBuddy 跑通 1 个小闭环：把公众号 100+ 篇的标题用 CLI 抓下来，让 WorkBuddy 每天自动生成 1 篇选题草稿。',
};

// ============================================================
// 07-10 CLI 实战
// ============================================================

const cli07: CaseStudy = {
  id: '07',
  slug: 'smarts-shiyu',
  type: 'CLI 实战',
  typeKey: 'cli',
  avatar: { initial: 'S', gradient: 'linear-gradient(135deg, #dbeafe, #3b82f6)' },
  typeColor: { from: '#dbeafe', to: '#3b82f6' },
  title: '不会前端，我用 AI 做出了一个AI破局体验卡领取网站：试玉',
  author: 'smarts · 破局 CLI 实战派',
  date: '2026-10-11',
  desc: '整站 = 3 文件零依赖零构建（index.html 50 行 + style.css 250 行 + app.js 707 行），一周上线。',
  metric: { num: '3 文件', label: '零依赖' },
  tags: ['CLI', '网站'],
  sourceUrl: null,
  sourceLabel: '',
  full: {
    成绩板: '⚠ 待核 — 原文未提供（3 文件 0 依赖上线 试玉 站）',
    讲了什么: '⚠ 待核 — 需原文提取后才能补充',
    问题清单: [],
    原话: [],
  },
  适用人群: ['不会前端但想用 AI 做小站的人'],
};

const cli08: CaseStudy = {
  id: '08',
  slug: 'xiang-xiaobai',
  type: 'CLI 实战',
  typeKey: 'cli',
  avatar: { initial: '西', gradient: 'linear-gradient(135deg, #fde68a, #f59e0b)' },
  typeColor: { from: '#fde68a', to: '#f59e0b' },
  title: '如何快速入门一个完全不懂的领域？我现在都用破局CLI，小白照着做就行',
  author: '西昂 · 破局 CLI 实战派',
  date: '2026-10-12',
  desc: '4 步法：CLI 抓 SOP 手册 → 找高手 → 搜行动手册 → 帖子补充。每步配可复制提示词。',
  metric: { num: '4 步', label: 'SOP 法' },
  tags: ['CLI', 'SOP'],
  sourceUrl: null,
  sourceLabel: '',
  full: {
    成绩板: '⚠ 待核 — 原文未提供（4 步 SOP 法）',
    讲了什么: '⚠ 待核 — 需原文提取后才能补充',
    问题清单: [],
    原话: [],
  },
  适用人群: ['想快速入门一个新领域的人'],
};

// cli09 福多多 — 唯一有原文支撑的案例 ✅
// 原文：D:/ObsidianVaults/013AIpoju/02_整理汇总/福多多-三娃宝妈如何把破局CLI装进工作台.md
const cli09: CaseStudy = {
  id: '09',
  slug: 'fuduo-1-5h',
  type: 'CLI 实战',
  typeKey: 'cli',
  avatar: { initial: '福', gradient: 'linear-gradient(135deg, #fce7f3, #ec4899)' },
  typeColor: { from: '#fce7f3', to: '#ec4899' },
  title: '每天只有1.5小时：三娃宝妈如何用破局CLI，把圈友经验变成自己的能力',
  author: '福多多 · 三娃宝妈 · 破局 CLI 实战派',
  date: '2026-10-10',
  desc: '用 Codex 搭工作台 + 把破局 CLI 接进来，6 步法把圈友经验变成自己的能力。',
  metric: { num: '6 步', label: '法' },
  tags: ['CLI', '工作台'],
  sourceUrl: null,
  sourceLabel: '',
  full: {
    成绩板:
      '**用 Codex 搭建了"福多多工作台"，并把破局 CLI 接进来**。三娃妈妈，每天可支配时间约 1.5 小时。',
    讲了什么:
      '一个广州三娃妈妈，**用 Codex 搭了一套"福多多工作台"，并把破局 CLI 接进来作为经验入口**。她没有追新工具，而是建一套能"承载目标/知识/任务/创作/复盘"的 AI 系统。核心是 6 步法：**在 AI 破局俱乐部星球上找起点相近的实战帖 → 拆出方法 → 改成自己本周能做的最小版本 → 执行 → 复盘 → 沉淀成自己的 Skill**。她强调"破局 CLI 负责把经验带进来，个人工作台负责让经验留下来"——前半段 CLI 解决，后半段工作台承接。',
    问题清单: [
      '每天只有 1.5 小时，怎么不被信息流吞掉？',
      '收藏了一堆帖子，怎么把"别人的经验"变成"自己的能力"？',
      '怎么在 AI 破局俱乐部星球上找到和自己起点相近的实战帖？',
      '怎么把"作者的关键动作"拆成"自己本周能做的最小版本"？',
      '能力沉淀分几个阶段？什么时候才能叫"跑通"？',
      'WorkBuddy / Codex / 破局 CLI / YangClaw 这些工具怎么分工？',
    ],
    原话: [
      '"破局 CLI 负责把经验带进来，个人工作台负责让经验留下来。"',
      '"别人的 Skill 不是我的能力。只有经过真实使用、判断、修改和验证，有了自己的体证以后，它才开始成为我的能力。"',
    ],
  },
  适用人群: [
    '每天时间紧（1-2 小时）的副业人 / 全职妈妈',
    '想用 AI 工具搭一套个人工作台的人',
    '想在 AI 破局俱乐部星球上找"起点相近"实战帖的人',
  ],
  我的使用体验:
    '我和福多多背景神似——**时间都少、目标都多**。我每天真正能投入副业的时间也就 2-3 小时（审计主业 + 家庭）。**福多多 6 步法**的核心是"在 AI 破局俱乐部星球上找起点相近的实战帖"——我之前 1 年读了 100+ 篇文章，但**真正能跑的不到 5 篇**。这周我准备：用 CLI 筛出"51 岁 + 不会代码 + 公众号 100+ 篇"这种"起点相近"的内容，**只读这一类**。',
};

const cli10: CaseStudy = {
  id: '10',
  slug: 'keren-70hou',
  type: 'CLI 实战',
  typeKey: 'cli',
  avatar: { initial: '可', gradient: 'linear-gradient(135deg, #d1fae5, #10b981)' },
  typeColor: { from: '#d1fae5', to: '#10b981' },
  title: '70 后大叔用破局CLI 解决资料官复盘 + 公众号选题',
  author: '可人 · 70 后 · 破局星火师 · 12 期带货营资料官',
  date: '2026-10-12',
  desc: '12 期 AI 全域带货营资料官，用 CLI 解决资料官复盘 + 公众号选题。',
  metric: { num: '70 后', label: '大叔' },
  tags: ['CLI', '公众号'],
  sourceUrl: null,
  sourceLabel: '',
  full: {
    成绩板: '⚠ 待核 — 原文未提供（70 后大叔，12 期带货营资料官）',
    讲了什么: '⚠ 待核 — 需原文提取后才能补充',
    问题清单: [],
    原话: [],
  },
  适用人群: ['70/60/50 后想用 AI 提效的职场人'],
};

// ============================================================
// 全部案例
// ============================================================

export const cases: CaseStudy[] = [
  review01,
  review02,
  review03,
  essence04,
  essence05,
  essence06,
  cli07,
  cli08,
  cli09,
  cli10,
];

/** 按 id 找案例 */
export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
