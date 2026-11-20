import { education } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { GraduationCap, Sparkles } from './Icons.jsx'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead
          eyebrow="Education"
          title="The foundation"
          subtitle="Information Technology graduate, now learning in public through production work."
        />

        <div className="education-grid">
          <Reveal className="edu-card">
            <span className="icon-badge">
              <GraduationCap />
            </span>
            <div>
              <span className="edu-period">{education.period}</span>
              <h3>{education.degree}</h3>
              <p>{education.institute}</p>
            </div>
            <span className="edu-score">{education.score}</span>
          </Reveal>

          <Reveal delay={100} className="edu-note">
            <Sparkles width={20} height={20} />
            <p>
              Currently exploring GenAI, agentic AI workflows and prompt engineering —
              building on a backend foundation of Python, Django and distributed task
              queues.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
