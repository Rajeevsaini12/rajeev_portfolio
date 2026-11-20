import { projects } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { ArrowUpRight } from './Icons.jsx'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          eyebrow="Selected work"
          title="Projects, in detail"
          subtitle="Three production builds — what each system does, the architecture underneath it, and the parts I owned. This is where the real work shows."
        />

        <div className="projects">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              className={`project${project.featured ? ' project-featured' : ''}`}
              delay={index * 60}
            >
              <div className="project-media">
                <img
                  src={project.image}
                  alt={`${project.title} illustration`}
                  width="800"
                  height="520"
                  loading="lazy"
                />
                <span className="project-index">0{index + 1}</span>
                {project.featured && <span className="project-flag">Featured</span>}
              </div>

              <div className="project-body">
                <span className="project-kicker">{project.subtitle}</span>
                <h3 className="project-title">
                  {project.title}
                  <ArrowUpRight width={20} height={20} />
                </h3>

                <dl className="project-meta">
                  {project.meta.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <ul className="job-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="project-stack">
                  <span className="project-stack-label">Stack</span>
                  <ul className="tag-list tag-list-tight">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
