import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="nf">
      <div className="wrap nf__inner">
        <Ghost size={56} />
        <h1>
          404 — this costume <em>went missing</em>.
        </h1>
        <p>
          The page you are looking for isn't in our catalog. Head back home or
          browse current styles.
        </p>
        <div className="nf__actions">
          <Link className="btn btn--pink btn--lg" to="/">
            Back to home
          </Link>
          <Link className="btn btn--ink btn--ghostlnk btn--lg" to="/products">
            Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
