import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Stethoscope, Factory, ShoppingBag, Landmark, Plane, Lightbulb, Leaf, Wrench, Briefcase, Smartphone, Gamepad } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CounterUp } from "@/components/counter-up"
import { GradientCard } from "@/components/gradient-card"

const industries = [
  {
    icon: Building2,
    title: "Enterprise & Technology",
    description: "Digital transformation solutions for large enterprises, including cloud migration, AI implementation, and enterprise architecture.",
    content: [
      "Cloud-native application development",
      "Legacy system modernization",
      "Enterprise resource planning",
      "Digital workplace solutions"
    ]
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Advanced healthcare technology solutions, including patient management systems, telemedicine platforms, and medical data analytics.",
    content: [
      "Electronic health records",
      "Remote patient monitoring",
      "Clinical decision support",
      "Healthcare analytics"
    ]
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Smart manufacturing solutions, IoT integration, supply chain optimization, and predictive maintenance systems.",
    content: [
      "Industrial IoT platforms",
      "Predictive maintenance",
      "Supply chain optimization",
      "Quality control automation"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description: "Digital commerce solutions, inventory management systems, and customer experience platforms.",
    content: [
      "Omnichannel retail platforms",
      "Inventory management",
      "Customer analytics",
      "Personalization engines"
    ]
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Fintech solutions, secure payment systems, fraud detection, and regulatory compliance platforms.",
    content: [
      "Digital banking platforms",
      "Fraud prevention systems",
      "Regulatory compliance",
      "Risk management"
    ]
  },
  {
    icon: Plane,
    title: "Transportation & Logistics",
    description: "Fleet management systems, route optimization, and real-time tracking solutions.",
    content: [
      "Fleet management",
      "Route optimization",
      "Real-time tracking",
      "Warehouse automation"
    ]
  },
  {
    icon: Lightbulb,
    title: "Energy & Utilities",
    description: "Smart grid solutions, energy management systems, and sustainability platforms.",
    content: [
      "Smart grid management",
      "Energy analytics",
      "Asset monitoring",
      "Renewable integration"
    ]
  },
  {
    icon: Leaf,
    title: "Agriculture",
    description: "Precision farming solutions, crop management systems, and agricultural analytics.",
    content: [
      "Precision agriculture",
      "Crop monitoring",
      "Weather analytics",
      "Supply chain tracking"
    ]
  },
  {
    icon: Wrench,
    title: "Construction",
    description: "Project management solutions, BIM integration, and construction analytics.",
    content: [
      "Project management",
      "BIM integration",
      "Safety monitoring",
      "Resource planning"
    ]
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Practice management solutions, client portals, and business analytics.",
    content: [
      "Practice management",
      "Client portals",
      "Time tracking",
      "Resource allocation"
    ]
  },
  {
    icon: Smartphone,
    title: "Telecommunications",
    description: "Network management solutions, service delivery platforms, and customer experience systems.",
    content: [
      "Network management",
      "Service automation",
      "Customer experience",
      "5G solutions"
    ]
  },
  {
    icon: Gamepad,
    title: "Media & Entertainment",
    description: "Content management systems, streaming platforms, and audience analytics.",
    content: [
      "Content delivery",
      "Streaming platforms",
      "Audience analytics",
      "Digital rights management"
    ]
  }
]

export default function Industries() {
  return (
    <>
      {/* Rest of the component remains the same */}
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Business District"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Tailored technology solutions for diverse industry needs
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Card key={industry.title} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <industry.icon className="h-10 w-10 mb-2 text-primary transition-transform duration-300 group-hover:scale-110" />
                <CardTitle>{industry.title}</CardTitle>
                <CardDescription>
                  {industry.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {industry.content.map((item) => (
                    <li key={item} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-3 gap-8">
            <GradientCard gradient="from-blue-500 via-indigo-500 to-purple-500">
              <div className="text-center">
                <CounterUp
                  end={20}
                  suffix="+"
                  className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                />
                <p className="text-lg">Years Experience</p>
              </div>
            </GradientCard>

            <GradientCard gradient="from-purple-500 via-pink-500 to-red-500">
              <div className="text-center">
                <CounterUp
                  end={500}
                  suffix="+"
                  className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                />
                <p className="text-lg">Projects Delivered</p>
              </div>
            </GradientCard>

            <GradientCard gradient="from-red-500 via-orange-500 to-yellow-500">
              <div className="text-center">
                <CounterUp
                  end={12}
                  className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
                />
                <p className="text-lg">Industries Served</p>
              </div>
            </GradientCard>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Let's discuss how our innovative solutions can help you stay ahead in the digital era.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}