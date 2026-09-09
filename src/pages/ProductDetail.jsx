import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { WaIcon } from '../components/icons.jsx';
import {
  getCategory,
  getProduct,
  priceRange,
  productsIn,
  waLink,
} from '../data.js';
import NotFound from './NotFound.jsx';

const FACTS = [
  'Factory-direct wholesale price — no middleman',
  'Custom OEM / ODM: colors, sizes, prints & logo',
  'Sample order in about 7 days',
  'Typical bulk lead time 10–20 days by quantity',
  'QC inspection + needle detection on kids’ lines',
  'Amazon FBA-ready packing available',
];

export default function ProductDetail() {
  const { id } = useParams();
  const p = getProduct(id);

  if (!p) return <NotFound />;

  const cat = getCategory(p.cat);
  const related = productsIn(p.cat).filter((x) => x.id !== p.id).slice(0, 4);
  const wa = waLink(
    `Hi! I'm interested in "${p.fullTitle}". Please send wholesale price, MOQ and lead time.`
  );

  return (
    <>
      <section className="pd">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/products">Products</Link> <span>/</span>
            <Link to={`/products?cat=${p.cat}`}>{cat.label}</Link> <span>/</span>
            <span className="crumbs__here">{p.name}</span>
          </nav>

          <div className="pd__grid">
            <div className="pd__media">
              <div className="pd__frame">
                <img src={p.image} alt={p.fullTitle} />
                <span className="pd__chip">{cat.label}</span>
                <span className="sticker sticker--lime pd__stock">In stock line</span>
              </div>
              <p className="pd__more">
                More angles, size chart &amp; fabric swatches —{' '}
                <Link to={`/inquiry?product=${p.id}`}>request by inquiry</Link>.
              </p>
            </div>

            <div className="pd__info">
              <span className="stag stag--pink">Wholesale style</span>
              <h1>{p.name}</h1>
              <p className="pd__desc">{p.blurb} Full listing title:</p>
              <p className="pd__fulltitle">{p.fullTitle}</p>

              <div className="pd__price">{priceRange(p)}</div>
              <p className="pd__pricenote">
                Reference FOB range shown on our marketplace listing · final
                quote depends on quantity, size mix &amp; customization.
              </p>

              <ul className="pd__facts">
                {FACTS.map((f) => (
                  <li key={f}>
                    <Check size={16} /> {f}
                  </li>
                ))}
              </ul>

              <div className="pd__cta">
                <Link className="btn btn--pink btn--lg" to={`/inquiry?product=${p.id}`}>
                  Get a Quote for this style <ArrowUpRight size={19} />
                </Link>
                <a className="btn btn--wa btn--lg" href={wa} target="_blank" rel="noreferrer">
                  <WaIcon size={19} /> WhatsApp
                </a>
              </div>

              <div className="pd__tags">
                <span>Custom colors</span>
                <span>Custom sizes</span>
                <span>Logo printing</span>
                <span>Hang tags</span>
              </div>

              <a
                className="pd__source"
                href={p.url}
                target="_blank"
                rel="noreferrer"
              >
                View this listing on our Alibaba store ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="sec sec--cream">
          <div className="wrap">
            <div className="sec__head">
              <div>
                <span className="stag stag--orange">More in this line</span>
                <h2>
                  You may also <em>stock</em> these.
                </h2>
              </div>
              <Link className="btn btn--ink btn--ghostlnk" to={`/products?cat=${p.cat}`}>
                View {cat.label} <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="pgrid">
              {related.map((r, i) => (
                <ProductCard key={r.id} product={r} tone={i % 2 ? 'pink' : 'lime'} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="wrap pd__back">
        <Link className="btn btn--ink btn--ghostlnk" to="/products">
          <ArrowLeft size={16} /> Back to products
        </Link>
      </div>
    </>
  );
}
