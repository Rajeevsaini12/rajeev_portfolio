import { focusAreas, quickFacts } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { ArrowRight, iconMap } from './Icons.jsx'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          eyebrow="About me"
          title="Backend depth, AI curiosity."
          subtitle="I like the part of software where data has to move reliably: schemas, queues, real-time streams and the APIs that tie them together."
        />

        <div className="about-grid">
          <Reveal className="about-copy">
            <p>
              I'm a software engineer from Indore working across backend development and
              applied AI. Most of my day goes into Django and DRF services — role-based
              access, assessment workflows, reporting pipelines — and into the FastAPI
              microservices that keep the heavy machine-learning work away from the main
              request cycle.
            </p>
            <p>
              At Zecdata I've shipped proctoring modules that analyse audio, video and
              images in real time, a WebSocket transcription service built on OpenAI
              Whisper, and Celery-based queues that made assessments faster and more
              fault tolerant. Earlier, at HPCL, I built PRODASH: live LPG cylinder
              filling dashboards fed by C# machine services and Python APIs.
            </p>
            <p>
              I'm now going deeper into GenAI, agentic workflows and prompt engineering —
              and I enjoy the unglamorous work that makes those features dependable in
              production.
            </p>
          </Reveal>

          <Reveal delay={120} className="about-card">
            <h3>Quick facts</h3>
            <ul>
              {quickFacts.map((fact) => (
                <li key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </li>
              ))}
            </ul>
            <a className="link-arrow" href="#experience">
              See my experience
              <ArrowRight width={16} height={16} />
            </a>
          </Reveal>
        </div>

        <div className="focus-grid">
          {focusAreas.map((area, index) => {
            const Icon = iconMap[area.icon] ?? iconMap.layers
            return (
              <Reveal key={area.title} delay={index * 90} className="focus-card">
                <span className="icon-badge">
                  <Icon />
                </span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
