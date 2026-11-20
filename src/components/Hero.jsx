import { marquee, profile, stats } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import { ArrowRight, Linkedin, Mail, MapPin } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="status-badge">
              <span className="status-dot" />
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-title">
              {profile.firstName} <span className="grad-text">{profile.lastName}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero-role">{profile.role}</p>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-intro">{profile.intro}</p>
          </Reveal>

          <Reveal delay={260} className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              View projects
              <ArrowRight width={18} height={18} />
            </a>
          </Reveal>

          <Reveal delay={320} className="hero-meta">
            <a href={`mailto:${profile.email}`} className="meta-item">
              <Mail width={16} height={16} />
              {profile.email}
            </a>
            <span className="meta-item">
              <MapPin width={16} height={16} />
              {profile.location}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="meta-item"
              aria-label="LinkedIn profile"
            >
              <Linkedin width={16} height={16} />
              LinkedIn
            </a>
          </Reveal>

          <Reveal delay={380} className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={180} className="hero-visual">
          <div className="visual-glow" />
          <div className="visual-frame">
            <img
              src="/images/profile.svg"
              alt="Monogram portrait card of Rajeev Saini"
              width="600"
              height="750"
            />
            <div className="visual-caption">
              <span>Python · Django · AI</span>
              <span className="visual-caption-dot" />
            </div>
          </div>
          <div className="chip-float chip-a">
            <span className="chip-dot chip-dot-green" />
            FastAPI + Whisper
          </div>
          <div className="chip-float chip-b">
            <span className="chip-dot chip-dot-violet" />
            Celery · Redis queues
          </div>
          <div className="chip-float chip-c">
            <span className="chip-dot chip-dot-cyan" />
            AWS S3 · PostgreSQL
          </div>
        </Reveal>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
              <i>◆</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
