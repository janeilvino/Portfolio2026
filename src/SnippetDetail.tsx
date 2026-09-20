interface SnippetData {
  title: string;
  client: string;
  category: string;
  image: string;
  link: string | null;
  overview: string;
  challenges: string[];
  strategy: string[];
  results: string[];
}

interface Props {
  snippet: SnippetData;
  onBack: () => void;
}

export default function SnippetDetail({ snippet, onBack }: Props) {
  return (
    <div className="detail-page">
      <button className="detail-back" onClick={onBack}>
        ← Back
      </button>

      <div className="detail-hero">
        <img src={snippet.image} alt={snippet.title} className="detail-hero-img" />
      </div>

      <div className="detail-body">
        <div className="detail-meta">
          <div>
            <p className="detail-client">{snippet.client}</p>
            <p className="detail-category">{snippet.category}</p>
          </div>
          {snippet.link && (
            <a
              href={snippet.link}
              target="_blank"
              rel="noreferrer"
              className="detail-site-link"
            >
              Visit Site →
            </a>
          )}
        </div>

        <h1 className="detail-title">{snippet.title}</h1>

        <div className="detail-sections">
          <section className="detail-section">
            <h2 className="detail-section-heading">Project Overview</h2>
            <p className="detail-section-text">{snippet.overview}</p>
          </section>

          <section className="detail-section">
            <h2 className="detail-section-heading">Challenges</h2>
            <ul className="detail-list">
              {snippet.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2 className="detail-section-heading">Strategy</h2>
            <ul className="detail-list">
              {snippet.strategy.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2 className="detail-section-heading">Results</h2>
            <ul className="detail-list">
              {snippet.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export type { SnippetData };
