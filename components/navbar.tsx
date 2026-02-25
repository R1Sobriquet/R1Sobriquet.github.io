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
      ? "text-sm font-semibold transition-colors text-primary border-l-2 border-primary pl-2 text-left w-full"
      : "text-sm font-medium transition-colors hover:text-primary text-left w-full"

  const navItems = [
    { id: 'documents', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'internships', label: 'Stages' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'tech-watch', label: 'Veille' },
    { id: 'contact', label: 'Contact' },
  ]

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

        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Navigation principale">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleTabClick(item.id)}
                  className={navBtnClass(item.id)}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu de navigation"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav role="navigation" aria-label="Navigation mobile">
            <ul className="flex flex-col space-y-4 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleTabClick(item.id)}
                    className={mobileNavBtnClass(item.id)}
                    aria-current={activeTab === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
