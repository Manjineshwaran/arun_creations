import { Link } from 'react-router-dom'
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from '../data/contact'
import '../App.css'

const services = [
  {
    id: '01',
    title: 'Infographics',
    description: 'Turn information into clear, engaging visuals.',
    to: '/infographics',
  },
  {
    id: '02',
    title: 'CV & Resume Design',
    description: 'Present your skills with confidence.',
  },
  {
    id: '03',
    title: 'Brochures & Flyers',
    description: 'Professional materials for your business.',
  },
  {
    id: '04',
    title: 'Visiting Cards',
    description: 'Make every introduction memorable.',
  },
  {
    id: '05',
    title: 'Social Media Designs',
    description: 'Instagram posts, reels covers and templates.',
    to: '/social-media',
  },
  {
    id: '06',
    title: 'Facebook & Meta Ads',
    description: 'Creative assets for promotions and campaigns.',
  },
]

function Home() {
  return (
    <div className="page">
      <header className="topbar reveal">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            G
          </span>
          <span className="brand-name">GRAPHIC CONSULTING</span>
        </div>
        <div className="topbar-links">
          <p className="topbar-tag">CREATIVE DESIGN • DIGITAL BRANDING</p>
          <a
            className="topbar-instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Instagram {INSTAGRAM_HANDLE}
          </a>
        </div>
      </header>

      <main>
        <section className="hero" aria-label="Introduction">
          <div className="hero-copy reveal delay-1">
            <h1>
              Design that makes
              <span> your business stand out.</span>
            </h1>
            <p className="hero-lead">
              Creative visuals for brands, professionals and growing businesses
              — designed to look clear, polished and memorable.
            </p>
            <div className="hero-actions">
              <a
                className="btn-primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                LET&apos;S WORK TOGETHER
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
          </div>

          <div className="hero-visual reveal delay-2" aria-hidden="true">
            <div className="visual-stage visual-stage--globe">
              <div className="globe">
                <div className="globe-sphere">
                  <div className="globe-engrave-clip">
                    <div className="globe-engrave-track">
                      <span>arun creations</span>
                      <span>arun creations</span>
                      <span>arun creations</span>
                      <span>arun creations</span>
                    </div>
                  </div>
                </div>
                <div className="globe-shine" />
                <div className="globe-atmosphere" />
              </div>
            </div>
          </div>
        </section>

        <section className="services" aria-labelledby="services-title">
          <div className="section-head reveal">
            <h2 id="services-title">What we create</h2>
            <p>Design support for your everyday business and marketing needs.</p>
          </div>

          <ul className="service-grid">
            {services.map((service, index) => {
              const inner = (
                <>
                  <span className="service-num">{service.id}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </>
              )

              return (
                <li
                  className={`service-item reveal delay-${(index % 3) + 1}${
                    service.to ? ' service-item--link' : ''
                  }`}
                  key={service.id}
                >
                  {service.to ? (
                    <Link className="service-link" to={service.to}>
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </li>
              )
            })}
          </ul>
        </section>

        <section className="process reveal" aria-label="Work process">
          <h2>Simple process. Professional results.</h2>
          <p>
            Tell us your requirement → We design → You review → Final files
            delivered
          </p>
        </section>
      </main>

      <footer className="site-footer reveal">
        <div className="footer-main">
          <div>
            <p className="footer-prompt">Have a design in mind?</p>
            <p className="footer-name">
              D. Arun Prashanth | Graphic Consulting
            </p>
          </div>
          <div className="footer-contact">
            <p>
              Phone / WhatsApp:{' '}
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              Email: {EMAIL} • Instagram:{' '}
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                {INSTAGRAM_HANDLE}
              </a>
            </p>
          </div>
        </div>
        <p className="footer-note">Graphic Consulting by D. Arun Prashanth</p>
      </footer>
    </div>
  )
}

export default Home
