"use client"

import { useState } from "react";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import InternshipsSection from "@/components/internships-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section";
import TechWatchSection from "@/components/tech-watch-section";
import DocumentsSection from "@/components/documents-section";
import Navbar from "@/components/navbar";
import NavigationArrow from "@/components/navigation-arrow";

export default function Home() {
  const [activeTab, setActiveTab] = useState("documents");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Ordre de navigation
  const navOrder = ["documents", "about", "internships", "skills", "projects", "certifications", "tech-watch", "contact"];
  const currentIndex = navOrder.indexOf(activeTab);
  const nextTab = currentIndex < navOrder.length - 1 ? navOrder[currentIndex + 1] : null;

  return (
    <div>
      <Navbar onTabChange={handleTabChange} />

      <div className="container mx-auto px-4 py-8">
        {activeTab === "documents" && (
          <>
            <Hero onContactClick={() => setActiveTab("contact")} />
            <div className="mt-12">
              <DocumentsSection />
            </div>
          </>
        )}

        {activeTab === "about" && <AboutSection />}

        {activeTab === "internships" && <InternshipsSection />}

        {activeTab === "skills" && <SkillsSection />}

        {activeTab === "projects" && <ProjectsSection />}

        {activeTab === "certifications" && <CertificationsSection />}

        {activeTab === "tech-watch" && <TechWatchSection />}

        {activeTab === "contact" && <ContactSection />}

        {nextTab && <NavigationArrow onNext={() => setActiveTab(nextTab)} />}
      </div>
    </div>
  );
}
