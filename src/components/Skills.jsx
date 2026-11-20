import { skills } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { iconMap } from './Icons.jsx'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead
          eyebrow="Toolkit"
          title="What I work with"
          subtitle="A pragmatic stack for building APIs, background pipelines and AI features that hold up in production."
        />

        <div className="skills-grid">
          {skills.map((group, index) => {
            const Icon = iconMap[group.icon] ?? iconMap.code
            return (
              <Reveal key={group.title} delay={(index % 3) * 80} className="skill-card">
                <div className="skill-head">
                  <span className="icon-badge icon-badge-sm">
                    <Icon width={18} height={18} />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
