import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand brand-sm" href="#top">
          <span className="brand-mark">RS</span>
          <span className="brand-text">
            {profile.firstName}
            <span>.</span>
          </span>
        </a>
        <p>Built with React. © {new Date().getFullYear()} {profile.name}.</p>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
