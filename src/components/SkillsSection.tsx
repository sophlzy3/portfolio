'use client';

import { motion } from 'framer-motion';

// 技能数据
const skillGroups = [
  {
    id: 1,
    title: 'Programming',
    skills: ['Python', 'C++', 'Bash', 'ROS2', 'JavaScript', 'TypeScript']
  },
  {
    id: 2,
    title: 'Machine Learning/Artificial Intelligence',
    skills: ['PyTorch', 'TensorFlow', 'PPO', 'A2C', 'DDPG', 'SAC', 'Computer Vision']
  },
  {
    id: 3,
    title: 'Robotics',
    skills: ['Gazebo', 'RViz', 'RealSense', 'SLAM', 'Motion Planning', 'Sensor Fusion']
  },
  {
    id: 4,
    title: 'Tools',
    skills: ['Git', 'Docker', 'LaTeX', 'Notion', 'Linux', 'CUDA']
  }
];

// Skill card component
function SkillCard({ group, index }: { group: typeof skillGroups[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glass rounded-lg overflow-hidden"
    >
      <div className="bg-accent text-white p-4">
        <h3 className="text-xl font-bold">{group.title}</h3>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-mono"
              >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical stack and professional skills, covering programming, machine learning, robotics, and development tools.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
