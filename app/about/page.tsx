"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Lightbulb, Rocket, Award, Trophy, Globe } from "lucide-react"
import { AchievementsSection } from "@/components/achievements-section"
import { motion } from "framer-motion"

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Team Collaboration"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empowering organizations with innovative technology solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto py-20">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg mb-6">
            Volkmann Express Incorporated is a leading technology company that provides innovative solutions and services to businesses across various industries. With a customer-centric approach, cutting-edge technologies, and a team of highly skilled professionals, we strive to empower organizations to achieve their goals and stay ahead in the digital era.
          </p>
          <p className="text-lg mb-6">
            Our commitment to excellence and continuous innovation has made us a trusted partner for businesses worldwide. We believe that technology should adapt to the user, not the other way around.
          </p>
          <p className="text-lg">
            Our solutions have served a diverse range of clients across industries, including finance, healthcare, manufacturing, retail, and more. Our success stories include helping a global financial institution enhance its mobile banking platform, assisting a healthcare provider in implementing AI-driven patient monitoring systems, and enabling a manufacturing company to optimize its supply chain using IoT technologies.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300">
            <CardHeader>
              <Target className="h-10 w-10 mb-2 text-blue-500" />
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300">
            <CardHeader>
              <Lightbulb className="h-10 w-10 mb-2 text-purple-500" />
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>
                To be the global leader in delivering transformative technology solutions that shape the future of business and society.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/5 to-indigo-500/5 hover:from-blue-500/10 hover:to-indigo-500/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Innovation</h3>
              <p className="text-muted-foreground">Continuously pushing boundaries and embracing new technologies</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Excellence</h3>
              <p className="text-muted-foreground">Delivering the highest quality solutions and service</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-pink-500/5 to-rose-500/5 hover:from-pink-500/10 hover:to-rose-500/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Integrity</h3>
              <p className="text-muted-foreground">Building trust through transparency and ethical practices</p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <AchievementsSection />

        {/* Team Section */}
        <section className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-500/5 to-indigo-500/5">
              <CardHeader className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="CEO"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>Chief Executive Officer</CardDescription>
                <p className="mt-4 text-muted-foreground">
                  20+ years of experience in technology leadership and digital transformation.
                </p>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
              <CardHeader className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="CTO"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Chief Technology Officer</CardDescription>
                <p className="mt-4 text-muted-foreground">
                  Former Google engineer with expertise in AI and cloud architecture.
                </p>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-pink-500/5 to-rose-500/5">
              <CardHeader className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="COO"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>David Martinez</CardTitle>
                <CardDescription>Chief Operations Officer</CardDescription>
                <p className="mt-4 text-muted-foreground">
                  Specialized in scaling technology operations and process optimization.
                </p>
              </CardHeader>
            </Card>
          </div>
        </section>
      </section>
    </>
  )
}