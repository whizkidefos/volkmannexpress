"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface GradientCardProps {
  className?: string
  children: React.ReactNode
  gradient?: string
}

export function GradientCard({
  className,
  children,
  gradient = "from-blue-500 via-purple-500 to-pink-500"
}: GradientCardProps) {
  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group relative rounded-lg p-[2px] h-full transition-all duration-300",
        className
      )}
    >
      {/* Gradient border */}
      <div className={cn(
        "absolute inset-0 rounded-lg bg-gradient-to-r opacity-75 transition-opacity duration-300 group-hover:opacity-100",
        gradient
      )} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-background/80" />
      
      {/* Card content */}
      <Card className="relative h-full bg-background/80 backdrop-blur-sm p-6">
        {children}
      </Card>
    </motion.div>
  )
}