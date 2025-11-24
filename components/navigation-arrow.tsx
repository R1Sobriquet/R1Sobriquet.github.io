"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface NavigationArrowProps {
  onNext: () => void
}

export default function NavigationArrow({ onNext }: NavigationArrowProps) {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Button
        onClick={onNext}
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
