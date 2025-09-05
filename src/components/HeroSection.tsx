'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';
import { SOCIAL_LINKS, TYPE_ANIMATION_SEQUENCE } from '@/config/constHero';

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
                sequence={TYPE_ANIMATION_SEQUENCE}
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
              href="/about"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md transition-colors"
            >
              Learn More
            </Link>
          </div>
          
          <div className="flex justify-center space-x-6">
            {Object.entries(SOCIAL_LINKS).filter(([key, { heroDisplay }]) => heroDisplay).map(([key, { url, label }]) => {
              const iconMap = {
                github: <FaGithub className="w-5 h-5" />,
                googleScholar: <FaGraduationCap className="w-5 h-5" />,
                linkedin: <FaLinkedin className="w-5 h-5" />
              };
              
              return (
                <SocialLink 
                  key={key}
                  href={url}
                  label={label}
                  icon={iconMap[key as keyof typeof iconMap]}
                />
              );
            })}
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
      className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors flex items-center gap-3"
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  );
}
