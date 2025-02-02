"use client"

import { HeroSection } from "@/components/hero-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProcessFlow } from "@/components/process-flow"
import { motion } from "framer-motion"
import { GradientCard } from "@/components/gradient-card"
import Image from "next/image"
import { ServicesGrid } from "@/components/services-grid"

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Services Grid */}
      <section className="container mx-auto py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Industry-Leading Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From AI-driven systems to IoT integration, we deliver cutting-edge technology solutions that transform businesses.
          </p>
        </div>
        <ServicesGrid limit={3} />
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-gradient-to-r hover:text-primary-foreground from-blue-500/10 via-purple-500/10 to-pink-500/10 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            <Link href="/solutions">View All Solutions</Link>
          </Button>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>
          <ProcessFlow />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <GradientCard gradient="from-blue-500 via-indigo-500 to-violet-500">
            <div className="text-center">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Industry-leading technology"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 via-indigo-500/50 to-violet-500/50 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Industry-leading technology</h3>
              <p className="text-muted-foreground">
                User-centric design ensures that technology is an enabler, not a barrier.
              </p>
            </div>
          </GradientCard>

          <GradientCard gradient="from-violet-500 via-purple-500 to-pink-500">
            <div className="text-center">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Learn from the best"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-500/50 via-purple-500/50 to-pink-500/50 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Learn from the best</h3>
              <p className="text-muted-foreground">
                Whether you're a startup or a global enterprise, we will serve you all the way.
              </p>
            </div>
          </GradientCard>

          <GradientCard gradient="from-pink-500 via-rose-500 to-red-500">
            <div className="text-center">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Accelerate your business"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 via-rose-500/50 to-red-500/50 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Accelerate your business</h3>
              <p className="text-muted-foreground">
                Harness the power of data to inform their decisions.
              </p>
            </div>
          </GradientCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20" />
        <div className="container mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you stay ahead in the digital era.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}