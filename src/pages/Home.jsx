import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MessageSquareText } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { WaIcon } from '../components/icons.jsx';
import {
  CATEGORIES,
  COMPANY,
  PRODUCTS,
  SITE,
  WA_DEFAULT,
  getCategory,
  waLink,
} from '../data.js';

const BESTSELLER_IDS = [
  'santa-family-set',
  'sequin-princess-dress',
  'gothic-lolita-maid',
  'cindy-princess-dress',
  'gingerbread-onesie',
  'lolita-catgirl-maid',
  'templar-knight-set',
  'beer-mug-kids',
];

const SUPERHERO_IDS = [
  'venom-symbiote',
  'miles-morales-spiderman',
  'spider-gwen',
  'iron-spider',
  'venom-carnage-red',
  'deadpool-cosplay',
  'captain-america-muscle',
  'spiderman-peter-parker',
];

function SectionTag({ children, color = 'lime' }) {
  return <span className={`stag stag--${color}`}>{children}</span>;
}

export default function Home() {
  const bestsellers = BESTSELLER_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  const superheroPicks = SUPERHERO_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  const collage = ['santa-family-set', 'sequin-princess-dress', 'lolita-catgirl-maid']
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean);
  const waProduct = waLink(
    `Hi ${SITE.name}! I saw your website and I'm looking for wholesale costumes for my store. Could you send me your latest catalog?`
  );

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <SectionTag color="pink">Costume Factory · Wuhan, China</SectionTag>
            <h1>
              Costumes that sell out
              <br />
              <em>season</em> after season.
            </h1>
            <p className="hero__lede">
              Factory-direct <strong>Halloween, cosplay &amp; fancy-dress</strong>{' '}
              costumes. Custom OEM/ODM, 7-day samples and Amazon&nbsp;FBA-ready
              packing — from one factory, to your shelf.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--pink btn--lg" to="/inquiry">
                Get Wholesale Quote <ArrowUpRight size={19} />
              </Link>
              <a className="btn btn--lime btn--lg" href={waProduct} target="_blank" rel="noreferrer">
                <WaIcon size={19} /> Chat on WhatsApp
              </a>
            </div>
            <ul className="hero__proof">
              <li>★ 4.7/5 buyer rating</li>
              <li>≤4h response</li>
              <li>91% on-time dispatch</li>
            </ul>
          </div>

          <div className="collage" aria-label="Featured costume styles">
            {collage.map((p, i) => (
              <Link key={p.id} className={`polaroid polaroid--${i}`} to={`/products/${p.id}`}>
                <img src={p.image} alt={p.name} loading={i === 0 ? 'eager' : 'lazy'} />
                <span>{p.name}</span>
              </Link>
            ))}
            <span className="sticker sticker--lime">7-day samples</span>
            <span className="sticker sticker--pink">OEM / ODM</span>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="sec" id="categories">
        <div className="wrap">
          <div className="sec__head">
            <div>
              <SectionTag>Shop by category</SectionTag>
              <h2>
                Every party has a <em>look</em>. We make them all.
              </h2>
            </div>
            <Link className="btn btn--ink btn--ghostlnk" to="/products">
              All products <ArrowRight size={17} />
            </Link>
          </div>
          <div className="catgrid">
            {CATEGORIES.map((c, i) => {
              const count = PRODUCTS.filter((p) => p.cat === c.id).length;
              return (
                <Link
                  key={c.id}
                  to={`/products?cat=${c.id}`}
                  className={`cat card-acc card-acc--${c.id}`}
                  style={{ '--i': i }}
                >
                  <span className="cat__img">
                    <img src={c.image} alt={c.label} loading="lazy" />
                    <span className="cat__tag">{c.tag}</span>
                  </span>
                  <span className="cat__body">
                    <span className="cat__name">{c.label}</span>
                    <span className="cat__meta">
                      {count} style{count > 1 ? 's' : ''} shown · {c.blurb}
                    </span>
                  </span>
                  <span className="cat__arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SUPERHERO HQ ============ */}
      <section className="sec sec--ink herozone" id="superhero">
        <div className="wrap">
          <div className="sec__head">
            <div>
              <SectionTag color="sky">Now trending · Spider-Verse</SectionTag>
              <h2>
                Superhero HQ — <em>spider</em> bodysuits that move fast.
              </h2>
              <p className="herozone__lede">
                One-piece muscle suits in Miles, Spider-Gwen, Venom &amp; more
                styles. Low MOQ, wholesale price on request — tell us your
                target market and we&rsquo;ll quote FOB.
              </p>
            </div>
            <Link className="btn btn--lime btn--ghostlnk" to="/products?cat=movie">
              All superhero styles <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="wrap hg-grid">
          {superheroPicks.map((p, i) => (
            <ProductCard key={p.id} product={p} tone={i % 2 ? 'pink' : 'lime'} />
          ))}
        </div>
      </section>

      {/* ============ BESTSELLERS RAIL ============ */}
      <section className="sec sec--cream" id="bestsellers">
        <div className="wrap">
          <div className="sec__head">
            <div>
              <SectionTag color="orange">Buyer favorites</SectionTag>
              <h2>
                Bestsellers — <em>restocked</em> &amp; ready.
              </h2>
            </div>
            <Link className="btn btn--ink btn--ghostlnk" to="/products">
              Browse catalog <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="rail">
          {bestsellers.map((p, i) => (
            <div key={p.id} className="rail__cell">
              <ProductCard product={p} tone={i % 2 ? 'pink' : 'lime'} />
            </div>
          ))}
          <Link className="rail__more" to="/products">
            <span>See all styles</span>
            <ArrowUpRight size={26} />
          </Link>
        </div>
      </section>

      {/* ============ WHY / FACTORY ============ */}
      <section className="sec sec--ink" id="why">
        <div className="wrap factory">
          <div className="factory__intro">
            <SectionTag color="lime">Why Hong Bo</SectionTag>
            <h2>
              Not a trader.
              <br />
              A <em>factory</em>.
            </h2>
            <p>
              {SITE.legalName} runs design, cutting, sewing, QC and packing
              under one roof in Wuhan. 7+ years exporting costumes to party
              retailers, online sellers and event companies worldwide.
            </p>
            <div className="factory__stats">
              {COMPANY.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="factory__cards">
            {COMPANY.services.map((s) => (
              <div className="fcard" key={s.title}>
                <span className="fcard__num">✦</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap proofs">
          {COMPANY.proofs.map((p) => (
            <div className="proof" key={p.label}>
              <b>{p.value}</b>
              <span>{p.label}</span>
            </div>
          ))}
          <p className="proofs__note">
            As rated on our Alibaba storefront — check the{' '}
            <a href="https://ouwanni.en.alibaba.com/" target="_blank" rel="noreferrer">
              live store ↗
            </a>
          </p>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="sec" id="process">
        <div className="wrap">
          <div className="sec__head">
            <div>
              <SectionTag color="sky">How it works</SectionTag>
              <h2>
                From inquiry to <em>shipment</em> in 4 steps.
              </h2>
            </div>
          </div>
          <ol className="steps">
            {COMPANY.process.map((s) => (
              <li className="step" key={s.step}>
                <span className="step__no">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ OEM BAND ============ */}
      <section className="oemband">
        <div className="wrap oemband__grid">
          <div>
            <SectionTag color="pink">Custom OEM / ODM</SectionTag>
            <h2>
              Have your own <em>design</em>? We build it.
            </h2>
            <p>
              Send us a sketch, a sample or a reference photo. Custom colors,
              fabrics, prints, logos and hang tags — from 10 pieces up.
            </p>
          </div>
          <div className="oemband__cta">
            <Link className="btn btn--lime btn--lg" to="/inquiry">
              Start a custom project <ArrowUpRight size={19} />
            </Link>
            <a className="btn btn--wa btn--lg" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              <WaIcon size={19} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="finalcta">
        <div className="wrap finalcta__inner">
          <h2>
            Planning next season? Let's talk <em>stock</em>.
          </h2>
          <p>
            Tell us your target styles and quantities — get a factory-direct
            quote and catalog within hours, not days.
          </p>
          <div className="finalcta__actions">
            <Link className="btn btn--pink btn--lg" to="/inquiry">
              <MessageSquareText size={18} /> Send an inquiry
            </Link>
            <a className="btn btn--lime btn--lg" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              <WaIcon size={19} /> WhatsApp us
            </a>
          </div>
          <p className="finalcta__mail">
            or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
