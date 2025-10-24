"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedProgressProps {
  value: number
  className?: string
}

export function AnimatedProgress({ value, className = "" }: AnimatedProgressProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={`relative h-2 w-full overflow-hidden rounded-full bg-secondary ${className}`}>
      <motion.div
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      />
    </div>
  )
}
