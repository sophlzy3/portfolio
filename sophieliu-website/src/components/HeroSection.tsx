'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono">
            Hello, I am <span className="text-accent">Sophie</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            <p className="mb-2">Robotics and Machine Learning Researcher</p>
            <p className="h-16 md:h-12">
              Focusing on{' '}
              <TypeAnimation
                sequence={[
                  'Intelligent Control',
                  2000,
                  'Embodied AI',
                  2000,
                  'Sim-to-Real Transfer',
                  2000,
                  'Curiosity-Driven Learning',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-accent font-medium"
                repeat={Infinity}
              />
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link 
              href="#"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-md transition-colors"
            >
              Download Resume
            </Link>
            <Link 
              href="#projects"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md transition-colors"
            >
              View Projects
            </Link>
          </div>
          
          <div className="flex justify-center space-x-6">
            <SocialLink 
              href="https://github.com/sophlzy3" 
              label="GitHub"
              icon={<FaGithub className="h-5 w-5" />}
            />
            <SocialLink 
              href="https://scholar.google.com" 
              label="Google Scholar"
              icon={<FaGraduationCap className="h-5 w-5" />}
            />
            <SocialLink 
              href="https://www.linkedin.com/in/sophie-liu-1b741029b" 
              label="LinkedIn"
              icon={<FaLinkedin className="h-5 w-5" />}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors"
    >
      {icon}
      {label}
    </Link>
  );
} 