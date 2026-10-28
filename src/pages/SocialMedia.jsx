import { Link } from 'react-router-dom'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from '../data/contact'
import '../App.css'
import './SocialMedia.css'

const offerings = [
  {
    id: '01',
    title: 'Instagram Posts',
    description:
      'Promotional posts, offers, launches and brand content.',
    tone: 'pink',
  },
  {
    id: '02',
    title: 'Stories & Highlights',
    description:
      'Story layouts, announcements and highlight covers.',
    tone: 'purple',
  },
  {
    id: '03',
    title: 'Reels Covers & Creatives',
    description:
      'Cover designs and visual assets for short-form video.',
    tone: 'mint',
  },
  {
    id: '04',
    title: 'Facebook Ad Creatives',
    description:
      'Campaign visuals designed to communicate your offer.',
    tone: 'blue',
  },
]

function SocialMedia() {
  return (
    <div className="page social-page">
      <header className="topbar reveal">
        <Link to="/" className="brand brand--link">
          <span className="brand-mark" aria-hidden="true">
            G
          </span>
          <span className="brand-name">GRAPHIC CONSULTING</span>
        </Link>
        <div className="topbar-links">
          <p className="topbar-tag">SOCIAL MEDIA DESIGN</p>
          <Link className="back-link" to="/">
            ← Back to home
          </Link>
        </div>
      </header>

      <main>
        <section className="social-hero" aria-label="Introduction">
          <div className="social-copy reveal delay-1">
            <p className="info-kicker">Social media design services</p>
            <h1>
              Make your brand
              <span> impossible to ignore.</span>
            </h1>
            <p className="social-lead">
              Scroll-stopping visuals for Instagram, Facebook and your next big
              campaign.
            </p>
            <div className="hero-actions">
              <a
                className="btn-primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                GET A DESIGN
              </a>
              <span className="hero-whatsapp">
                Custom designs for your business
              </span>
            </div>
          </div>

          <div className="social-visual reveal delay-2" aria-hidden="true">
            <div className="mock-stage">
              <div className="mock-post">
                <div className="mock-post-media">
                  <span className="mock-blob mock-blob-a" />
                  <span className="mock-blob mock-blob-b" />
                </div>
                <div className="mock-post-body">
                  <p className="mock-post-title">
                    NEW
                    <br />
                    COLLECTION
                  </p>
                  <p className="mock-post-sub">
                    Made for your
                    <br />
                    everyday style.
                  </p>
                  <span className="mock-shop">SHOP NOW</span>
                </div>
              </div>

              <div className="mock-story">
                <span className="mock-story-ring" />
                <span className="mock-story-label">
                  YOUR
                  <br />
                  STORY
                </span>
              </div>

              <div className="mock-play">
                <span className="mock-play-icon" />
              </div>
            </div>
          </div>
        </section>

        <section className="social-offerings" aria-labelledby="design-title">
          <div className="section-head reveal">
            <h2 id="design-title">What we design</h2>
            <p>
              Creative content tailored to your brand, audience and goals.
            </p>
          </div>

          <ul className="offer-grid">
            {offerings.map((item, index) => (
              <li
                className={`offer-card reveal delay-${(index % 3) + 1}`}
                key={item.id}
              >
                <span className={`offer-num offer-num--${item.tone}`}>
                  {item.id}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="process reveal" aria-label="Work process">
          <h2>From idea to publish-ready creative</h2>
          <p>
            Share your brief → We design → You review → Final files delivered
          </p>
        </section>
      </main>

      <footer className="site-footer reveal">
        <div className="footer-main">
          <div>
            <p className="footer-prompt">
              Ready to level up your social presence?
            </p>
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
        <p className="footer-note">
          Contact us to discuss your next design.
        </p>
      </footer>
    </div>
  )
}

export default SocialMedia
