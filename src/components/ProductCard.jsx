import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageSquareText } from 'lucide-react';
import { formatPrice, getCategory, waLink } from '../data.js';
import { WaIcon } from './icons.jsx';

export default function ProductCard({ product, tone = 'lime' }) {
  const cat = getCategory(product.cat);
  const wa = waLink(
    `Hi! I'd like a wholesale quote for "${product.name}". Please share price, MOQ and lead time.`
  );
  return (
    <article className={`pcard pcard--${tone}`}>
      <Link to={`/products/${product.id}`} className="pcard__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="pcard__chip">{cat.label}</span>
      </Link>
      <div className="pcard__body">
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="pcard__price">{formatPrice(product)}</p>
        <div className="pcard__cta">
          <Link className="btn btn--ink btn--sm" to={`/products/${product.id}`}>
            Details <ArrowUpRight size={15} />
          </Link>
          <Link
            className="btn btn--ghost btn--sm"
            to={`/inquiry?product=${product.id}`}
          >
            <MessageSquareText size={15} /> Inquiry
          </Link>
          <a
            className="pcard__wa"
            href={wa}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <WaIcon size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}
