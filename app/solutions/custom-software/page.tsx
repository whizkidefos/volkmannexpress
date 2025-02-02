"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Laptop, Rocket, Settings, Users, Zap, Shield, Cloud, Database, Smartphone, Globe, Layers } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CustomSoftware() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Custom Software Development"
          fill
          className="object-cover brightness-50"
          priority
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 mx-auto px-4 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Custom Software Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Tailored software solutions designed for your unique business needs
          </p>
        </motion.div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              {
                icon: Users,
                title: "Discovery",
                description: "Understanding your needs",
                color: "bg-blue-500/10"
              },
              {
                icon: Code,
                title: "Planning",
                description: "Architecture & design",
                color: "bg-green-500/10"
              },
              {
                icon: Laptop,
                title: "Development",
                description: "Agile implementation",
                color: "bg-yellow-500/10"
              },
              {
                icon: Settings,
                title: "Testing",
                description: "Quality assurance",
                color: "bg-purple-500/10"
              },
              {
                icon: Rocket,
                title: "Deployment",
                description: "Launch & integration",
                color: "bg-pink-500/10"
              },
              {
                icon: Zap,
                title: "Support",
                description: "Ongoing maintenance",
                color: "bg-orange-500/10"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full ${step.color}`}>
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-background rounded-full p-3 mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Software Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development services for every industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Web Applications",
                description: "Scalable and responsive web solutions",
                features: [
                  "Progressive Web Apps",
                  "Enterprise Portals",
                  "E-commerce Platforms",
                  "Content Management"
                ]
              },
              {
                icon: Smartphone,
                title: "Mobile Applications",
                description: "Native and cross-platform mobile apps",
                features: [
                  "iOS Development",
                  "Android Development",
                  "Cross-platform Solutions",
                  "Mobile-first Design"
                ]
              },
              {
                icon: Database,
                title: "Enterprise Software",
                description: "Robust solutions for large organizations",
                features: [
                  "ERP Systems",
                  "CRM Solutions",
                  "Business Process Automation",
                  "Legacy System Integration"
                ]
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description: "Cloud-native application development",
                features: [
                  "SaaS Applications",
                  "Cloud Migration",
                  "Serverless Architecture",
                  "Microservices"
                ]
              },
              {
                icon: Shield,
                title: "Secure Applications",
                description: "Security-first development approach",
                features: [
                  "Secure Architecture",
                  "Encryption",
                  "Access Control",
                  "Security Testing"
                ]
              },
              {
                icon: Layers,
                title: "API Development",
                description: "Custom API design and integration",
                features: [
                  "RESTful APIs",
                  "GraphQL",
                  "API Gateway",
                  "Third-party Integration"
                ]
              }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <solution.icon className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle>Success Story: Healthcare Innovation</CardTitle>
                <CardDescription>
                  Transforming patient care with custom software
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We developed a comprehensive healthcare management system for a leading medical facility, streamlining patient care and administrative processes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">40%</h3>
                    <p className="text-sm text-muted-foreground">Faster Patient Processing</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">60%</h3>
                    <p className="text-sm text-muted-foreground">Reduced Paperwork</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">95%</h3>
                    <p className="text-sm text-muted-foreground">Staff Satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Solution?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how custom software can transform your business operations.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}