"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const solutions = [
  {
    title: "AI & Machine Learning",
    href: "/solutions/ai-machine-learning",
    description: "Harness the power of artificial intelligence for your business"
  },
  {
    title: "Cloud Solutions",
    href: "/solutions/cloud",
    description: "Scalable and secure cloud infrastructure services"
  },
  {
    title: "Digital Transformation",
    href: "/solutions/digital-transformation",
    description: "Transform your business for the digital age"
  },
  {
    title: "Cybersecurity",
    href: "/solutions/cybersecurity",
    description: "Protect your assets with advanced security solutions"
  },
  {
    title: "Data Analytics",
    href: "/solutions/data-analytics",
    description: "Turn your data into actionable insights"
  },
  {
    title: "Custom Software",
    href: "/solutions/custom-software",
    description: "Tailored software solutions for your unique needs"
  }
]

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl mx-auto">
        {/* Mobile Menu */}
        <div className="flex md:hidden w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-lg font-bold"
                    onClick={() => setOpen(false)}
                  >
                    Volkmann Express
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === "/about" ? "text-foreground" : "text-foreground/60"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    About
                  </Link>
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Solutions</h4>
                    <div className="grid gap-3">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.title}
                          href={solution.href}
                          className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            pathname === solution.href ? "text-foreground" : "text-foreground/60"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {solution.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/industries"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === "/industries" ? "text-foreground" : "text-foreground/60"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    Industries
                  </Link>
                  <Link
                    href="/contact"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === "/contact" ? "text-foreground" : "text-foreground/60"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center">
              <span className="font-bold">Volkmann Express</span>
            </Link>
          </div>
          <ModeToggle />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-bold text-lg">Volkmann Express</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center justify-center gap-8">
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              )}
            >
              About
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-auto text-sm font-medium transition-colors hover:text-primary bg-transparent",
                      pathname.startsWith("/solutions") ? "text-foreground" : "text-foreground/60"
                    )}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {solutions.map((solution) => (
                        <li key={solution.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={solution.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{solution.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {solution.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/industries"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/industries" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Industries
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/contact" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}