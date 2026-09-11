// Minimal, dependency-free Markdown renderer for blog posts.
// Supports: ## / ### headings, "- " lists, paragraphs,
// **bold**, *italic*, [text](url), ![alt](src).
import { Link } from 'react-router-dom';

function renderInline(text, keyPrefix) {
  // Split on bold / italic / links, keeping delimiters.
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = String(text).split(pattern).filter(Boolean);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    if (/^\*[^*]+\*$/.test(part)) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith('/')) {
        return (
          <Link key={key} to={href}>
            {label}
          </Link>
        );
      }
      return (
        <a key={key} href={href} target="_blank" rel="noreferrer">
          {label}
        </a>
      );
    }
    return <span key={key}>{part}</span>;
  });
}

export function Markdown({ text }) {
  const lines = String(text || '').split('\n');
  const blocks = [];
  let list = null;

  const flushList = () => {
    if (list) {
      blocks.push(
        <ul key={`ul-${blocks.length}`}>
          {list.map((item, i) => (
            <li key={i}>{renderInline(item, `li-${blocks.length}-${i}`)}</li>
          ))}
        </ul>
      );
      list = null;
    }
  };

  lines.forEach((raw, idx) => {
    const line = raw.trim();
    if (!line) {
      flushList();
      return;
    }
    if (line.startsWith('### ')) {
      flushList();
      blocks.push(<h3 key={`h3-${idx}`}>{renderInline(line.slice(4), `h3-${idx}`)}</h3>);
      return;
    }
    if (line.startsWith('## ')) {
      flushList();
      blocks.push(<h2 key={`h2-${idx}`}>{renderInline(line.slice(3), `h2-${idx}`)}</h2>);
      return;
    }
    if (line.startsWith('- ')) {
      list = list || [];
      list.push(line.slice(2));
      return;
    }
    const img = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (img) {
      flushList();
      blocks.push(
        <img
          key={`img-${idx}`}
          className="prose__img"
          src={img[2]}
          alt={img[1]}
          loading="lazy"
        />
      );
      return;
    }
    if (/^>\s?/.test(line)) {
      flushList();
      blocks.push(
        <blockquote key={`bq-${idx}`}>{renderInline(line.replace(/^>\s?/, ''), `bq-${idx}`)}</blockquote>
      );
      return;
    }
    flushList();
    blocks.push(<p key={`p-${idx}`}>{renderInline(line, `p-${idx}`)}</p>);
  });
  flushList();

  return <div className="prose">{blocks}</div>;
}
