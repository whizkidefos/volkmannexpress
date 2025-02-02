import { ServicesGrid } from "@/components/services-grid"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Solutions() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Technology Solutions"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto py-20">
        <ServicesGrid />
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you achieve your goals.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}