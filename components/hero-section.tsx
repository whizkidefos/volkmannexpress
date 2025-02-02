"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThreeScene } from "@/components/three-scene"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"

export function HeroSection() {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <ThreeScene />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container relative z-10 mx-auto px-4 text-center"
      >
        <motion.div variants={itemVariants} className="relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Technology That Adapts To You
          </h1>
          <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/20 to-transparent opacity-50 blur-2xl -z-10" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground"
        >
          Innovative enterprise solutions that empower businesses to thrive in the digital era through cutting-edge technology, AI-driven insights, and seamless digital transformation strategies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="relative group overflow-hidden"
          >
            <Link href="/contact">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="relative group overflow-hidden"
          >
            <Link href="/solutions">
              <span className="relative z-10">Our Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-background opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-1 h-8 rounded-full bg-primary/50 mx-auto" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}