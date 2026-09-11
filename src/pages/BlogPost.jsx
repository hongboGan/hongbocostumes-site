import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CalendarDays } from 'lucide-react';
import { WaIcon } from '../components/icons.jsx';
import { getPost, sortedPosts } from '../content/blog.js';
import { SITE, WA_DEFAULT, waLink } from '../data.js';
import { Markdown } from '../lib/markdown.jsx';
import { usePageMeta } from '../lib/seo.js';
import NotFound from './NotFound.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  usePageMeta(
    post ? `${post.title} | Hongbo Costumes` : 'Article not found | Hongbo Costumes',
    post ? post.excerpt : undefined,
    post ? `/blog/${post.slug}` : '/blog'
  );

  if (!post) return <NotFound />;

  const others = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const wa = waLink(
    `Hi ${SITE.name}! I read your article "${post.title}" and would like wholesale info.`
  );

  return (
    <article className="post">
      <div className="wrap post__wrap">
        <Link to="/blog" className="post__back">
          <ArrowLeft size={16} /> All articles
        </Link>

        <p className="bmeta">
          <CalendarDays size={14} /> {post.date}
          {post.tags.map((t) => (
            <span key={t} className="btag">
              {t}
            </span>
          ))}
        </p>

        <h1>{post.title}</h1>
        <p className="post__lede">{post.excerpt}</p>

        <img className="post__cover" src={post.cover} alt="" loading="lazy" />

        <Markdown text={post.body} />

        {post.sources && (
          <p className="post__sources">
            <strong>Topic inspiration:</strong> {post.sources.join(' · ')} —
            community discussion themes only; all text here is original.
          </p>
        )}

        <div className="post__cta">
          <h3>Need wholesale pricing for these styles?</h3>
          <p>
            Send your quantities, sizes and destination market — we reply within
            one business day with price, lead time and sample options.
          </p>
          <div className="post__cta-actions">
            <Link className="btn btn--pink" to="/inquiry">
              Get a wholesale quote
            </Link>
            <a className="btn btn--wa" href={wa} target="_blank" rel="noreferrer">
              <WaIcon size={17} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {others.length > 0 && (
          <div className="post__more">
            <h3>Keep reading</h3>
            <div className="post__more-grid">
              {others.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="bcard bcard--sm">
                  <div className="bcard__img">
                    <img src={p.cover} alt="" loading="lazy" />
                  </div>
                  <div className="bcard__body">
                    <p className="bmeta">{p.date}</p>
                    <h4>{p.title}</h4>
                    <span className="bcard__more">
                      Read more <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
