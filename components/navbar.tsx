"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  onTabChange?: (tab: string) => void;
}

export default function Navbar({ onTabChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            onClick={() => handleTabClick('about')} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            À propos
          </button>
          <button 
            onClick={() => handleTabClick('skills')} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Compétences
          </button>
          <button 
            onClick={() => handleTabClick('projects')} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Projets
          </button>
          <button 
            onClick={() => handleTabClick('internships')} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Stages
          </button>
          <button 
            onClick={() => handleTabClick('certifications')} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Certifications
          </button>
          <button 
            onClick={() => handleTabClick('contact')} 
            className="text-sm font-medium transition-colors hover:text-primary"
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
              onClick={() => handleTabClick('about')}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              À propos
            </button>
            <button
              onClick={() => handleTabClick('skills')}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              Compétences
            </button>
            <button
              onClick={() => handleTabClick('projects')}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              Projets
            </button>
            <button
              onClick={() => handleTabClick('internships')}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              Stages
            </button>
            <button
              onClick={() => handleTabClick('certifications')}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              Certifications
            </button>
            <button
              onClick={() => handleTabClick('contact')}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
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
