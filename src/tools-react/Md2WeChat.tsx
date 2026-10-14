import { useState, useMemo } from 'react';
import { renderMarkdown } from '../lib/markdown';

const DEFAULT_MD = `# 你好，公众号

这是一段引言。在右边你会看到它**实时**变成*公众号样式*。

试试 **加粗**、*斜体*、\`行内代码\` 的渲染效果。

## 列表示例

- 无序列表项一
- 无序列表项二
- 无序列表项三

## 数字列表

1. 第一步：写稿
2. 第二步：粘贴进来
3. 第三步：复制到公众号

## 代码块

\`\`\`js
function hello() {
  console.log('hi');
}
\`\`\`

## 引用

> 这是一段引用，用来强调一段话或摘录别人的观点。

---

试试在左边编辑，右边实时变化 🎉
`;

export default function Md2WeChat() {
  const [md, setMd] = useState(DEFAULT_MD);
  const [copied, setCopied] = useState<'html' | 'text' | null>(null);
  const html = useMemo(() => renderMarkdown(md), [md]);

  const copy = async () => {
    try {
      if (typeof ClipboardItem !== 'undefined') {
        const blobHtml = new Blob([html], { type: 'text/html' });
        const blobText = new Blob([md], { type: 'text/plain' });
        const item = new (ClipboardItem as any)({
          'text/html': blobHtml,
          'text/plain': blobText,
        });
        await navigator.clipboard.write([item]);
        setCopied('html');
      } else {
        await navigator.clipboard.writeText(md);
        setCopied('text');
      }
      setTimeout(() => setCopied(null), 2000);
    } catch (e) {
      setCopied('text');
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {/* 输入区：深色 */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden flex flex-col">
        <div className="px-4 py-2.5 border-b border-neutral-800 bg-neutral-800/60 text-xs text-neutral-400 font-medium flex items-center justify-between">
          <span>Markdown 输入</span>
          <button
            onClick={() => setMd('')}
            className="text-neutral-500 hover:text-neutral-200 text-xs"
          >
            清空
          </button>
        </div>
        <textarea
          value={md}
          onChange={(e) => setMd(e.target.value)}
          className="flex-1 p-4 font-mono text-sm bg-neutral-950 text-neutral-100 outline-none resize-none min-h-[480px] leading-relaxed placeholder-neutral-600"
          spellCheck={false}
        />
      </div>

      {/* 预览区：保留白色，模拟公众号原生编辑器 */}
      <div className="rounded-xl border border-neutral-700 bg-white overflow-hidden flex flex-col">
        <div className="px-4 py-2.5 border-b border-neutral-200 bg-neutral-100 text-xs text-neutral-500 font-medium flex items-center justify-between">
          <span>实时预览 · 公众号样式</span>
          <button
            onClick={copy}
            className={`px-3 py-1 rounded text-xs font-medium transition text-white ${
              copied ? '' : ''
            }`}
            style={{
              backgroundColor:
                copied === 'html' ? '#10b981' : copied === 'text' ? '#6b7280' : '#f59e0b',
            }}
          >
            {copied === 'html'
              ? '✓ 已复制富文本'
              : copied === 'text'
              ? '✓ 已复制纯文本'
              : '复制富文本'}
          </button>
        </div>
        <div
          className="wx-preview flex-1 p-6 overflow-auto min-h-[480px] scrollbar-thin"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
