"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-breathe" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-breathe"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-wave" />
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 -z-5">
        <img
          src="/woman-practicing-pilates-on-mat-in-serene-studio-w.jpg"
          alt="Pilates practice"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-balance">Balance. Breath. Energy.</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The finest equipment for yoga and pilates — all in one place.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg transition-all hover:scale-105 hover:shadow-lg"
          >
            <Link href="/reviews">Explore Collection</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
