/**
 * Central portfolio data for Balakrishna Yalamanchi.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it is true and on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Balakrishna Yalamanchi',
  displayName: 'Balakrishna Yalamanchi',
  firstName: 'BALAKRISHNA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A YALAMANCHI ORIGINAL',
  role: 'Aspiring Data Analyst & AI Engineer',
  tagline: ['Data Analytics', 'AI / ML', 'Full-Stack'],
  intro:
    'A final-year B.Tech Computer Science and Engineering student building machine learning and full-stack projects with Python, FastAPI, React and Node.js, with a research paper accepted at IEEE InGARSS 2026.',
  location: 'Hyderabad, Telangana',
  email: 'balakrishna7103@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/balakrishna-yalamanchi-30a879371/',
    github: 'https://github.com/balakrishna191005',
  },
  // Add your resume PDF to /public/assets with this exact name (or change the name here).
  resumePdf: '/assets/Balakrishna_Yalamanchi_Resume.pdf',
  // Replace these image files in /public/assets with your own portrait.
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Balakrishna Yalamanchi',
  },
  interests: ['Data Analytics', 'AI Engineering', 'Machine Learning','Full Stack'],
};

export const education = [
  {
    school: 'Nalla Malla Reddy Engineering College',
    place: 'Hyderabad',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: 'Expected July 2027',
    score: 'CGPA 7.0',
  },
];

export const experience = [
  {
    company: 'ADYAPAN',
    role: 'MERN Stack Course (Training Programme)',
    place: 'Hyderabad', // confirm the location of ADYAPAN before publishing
    period: 'May 2026 – September 2026',
    points: [
      'Completed a 4-month full-stack web development programme on the MERN stack and earned a course completion certificate.',
      'Worked on a team project: Peer-to-Peer Service Marketplace and Real-Time Booking Platform.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ndvi-monitoring',
    title: 'NDVI Vegetation Health Monitoring',
    year: '2026',
    genre: 'AI • Remote Sensing • Full-Stack',
    logline: 'A crop health monitoring system that turns satellite imagery into NDVI maps, anomaly alerts and farm recommendations.',
    stack: ['Python', 'FastAPI', 'Google Earth Engine', 'scikit-learn', 'JavaScript'],
    build: [
      'Built a data processing pipeline on Google Earth Engine (Sentinel-2 and Landsat 8/9) covering cloud masking, area clipping, NDVI computation and four-class vegetation zoning (healthy, moderate, stressed, barren).',
      'Applied Isolation Forest (scikit-learn) with NDVI time-series analysis to detect abnormal vegetation, flagging 12.2% of the study area, and validated it against 9 Telangana ground-truth records (preliminary).',
      'Developed a FastAPI backend and web dashboard with NDVI maps, zonal statistics, trend charts, rule-based recommendations and downloadable reports. Team project of 6; documented in a paper accepted at IEEE InGARSS 2026.',
    ],
    features: [
      'Sentinel-2 and Landsat 8/9 imagery via Google Earth Engine',
      'Four-class vegetation zoning from NDVI',
      'Isolation Forest anomaly detection on time series',
      'Rule-based irrigation, fertilizer and field-inspection recommendations',
      'Dashboard with maps, zonal statistics and exportable reports',
    ],
    metrics: [
      { value: '88.89%', label: 'accuracy (preliminary)' },
      { value: '90.91%', label: 'F1-score (preliminary)' },
      { value: '12.2%', label: 'study area flagged anomalous' },
      { value: '9', label: 'ground-truth records' },
      { value: '6', label: 'team members' },
    ],
    github: 'https://github.com/balakrishna191005/NDVI-Based-Vegetation-Health-Monitoring-System',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'digiaddict',
    title: 'DigiAddict',
    year: '2026', // confirm the year before publishing
    genre: 'Machine Learning • Streamlit',
    logline: 'A web app that predicts digital addiction risk from screen time, social media usage and sleep patterns.',
    stack: ['Python', 'scikit-learn', 'Streamlit'],
    build: [
      'Developed a machine learning web app with a classification model that predicts Low, Moderate or High digital addiction risk from user behavior.',
      'Built an interactive Streamlit interface that returns instant predictions and personalized recommendations.',
    ],
    features: [
      'Low / Moderate / High risk classification',
      'Inputs: screen time, social media usage, sleep patterns',
      'Instant predictions',
      'Personalized recommendations',
    ],
    metrics: [{ value: '3', label: 'risk levels' }],
    github: 'https://github.com/balakrishna191005/Digiaddict',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
  
    {
    id: 'sentinelpack-ai',
    title: 'SentinelPack AI',
    year: '2026',
    genre: 'Cybersecurity • Machine Learning',
    logline: 'An AI-driven pre-execution malware detector for npm and PyPI that intercepts malicious package updates before code runs.',
    stack: ['Python', 'scikit-learn', 'TypeScript', 'VS Code API', 'AST Parsing'],
    build: [
      'Engineered a pre-execution security interception engine (safe-npm, safe-pip, safe-clone) preventing zero-click malicious install scripts (setup.py, preinstall) from executing on developer machines.',
      'Developed an in-memory syntactic differential analyzer extracting 60 AST and data-flow features tracking source-to-sink taint chains, Shannon entropy, and manifest mutations.',
      'Trained a HistGradientBoosting model achieving 0.801 ROC-AUC and 0.846 PR-AUC across 615 package update transitions under strict package-disjoint cross-validation.',
      'Built a full-featured VS Code extension and terminal CLI with real-time diagnostic reporting and an interactive host-impact security dashboard.',
    ],
    features: [
      'Pre-install CLI wrappers (safe-npm, safe-pip)',
      'Pre-execution GitHub repo clone scanner (safe-clone)',
      '60-dimensional AST diff & taint flow analysis',
      'Real-time OSV / CVE threat intelligence integration',
      'Interactive VS Code dashboard with host impact analysis',
      'Alert-fatigue mitigation heuristics for developer tooling',
    ],
    metrics: [
      { value: '60', label: 'AST diff features' },
      { value: '0.801', label: 'ROC-AUC' },
      { value: '2', label: 'ecosystems (npm & PyPI)' },
    ],
    github: 'https://github.com/balakrishna191005/SentinelPack_AI',
    palette: { from: '#0b132b', via: '#1c2541', to: '#070b19', accent: '#38bdf8' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ieee-ingars',
    title: 'Paper Accepted',
    org: 'IEEE InGARSS 2026',
    detail:
      '"NDVI Based Agricultural Health Monitoring Framework Using Google Earth Engine" — accepted at the 2026 IEEE India Geoscience and Remote Sensing Symposium; presenting 2 December 2026, Hyderabad.',
    laurel: 'IEEE Accepted',
  },
  {
    id: 'sap-marathon',
    title: 'Participant & Presenter',
    org: 'SAP Code Unnati Innovation Marathon 2025-26',
    detail: 'Presented a project during the marathon, organised under the SAP Code Unnati Program by Edunet Foundation.',
    laurel: 'Presenter',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  {
    issuer: 'TASK / Edunet Foundation (SAP Code Unnati)',
    name: 'Emerging Technologies: AI & ML, Deep Learning, Edge Computing, SAP Analytics Cloud, SAP ABAP on BTP',
    link: '/assets/certificate-adyapan-mern-stack.pdf',
  },
  {
    issuer: 'Course Completion',
    name: 'MERN Stack Course',
    link: '/assets/certificate-course-completion.pdf',
  },
 
  {
    issuer: 'Internship Completion',
    name: 'Internship Completion Certificate',
    link: '/assets/certificate-internship-completion.pdf',
  },
  { issuer: 'Edunet Foundation (SAP Code Unnati)', name: 'Innovation Marathon 2025-26 — Certificate of Participation',link: '/assets/certificate-task-ai-ml.pdf' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'What I write code in',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'C++', mono: 'C++' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic & APIs',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'data',
    title: 'Data & ML',
    subtitle: 'Analysis • Modelling • Dashboards',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'Isolation Forest', mono: 'If' },
      { name: 'Power BI', mono: 'Pb' },
      { name: 'Excel', mono: 'Xl' },
    ],
  },
  {
    id: 'tools',
    title: 'Databases & Tools',
    subtitle: 'Storage & shipping',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Google Earth Engine', mono: 'Ge' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'VS Code', mono: 'Vs' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Data Analytics', mono: 'Da' },
      { name: 'AI Engineering', mono: 'Ai' },
      { name: 'Machine Learning', mono: 'Ml' },
      {name: 'Full Stack', mono: 'Fs'},
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['NDVI Vegetation Health Monitoring', 'DigiAddict'],
  JavaScript: ['NDVI dashboard', 'ADYAPAN MERN Stack Course'],
  React: ['ADYAPAN MERN Stack Course'],
  HTML: ['NDVI dashboard'],
  CSS: ['NDVI dashboard'],
  'Node.js': ['ADYAPAN MERN Stack Course'],
  'Express.js': ['ADYAPAN MERN Stack Course'],
  FastAPI: ['NDVI Vegetation Health Monitoring'],
  'REST APIs': ['NDVI Vegetation Health Monitoring'],
  'scikit-learn': ['NDVI Vegetation Health Monitoring', 'DigiAddict'],
  'Isolation Forest': ['NDVI Vegetation Health Monitoring', 'IEEE InGARSS 2026 paper'],
  'Google Earth Engine': ['NDVI Vegetation Health Monitoring', 'IEEE InGARSS 2026 paper'],
  Streamlit: ['DigiAddict'],
  'Git / GitHub': ['NDVI project repository', 'DigiAddict repository'],
  'Machine Learning': ['NDVI Vegetation Health Monitoring', 'DigiAddict', 'SAP Code Unnati AI/ML training'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Enter: Computer Science',
    period: 'Now – July 2027',
    synopsis: 'B.Tech in Computer Science and Engineering at Nalla Malla Reddy Engineering College, Hyderabad.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Science and Engineering — CGPA 7.0, graduating July 2027.',
        tags: ['B.Tech', 'CSE', 'CGPA 7.0'],
        runtime: 'Expected July 2027',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Trainee',
        description: 'Training in AI & ML, Deep Learning, Edge Computing, SAP Analytics Cloud and SAP ABAP on BTP under the SAP Code Unnati Program.',
        tags: ['AI & ML', 'Deep Learning', 'SAP BTP'],
        runtime: '2025 – 2026',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning to Build',
    period: '2026',
    synopsis: 'A 4-month MERN Stack course at ADYAPAN, and a project presented at the SAP Code Unnati Innovation Marathon.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Learner',
        description: 'Completed a 4-month MERN Stack course (4 May – 4 September 2026) and a team project, a Peer-to-Peer Service Marketplace and Real-Time Booking Platform.',
        tags: ['React', 'Node.js', 'Express.js'],
        runtime: 'May – Sep 2026',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Presenter',
        description: 'Participated in the SAP Code Unnati Innovation Marathon 2025-26 and presented a project.',
        tags: ['SAP Code Unnati', 'Edunet Foundation'],
        runtime: '2025 – 26',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Real Projects',
    period: '2026',
    synopsis: 'Two machine learning projects and a research paper accepted at an IEEE symposium.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Analyst',
        description: 'NDVI Vegetation Health Monitoring — Google Earth Engine, Isolation Forest anomaly detection and a FastAPI dashboard.',
        tags: ['Python', 'FastAPI', 'Google Earth Engine'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The Predictor',
        description: 'DigiAddict — a Streamlit app that predicts Low, Moderate or High digital addiction risk.',
        tags: ['Python', 'scikit-learn', 'Streamlit'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'The Author',
        description: 'Paper on NDVI-based agricultural health monitoring accepted at IEEE InGARSS 2026.',
        tags: ['IEEE', 'InGARSS 2026', 'Remote Sensing'],
        runtime: 'Accepted 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Presenting at IEEE InGARSS on 2 December 2026, then on to the next arc.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Next Chapter',
        description: 'Presenting at InGARSS in Hyderabad, and exploring Data Analytics, AI Engineering and Machine Learning.',
        tags: ['Data Analytics', 'AI Engineering', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Biggest stage', title: 'IEEE InGARSS 2026', detail: 'Paper accepted • presenting 2 December', palette: ocean },
  { label: 'The lead project', title: 'NDVI Monitoring', detail: '88.89% accuracy • 90.91% F1 (preliminary)', palette: jade },
  { label: 'The ML app', title: 'DigiAddict', detail: 'Low / Moderate / High risk prediction', palette: crimson },
  { label: 'The training arc', title: 'SAP Code Unnati', detail: 'AI/ML, Deep Learning & SAP BTP', palette: amber },
  { label: 'Full-stack course', title: 'MERN Stack', detail: 'ADYAPAN • 4 months', palette: violet },
  { label: 'Current focus', title: 'AI Engineering', detail: 'with Data Analytics & Machine Learning', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Nalla Malla Reddy Engineering College, Hyderabad', 'Expected July 2027'],
    chips: ['CGPA 7.0'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['SQL, JavaScript · React, Node.js, FastAPI', 'Pandas, NumPy, scikit-learn · Power BI, Excel · Git'],
    chips: ['Python', 'SQL', 'scikit-learn', 'FastAPI', 'React', 'Power BI'],
  },
  {
    kicker: 'Training',
    title: 'The Training Arc',
    lines: ['SAP Code Unnati: AI & ML, Deep Learning, SAP BTP', 'MERN Stack Course · ADYAPAN · May – Sep 2026'],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: ['NDVI Monitoring — 88.89% accuracy, 90.91% F1 (preliminary)', 'DigiAddict — Low / Moderate / High risk prediction'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Paper accepted — IEEE InGARSS 2026', 'Presenter — SAP Code Unnati Innovation Marathon'],
  },
  {
    kicker: 'Certified',
    title: '3 Certifications',
    lines: ['TASK / Edunet Foundation · ADYAPAN', 'SAP Code Unnati Innovation Marathon'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Data Analytics · AI Engineering · Machine Learning'],
  },
];

// The id 'sushmita' is kept because other files in the project may refer to it.
// Only the displayed name changed. Rename the id everywhere in the project if you want.
export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Balakrishna',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};