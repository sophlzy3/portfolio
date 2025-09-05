'use client';

import { motion } from 'framer-motion';

export default function SelfIntroSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome! I'm Sophie Liu, a passionate student pursuing Computer Science and Mathematics. 
              I'm deeply interested in machine learning, data science, software engineering, and 
              mathematical modeling. I have experience in full-stack web development, data analysis, 
              and research, and I'm always excited to explore new technologies and solve complex problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
