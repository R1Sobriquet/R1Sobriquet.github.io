"use client"

import { useState, useEffect } from "react"

const SESSION_START_KEY = "portfolio_session_start"

export function SessionTimer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_START_KEY)) {
      sessionStorage.setItem(SESSION_START_KEY, Date.now().toString())
    }
    const startTime = parseInt(sessionStorage.getItem(SESSION_START_KEY)!, 10)

    const interval = setInterval(() => {
      setSeconds(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <div
      className="fixed bottom-4 right-4 z-40 font-mono text-[11px] select-none pointer-events-none tabular-nums tracking-widest"
      style={{ opacity: 0.3 }}
      aria-hidden="true"
    >
      {mm}:{ss}
    </div>
  )
}
