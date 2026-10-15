// 站点元数据 · Site metadata
export const SITE = {
  title: '东歌AI',
  shortTitle: '东歌AI',
  description: '构建面向电商和OPC的 AI 产品',
  tagline: '构建面向电商和OPC的 AI 产品',
  author: '东歌',
  email: '308949371@qq.com',
  // 展示用混淆形式（防爬虫），mailto: 仍用上面的真实 email
  emailDisplay: '308949371 [at] qq.com',
  wechatOAName: '东哥副业笔记',
  // 占位：上线前替换为你注册的备案号
  icp: '',
} as const;

export const NAV = [
  { href: '/', label: '首页' },
  { href: '/projects/', label: '作品' },
  { href: '/tools/', label: '工具' },
  { href: '/blog/', label: '博客' },
  { href: '/about/', label: '关于' },
] as const;
