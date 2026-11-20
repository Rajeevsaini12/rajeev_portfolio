import Reveal from './Reveal.jsx'

export default function SectionHead({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </Reveal>
  )
}
