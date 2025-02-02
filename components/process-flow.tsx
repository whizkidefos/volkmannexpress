"use client"

import { motion } from "framer-motion"
import { Search, FileCode, Zap, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your needs and define project scope"
  },
  {
    icon: FileCode,
    title: "Development",
    description: "Our experts build your solution using cutting-edge tech"
  },
  {
    icon: Zap,
    title: "Deployment",
    description: "We implement and integrate the solution seamlessly"
  },
  {
    icon: CheckCircle,
    title: "Support",
    description: "Ongoing maintenance and optimization"
  }
]

export function ProcessFlow() {
  return (
    <div className="relative">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 hidden md:block" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 bg-background p-4 rounded-full border-2 border-primary mb-4"
              >
                <step.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-center text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}