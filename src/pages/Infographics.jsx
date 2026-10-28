import { Link } from 'react-router-dom'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from '../data/contact'
import '../App.css'
import './Infographics.css'

const samples = [
  {
    title: 'Business growth',
    detail: 'Year-over-year metrics in one clean visual.',
    stat: '48%',
    label: 'Revenue up',
  },
  {
    title: 'Audience insights',
    detail: 'Age, location and interest breakdowns made simple.',
    stat: '12k',
    label: 'Reach / week',
  },
  {
    title: 'Process timeline',
    detail: 'Step-by-step journeys for pitches and reports.',
    stat: '05',
    label: 'Key stages',
  },
]

const styles = [
  'Stat highlight posters',
  'Comparison charts',
  'Process & timeline maps',
  'Social-ready info carousels',
]

function Infographics() {
  return (
    <div className="page info-page">
      <header className="topbar reveal">
        <Link to="/" className="brand brand--link">
          <span className="brand-mark" aria-hidden="true">
            G
          </span>
          <span className="brand-name">GRAPHIC CONSULTING</span>
        </Link>
        <Link className="back-link" to="/">
          ← Back to home
        </Link>
      </header>

      <main>
        <section className="info-hero reveal">
          <p className="info-kicker">Service 01</p>
          <h1>
            Infographics that
            <span> explain at a glance.</span>
          </h1>
          <p className="info-lead">
            Complex data becomes clear visuals — for presentations, social posts,
            reports and client decks. Built to look sharp and easy to understand.
          </p>
          <div className="hero-actions">
            <a
              className="btn-primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              ORDER AN INFOGRAPHIC
            </a>
            <a
              className="hero-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        <section className="info-preview reveal delay-1" aria-label="Sample visual">
          <div className="preview-board">
            <div className="preview-header">
              <span>Sample visual</span>
              <span className="preview-dot" />
            </div>
            <h2>Brand performance snapshot</h2>
            <div className="bars" aria-hidden="true">
              <div className="bar" style={{ '--h': '58%' }}>
                <span>Q1</span>
              </div>
              <div className="bar" style={{ '--h': '72%' }}>
                <span>Q2</span>
              </div>
              <div className="bar bar--accent" style={{ '--h': '91%' }}>
                <span>Q3</span>
              </div>
              <div className="bar" style={{ '--h': '80%' }}>
                <span>Q4</span>
              </div>
            </div>
            <div className="preview-stats">
              <div>
                <strong>3.2×</strong>
                <span>Engagement</span>
              </div>
              <div>
                <strong>86%</strong>
                <span>Clarity score</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>Typical delivery*</span>
              </div>
            </div>
          </div>
        </section>

        <section className="info-samples" aria-labelledby="samples-title">
          <div className="section-head reveal">
            <h2 id="samples-title">What you can get</h2>
            <p>A few directions we design often for brands and professionals.</p>
          </div>
          <ul className="sample-grid">
            {samples.map((item, index) => (
              <li
                className={`sample-card reveal delay-${(index % 3) + 1}`}
                key={item.title}
              >
                <p className="sample-stat">{item.stat}</p>
                <p className="sample-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="info-styles reveal" aria-labelledby="styles-title">
          <h2 id="styles-title">Formats we design</h2>
          <ul>
            {styles.map((style) => (
              <li key={style}>{style}</li>
            ))}
          </ul>
        </section>

        <section className="process reveal" aria-label="Work process">
          <h2>Share your data. Get a polished visual.</h2>
          <p>
            Send numbers / draft copy → We design → You review → Final PNG / PDF
            delivered
          </p>
        </section>
      </main>

      <footer className="site-footer reveal">
        <div className="footer-main">
          <div>
            <p className="footer-prompt">Need a custom infographic?</p>
            <p className="footer-name">
              D. Arun Prashanth | Graphic Consulting
            </p>
          </div>
          <div className="footer-contact">
            <p>
              WhatsApp:{' '}
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              Instagram:{' '}
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                {INSTAGRAM_HANDLE}
              </a>
            </p>
          </div>
        </div>
        <p className="footer-note">*Delivery time depends on content volume.</p>
      </footer>
    </div>
  )
}

export default Infographics
