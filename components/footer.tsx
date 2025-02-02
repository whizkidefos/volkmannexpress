import Link from "next/link"
import { Cpu } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Cpu className="h-6 w-6" />
            <p className="text-center text-sm leading-loose md:text-left">
              © {currentYear} Volkmann Express Inc. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 px-8 md:gap-6 md:px-0">
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}