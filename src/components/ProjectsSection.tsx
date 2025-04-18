'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// 项目数据
const projects = [
  {
    id: 1,
    title: 'Robot Motion Control with PPO',
    abstract: 'Implemented adaptive motion control for quadruped robots using proximal policy optimization, addressing challenges in complex terrain.',
    image: '/placeholder-project1.jpg',
    tags: ['PPO', 'ROS2', 'Reinforcement Learning'],
    links: {
      paper: '#',
      github: '#',
      demo: '#'
    }
  },
  {
    id: 2,
    title: 'Visual SLAM for Sim-to-Real Transfer',
    abstract: 'Developed a novel visual SLAM algorithm that seamlessly transitions from simulated environments to real-world scenarios, improving localization accuracy.',
    image: '/placeholder-project2.jpg',
    tags: ['SLAM', 'Computer Vision', 'Transfer Learning'],
    links: {
      paper: '#',
      github: '#',
      demo: '#'
    }
  },
  {
    id: 3,
    title: 'Curiosity-Driven Robotics Exploration',
    abstract: 'Implemented an exploration algorithm based on intrinsic motivation, enabling robots to autonomously learn and explore in unknown environments.',
    image: '/placeholder-project3.jpg',
    tags: ['Intrinsic Motivation', 'Exploration Strategies', 'Reinforcement Learning'],
    links: {
      paper: '#',
      github: '#',
      demo: '#'
    }
  },
  {
    id: 4,
    title: 'Multimodal Perception Fusion System',
    abstract: 'Designed a multi-sensor fusion architecture that integrates visual, tactile, and audio information to enhance robot environmental perception.',
    image: '/placeholder-project4.jpg',
    tags: ['Multimodal Learning', 'Sensor Fusion', 'ROS2'],
    links: {
      paper: '#',
      github: '#',
      demo: '#'
    }
  }
];

// 项目卡片组件
function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glass rounded-lg overflow-hidden hover-glow"
    >
      <div className="h-48 relative bg-gray-200 dark:bg-gray-800">
        {/* 实际项目中应替换为真实图片 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Project Image</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.abstract}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <Link 
            href={project.links.paper} 
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            Paper
          </Link>
          <Link 
            href={project.links.github} 
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            GitHub
          </Link>
          <Link 
            href={project.links.demo} 
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Publications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My research projects and academic achievements, focusing on robotics control, reinforcement learning, and embodied AI.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
