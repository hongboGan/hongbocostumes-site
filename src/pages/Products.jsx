import { useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, SearchX } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { WaIcon } from '../components/icons.jsx';
import {
  CATEGORIES,
  PRODUCTS,
  WA_DEFAULT,
  getCategory,
} from '../data.js';
import { usePageMeta } from '../lib/seo.js';

export default function Products() {
  const { slug } = useParams();
  const [params] = useSearchParams();
  // Category comes from the /collections/:slug route; the legacy ?cat= query is
  // still honoured so old inbound links keep working.
  const requested = slug || params.get('cat') || 'all';
  // Unknown values (stale links, crawler guesses) fall back to the full
  // catalog, so the chip row and the list never contradict each other.
  const active = requested === 'all' || getCategory(requested) ? requested : 'all';
  const activeCat = active === 'all' ? null : getCategory(active);

  usePageMeta(
    activeCat
      ? `${activeCat.label} | Wholesale Costumes | Hongbo Costumes`
      : 'Wholesale Costumes & Cosplay Catalog | Hongbo Costumes',
    activeCat
      ? `${activeCat.blurb} Factory-direct wholesale, custom OEM/ODM and FBA-ready packing.`
      : 'Factory catalogue of Halloween, cosplay, superhero, princess and Christmas costumes. Wholesale pricing, custom OEM/ODM and FBA-ready packing.',
    activeCat ? `/collections/${active}` : '/products'
  );

  const list = useMemo(
    () => (active === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active)),
    [active]
  );
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
            <Link
              className={`chip ${active === 'all' ? 'chip--on' : ''}`}
              to="/products"
              role="tab"
              aria-selected={active === 'all'}
            >
              All <span>{PRODUCTS.length}</span>
            </Link>
            {CATEGORIES.map((c) => {
              const n = PRODUCTS.filter((p) => p.cat === c.id).length;
              return (
                <Link
                  key={c.id}
                  className={`chip ${active === c.id ? 'chip--on' : ''}`}
                  to={`/collections/${c.id}`}
                  role="tab"
                  aria-selected={active === c.id}
                >
                  {c.label} <span>{n}</span>
                </Link>
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
