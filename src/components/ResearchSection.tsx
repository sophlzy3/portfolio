'use client';

import { motion } from 'framer-motion';
import { RESEARCH_TAGLINE, RESEARCH_INTERESTS, CURRENT_RESEARCH_PROBLEMS } from '@/config/constHero';

// Research Phase Component
function ResearchPhase({ item, index }: { item: typeof RESEARCH_INTERESTS[0], index: number }) {
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
function ResearchProblem({ problem }: { problem: typeof CURRENT_RESEARCH_PROBLEMS[0] }) {
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
        {/*
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
           <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Interests</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {RESEARCH_TAGLINE}
          </p> 
        </motion.div>
        */}
        
        {/* Research Evolution Timeline */}
        {/*
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            {RESEARCH_INTERESTS.map((item, index) => (
              <ResearchPhase key={item.id} item={item} index={index} /> 
            ))} 
          </div>
        </div>
        */}

        {/* Current Research Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Current Research Problems</h3>
          <div className="space-y-4">
            {CURRENT_RESEARCH_PROBLEMS.map((problem) => (
              <ResearchProblem key={problem.id} problem={problem} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
