"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

export function FeaturedProduct() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-breathe" />
                <img
                  src="/manduka-pro-yoga-mat-premium-quality.jpg"
                  alt="Manduka PRO Yoga Mat"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-xl animate-float"
                />
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Product of the Week
                  </span>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl">Manduka PRO Yoga Mat</h2>

                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                  <span className="text-muted-foreground ml-2">(4.9/5)</span>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  The gold standard in yoga mats. Ultra-dense cushioning provides unparalleled comfort and joint
                  protection. Eco-friendly materials and lifetime guarantee.
                </p>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                    asChild
                  >
                    <Link href="/reviews">Read Review</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
