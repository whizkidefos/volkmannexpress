"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BarChart, Users, Workflow, Laptop, Rocket, Target, Lightbulb, ArrowUpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DigitalTransformation() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Digital Transformation"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Transformation</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Revolutionize your business with end-to-end digital solutions
          </p>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Your Digital Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A strategic approach to transforming your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Assessment",
                description: "Comprehensive analysis of your current digital maturity and opportunities",
                steps: [
                  "Technology Stack Review",
                  "Process Analysis",
                  "Gap Identification",
                  "Opportunity Mapping"
                ]
              },
              {
                icon: Workflow,
                title: "Strategy",
                description: "Developing a roadmap for your digital transformation journey",
                steps: [
                  "Goal Setting",
                  "Priority Definition",
                  "Resource Planning",
                  "Timeline Creation"
                ]
              },
              {
                icon: Rocket,
                title: "Implementation",
                description: "Executing the transformation with precision and care",
                steps: [
                  "Agile Delivery",
                  "Change Management",
                  "Training & Support",
                  "Performance Monitoring"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <phase.icon className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>{phase.title}</CardTitle>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.steps.map((step) => (
                        <li key={step} className="flex items-center text-sm text-muted-foreground">
                          <ArrowUpCircle className="h-4 w-4 mr-2 text-primary" />
                          {step}
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

      {/* Solutions Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Transformation Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to drive your digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Laptop,
                title: "Process Automation",
                description: "Streamline operations with intelligent automation",
                features: ["Workflow Automation", "RPA Integration", "Business Process Management"]
              },
              {
                icon: Users,
                title: "Digital Workplace",
                description: "Create a modern, collaborative work environment",
                features: ["Remote Work Solutions", "Collaboration Tools", "Digital Asset Management"]
              },
              {
                icon: BarChart,
                title: "Data-Driven Culture",
                description: "Transform decision-making with data analytics",
                features: ["Business Intelligence", "Data Visualization", "Predictive Analytics"]
              },
              {
                icon: Zap,
                title: "Customer Experience",
                description: "Enhance customer engagement across channels",
                features: ["Omnichannel Strategy", "Customer Journey Mapping", "Experience Design"]
              },
              {
                icon: Lightbulb,
                title: "Innovation Lab",
                description: "Foster innovation and rapid experimentation",
                features: ["Idea Management", "Rapid Prototyping", "Innovation Workshops"]
              },
              {
                icon: Target,
                title: "Change Management",
                description: "Enable smooth transition and adoption",
                features: ["Training Programs", "Communication Strategy", "Adoption Monitoring"]
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
                <CardTitle>Success Story: Manufacturing Excellence</CardTitle>
                <CardDescription>
                  How we helped a manufacturing company achieve digital excellence
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A leading manufacturer struggled with legacy systems and manual processes. Our digital transformation solution modernized their operations end-to-end.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">40%</h3>
                    <p className="text-sm text-muted-foreground">Efficiency Increase</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">$3.2M</h3>
                    <p className="text-sm text-muted-foreground">Annual Savings</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">25%</h3>
                    <p className="text-sm text-muted-foreground">Revenue Growth</p>
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
            <h2 className="text-3xl font-bold mb-6">Start Your Digital Transformation</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to revolutionize your business for the digital age.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}