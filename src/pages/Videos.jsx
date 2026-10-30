import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play } from 'lucide-react';
import { VIDEOS, videoThumb, videoUrl } from '../content/videos.js';
import { usePageMeta } from '../lib/seo.js';

function Card({ video }) {
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const loaded = useRef(false);

  // Some networks (mainland China, corporate proxies) cannot reach YouTube. The
  // iframe never fires onLoad there, so fall back to an explicit link instead of
  // leaving a black box on screen.
  useEffect(() => {
    if (!playing) return undefined;
    const timer = setTimeout(() => {
      if (!loaded.current) setBlocked(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, [playing]);

  return (
    <article className="vcard">
      <div className="vcard__frame">
        {playing && !blocked ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            onLoad={() => {
              loaded.current = true;
            }}
          />
        ) : blocked ? (
          <div className="vcard__blocked">
            <img src={videoThumb(video.id)} alt="" aria-hidden="true" />
            <div className="vcard__blocked-msg">
              <strong>Playback is blocked on this network.</strong>
              <span>YouTube may be unreachable from your location or office firewall.</span>
              <a href={videoUrl(video.id)} target="_blank" rel="noreferrer">
                Watch on YouTube <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="vcard__poster"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
          >
            <img src={videoThumb(video.id)} alt={video.title} loading="lazy" width="480" height="360" />
            <span className="vcard__play">
              <Play size={18} fill="currentColor" />
            </span>
            <span className="vcard__time">{video.duration}</span>
          </button>
        )}
      </div>
      <div className="vcard__body">
        <h2>{video.title}</h2>
        <p className="vcard__meta">
          {video.channel} · {video.views} views
        </p>
        <p className="vcard__why">{video.why}</p>
        <div className="vcard__tags">
          {video.tags.map((t) => (
            <span key={t} className="tag tag--soft">
              {t}
            </span>
          ))}
        </div>
        <a className="vcard__ext" href={videoUrl(video.id)} target="_blank" rel="noreferrer">
          Open on YouTube <ArrowUpRight size={13} />
        </a>
      </div>
    </article>
  );
}

export default function Videos() {
  usePageMeta(
    'Workshop Videos — Costume & Prop Craft Technique | Hongbo Costumes',
    'Short, practical craft videos on EVA foam armor, patterning and finishing, picked for costume buyers who need to judge build quality before they order.',
    '/videos'
  );

  return (
    <>
      <section className="phead">
        <div className="wrap">
          <span className="tag tag--ink">Workshop</span>
          <h1>
            How the work <em>actually</em> gets done.
          </h1>
          <p className="phead__lede">
            Three craft videos a week, chosen for one reason: they show the steps that decide whether a costume
            survives a season. Patterning, foam density, edge finishing, assembly order — the same things we quote
            against on the factory floor.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="vgrid">
            {VIDEOS.map((v) => (
              <Card key={v.id} video={v} />
            ))}
          </div>
          <p className="vgrid__note">
            Videos are embedded from YouTube and remain the property of their creators. If you want a build
            walkthrough for a specific style, we can film our own sample room instead.
          </p>
          <div className="vgrid__cta">
            <Link className="btn btn--ink" to="/inquiry">
              Ask about a build <ArrowUpRight size={16} />
            </Link>
            <a className="btn btn--ghost" href={videoUrl(VIDEOS[0].id)} target="_blank" rel="noreferrer">
              Open on YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
