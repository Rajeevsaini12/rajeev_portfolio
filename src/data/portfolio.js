export const profile = {
  name: 'Rajeev Saini',
  firstName: 'Rajeev',
  lastName: 'Saini',
  role: 'Python Backend Developer · AI / GenAI Engineer',
  headline: 'I build backend systems that stay fast under real load.',
  intro:
    'Software engineer with 1 year 8 months of experience building scalable APIs with Python, Django and FastAPI — plus real-time AI features like WebSocket transcription, ML-driven proctoring and Celery-powered pipelines.',
  location: 'Indore, India',
  email: 'rajeevsaini1201@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rajeevsaini1201',
  linkedinLabel: 'linkedin.com/in/rajeevsaini1201',
  resume: '/Rajeev_Saini_Resume.pdf',
  availability: 'Open to backend & AI engineering roles',
}

export const stats = [
  { value: '1.8+', label: 'Years of experience' },
  { value: '3', label: 'Production builds' },
  { value: '8.49', label: 'B.Tech CGPA' },
]

export const quickFacts = [
  { label: 'Current role', value: 'Software Engineer · Zecdata Technologies' },
  { label: 'Based in', value: 'Indore, Madhya Pradesh, India' },
  { label: 'Education', value: 'B.Tech, Information Technology' },
  { label: 'Focus', value: 'Backend engineering · Applied AI' },
]

export const focusAreas = [
  {
    icon: 'server',
    title: 'Backend Engineering',
    text: 'Django, DRF and FastAPI services designed for high availability, clean data flow and predictable performance.',
  },
  {
    icon: 'brain',
    title: 'Applied AI & GenAI',
    text: 'Whisper transcription, ML-based audio/video/image analysis and prompt-driven features wired into real products.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & Realtime',
    text: 'Celery + Redis queues, WebSocket streaming, PostgreSQL pipelines and AWS S3 storage with presigned URLs.',
  },
]

export const skills = [
  {
    icon: 'code',
    title: 'Languages',
    items: ['Python', 'C#', 'SQL'],
  },
  {
    icon: 'server',
    title: 'Backend & Frameworks',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'Celery', 'WebSockets', 'REST APIs'],
  },
  {
    icon: 'database',
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Schema design', 'Data pipelines'],
  },
  {
    icon: 'brain',
    title: 'AI / ML & GenAI',
    items: [
      'OpenAI Whisper',
      'Applied AI/ML integration',
      'Agentic AI (working knowledge)',
      'Prompt engineering',
      'Judge0 API',
    ],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    items: ['AWS S3', 'Presigned URLs', 'Redis', 'Linux'],
  },
  {
    icon: 'wrench',
    title: 'Tools & Fundamentals',
    items: ['Postman', 'MS Excel', 'Computer Networks', 'DSA'],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Zecdata Technologies Pvt. Ltd.',
    location: 'Indore',
    period: 'March 2026 — Present',
    current: true,
    stack: ['Django', 'DRF', 'FastAPI', 'PostgreSQL', 'Celery', 'AWS S3'],
    points: [
      'Designed and developed scalable backend services with Django and Django REST Framework powering AI-driven web platforms with multi-user, role-based access.',
      'Built and maintained RESTful APIs for candidate management, assessments, results and reporting, keeping data flow efficient and highly available.',
      'Integrated ML modules for real-time analysis of audio, video and image data for behaviour monitoring and anomaly detection.',
      'Connected the Judge0 API for secure multi-language code execution and implemented SQL-based autograding for automated assessment evaluation.',
      'Designed PostgreSQL schemas and data pipelines handling high-volume proctoring events, analytics and structured reporting.',
      'Implemented Celery + Redis background task queues for asynchronous job processing, improving platform performance and scalability.',
      'Built a WebSocket live audio transcription service with FastAPI and OpenAI Whisper, hosted as an isolated microservice to offload the main Django app.',
      'Integrated AWS S3 with presigned URLs for secure multimedia storage, and added OTP-based authentication with secure session management across REST APIs.',
    ],
  },
  {
    role: 'Backend Python Developer (GAT)',
    company: 'Hindustan Petroleum Corporation Limited',
    location: 'Indore',
    period: 'July 2025 — March 2026',
    current: false,
    stack: ['Python', 'C#', 'React', 'SAP', 'REST APIs'],
    points: [
      'Built and maintained PRODASH, a live inventory monitoring tool, covering backend data processing in Python, machine-side services in C# and a React dashboard.',
      'Provided end-to-end IT support including hardware troubleshooting, software installation and system configuration.',
      'Worked with SAP tools for operational and inventory activities, handling inventory tracking through PRODESH software.',
      'Maintained accurate records and reports in MS Excel and MS Word, coordinating with internal teams to keep system downtime minimal.',
    ],
  },
]

