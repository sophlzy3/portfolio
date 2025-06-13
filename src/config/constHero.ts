// ============================== SITE CONFIG ==============================
export const SITE_CONFIG = {
  title: "Sophie Liu | Robotics and Machine Learning Researcher",
  description: "Sophie Liu's personal website - Robotics and Machine Learning Researcher",
  favicon: '/favicon.ico',
} as const;

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
] as const; 


// ============================== HERO SECTION ==============================
export const SOCIAL_LINKS = {
  email: {
    url: 'mailto:sophiezy.liu@utoronto.ca',
    label: 'sophiezy.liu@utoronto.ca',
    heroDisplay: false,
  },
  github: {
    url: "https://github.com/sophlzy3",
    label: "GitHub",
    heroDisplay: true,
  },
  // googleScholar: {
  //   url: "https://scholar.google.com/citations?user=YOUR_ID",
  //   label: "Google Scholar",
  //   heroDisplay: true,
  // },
  linkedin: {
    url: "https://www.linkedin.com/in/sophie-liu-1b741029b",
    label: "LinkedIn",
    heroDisplay: true,
  },
  resume_pdf: {
    url: "/files/ResumeSophieLiu.pdf",
    label: "SophieLiu_Resume.pdf",
    heroDisplay: false,
  },
} as const;

export const ANIMATION_CONFIG = {
  speed: 2000,
  texts: [
    // 'Intelligent Control',
    // 'Sim-to-Real Transfer',
    // 'Curiosity-Driven Learning',
    'Robust Bayesian Optimization',
    'Autonomous Systems',
    'Sim-to-Real Drone Control',
    'Embodied AI'
  ],
} as const;
export const TYPE_ANIMATION_SEQUENCE = ANIMATION_CONFIG.texts.flatMap(text => [text, ANIMATION_CONFIG.speed]);


// ============================== PROJECTS SECTION ==============================
type ProjectLinks = {
  paper?: string;
  github?: string;
  demo?: string;
};

type Project = {
  id: number;
  title: string;
  abstract: string;
  image: string;
  tags: string[];
  links: ProjectLinks;
};

export const PROJECTS: Project[] = [
  // {
  //   id: 1,
  //   title: 'Robot Motion Control with PPO',
  //   abstract: 'Implemented adaptive motion control for quadruped robots using proximal policy optimization, addressing challenges in complex terrain.',
  //   image: '/placeholder-project1.jpg',
  //   tags: ['PPO', 'ROS2', 'Reinforcement Learning'],
  //   links: {
  //     paper: '#',
  //     github: '#',
  //     demo: '#'
  //   }
  // },
  // {
  //   id: 2,
  //   title: 'Visual SLAM for Sim-to-Real Transfer',
  //   abstract: 'Developed a novel visual SLAM algorithm that seamlessly transitions from simulated environments to real-world scenarios, improving localization accuracy.',
  //   image: '/placeholder-project2.jpg',
  //   tags: ['SLAM', 'Computer Vision', 'Transfer Learning'],
  //   links: {
  //     paper: '#',
  //     github: '#',
  //     demo: '#'
  //   }
  // },
  // {
  //   id: 3,
  //   title: 'Curiosity-Driven Robotics Exploration',
  //   abstract: 'Implemented an exploration algorithm based on intrinsic motivation, enabling robots to autonomously learn and explore in unknown environments.',
  //   image: '/placeholder-project3.jpg',
  //   tags: ['Intrinsic Motivation', 'Exploration Strategies', 'Reinforcement Learning'],
  //   links: {
  //     paper: '#',
  //     github: '#',
  //     demo: '#'
  //   }
  // },
  // {
  //   id: 4,
  //   title: 'Multimodal Perception Fusion System',
  //   abstract: 'Designed a multi-sensor fusion architecture that integrates visual, tactile, and audio information to enhance robot environmental perception.',
  //   image: '/placeholder-project4.jpg',
  //   tags: ['Multimodal Learning', 'Sensor Fusion', 'ROS2'],
  //   links: {
  //     paper: '#',
  //     github: '#',
  //     demo: '#'
  //   }
  // }
  {
    id: 1,
    title: 'Bayesian Optimization under Uncertainty',
    abstract: 'Robust Gaussian Process and entropy-based Bayesian optimization framework under uncertainty.',
    image: '/placeholder-project1.jpg',
    tags: ['Python', 'Bayesian Optimization', 'Uncertainty Estimation', 'Entropy-Based Acquisition'],
    links: {
      // paper: '#',
      github: 'https://github.com/sophlzy3/bayesopt-under-uncertainty',
      // demo: '#'
    }
  },
  {
    id: 2,
    title: 'Drone Acrobatics',
    abstract: 'Developed and benchmarked a GRU-based deep learning flight controller trained on synthetic FlightGoggles/TOGT-planner data with noise and occlusion—to predict 6-DOF drone control commands for high-speed trajectory following, evaluated against MPC via Dynamic Time Warping.',
    image: '/placeholder-project2.jpg',
    tags: ['Python', 'PyTorch', 'ROS', 'Deep Learning', 'TOGT', 'FlightGoggles'],
    links: {
      github: 'https://github.com/sophlzy3/drone-acrobatics',
    }
  },
  {
    id: 3,
    title: 'FilmList',
    abstract: 'Swift-based iOS app featuring real-time TMDB API integration alongside a Supabase (PostgreSQL) backend for efficient data retrieval and indexing.',
    image: '/placeholder-project2.jpg',
    tags: ['Swift', 'iOS', 'PostgreSQL', 'TMDB API'],
    links: {
      github: 'https://github.com/sophlzy3/filmlist',
    }
  }
];

