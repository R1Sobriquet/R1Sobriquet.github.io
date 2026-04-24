"use client"

import { useEffect } from "react"

type Season = "spring" | "summer" | "autumn" | "winter"

function getSeason(): Season {
  const month = new Date().getMonth()
  if (month >= 2 && month <= 4) return "spring"
  if (month >= 5 && month <= 7) return "summer"
  if (month >= 8 && month <= 10) return "autumn"
  return "winter"
}

// Only --primary and --ring are overridden (rose -> seasonal colour)
const SEASON_VARS: Record<Season, { light: string; dark: string; label: string }> = {
  spring: {
    label: "Printemps — Rose cerisier / Vert pastel",
    light: "--primary: 340 65% 62%; --ring: 340 65% 62%;",
    dark:  "--primary: 340 60% 68%; --ring: 340 60% 68%;",
  },
  summer: {
    label: "Été — Cyan vif",
    light: "--primary: 195 75% 44%; --ring: 195 75% 44%;",
    dark:  "--primary: 195 70% 52%; --ring: 195 70% 52%;",
  },
  autumn: {
    label: "Automne — Orange brûlé / Terracotta",
    light: "--primary: 22 78% 50%; --ring: 22 78% 50%;",
    dark:  "--primary: 22 72% 58%; --ring: 22 72% 58%;",
  },
  winter: {
    label: "Hiver — Bleu givré",
    light: "--primary: 210 55% 58%; --ring: 210 55% 58%;",
    dark:  "--primary: 210 50% 65%; --ring: 210 50% 65%;",
  },
}

const STYLE_ID = "seasonal-theme-override"

export function SeasonalTheme() {
  useEffect(() => {
    const season = getSeason()
    const vars = SEASON_VARS[season]

    const existing = document.getElementById(STYLE_ID)
    if (existing) existing.remove()

    const style = document.createElement("style")
    style.id = STYLE_ID
    style.textContent = `:root { ${vars.light} } .dark { ${vars.dark} }`
    document.head.appendChild(style)

    return () => {
      document.getElementById(STYLE_ID)?.remove()
    }
  }, [])

  return null
}
