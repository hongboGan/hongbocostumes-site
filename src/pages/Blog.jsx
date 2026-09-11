import { Link } from 'react-router-dom';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { WaIcon } from '../components/icons.jsx';
import { sortedPosts } from '../content/blog.js';
import { WA_DEFAULT } from '../data.js';
import { usePageMeta } from '../lib/seo.js';

export default function Blog() {
  usePageMeta(
    'Costume Sourcing & Cosplay Blog | Hongbo Costumes',
    'Trend notes, buying guides and sourcing playbooks for Halloween, cosplay and superhero costume retailers — written by a costume factory.',
    '/blog'
  );

  const [lead, ...rest] = sortedPosts;

  return (
    <>
      <section className="phead bloghead">
        <div className="wrap">
          <span className="tag tag--ink">Insights</span>
          <h1>
            Trend notes for <em>costume retailers</em>.
          </h1>
          <p>
            What buyers are asking for right now, how to stock it, and how to
            source it factory-direct. New article every day.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          {lead && (
            <Link to={`/blog/${lead.slug}`} className="blead">
              <img src={lead.cover} alt="" loading="lazy" />
              <div className="blead__body">
                <p className="bmeta">
                  <CalendarDays size={14} /> {lead.date}
                  {lead.tags.slice(0, 2).map((t) => (
                    <span key={t} className="btag">
                      {t}
                    </span>
                  ))}
                </p>
                <h2>{lead.title}</h2>
                <p>{lead.excerpt}</p>
                <span className="btn btn--ink btn--sm">
                  Read article <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          )}

          <div className="bgrid">
            {rest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="bcard">
                <div className="bcard__img">
                  <img src={post.cover} alt="" loading="lazy" />
                </div>
                <div className="bcard__body">
                  <p className="bmeta">
                    <CalendarDays size={13} /> {post.date}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="bcard__more">
                    Read more <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="bcta">
            <div>
              <h3>Looking for pricing instead of reading?</h3>
              <p>
                Send your target styles and quantities — we quote within one
                business day.
              </p>
            </div>
            <div className="bcta__actions">
              <Link className="btn btn--pink" to="/inquiry">
                Get a quote
              </Link>
              <a className="btn btn--wa" href={WA_DEFAULT} target="_blank" rel="noreferrer">
                <WaIcon size={17} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
