# 东歌 AI · 个人官网

> 51 岁审计人的 AI 副业实战派阵地 · [https://donggeai.com](https://donggeai.com)

## 项目说明

这是东歌 1（东歌 AI）个人官网 + 破局推荐页 `/recommend/paiju` 的源代码。

- **主站**：项目主页、平台入口、AI 工具栈、关于、联系
- **推荐页**：`/recommend/paiju` —— 破局俱乐部 7 天邀请码分销页

## 技术栈

- [Astro 4.16](https://astro.build) —— 静态站点框架
- [Tailwind 3.4](https://tailwindcss.com) —— 原子化 CSS
- [React 18](https://react.dev) —— 交互组件
- TypeScript

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（http://localhost:4321）
npm run dev

# 构建生产版本（输出到 dist/）
npm run build

# 本地预览生产版本
npm run preview
```

## 部署

### 部署到 Vercel（推荐）

1. 把代码推 GitHub
2. 登录 [vercel.com](https://vercel.com) → 用 GitHub 登录
3. New Project → 导入本仓库
4. Framework Preset 选 **Astro** → Deploy
5. 部署完成后 → Settings → Domains → 添加 `donggeai.com` 和 `donggeai.cn`
6. Vercel 会显示需要添加的 DNS 记录，去 Cloudflare 添加

### DNS 配置（Cloudflare）

在 Cloudflare 后台 → DNS → Records 添加：

| 类型 | 名称 | 内容 |
|------|------|------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

Vercel 会自动签发 Let's Encrypt SSL 证书，5-30 分钟内 `https://donggeai.com` 生效。

## 项目结构

```
src/
├── components/        # 通用组件
│   ├── Hero.astro
│   ├── PlatformCard.astro
│   ├── ProjectCard.astro
│   ├── ToolCard.astro
│   ├── ArticleCard.astro
│   └── SectionLabel.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro           # 主页
│   └── recommend/
│       └── paiju.astro       # 破局推荐页
├── consts.ts                 # 站点配置
└── styles/                   # 全局样式
public/                       # 静态资源（图片、字体）
```

## 关键页面

- **`/`** —— 主页（Hero + 8 个 section）
- **`/recommend/paiju`** —— 破局俱乐部 7 天邀请码分销页

## 内容更新

### 改主页文案

编辑 `src/pages/index.astro`（中文注释清晰标了每个 section）

### 改推荐页文案

编辑 `src/pages/recommend/paiju.astro`（含 JOIN 卡片、二维码位置、案例区等）

### 改 Hero / 平台卡样式

编辑对应组件 `src/components/*.astro`

## License

Private · 仅供东歌 1 个人使用