// ======= SKILLS SECTION =======
type SkillGroup = {
  id: number;
  title: string;
  skills: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    id: 1,
    title: 'Programming',
    skills: ['Python', 'C/C++', 'Bash', 'ROS', 'JavaScript', 'Swift', 'SQL', 'HTML/CSS']
  },
  {
    id: 2,
    title: 'Machine Learning/Artificial Intelligence',
    skills: ['PyTorch', 'TensorFlow', 'PPO', 'Bayesian Optimization', 'Gaussian Process'] 
    // 'A2C', 'DDPG', 'SAC', 'Computer Vision']
  },
  {
    id: 3,
    title: 'Robotics',
    skills: ['RViz', 'SLAM', 'Motion Planning', 'Deep Learning', 'Flight Controller']
    // skills: ['Gazebo', 'RViz', 'RealSense', 'SLAM', 'Motion Planning', 'Sensor Fusion']
  },
  {
    id: 4,
    title: 'Tools',
    skills: ['Git', 'LaTeX', 'Linux', 'Notion']
    // skills: ['Git', 'Docker', 'LaTeX', 'Notion', 'Linux', 'CUDA']
  }
];

// ============================== RESEARCH SECTION ==============================

export const RESEARCH_TAGLINE = 'My research interests have evolved from control theory to reinforcement learning, then to embodied AI and sim-to-real transfer.'
// Research Interests
export const RESEARCH_INTERESTS = [
  {
    id: 1,
    phase: 'Control Theory',
    year: '2018-2019',
    description: 'Research nonlinear system control and adaptive control algorithms, designing stable controllers for complex robot systems.',
    icon: '🔄'
  },
  {
    id: 2,
    phase: 'Reinforcement Learning',
    year: '2019-2020',
    description: 'Explore model-based and model-free reinforcement learning methods, developing efficient policy optimization algorithms.',
    icon: '🧠'
  },
  {
    id: 3,
    phase: 'Embodied AI',
    year: '2020-2022',
    description: 'Research how to combine intelligent algorithms with physical robot systems to achieve intelligent behavior in the real world.',
    icon: '🤖'
  },
  {
    id: 4,
    phase: 'Sim-to-Real Transfer',
    year: '2022-present',
    description: 'Solve the challenge of transferring intelligent agents trained in simulation environments to the real world, reducing the gap between simulation and reality.',
    icon: '🌉'
  }
];

// Current Research Problems
export const CURRENT_RESEARCH_PROBLEMS = [
  // {
  //   id: 1,
  //   title: 'Multimodal Perception and Decision-Making',
  //   description: 'How to effectively integrate multiple sensing modalities, such as vision, touch, and sound, to improve the understanding and decision-making capabilities of robots.'
  // },
  // {
  //   id: 2,
  //   title: 'Sample-Efficient Learning',
  //   description: 'Develop algorithms that can learn quickly from a small number of samples, reducing the amount of data and time required for robots to learn new tasks.'
  // },
  // {
  //   id: 3,
  //   title: 'Robustness and Uncertainty',
  //   description: 'Improve the robustness and adaptability of robot systems in the face of environmental changes and uncertainties.'
  // }
  {
    id: 1,
    title: 'Bayesian Optimization Under Uncertainty',
    description: "I'm current working with professor Justin Béland on a Bayesian approach that leverages Gaussian process surrogate models and tailored acquisition functions to efficiently identify robust optimal designs under uncertainty in engineering systems.."
  }
];