export const projects = [
  {
    title: 'AI-Powered Online Assessment Platform',
    subtitle: 'Proctoring, autograding and analytics at scale',
    featured: true,
    meta: [
      { label: 'Role', value: 'Backend & AI integration' },
      { label: 'Built at', value: 'Zecdata · 2026 — Present' },
      { label: 'Type', value: 'Production platform' },
    ],
    highlights: [
      'Realtime proctoring',
      'Judge0 execution',
      'SQL auto-grading',
      'S3 presigned media',
    ],
    image: '/images/project-assessment.svg',
    stack: [
      'Python',
      'Django',
      'DRF',
      'PostgreSQL',
      'Judge0 API',
      'AWS S3',
    ],
    points: [
      'Scalable backend services with Django and DRF managing candidates, assessments and results through role-based access control.',
      'ML-based proctoring modules analysing audio, video and image data for real-time behaviour monitoring and anomaly detection.',
      'Judge0-powered multi-language code execution with SQL-based auto-grading for fully automated evaluation.',
      'Proctoring event pipelines feeding analytics dashboards, plus S3 presigned URLs and OTP authentication for secure media access.',
    ],
  },
  {
    title: 'Background Task Service',
    subtitle: 'AI assessment load distribution',
    meta: [
      { label: 'Role', value: 'Architecture & implementation' },
      { label: 'Built at', value: 'Zecdata · 2026' },
      { label: 'Type', value: 'Async microservice' },
    ],
    highlights: [
      'Celery + Redis queues',
      'Fault-tolerant workers',
      'Decoupled AI inference',
      'Lower response times',
    ],
    image: '/images/project-tasks.svg',
    stack: ['Python', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL'],
    points: [
      'Architected a dedicated FastAPI microservice that offloads heavy AI assessment processing from the main Django application.',
      'Celery with Redis as message broker for ML inference jobs, report generation and proctoring event processing.',
      'Designed task queues and workers for high concurrency and fault-tolerant execution, significantly cutting primary response times.',
      'Decoupled AI computation from the request–response cycle for scalability and stability under heavy assessment load.',
    ],
  },
  {
    title: 'PRODASH',
    subtitle: 'Live inventory monitoring for HPCL',
    meta: [
      { label: 'Role', value: 'Full-stack developer' },
      { label: 'Built at', value: 'HPCL · 2025 — 2026' },
      { label: 'Type', value: 'Internal tool' },
    ],
    highlights: [
      'Live plant data',
      'C# machine services',
      'Cylinder-size filters',
      'Multi-location views',
    ],
    image: '/images/project-prodash.svg',
    stack: ['Python', 'C#', 'React', 'REST APIs', 'SAP'],
    points: [
      'Live LPG cylinder filling counts across HPCL plants, with Python backend processing, C# machine services and a React dashboard.',
      'C# services on filling machines push live data to central servers with minimal latency, ingested and stored by Python APIs.',
      'Time-based filters from per-minute to per-day views, segmented by cylinder size (14.2 kg and 19 kg).',
      'Multi-location plant views for real-time productivity tracking and discrepancy detection.',
    ],
  },
]

export const education = {
  degree: 'B.Tech — Information Technology',
  institute: 'Bansal Institute of Science and Technology',
  period: 'July 2020 — June 2024',
  score: '8.49 CGPA',
}

export const marquee = [
  'Python',
  'Django',
  'DRF',
  'FastAPI',
  'Celery',
  'Redis',
  'PostgreSQL',
  'AWS S3',
  'WebSockets',
  'OpenAI Whisper',
  'React',
  'GenAI',
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
