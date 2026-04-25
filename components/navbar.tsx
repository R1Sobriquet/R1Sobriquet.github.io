"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

const SeasonToggle = dynamic(() => import("./season-toggle").then((mod) => ({ default: mod.SeasonToggle })), {
  ssr: false,
})

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
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => handleTabClick('documents')}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <span className="font-bold text-base sm:text-lg md:text-xl truncate max-w-[180px] sm:max-w-none">Erwann LE ROUZIC</span>
        </button>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6" role="navigation" aria-label="Navigation principale">
          <ul className="flex items-center gap-3 xl:gap-4 list-none m-0 p-0">
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
          <SeasonToggle />
          <ModeToggle />
        </nav>

        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
          <SeasonToggle />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 sm:h-10 sm:w-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu de navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container lg:hidden py-4 px-4 sm:px-6 border-t bg-background/95 backdrop-blur">
          <nav role="navigation" aria-label="Navigation mobile">
            <ul className="flex flex-col space-y-3 list-none m-0 p-0">
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
