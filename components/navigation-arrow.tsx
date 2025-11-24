"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface NavigationArrowProps {
  onClick: () => void
  direction: "next" | "prev"
  scrollToTop?: boolean
}

export default function NavigationArrow({ onClick, direction, scrollToTop = false }: NavigationArrowProps) {
  const handleClick = () => {
    onClick()
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const isNext = direction === "next"

  return (
    <div className={`fixed bottom-8 ${isNext ? "right-8" : "left-8"} z-40`}>
      <Button
        onClick={handleClick}
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
      >
        {isNext ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
      </Button>
    </div>
  )
}
