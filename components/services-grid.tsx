"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brain, Cloud, Code, Shield, BarChart, Zap } from "lucide-react"
import { GradientCard } from "@/components/gradient-card"

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    href: "/solutions/ai-machine-learning",
    description: "Harness the power of artificial intelligence and machine learning to transform your business operations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gradient: "from-blue-500 via-indigo-500 to-violet-500"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    href: "/solutions/cloud",
    description: "Scale your infrastructure and optimize performance with our comprehensive cloud services.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gradient: "from-violet-500 via-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    href: "/solutions/digital-transformation",
    description: "Modernize your business with end-to-end digital transformation solutions.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gradient: "from-pink-500 via-rose-500 to-red-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    href: "/solutions/cybersecurity",
    description: "Protect your digital assets with our advanced security solutions and best practices.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gradient: "from-red-500 via-orange-500 to-yellow-500"
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    href: "/solutions/data-analytics",
    description: "Transform raw data into actionable insights that drive business growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gradient: "from-yellow-500 via-lime-500 to-green-500"
  },
  {
    icon: Code,
    title: "Custom Software",
    href: "/solutions/custom-software",
    description: "Tailored software solutions designed to meet your unique business needs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gradient: "from-green-500 via-emerald-500 to-teal-500"
  }
]

interface ServicesGridProps {
  limit?: number
}

export function ServicesGrid({ limit }: ServicesGridProps) {
  const displayedServices = limit ? services.slice(0, limit) : services

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedServices.map((service, index) => (
        <Link key={service.title} href={service.href} className="block h-full">
          <GradientCard gradient={service.gradient}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              {/* Image container with consistent height */}
              <div className="relative h-48 -mt-6 -mx-6 mb-6 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-50 rounded-t-lg`} />
              </div>

              {/* Title section with consistent spacing */}
              <div className="flex items-center gap-3 mb-4">
                <service.icon className="h-6 w-6 shrink-0" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>

              {/* Description with consistent height */}
              <p className="text-muted-foreground flex-grow mb-6">
                {service.description}
              </p>

              {/* Call to action at the bottom */}
              <div className="flex items-center text-sm font-medium mt-auto group">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </motion.div>
          </GradientCard>
        </Link>
      ))}
    </div>
  )
}