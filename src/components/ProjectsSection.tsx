'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PROJECTS } from '@/config/constHero';

// Define the type for project links
type ProjectLinks = {
  paper?: string;
  github?: string;
  demo?: string;
};

// 项目卡片组件
function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
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
              className="px-2 py-1 text-xs rounded-full text-accent bg-[var(--tag-bg-light)] dark:bg-[var(--tag-bg-dark)]"            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {project.links.paper && (
            <Link 
              href={project.links.paper} 
              className="text-sm text-accent hover:text-accent-hover transition-colors border border-accent rounded-md px-3 py-1"
            >
              Paper
            </Link>
          )}
          {project.links.github && (
            <Link 
              href={project.links.github} 
              className="text-sm text-accent hover:text-white hover:bg-accent transition-colors border border-accent rounded-md px-3 py-1"
            >
              GitHub
            </Link>
          )}
          {project.links.demo && (
            <Link 
              href={project.links.demo} 
              className="text-sm text-accent hover:text-accent-hover transition-colors border border-accent rounded-md px-3 py-1"
            >
              Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
