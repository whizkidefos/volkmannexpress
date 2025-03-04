"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, AlertTriangle, FileKey, Network, Users, Database, Cloud, Scan, Laptop, Bell } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Cybersecurity() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Cybersecurity"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cybersecurity Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Protect your digital assets with enterprise-grade security
          </p>
        </motion.div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Security Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end protection for your organization's digital infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Threat Detection & Response",
                description: "Advanced threat monitoring and incident response",
                features: [
                  "24/7 Security Monitoring",
                  "Automated Threat Response",
                  "Incident Investigation",
                  "Security Analytics"
                ]
              },
              {
                icon: Lock,
                title: "Access Management",
                description: "Secure identity and access control solutions",
                features: [
                  "Multi-factor Authentication",
                  "Single Sign-On (SSO)",
                  "Privileged Access Management",
                  "Identity Governance"
                ]
              },
              {
                icon: Eye,
                title: "Security Assessment",
                description: "Comprehensive security posture evaluation",
                features: [
                  "Vulnerability Assessment",
                  "Penetration Testing",
                  "Risk Assessment",
                  "Compliance Audits"
                ]
              },
              {
                icon: Cloud,
                title: "Cloud Security",
                description: "Secure cloud infrastructure and applications",
                features: [
                  "Cloud Access Security",
                  "Data Encryption",
                  "Container Security",
                  "Cloud Compliance"
                ]
              },
              {
                icon: Network,
                title: "Network Security",
                description: "Protect your network infrastructure",
                features: [
                  "Firewall Management",
                  "Intrusion Prevention",
                  "Network Monitoring",
                  "VPN Solutions"
                ]
              },
              {
                icon: Database,
                title: "Data Protection",
                description: "Safeguard sensitive information",
                features: [
                  "Data Encryption",
                  "DLP Solutions",
                  "Backup & Recovery",
                  "Data Classification"
                ]
              },
              {
                icon: Laptop,
                title: "Cyber Investigations",
                description: "Forensic analysis and incident response",
                features: [
                  "Digital Forensics",
                  "Malware Analysis",
                  "Incident Reporting",
                  "Legal Support"
                ]
              },
              {
                icon: Scan,
                title: "Security Operations Center",
                description: "24/7 monitoring and incident response",
                features: [
                  "Alert Monitoring",
                  "Threat Hunting",
                  "Incident Response",
                  "Compliance"
                ]
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

      {/* Security Operations Center */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">24/7 Security Operations Center</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Round-the-clock monitoring and response to protect your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Bell,
                title: "Alert Monitoring",
                description: "Real-time threat detection and alerting"
              },
              {
                icon: Scan,
                title: "Threat Hunting",
                description: "Proactive search for security threats"
              },
              {
                icon: AlertTriangle,
                title: "Incident Response",
                description: "Rapid response to security incidents"
              },
              {
                icon: FileKey,
                title: "Compliance",
                description: "Maintain regulatory compliance"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
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
                <CardTitle>Success Story: Financial Security Excellence</CardTitle>
                <CardDescription>
                  How we protected a major financial institution from cyber threats
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A leading financial services provider needed to strengthen their cybersecurity posture. Our comprehensive security solution helped them achieve robust protection and regulatory compliance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">99.9%</h3>
                    <p className="text-sm text-muted-foreground">Threat Detection Rate</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">60%</h3>
                    <p className="text-sm text-muted-foreground">Faster Response Time</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">Zero</h3>
                    <p className="text-sm text-muted-foreground">Security Breaches</p>
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
            <h2 className="text-3xl font-bold mb-6">Secure Your Digital Future</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's build a robust security strategy to protect your business.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get a Security Assessment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}