const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: 20,
  height: 20,
  'aria-hidden': 'true',
}

export function ArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function Download(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v11" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M5 19h14" />
    </svg>
  )
}

export function Mail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.8 7.2 8.2 5.8 8.2-5.8" />
    </svg>
  )
}

export function Phone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  )
}

export function MapPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function Linkedin(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.2" />
      <path d="M8 10.5V16" />
      <path d="M8 7.8v.2" />
      <path d="M12 16v-3.2a2.3 2.3 0 0 1 4.6 0V16" />
    </svg>
  )
}

export function Menu(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
    </svg>
  )
}

export function Close(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

export function Copy(props) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2.4" />
      <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3H6.5A2.5 2.5 0 0 0 4 5.5v6A2.5 2.5 0 0 0 6.5 14" />
    </svg>
  )
}

export function Check(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 6.5" />
    </svg>
  )
}

export function Server(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4" width="17" height="6.5" rx="2" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="2" />
      <path d="M7 7.2h.01" />
      <path d="M7 16.8h.01" />
    </svg>
  )
}

export function Code(props) {
  return (
    <svg {...base} {...props}>
      <path d="m8.5 8.5-4 3.5 4 3.5" />
      <path d="m15.5 8.5 4 3.5-4 3.5" />
      <path d="m13.5 5-3 14" />
    </svg>
  )
}

export function Database(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </svg>
  )
}

export function Brain(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5.5a3 3 0 0 0-5.7-1.3A2.8 2.8 0 0 0 4 7a2.8 2.8 0 0 0-.3 4.6A3 3 0 0 0 4.6 17a3 3 0 0 0 4.7 2.3A2.4 2.4 0 0 0 12 18V5.5Z" />
      <path d="M12 5.5a3 3 0 0 1 5.7-1.3A2.8 2.8 0 0 1 20 7a2.8 2.8 0 0 1 .3 4.6A3 3 0 0 1 19.4 17a3 3 0 0 1-4.7 2.3A2.4 2.4 0 0 1 12 18" />
      <path d="M8.5 9.5h1.8" />
      <path d="M13.8 12.5h1.7" />
    </svg>
  )
}

export function Cloud(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7.5 18.5a4 4 0 0 1-.4-8 5.5 5.5 0 0 1 10.5-.6 3.8 3.8 0 0 1 .4 8.6Z" />
    </svg>
  )
}

export function Wrench(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 6.5a3.5 3.5 0 0 1 4.6-3.3l-2.7 2.7 2.2 2.2 2.7-2.7a3.5 3.5 0 0 1-4.4 4.5l-8 8a2.4 2.4 0 0 1-3.4-3.4l8-8a3.5 3.5 0 0 1 1-0Z" />
    </svg>
  )
}

export function Briefcase(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="2.4" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </svg>
  )
}

export function GraduationCap(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 8.5 12 4.5l9.5 4-9.5 4-9.5-4Z" />
      <path d="M6.5 10.5v4.7c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.7" />
      <path d="M21 9.2v5" />
    </svg>
  )
}

export function Sparkles(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c.9 4 1.9 5 5.9 5.9-4 .9-5 1.9-5.9 5.9-.9-4-1.9-5-5.9-5.9 4-.9 5-1.9 5.9-5.9Z" />
      <path d="M18 15.5c.4 1.8.9 2.3 2.7 2.7-1.8.4-2.3.9-2.7 2.7-.4-1.8-.9-2.3-2.7-2.7 1.8-.4 2.3-.9 2.7-2.7Z" />
    </svg>
  )
}

export function Layers(props) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3.5 8.5 4.7L12 12.9 3.5 8.2 12 3.5Z" />
      <path d="m3.5 12.5 8.5 4.7 8.5-4.7" />
      <path d="m3.5 16.6 8.5 4.7 8.5-4.7" />
    </svg>
  )
}

export const iconMap = {
  code: Code,
  server: Server,
  database: Database,
  brain: Brain,
  cloud: Cloud,
  wrench: Wrench,
  briefcase: Briefcase,
  layers: Layers,
  sparkles: Sparkles,
}
