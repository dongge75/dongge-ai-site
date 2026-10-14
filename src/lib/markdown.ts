/**
 * 轻量级 Markdown 渲染器
 * 支持：标题(h1-h3)、加粗、斜体、行内代码、代码块、有序/无序列表、引用、分隔线、链接
 *
 * 用法：
 *   import { renderMarkdown } from '../lib/markdown';
 *   const html = renderMarkdown(md);
 */

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inline(s: string): string {
  let out = esc(s);
  // 行内代码
  out = out.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  // 加粗
  out = out.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
  // 斜体
  out = out.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
  // 链接
  out = out.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  return out;
}

export function renderMarkdown(md: string): string {
  const lines = md.split('\n');
  let html = '';
  let inCode = false;
  let codeBuf: string[] = [];
  let inList = false;
  let listType: 'ul' | 'ol' = 'ul';

  const flushList = () => {
    if (inList) {
      html += `</${listType}>`;
      inList = false;
    }
  };

  for (const raw of lines) {
    const line = raw;

    if (line.startsWith('```')) {
      if (inCode) {
        html += `<pre><code>${esc(codeBuf.join('\n'))}</code></pre>\n`;
        codeBuf = [];
        inCode = false;
      } else {
        flushList();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeBuf.push(line);
      continue;
    }

    if (line.trim() === '') {
      flushList();
      continue;
    }

    const h = line.match(/^(#{1,3})\s+(.+)$/);
    if (h) {
      flushList();
      const lvl = h[1].length;
      html += `<h${lvl}>${inline(h[2])}</h${lvl}>\n`;
      continue;
    }

    if (/^---+$/.test(line)) {
      flushList();
      html += '<hr />\n';
      continue;
    }

    const ul = line.match(/^[-*]\s+(.+)$/);
    if (ul) {
      if (!inList || listType !== 'ul') {
        flushList();
        html += '<ul>';
        listType = 'ul';
        inList = true;
      }
      html += `<li>${inline(ul[1])}</li>`;
      continue;
    }

    const ol = line.match(/^\d+\.\s+(.+)$/);
    if (ol) {
      if (!inList || listType !== 'ol') {
        flushList();
        html += '<ol>';
        listType = 'ol';
        inList = true;
      }
      html += `<li>${inline(ol[1])}</li>`;
      continue;
    }

    if (line.startsWith('> ')) {
      flushList();
      html += `<blockquote>${inline(line.slice(2))}</blockquote>\n`;
      continue;
    }

    flushList();
    html += `<p>${inline(line)}</p>\n`;
  }

  flushList();
  if (inCode) {
    html += `<pre><code>${esc(codeBuf.join('\n'))}</code></pre>`;
  }
  return html;
}
