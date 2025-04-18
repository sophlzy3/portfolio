'use client';

import { motion } from 'framer-motion';

// Research Interests
const researchInterests = [
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
const currentResearchProblems = [
  {
    id: 1,
    title: 'Multimodal Perception and Decision-Making',
    description: 'How to effectively integrate multiple sensing modalities, such as vision, touch, and sound, to improve the understanding and decision-making capabilities of robots.'
  },
  {
    id: 2,
    title: 'Sample-Efficient Learning',
    description: 'Develop algorithms that can learn quickly from a small number of samples, reducing the amount of data and time required for robots to learn new tasks.'
  },
  {
    id: 3,
    title: 'Robustness and Uncertainty',
    description: 'Improve the robustness and adaptability of robot systems in the face of environmental changes and uncertainties.'
  }
];

// Research Phase Component
function ResearchPhase({ item, index }: { item: typeof researchInterests[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start mb-12"
    >
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white text-xl">
          {item.icon}
        </div>
        <div className="h-full w-0.5 bg-accent/30 mx-auto mt-2"></div>
      </div>
      
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:items-center mb-2">
          <h3 className="text-xl font-bold mr-4">{item.phase}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{item.year}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
      </div>
    </motion.div>
  );
}

// Current Research Problem Component
function ResearchProblem({ problem }: { problem: typeof currentResearchProblems[0] }) {
  return (
    <motion.details
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group mb-4 rounded-lg border border-gray-200 dark:border-gray-800"
    >
      <summary className="flex justify-between items-center p-4 cursor-pointer list-none bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h4 className="text-lg font-medium">{problem.title}</h4>
        <span className="text-accent">+</span>
      </summary>
      <div className="p-4 bg-white dark:bg-gray-900 rounded-b-lg">
        <p className="text-gray-600 dark:text-gray-400">{problem.description}</p>
      </div>
    </motion.details>
  );
}

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Interests</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My research interests have evolved from control theory to reinforcement learning, then to embodied AI and sim-to-real transfer.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {/* Research Evolution Timeline */}
          <div className="mb-16">
            {researchInterests.map((item, index) => (
              <ResearchPhase key={item.id} item={item} index={index} />
            ))}
          </div>
          
          {/* Current Research Problems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Current Research Problems</h3>
            <div>
              {currentResearchProblems.map((problem) => (
                <ResearchProblem key={problem.id} problem={problem} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
