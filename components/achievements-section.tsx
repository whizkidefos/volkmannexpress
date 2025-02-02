"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CounterUp } from "@/components/counter-up"
import { Trophy, Users, Globe, Award } from "lucide-react"
import { GradientCard } from "@/components/gradient-card"

interface Achievement {
  icon: React.ElementType
  value: number
  suffix?: string
  label: string
  gradient: string
  delay: number
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    value: 500,
    suffix: "+",
    label: "Successful Projects",
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    delay: 0.1
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Happy Clients",
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    icon: Globe,
    value: 20,
    suffix: "+",
    label: "Countries Served",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    delay: 0.3
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Industry Awards",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    delay: 0.4
  }
]

export function AchievementsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/20 to-transparent"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${-50 + i * 30}%`,
              top: `${20 + i * 10}%`,
              filter: "blur(60px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones that showcase our commitment to excellence and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: achievement.delay }}
              >
                <GradientCard gradient={achievement.gradient}>
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="inline-block mb-4"
                    >
                      <Icon className="h-8 w-8 mx-auto" />
                    </motion.div>
                    <CounterUp
                      end={achievement.value}
                      suffix={achievement.suffix}
                      className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
                    />
                    <p className="mt-2 text-muted-foreground">{achievement.label}</p>
                  </div>
                </GradientCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}