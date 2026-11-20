import { useState } from 'react'
import { profile } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import { Check, Copy, Linkedin, Mail } from './Icons.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact-panel">
          <span className="eyebrow eyebrow-center">
            <span className="eyebrow-line" />
            Contact
            <span className="eyebrow-line" />
          </span>
          <h2 className="contact-title">
            Let's build something <span className="grad-text">reliable</span>.
          </h2>
          <p className="contact-sub">
            Open to backend, Python full-stack and AI engineering roles. The fastest way
            to reach me is email — I usually reply the same day.
          </p>

          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Mail width={18} height={18} />
              {profile.email}
            </a>
            <button type="button" className="btn btn-ghost" onClick={copyEmail}>
              {copied ? <Check width={18} height={18} /> : <Copy width={18} height={18} />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>

          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin width={16} height={16} />
              {profile.linkedinLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
