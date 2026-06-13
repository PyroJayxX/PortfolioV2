export const SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    items: ['Java', 'SQL', 'C', 'Python', 'Go', 'x86 Assembly', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
  },
  {
    title: 'Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'timm', 'scikit-learn', 'LangChain', 'ChromaDB', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy']
  },
  {
    title: 'Backend Development',
    items: ['MySQL', 'PostgreSQL', 'Django', 'Flask', 'ExpressJS', 'FastAPI', 'Firebase', 'Supabase']
  },
  {
    title: 'Frontend & Tools',
    items: ['ReactJS', 'NextJS', 'Tailwind CSS', 'JavaFX', 'Git', 'Android Studio', 'Figma', 'Vercel', 'Ollama']
  }
];

export const SKILLS = [
  'C', 'C++', 'Java', 'Python', 'Go',
  'HTML5', 'CSS3', 'JavaScript',
  'MySQL', 'PostgreSQL', 'Firebase', 'Supabase',
  'React', 'Next.js', 'Tailwind CSS', 'Django',
  'Figma', 'Android Studio'
];

export const PROJECTS = [
  {
    id: 1,
    title: 'OmniJuris, Philippine Legal Intelligence',
    tag: 'RAG · LLM · ChromaDB',
    desc: 'A retrieval-augmented generation system over Philippine jurisprudence built on the Philippine OmniCorpus dataset. Queries 800k embedded legal documents via semantic search and cross-encoder reranking, with dual inference engines: Local Qwen3 4B via Ollama and cloud Gemini Flash.',
    mockup: '/omnijuris.png',
    link: 'https://github.com/PyroJayxX/OmniJuris'
  },
  {
    id: 2,
    title: 'Atlas990 Lead Intelligence System',
    tag: 'Machine Learning · Full-Stack · XGBoost · FAISS',
    desc: 'Trained an XGBoost model to calculate a 0-100 priority score for nonprofit organization leads and integrates Meta\'s FAISS library to instantly find matching lookalike organizations.',
    mockup: '/atlas990.png',
    link: 'https://github.com/PyroJayxX/Atlas990'
  },
  {
    id: 3,
    title: 'Attention-Based Pulmonary Nodule Detection on CXR',
    tag: 'Deep Learning · Medical Imaging · Thesis · Computer Vision',
    desc: 'Enhanced ResNet-50 architecture to detect pulmonary nodules in chest X-rays for early lung cancer screening as part of undergraduate thesis.',
    mockup: '/clara.png',
    link: 'https://www.mdpi.com/2075-4418/16/10/1574'
  },
  {
    id: 4,
    title: 'TrabaHound Job Discovery Assistant',
    tag: 'Web Crawler · LLM-based Parsing · NextJS',
    desc: 'A web-crawler job discovery assistant that scrapes listings and uses LLM-based resume parsing to extract skills and match candidates to relevant roles in the Philippines. Built with a Next.js frontend and a Python FastAPI backend driven by jobspy.',
    mockup: '/trabahound.png',
    link: 'https://github.com/PyroJayxX/TrabaHound'
  },
  {
    id: 5,
    title: 'MAFA Property Management System',
    tag: 'Full-Stack · React · ExpressJS',
    desc: 'A property management system developed for the Inventi Hackathon enabling property managers to upload floor plans, pin issues, and efficiently manage properties.',
    mockup: '/mafa.png',
    link: 'https://github.com/CoderTofu/MAFA-Inventi'
  },
  {
    id: 6,
    title: 'Bilandog E-Commerce System',
    tag: 'Full-Stack · React · Django · PostgreSQL',
    desc: 'A full-stack e-commerce platform built to practice React and Django, featuring product listings, cart, and order management.',
    mockup: '/bilandog.png',
    link: 'https://github.com/PyroJayxX/Bilandog-Ecommerce-V2'
  },
  {
    id: 7,
    title: 'Fantasy Flip: Android Card Game',
    tag: 'Mobile · Android Studio · Firebase',
    desc: 'Lead developer on a full-stack Android card game with real-time dashboard and Firebase backend.',
    mockup: '/fantasyflip.png',
    link: 'https://github.com/PyroJayxX/MobileGame-AppDev-Project'
  },
  {
    id: 8,
    title: 'DOM Programming Language',
    tag: 'Language Design · Interpreter',
    desc: 'Lead developer of DOM — a customized web-based interpreted programming language with its own IDE.',
    mockup: '/dom.png',
    link: 'https://github.com/IEMDomain04/DOM-IDE'
  }
];

export const GALLERY_PHOTOS = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/10.jpg',
  '/6.jpg',
  '/5.jpg',
  '/7.jpg',
  '/8.jpg',
  '/12.jpg',
  '/9.jpg',
  '/11.jpg'
];

export const FOOTER_LINKS = [
  { label: 'GitHub', href: 'https://github.com/PyroJayxX' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edrill-bilan/' },
  { label: 'Email', href: 'mailto:efbilan@gmail.com' }
];

export const CERTIFICATES = [
  {
    title: 'MDPI Certificate of Publication',
    sub: 'RNNet-MST Article Acceptance',
    mockup: '/cert_publication.png'
  },
  {
    title: 'Intermediate Machine Learning',
    sub: 'Kaggle Micro-Credential Verification',
    mockup: '/cert_intermediate.png'
  },
  {
    title: 'Supervised Learning',
    sub: 'DataCamp Course Completion Certificate',
    mockup: '/cert_supervised.png'
  },
  {
    title: 'Network Support and Security',
    sub: 'Cisco Learning Career Certificate',
    mockup: '/cert_security.png'
  },
  {
    title: 'Google Developer Student Clubs',
    sub: 'Googler Volunteer Completion Certificate',
    mockup: '/cert_googler.png'
  }
];