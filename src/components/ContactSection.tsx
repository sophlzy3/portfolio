'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/config/constHero';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume & Contact</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get my complete resume or contact me through the following ways.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* CV部分 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-glass rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Download Resume</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Get my complete resume, learn about my education, work experience, and research achievements.
              </p>
              <a 
                href={SOCIAL_LINKS.resume_pdf.url}
                download={SOCIAL_LINKS.resume_pdf.label}
                className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-md transition-colors"
              >
                Download PDF Resume
              </a>
            </motion.div>
            
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-glass rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out to me via email.
              </p>
              <a 
                href={SOCIAL_LINKS.email.url}
                className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-md transition-colors"
              >
                Email {SOCIAL_LINKS.email.label}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
