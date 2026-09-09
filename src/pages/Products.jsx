import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, SearchX } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { WaIcon } from '../components/icons.jsx';
import {
  CATEGORIES,
  PRODUCTS,
  WA_DEFAULT,
  getCategory,
} from '../data.js';

export default function Products() {
  const [params, setParams] = useSearchParams();
  const active = params.get('cat') || 'all';

  const list = useMemo(
    () => (active === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active)),
    [active]
  );
  const activeCat = active === 'all' ? null : getCategory(active);

  const pick = (id) => {
    const next = new URLSearchParams(params);
    if (id === 'all') next.delete('cat');
    else next.set('cat', id);
    setParams(next, { replace: true });
  };

  return (
    <>
      <section className="phead">
        <div className="wrap">
          <SectionTag>Wholesale catalog</SectionTag>
          <h1>
            {activeCat ? activeCat.label : 'All costume styles'}
          </h1>
          <p>
            {activeCat
              ? activeCat.blurb
              : 'Factory-direct styles across Halloween, cosplay, princess, funny and holiday lines. Every style can be customized to your colors, sizes and logo.'}
          </p>
          <div className="chips" role="tablist" aria-label="Filter by category">
            <button
              className={`chip ${active === 'all' ? 'chip--on' : ''}`}
              onClick={() => pick('all')}
              role="tab"
              aria-selected={active === 'all'}
            >
              All <span>{PRODUCTS.length}</span>
            </button>
            {CATEGORIES.map((c) => {
              const n = PRODUCTS.filter((p) => p.cat === c.id).length;
              return (
                <button
                  key={c.id}
                  className={`chip ${active === c.id ? 'chip--on' : ''}`}
                  onClick={() => pick(c.id)}
                  role="tab"
                  aria-selected={active === c.id}
                >
                  {c.label} <span>{n}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          {list.length === 0 ? (
            <div className="empty">
              <SearchX size={40} />
              <p>No styles in this category yet — but we likely make it.</p>
              <a className="btn btn--pink" href={WA_DEFAULT} target="_blank" rel="noreferrer">
                <WaIcon size={17} /> Ask on WhatsApp
              </a>
            </div>
          ) : (
            <>
              <p className="pgrid__note">
                {list.length} styles shown ·{' '}
                <Link to="/inquiry">
                  Request full catalog &amp; price list with photos
                </Link>{' '}
                of 2,000+ SKUs.
              </p>
              <div className="pgrid">
                {list.map((p, i) => (
                  <ProductCard key={p.id} product={p} tone={i % 2 ? 'pink' : 'lime'} />
                ))}
              </div>

              <div className="storecard">
                <div>
                  <SectionTag>More on the live store</SectionTag>
                  <h2>Want the full 2,000+ SKU catalog?</h2>
                  <p>
                    Browse our complete Alibaba storefront with live prices,
                    MOQs and every seasonal drop.
                  </p>
                </div>
                <a
                  className="btn btn--pink btn--lg"
                  href="https://ouwanni.en.alibaba.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the store <ArrowUpRight size={18} />
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

function SectionTag({ children }) {
  return <span className="stag stag--sky">{children}</span>;
}
