"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, PieChart, LineChart, TrendingUp, Database, Brain, Search, Layers, Workflow, Lightbulb, Target, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DataAnalytics() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Data Analytics"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Data Analytics Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transform raw data into actionable insights that drive business growth
          </p>
        </motion.div>
      </section>

      {/* Analytics Journey */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Your Analytics Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From data collection to actionable insights, we guide you through every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "Data Collection",
                description: "Gather and integrate data from multiple sources",
                color: "bg-blue-500/10"
              },
              {
                icon: Layers,
                title: "Processing",
                description: "Clean, transform, and structure your data",
                color: "bg-green-500/10"
              },
              {
                icon: Search,
                title: "Analysis",
                description: "Uncover patterns and insights in your data",
                color: "bg-yellow-500/10"
              },
              {
                icon: Lightbulb,
                title: "Action",
                description: "Transform insights into business decisions",
                color: "bg-purple-500/10"
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
            <h2 className="text-3xl font-bold mb-4">Analytics Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analytics tools and services for every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart,
                title: "Business Intelligence",
                description: "Transform complex data into clear visual insights",
                features: [
                  "Interactive Dashboards",
                  "Real-time Analytics",
                  "Custom Reporting",
                  "KPI Tracking"
                ]
              },
              {
                icon: Brain,
                title: "Predictive Analytics",
                description: "Forecast trends and make data-driven decisions",
                features: [
                  "Trend Analysis",
                  "Forecasting Models",
                  "Risk Assessment",
                  "Market Prediction"
                ]
              },
              {
                icon: Users,
                title: "Customer Analytics",
                description: "Understand and optimize customer behavior",
                features: [
                  "Behavior Analysis",
                  "Segmentation",
                  "Journey Mapping",
                  "Churn Prediction"
                ]
              },
              {
                icon: TrendingUp,
                title: "Performance Analytics",
                description: "Monitor and optimize business performance",
                features: [
                  "Performance Metrics",
                  "Efficiency Analysis",
                  "Resource Optimization",
                  "Cost Analysis"
                ]
              },
              {
                icon: Workflow,
                title: "Process Analytics",
                description: "Optimize operations with process insights",
                features: [
                  "Process Mining",
                  "Bottleneck Analysis",
                  "Workflow Optimization",
                  "Efficiency Metrics"
                ]
              },
              {
                icon: Target,
                title: "Marketing Analytics",
                description: "Maximize marketing ROI with data insights",
                features: [
                  "Campaign Analysis",
                  "Attribution Modeling",
                  "Conversion Tracking",
                  "ROI Measurement"
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

      {/* Case Study */}
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
                <CardTitle>Success Story: Retail Revolution</CardTitle>
                <CardDescription>
                  How data analytics transformed a retail chain's operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A national retail chain struggled with inventory management and customer retention. Our analytics solution provided deep insights into customer behavior and supply chain operations, leading to significant improvements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">28%</h3>
                    <p className="text-sm text-muted-foreground">Increase in Sales</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">35%</h3>
                    <p className="text-sm text-muted-foreground">Reduced Inventory Costs</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">45%</h3>
                    <p className="text-sm text-muted-foreground">Better Customer Retention</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's explore how data analytics can transform your business decision-making.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Your Analytics Journey</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}