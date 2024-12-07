import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center p-4 sm:p-8 md:px-12 snap-start">
        <HeroSection />
      </section>
      
      <section id="experience" className="min-h-screen p-4 sm:p-8 md:px-12 py-16 md:py-24 snap-start">
        <ExperienceSection />
      </section>
      
      <section id="projects" className="min-h-screen p-4 sm:p-8 md:px-12 py-16 md:py-24 snap-start">
        <ProjectsSection />
      </section>
      
      <section id="skills" className="min-h-screen p-4 sm:p-8 md:px-12 py-16 md:py-24 snap-start">
        <SkillsSection />
      </section>
      
      <section id="contact" className="min-h-screen p-4 sm:p-8 md:px-12 py-16 md:py-24 snap-start">
        <ContactSection />
      </section>
    </>
  )
}
