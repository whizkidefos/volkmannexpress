"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Server, Shield, Zap, ArrowUpDown, Database, Lock, Globe, Gauge } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CloudSolutions() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Cloud Technology"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Scalable, secure, and efficient cloud infrastructure for modern businesses
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Cloud Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From migration to optimization, we provide end-to-end cloud solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud Migration",
                description: "Seamless transition of your applications and data to the cloud",
                features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Zero-Downtime Migration"]
              },
              {
                icon: Server,
                title: "Infrastructure as Code",
                description: "Automated infrastructure deployment and management",
                features: ["Template Development", "Version Control", "Automated Testing", "Configuration Management"]
              },
              {
                icon: Shield,
                title: "Cloud Security",
                description: "Comprehensive security solutions for cloud environments",
                features: ["Access Control", "Encryption", "Compliance", "Threat Detection"]
              },
              {
                icon: Gauge,
                title: "Performance Optimization",
                description: "Maximize cloud resource efficiency and performance",
                features: ["Load Balancing", "Auto-scaling", "Cost Optimization", "Performance Monitoring"]
              },
              {
                icon: Database,
                title: "Cloud Native Development",
                description: "Modern application development using cloud-native technologies",
                features: ["Microservices", "Containerization", "Serverless", "API Development"]
              },
              {
                icon: Globe,
                title: "Multi-Cloud Strategy",
                description: "Optimize workload distribution across multiple cloud providers",
                features: ["Workload Distribution", "Provider Selection", "Cost Management", "Risk Mitigation"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <service.icon className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Our Cloud Solutions?</CardTitle>
                <CardDescription>
                  Experience the benefits of modern cloud infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Enhanced Performance</h3>
                        <p className="text-sm text-muted-foreground">Optimized infrastructure for maximum speed and reliability</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowUpDown className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Scalability</h3>
                        <p className="text-sm text-muted-foreground">Easily scale resources up or down based on demand</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Lock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Enhanced Security</h3>
                        <p className="text-sm text-muted-foreground">Advanced security measures and compliance standards</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Database className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Cost Efficiency</h3>
                        <p className="text-sm text-muted-foreground">Optimize costs with pay-as-you-go pricing models</p>
                      </div>
                    </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud solutions can help you achieve your business goals.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}