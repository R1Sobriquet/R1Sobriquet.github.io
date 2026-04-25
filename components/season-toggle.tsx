"use client"

import * as React from "react"
import { Sparkles, Sun, Leaf, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSeason, type Season } from "@/components/seasonal-theme-provider"

const SEASON_CONFIG: Record<Exclude<Season, "auto">, { icon: React.ReactNode; label: string }> = {
  spring: { icon: <Sparkles className="h-4 w-4" />, label: "Printemps" },
  summer: { icon: <Sun className="h-4 w-4" />, label: "Été" },
  autumn: { icon: <Leaf className="h-4 w-4" />, label: "Automne" },
  winter: { icon: <Snowflake className="h-4 w-4" />, label: "Hiver" },
}

export function SeasonToggle() {
  const { season, setSeason, effectiveSeason } = useSeason()

  const currentIcon = SEASON_CONFIG[effectiveSeason].icon
  const currentLabel = season === "auto" ? "Auto" : SEASON_CONFIG[effectiveSeason].label

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {currentIcon}
          <span className="sr-only">Changer de thème saisonnier ({currentLabel})</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setSeason("auto")} className="gap-2">
          <Sparkles className="h-4 w-4 opacity-60" />
          <span>Automatique{season === "auto" && " ✓"}</span>
        </DropdownMenuItem>
        {(Object.entries(SEASON_CONFIG) as [Exclude<Season, "auto">, typeof SEASON_CONFIG[keyof typeof SEASON_CONFIG]][]).map(
          ([key, { icon, label }]) => (
            <DropdownMenuItem key={key} onClick={() => setSeason(key)} className="gap-2">
              {icon}
              <span>
                {label}
                {season === key && " ✓"}
              </span>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
