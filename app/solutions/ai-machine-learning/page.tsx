"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cpu, Network, Lightbulb, ChartBar, Cog } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GradientCard } from "@/components/gradient-card"

export default function AiMachineLearning() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="AI Visualization"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI & Machine Learning Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transform your business with intelligent solutions powered by cutting-edge AI technology
          </p>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our AI Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From predictive analytics to natural language processing, we deliver AI solutions that drive real business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Deep Learning",
                description: "Neural networks that learn and adapt from complex data patterns"
              },
              {
                icon: Cpu,
                title: "Machine Learning",
                description: "Automated learning systems that improve with experience"
              },
              {
                icon: Network,
                title: "Natural Language Processing",
                description: "Advanced text and speech understanding capabilities"
              },
              {
                icon: Lightbulb,
                title: "Predictive Analytics",
                description: "Data-driven insights to forecast future trends"
              },
              {
                icon: ChartBar,
                title: "Computer Vision",
                description: "Intelligent image and video analysis systems"
              },
              {
                icon: Cog,
                title: "Automated Decision Making",
                description: "AI-powered systems for intelligent decision support"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GradientCard gradient={`from-blue-${500 + index * 100} to-indigo-${500 + index * 100}`}>
                  <CardHeader>
                    <feature.icon className="h-10 w-10 mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <GradientCard>
              <CardHeader>
                <CardTitle>Success Story: AI-Driven Healthcare Innovation</CardTitle>
                <CardDescription>
                  How we helped a leading healthcare provider improve patient outcomes with AI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  A major healthcare provider faced challenges in predicting patient readmission risks and optimizing resource allocation. Our AI solution analyzed patient data to identify high-risk cases and recommend preventive measures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">32%</h3>
                    <p className="text-sm text-muted-foreground">Reduction in Readmissions</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">$2.4M</h3>
                    <p className="text-sm text-muted-foreground">Annual Savings</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">95%</h3>
                    <p className="text-sm text-muted-foreground">Prediction Accuracy</p>
                  </div>
                </div>
              </CardContent>
            </GradientCard>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how AI and machine learning can transform your business operations and drive growth.
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