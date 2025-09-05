'use client';

import HeroSection from '@/components/HeroSection';
import SelfIntroSection from '@/components/SelfIntroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResearchSection from '@/components/ResearchSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CameraIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SelfIntroSection />
      <ProjectsSection />
      {/* <ResearchSection />     */}
      <SkillsSection />
      <ContactSection />
      </>
  )
}