"use client"

import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl md:text-3xl text-foreground hover:opacity-80 transition-opacity"
          >
            Best <span className="italic">Pilates</span> Anytime
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-primary transition-colors">
              HOME
            </Link>
            <Link href="/reviews" className="text-sm hover:text-primary transition-colors">
              REVIEW
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              CONTACT
            </Link>
            <Button variant="ghost" size="icon">
              
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-sm hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/reviews"
              className="block text-sm hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              REVIEW
            </Link>
            <Link
              href="/about"
              className="block text-sm hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="block text-sm hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
