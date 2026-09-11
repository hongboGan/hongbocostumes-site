import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, ArrowUpRight } from 'lucide-react';
import { CATEGORIES, SITE, WA_DEFAULT } from '../data.js';
import { WaIcon } from './icons.jsx';

const TICKER = [
  'Factory Direct Wholesale',
  'Custom OEM & ODM',
  '7-Day Samples',
  'Amazon FBA Ready',
  '91% On-Time Dispatch',
  'Rated 4.7/5 by Buyers',
];

function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__inner">
        <span>Costume manufacturer &amp; exporter — Wuhan, China</span>
        <span className="topbar__links">
          <a href={`mailto:${SITE.email}`}>
            <Mail size={13} /> {SITE.email}
          </a>
          <a href={WA_DEFAULT} target="_blank" rel="noreferrer">
            <WaIcon size={13} /> {SITE.whatsappDisplay}
          </a>
        </span>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname, location.search]);

  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link className="wordmark" to="/" aria-label="Hongbo Costumes home">
          <span className="wordmark__cap">HONG BO</span>
          <span className="wordmark__sub">COSTUMES</span>
        </Link>

        <nav className="nav" aria-label="Main">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav__link on' : 'nav__link')}>
            Home
          </NavLink>
          <span className="nav__drop">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive || location.pathname.startsWith('/products')
                  ? 'nav__link on'
                  : 'nav__link'
              }
            >
              Products <span className="nav__caret">▾</span>
            </NavLink>
            <span className="flyout">
              {CATEGORIES.map((c) => (
                <Link key={c.id} to={`/products?cat=${c.id}`}>
                  {c.label}
                </Link>
              ))}
              <Link to="/products" className="flyout__all">
                View all products <ArrowUpRight size={14} />
              </Link>
            </span>
          </span>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav__link on' : 'nav__link')}>
            Blog
          </NavLink>
          <NavLink to="/inquiry" className={({ isActive }) => (isActive ? 'nav__link on' : 'nav__link')}>
            Inquiry
          </NavLink>
        </nav>

        <div className="header__cta">
          <a className="btn btn--wa btn--sm" href={WA_DEFAULT} target="_blank" rel="noreferrer">
            <WaIcon size={16} /> WhatsApp
          </a>
          <Link className="btn btn--pink btn--sm hide-sm" to="/inquiry">
            Get a Quote
          </Link>
          <button
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mnav">
          <Link to="/" className="mnav__l">Home</Link>
          <p className="mnav__label">Products</p>
          {CATEGORIES.map((c) => (
            <Link key={c.id} to={`/products?cat=${c.id}`} className="mnav__l mnav__sub">
              {c.label}
            </Link>
          ))}
          <Link to="/products" className="mnav__l">
            View all products
          </Link>
          <Link to="/blog" className="mnav__l">
            Blog — trend notes
          </Link>
          <Link to="/inquiry" className="mnav__l mnav__cta">
            Get a Quote <ArrowUpRight size={16} />
          </Link>
          <a className="mnav__wa" href={WA_DEFAULT} target="_blank" rel="noreferrer">
            <WaIcon size={17} /> Chat on WhatsApp — {SITE.whatsappDisplay}
          </a>
        </div>
      )}
    </header>
  );
}

function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((t, i) => (
          <span className="ticker__item" key={i}>
            {t} <Sparkle />
          </span>
        ))}
      </div>
    </div>
  );
}

function Sparkle() {
  return <span className="ticker__spark">✦</span>;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <p className="wordmark">
            <span className="wordmark__cap">HONG BO</span>
            <span className="wordmark__sub">COSTUMES</span>
          </p>
          <p>
            Halloween, cosplay &amp; fancy-dress costume factory. Wholesale,
            custom OEM/ODM and FBA-ready programs for retailers and sellers
            worldwide.
          </p>
          <a className="btn btn--lime btn--sm" href={WA_DEFAULT} target="_blank" rel="noreferrer">
            <WaIcon size={16} /> Chat on WhatsApp
          </a>
        </div>

        <div className="footer__col">
          <p className="footer__h">Shop</p>
          {CATEGORIES.map((c) => (
            <Link key={c.id} to={`/products?cat=${c.id}`}>
              {c.label}
            </Link>
          ))}
          <Link to="/products">All products</Link>
        </div>

        <div className="footer__col">
          <p className="footer__h">Company</p>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/blog">Blog &amp; insights</Link>
          <Link to="/inquiry">Request a quote</Link>
          <a href="https://ouwanni.en.alibaba.com/" target="_blank" rel="noreferrer">
            Full catalog on Alibaba →
          </a>
        </div>

        <div className="footer__col">
          <p className="footer__h">Contact</p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={WA_DEFAULT} target="_blank" rel="noreferrer">
            WhatsApp {SITE.whatsappDisplay}
          </a>
          <p className="footer__legal">
            Manufacturing: {SITE.legalName}, Wuhan, Hubei, China.
            <br />
            Prices shown are reference wholesale ranges (FOB, from our
            marketplace listings); final quotes depend on quantity, sizing and
            customization.
          </p>
        </div>
      </div>
      <div className="wrap footer__bottom">
        © {new Date().getFullYear()} Hongbo Costumes · {SITE.legalName} · All
        rights reserved.
      </div>
    </footer>
  );
}

function WaFloat() {
  return (
    <a className="wafloat" href={WA_DEFAULT} target="_blank" rel="noreferrer">
      <WaIcon size={26} />
      <span>Chat with us</span>
    </a>
  );
}

export default function Layout() {
  // Inquiry & product detail pages already have prominent in-page WhatsApp
  // CTAs; hide the floating button there to avoid overlapping form fields.
  const { pathname } = useLocation();
  const hideFloat = pathname === '/inquiry' || /^\/products\/[^/]+\/?$/.test(pathname);

  return (
    <div className="site">
      <TopBar />
      <Header />
      <Ticker />
      <main>
        <Outlet />
      </main>
      <Footer />
      {!hideFloat && <WaFloat />}
    </div>
  );
}
