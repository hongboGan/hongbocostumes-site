import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { WaIcon } from '../components/icons.jsx';
import { PRODUCTS, WA_DEFAULT } from '../data.js';
import { HERO_SUIT_IDS } from '../content/heroSuits.js';
import { usePageMeta } from '../lib/seo.js';



export default function HeroSuits() {
  usePageMeta(
    'Wholesale Hero Suits & Full-Body Bodysuits | Hongbo Costumes',
    'Factory-direct hero suits: full-body stretch bodysuits, printed and panelled colour blocking, stitched armour and detachable cowls. Wholesale pricing, custom colours and FBA-ready packing.',
    '/hero-suits'
  );

  const list = HERO_SUIT_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);

  return (
    <>
      <section className="phead">
        <div className="wrap">
          <span className="stag stag--sky">Hero suits</span>
          <h1>Wholesale Hero Suits — Full-Body Bodysuits and Armour Sets</h1>
          <p>
            A full-body suit is the hardest item in a costume order to get right
            and the easiest to get wrong at reorder. These are the styles we cut
            in-house: stretch shells, printed or sewn colour blocking, and
            armour pieces that are stitched down rather than glued on.
          </p>
          <div className="chips">
            <Link className="chip chip--on" to="/hero-suits">
              Hero suits <span>{list.length}</span>
            </Link>
            <Link className="chip" to="/collections/movie">
              All superhero &amp; film
            </Link>
            <Link className="chip" to="/products">
              Full catalog
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2>Three things to settle before the first sample</h2>
          <p>
            Colour across panels, seam placement at the stress points, and mask
            fit. Those three decide whether a reorder matches the first batch.
            Everything else — fabric weight, print method, lining — is settled
            once and then repeats.
          </p>
          <p>
            <strong>Colour across panels.</strong> A suit is two or more dye lots
            pretending to be one garment. Ask for a single lot per colour and a
            lab dip approved per fabric, not per garment.
          </p>
          <p>
            <strong>Seams at the stress points.</strong> Crotch, underarm and
            knee take the load on a stretch suit. Flatlock there and overlock
            elsewhere is cheaper than flatlocking the whole garment, and it fails
            in the same places either way if the seam allowance is too narrow.
          </p>
          <p>
            <strong>Mask fit.</strong> A cowl that pulls at the eyes is the most
            common return reason on masked suits. Ask for the eye opening to be
            cut against a head form, and specify whether the mask is detachable.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2>Styles in production</h2>
          <p className="pgrid__note">
            {list.length} hero-suit styles shown ·{' '}
            <Link to="/inquiry">Request the spec sheet and price list</Link> with
            fabric options and size grading.
          </p>
          <div className="pgrid">
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} tone={i % 2 ? 'pink' : 'lime'} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="storecard">
            <div>
              <span className="stag stag--sky">Custom builds</span>
              <h2>Need a suit that is not in the catalog?</h2>
              <p>
                Send a reference — a sketch, a photo, or a suit you already sell —
                and we will tell you which panels can be matched on one base
                fabric and which need a separate route. Sampling starts from one
                piece.
              </p>
            </div>
            <div>
              <Link className="btn btn--pink btn--lg" to="/inquiry">
                Start an inquiry <ArrowUpRight size={18} />
              </Link>
              <a
                className="btn btn--lg"
                href={WA_DEFAULT}
                target="_blank"
                rel="noreferrer"
              >
                <WaIcon size={17} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
