export const SITE_CONFIG = {
  title: "Sophie Liu | Robotics and Machine Learning Researcher",
  description: "Sophie Liu's personal website - Robotics and Machine Learning Researcher",
  favicon: '/favicon.ico',
} as const;

export const SOCIAL_LINKS = {
  github: {
    url: "https://github.com/sophlzy3",
    label: "GitHub",
  },
  googleScholar: {
    url: "https://scholar.google.com/citations?user=YOUR_ID",
    label: "Google Scholar",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/sophie-liu-1b741029b",
    label: "LinkedIn",
  },
} as const;

export const ANIMATION_CONFIG = {
  speed: 2000,
  texts: [
    'Intelligent Control',
    'Embodied AI',
    'Sim-to-Real Transfer',
    'Curiosity-Driven Learning',
  ],
} as const;

export const TYPE_ANIMATION_SEQUENCE = ANIMATION_CONFIG.texts.flatMap(text => [text, ANIMATION_CONFIG.speed]);

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
] as const; 