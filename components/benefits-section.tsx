"use client"

import { motion } from "framer-motion"
import { Leaf, Zap, Heart, Truck } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Sustainable and biodegradable products",
  },
  {
    icon: Zap,
    title: "Built to Last",
    description: "Premium quality with lifetime warranties",
  },
  {
    icon: Heart,
    title: "Comfort & Stability",
    description: "Designed for your perfect practice",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $50",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-serif text-xl">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
