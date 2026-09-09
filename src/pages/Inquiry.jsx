import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BadgeCheck, Clock3, Mail, Send, ShieldCheck, X } from 'lucide-react';
import { WaIcon } from '../components/icons.jsx';
import {
  PRODUCT_TYPE_OPTIONS,
  SITE,
  WA_DEFAULT,
  getProduct,
  waLink,
} from '../data.js';

const FORM_URL = 'https://formsubmit.co/ajax/Zoe@hoburn.group';

const empty = {
  name: '',
  company: '',
  email: '',
  whatsapp: '',
  productType: '',
  quantity: '',
  message: '',
};

export default function Inquiry() {
  const [params] = useSearchParams();
  const productId = params.get('product');
  const product = useMemo(() => (productId ? getProduct(productId) : null), [productId]);

  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (product) {
      const catLabel =
        product.cat === 'halloween'
          ? 'Halloween Costumes'
          : product.cat === 'movie'
            ? 'Movie, TV & Superhero'
            : product.cat === 'anime'
              ? 'Anime & Cosplay'
              : product.cat === 'kids'
                ? 'Kids, Princess & Party'
                : product.cat === 'funny'
                  ? 'Funny, Career & Novelty'
                  : 'Christmas & Thanksgiving';
      setForm((f) => ({ ...f, productType: f.productType || catLabel }));
    }
  }, [product]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    const payload = {
      ...form,
      company: form.company || '—',
      whatsapp: form.whatsapp || '—',
      quantity: form.quantity || '—',
      message: form.message || '—',
      _subject: `New website inquiry: ${form.productType || 'General'} (${form.name})`,
      _template: 'table',
      _captcha: 'false',
      _honey: '',
      _next: window.location.href,
    };
    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('bad status');
      const data = await res.json();
      if (data && data.success === 'true') {
        setStatus('ok');
      } else {
        throw new Error('rejected');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        'The form service could not be reached. Please use the WhatsApp or email buttons below — we usually reply within hours.'
      );
    }
  }

  const summary = encodeURIComponent(
    `New inquiry from ${form.name || 'a buyer'} (${form.company || 'company not given'})%0AProduct type: ${form.productType || '—'}%0AEstimated qty: ${form.quantity || '—'}%0AWhatsApp: ${form.whatsapp || '—'}%0AEmail: ${form.email}%0A%0A${form.message || ''}`
  );
  const waSelf = waLink(
    `Hi ${SITE.name}! I just sent an inquiry from your website.\n\nName: ${form.name || ''}\nCompany: ${form.company || ''}\nEmail: ${form.email || ''}\nWhatsApp: ${form.whatsapp || ''}\nProduct type: ${form.productType || ''}\nEstimated qty: ${form.quantity || ''}\n\nDetails: ${form.message || ''}`
  );
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Wholesale inquiry from website — ${form.productType || 'General'}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nProduct type: ${form.productType}\nEstimated quantity: ${form.quantity}\n\n${form.message}`
  )}`;

  const inputCls = 'field';
  const labelCls = 'lbl';

  return (
    <section className="iq">
      <div className="wrap">
        <header className="iq__head">
          <span className="stag stag--lime">Get a quote</span>
          <h1>
            Tell us what you need — <em>we reply fast</em>.
          </h1>
          <p>
            Fill in the form and get factory-direct pricing, MOQ and lead time.
            Usually answered within hours on business days.
          </p>
        </header>

        <div className="iq__grid">
          <div className="iq__form">
            {status === 'ok' ? (
              <div className="done">
                <span className="done__icon">
                  <BadgeCheck size={44} />
                </span>
                <h2>Inquiry sent — thank you!</h2>
                <p>
                  Your message is on its way to <strong>{SITE.email}</strong>.
                  We typically reply within a few hours on business days.
                </p>
                <div className="done__actions">
                  <a className="btn btn--wa btn--lg" href={waSelf} target="_blank" rel="noreferrer">
                    <WaIcon size={19} /> Continue on WhatsApp
                  </a>
                  <Link className="btn btn--ink btn--ghostlnk" to="/products">
                    Keep browsing products
                  </Link>
                </div>
              </div>
            ) : (
              <>
                {product && (
                  <div className="iq__pick">
                    <img src={product.image} alt="" />
                    <span>
                      Inquiring about: <b>{product.name}</b>
                    </span>
                    <Link to="/inquiry" aria-label="Remove selected product">
                      <X size={18} />
                    </Link>
                  </div>
                )}

                <form onSubmit={submit} noValidate={false}>
                  <div className="frow">
                    <div className="fcell">
                      <label className={labelCls} htmlFor="name">
                        Your name *
                      </label>
                      <input
                        className={inputCls}
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Miller"
                        value={form.name}
                        onChange={set('name')}
                      />
                    </div>
                    <div className="fcell">
                      <label className={labelCls} htmlFor="company">
                        Company
                      </label>
                      <input
                        className={inputCls}
                        id="company"
                        type="text"
                        placeholder="e.g. Miller Party Supplies LLC"
                        value={form.company}
                        onChange={set('company')}
                      />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="fcell">
                      <label className={labelCls} htmlFor="email">
                        Email *
                      </label>
                      <input
                        className={inputCls}
                        id="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={set('email')}
                      />
                    </div>
                    <div className="fcell">
                      <label className={labelCls} htmlFor="whatsapp">
                        WhatsApp
                      </label>
                      <input
                        className={inputCls}
                        id="whatsapp"
                        type="tel"
                        placeholder="+86 138 0000 0000"
                        value={form.whatsapp}
                        onChange={set('whatsapp')}
                      />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="fcell">
                      <label className={labelCls} htmlFor="ptype">
                        Product type *
                      </label>
                      <select
                        className={inputCls}
                        id="ptype"
                        required
                        value={form.productType}
                        onChange={set('productType')}
                      >
                        <option value="" disabled>
                          Select a category…
                        </option>
                        {PRODUCT_TYPE_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="fcell">
                      <label className={labelCls} htmlFor="qty">
                        Estimated quantity
                      </label>
                      <input
                        className={inputCls}
                        id="qty"
                        type="text"
                        placeholder="e.g. 500 pcs / 3 styles"
                        value={form.quantity}
                        onChange={set('quantity')}
                      />
                    </div>
                  </div>

                  <div className="fcell">
                    <label className={labelCls} htmlFor="msg">
                      Anything else we should know?
                    </label>
                    <textarea
                      className={`${inputCls} field--area`}
                      id="msg"
                      rows={4}
                      placeholder="Target price, size range, custom logo, deadline, destination country…"
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>

                  <div className="iq__trust">
                    <span>
                      <ShieldCheck size={15} /> Your details are only used to
                      reply to this inquiry.
                    </span>
                    <span>
                      <Clock3 size={15} /> Avg. first response ≤ 4h
                    </span>
                  </div>

                  <button className="btn btn--pink btn--lg btn--block" type="submit" disabled={status === 'sending'}>
                    <Send size={18} />
                    {status === 'sending' ? 'Sending…' : 'Send inquiry'}
                  </button>

                  {status === 'error' && <p className="iq__err">{errorMsg}</p>}
                </form>
              </>
            )}
          </div>

          <aside className="iq__side">
            <a className="sidewa" href={waSelf} target="_blank" rel="noreferrer">
              <WaIcon size={30} />
              <b>WhatsApp us directly</b>
              <span>{SITE.whatsappDisplay} · usually online in business hours</span>
            </a>
            <a className="sidemail" href={mailto}>
              <Mail size={24} />
              <b>{SITE.email}</b>
              <span>Prefer email? Send the same details here.</span>
            </a>
            <div className="sidenote">
              <p className="footer__h">What happens next</p>
              <ol>
                <li>We confirm your request &amp; send the catalog/price list.</li>
                <li>Discuss samples — ready in ~7 days.</li>
                <li>Agree on price, MOQ &amp; lead time.</li>
                <li>Production with QC, then shipment worldwide.</li>
              </ol>
              <p className="sidenote__fine">
                OEM/ODM welcome: custom colors, prints, logos, hang tags, FBA
                prep. Rated 4.7/5 by buyers · 91% on-time dispatch.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
