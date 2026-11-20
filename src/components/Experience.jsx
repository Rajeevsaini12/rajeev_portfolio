import { experience } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { Briefcase, MapPin } from './Icons.jsx'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead
          eyebrow="Experience"
          title="Where I've built things"
          subtitle="From enterprise IT operations to AI-driven assessment platforms — a progression of shipping more complex backend systems."
        />

        <div className="timeline">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.period}`} delay={index * 100} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase width={16} height={16} />
              </div>
              <div className="job-card">
                <div className="job-top">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <div className="job-meta">
                    <span className={`job-period${job.current ? ' is-current' : ''}`}>
                      {job.period}
                    </span>
                    <span className="job-location">
                      <MapPin width={14} height={14} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="job-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul className="tag-list tag-list-tight">
                  {job.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
