"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Code, BarChart, Shield, Users } from "lucide-react"

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.2 }
  }
}

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: { 
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut" }
  }
}

export const AnimatedBrain = () => (
  <motion.div
    variants={iconVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <Brain className="h-12 w-12 text-primary" />
  </motion.div>
)

export const AnimatedZap = () => (
  <motion.div
    variants={iconVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <Zap className="h-12 w-12 text-primary" />
  </motion.div>
)

// Similar components for other icons
export const AnimatedCode = () => (
  <motion.div
    variants={iconVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <Code className="h-12 w-12 text-primary" />
  </motion.div>
)

export const AnimatedBarChart = () => (
  <motion.div
    variants={iconVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <BarChart className="h-12 w-12 text-primary" />
  </motion.div>
)

export const AnimatedShield = () => (
  <motion.div
    variants={iconVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <Shield className="h-12 w-12 text-primary" />
  </motion.div>
)

export const AnimatedUsers = () => (
  <motion.div
    variants={iconVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <Users className="h-12 w-12 text-primary" />
  </motion.div>
)