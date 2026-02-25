"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  onTabChange?: (tab: string) => void;
  activeTab?: string;
}

export default function Navbar({ onTabChange, activeTab }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Helpers pour les classes CSS des boutons
  const navBtnClass = (tab: string) =>
    activeTab === tab
      ? "text-sm font-semibold transition-colors text-primary border-b-2 border-primary pb-0.5"
      : "text-sm font-medium transition-colors hover:text-primary"

  const mobileNavBtnClass = (tab: string) =>
    activeTab === tab
      ? "text-sm font-semibold transition-colors text-primary border-l-2 border-primary pl-2 text-left"
      : "text-sm font-medium transition-colors hover:text-primary text-left"

  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button 
          onClick={() => handleTabClick('documents')} 
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <span className="font-bold text-xl">Erwann LE ROUZIC</span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => handleTabClick('documents')}
            className={navBtnClass('documents')}
          >
            Accueil
          </button>
          <button
            onClick={() => handleTabClick('about')}
            className={navBtnClass('about')}
          >
            À propos
          </button>
          <button
            onClick={() => handleTabClick('internships')}
            className={navBtnClass('internships')}
          >
            Stages
          </button>
          <button
            onClick={() => handleTabClick('skills')}
            className={navBtnClass('skills')}
          >
            Compétences
          </button>
          <button
            onClick={() => handleTabClick('projects')}
            className={navBtnClass('projects')}
          >
            Projets
          </button>
          <button
            onClick={() => handleTabClick('certifications')}
            className={navBtnClass('certifications')}
          >
            Certifications
          </button>
          <button
            onClick={() => handleTabClick('tech-watch')}
            className={navBtnClass('tech-watch')}
          >
            Veille
          </button>
          <button
            onClick={() => handleTabClick('contact')}
            className={navBtnClass('contact')}
          >
            Contact
          </button>
          <ModeToggle />
        </nav>

        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => handleTabClick('documents')}
              className={mobileNavBtnClass('documents')}
            >
              Accueil
            </button>
            <button
              onClick={() => handleTabClick('about')}
              className={mobileNavBtnClass('about')}
            >
              À propos
            </button>
            <button
              onClick={() => handleTabClick('internships')}
              className={mobileNavBtnClass('internships')}
            >
              Stages
            </button>
            <button
              onClick={() => handleTabClick('skills')}
              className={mobileNavBtnClass('skills')}
            >
              Compétences
            </button>
            <button
              onClick={() => handleTabClick('projects')}
              className={mobileNavBtnClass('projects')}
            >
              Projets
            </button>
            <button
              onClick={() => handleTabClick('certifications')}
              className={mobileNavBtnClass('certifications')}
            >
              Certifications
            </button>
            <button
              onClick={() => handleTabClick('tech-watch')}
              className={mobileNavBtnClass('tech-watch')}
            >
              Veille
            </button>
            <button
              onClick={() => handleTabClick('contact')}
              className={mobileNavBtnClass('contact')}
            >
              Contact
            </button>
            <div className="pt-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
