"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500) // Slight delay before hiding
          return 100
        }
        return Math.min(prev + 10, 100)
      })
    }, 100)

    // Cleanup
    return () => clearInterval(interval)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="w-64">
        <div className="mb-4 text-center">
          <h2 className="text-lg font-semibold">Loading</h2>
          <p className="text-sm text-muted-foreground">{progress}%</p>
        </div>
        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}