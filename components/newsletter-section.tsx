"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function NewsletterSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-wave" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-wave"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Stay Inspired</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Join our community and receive weekly inspiration, exclusive offers, and wellness tips.
          </p>

          <Card className="p-8 border-0 shadow-xl">
            <form className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-1 rounded-full px-6 py-6 text-lg" />
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 whitespace-nowrap"
              >
                Subscribe 🌿
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
