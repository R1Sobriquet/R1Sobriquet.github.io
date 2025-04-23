import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import InternshipsSection from "@/components/internships-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import TechWatchSection from "@/components/tech-watch-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />

      <Tabs defaultValue="about" className="mt-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-7">
          <TabsTrigger value="about">À propos</TabsTrigger>
          <TabsTrigger value="internships">Stages</TabsTrigger>
          <TabsTrigger value="skills">Compétences</TabsTrigger>
          <TabsTrigger value="projects">Projets</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="tech-watch">Veille</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <AboutSection />
        </TabsContent>

        <TabsContent value="internships" className="mt-6">
          <InternshipsSection />
        </TabsContent>

        <TabsContent value="skills" className="mt-6">
          <SkillsSection />
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <ProjectsSection />
        </TabsContent>

        <TabsContent value="certifications" className="mt-6">
          <CertificationsSection />
        </TabsContent>

        <TabsContent value="tech-watch" className="mt-6">
          <TechWatchSection />
        </TabsContent>

        <TabsContent value="contact" className="mt-6">
          <ContactSection />
        </TabsContent>
      </Tabs>
    </div>
  )
}
