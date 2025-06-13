'use client';

import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResearchSection from '@/components/ResearchSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      {/* <ResearchSection />     */}
      <SkillsSection />
      <ContactSection />
    </>
  );
}
