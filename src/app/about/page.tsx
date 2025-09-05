'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-hover/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Software engineer, researcher, and creative mind passionate about technology and innovation
          </p>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-accent hover:text-accent-hover transition-colors mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hi, I'm Sophie! I'm a passionate software engineer and researcher with a deep interest 
                in creating innovative solutions that make a difference. My journey in technology has 
                been driven by curiosity and a desire to solve complex problems through elegant code.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                When I'm not coding or researching, you'll find me exploring the world through photography, 
                experimenting with new technologies, or diving into a good book. I believe in continuous 
                learning and pushing the boundaries of what's possible.
              </p>
            </div>
          </section>

          {/* Background */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Background
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Engineering Science Degree
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      University of Toronto • 2023-2028
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Research Focus
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Deep Learning, Robotics
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Software Engineer
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Current Company • 2024-Present
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Research Assistant
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      University Lab • 2022-2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills & Interests */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Interests
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Programming
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Python, JavaScript, React, Node.js, TypeScript, and more
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Research
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Machine Learning, Data Analysis, Algorithm Design
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Creative
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Photography, UI/UX Design, Creative Problem Solving
                </p>
              </div>
            </div>
          </section>

          {/* Current Work */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Current Work
            </h2>
            <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Mapbox & Current Program
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently working on exciting projects involving geospatial technology and mapping solutions. 
                My work combines my passion for software engineering with innovative applications in location-based services.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                I'm also actively involved in research programs that explore the intersection of technology 
                and real-world applications, always looking for ways to make technology more accessible and impactful.
              </p>
            </div>
          </section>

          {/* Personal Interests */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Personal Interests
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Photography
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I love capturing moments and telling stories through my lens. From street photography 
                  to nature shots, I find beauty in the everyday and the extraordinary.
                </p>
                <Link 
                  href="/photography" 
                  className="inline-block mt-4 text-accent hover:text-accent-hover transition-colors"
                >
                  View my photography →
                </Link>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Technology & Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm constantly exploring new technologies and staying up-to-date with the latest 
                  developments in software engineering and artificial intelligence.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 