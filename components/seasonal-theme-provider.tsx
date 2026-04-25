"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Season = "spring" | "summer" | "autumn" | "winter" | "auto"

type SeasonContextType = {
  season: Season
  setSeason: (s: Season) => void
  effectiveSeason: Exclude<Season, "auto">
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined)

function getAutoSeason(): Exclude<Season, "auto"> {
  const month = new Date().getMonth()
  if (month >= 2 && month <= 4) return "spring"
  if (month >= 5 && month <= 7) return "summer"
  if (month >= 8 && month <= 10) return "autumn"
  return "winter"
}

const SEASON_VARS: Record<Exclude<Season, "auto">, { light: string; dark: string; label: string }> = {
  spring: {
    label: "Printemps",
    light: "--primary: 340 65% 62%; --ring: 340 65% 62%;",
    dark: "--primary: 340 60% 68%; --ring: 340 60% 68%;",
  },
  summer: {
    label: "Été",
    light: "--primary: 195 75% 44%; --ring: 195 75% 44%;",
    dark: "--primary: 195 70% 52%; --ring: 195 70% 52%;",
  },
  autumn: {
    label: "Automne",
    light: "--primary: 22 78% 50%; --ring: 22 78% 50%;",
    dark: "--primary: 22 72% 58%; --ring: 22 72% 58%;",
  },
  winter: {
    label: "Hiver",
    light: "--primary: 210 55% 58%; --ring: 210 55% 58%;",
    dark: "--primary: 210 50% 65%; --ring: 210 50% 65%;",
  },
}

const STORAGE_KEY = "portfolio_season_preference"
const STYLE_ID = "seasonal-theme-override"

export function SeasonalThemeProvider({ children }: { children: React.ReactNode }) {
  const [season, setSeasonState] = useState<Season>("auto")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY) as Season | null
    if (stored && ["spring", "summer", "autumn", "winter", "auto"].includes(stored)) {
      setSeasonState(stored)
    }
  }, [])

  const setSeason = (s: Season) => {
    setSeasonState(s)
    localStorage.setItem(STORAGE_KEY, s)
  }

  const effectiveSeason: Exclude<Season, "auto"> = season === "auto" ? getAutoSeason() : season

  useEffect(() => {
    if (!mounted) return

    const vars = SEASON_VARS[effectiveSeason]
    const existing = document.getElementById(STYLE_ID)
    if (existing) existing.remove()

    const style = document.createElement("style")
    style.id = STYLE_ID
    style.textContent = `:root { ${vars.light} } .dark { ${vars.dark} }`
    document.head.appendChild(style)

    return () => {
      document.getElementById(STYLE_ID)?.remove()
    }
  }, [effectiveSeason, mounted])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <SeasonContext.Provider value={{ season, setSeason, effectiveSeason }}>
      {children}
    </SeasonContext.Provider>
  )
}

export function useSeason() {
  const context = useContext(SeasonContext)
  if (!context) {
    if (typeof window === "undefined") {
      return {
        season: "auto" as Season,
        setSeason: () => {},
        effectiveSeason: getAutoSeason(),
      }
    }
    throw new Error("useSeason must be used within SeasonalThemeProvider")
  }
  return context
}

export { SEASON_VARS }
