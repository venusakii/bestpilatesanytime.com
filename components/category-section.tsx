"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const categories = [
  {
    title: "Yoga Mats",
    emoji: "🧘‍♀️",
    image: "/premium-yoga-mat-rolled-up.jpg",
  },
  {
    title: "Straps & Blocks",
    emoji: "🧱",
    image: "/yoga-blocks-and-straps.jpg",
  },
  {
    title: "Massage Rollers",
    emoji: "⚪",
    image: "/foam-massage-roller.jpg",
  },
  {
    title: "Pilates Accessories",
    emoji: "🌀",
    image: "/pilates-ring-and-accessories.jpg",
  },
]

export function CategorySection() {
  return (
    <section id="shop" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center mb-16"
        >
          Shop by Category
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{category.emoji}</div>
                  <h3 className="font-serif text-xl">{category.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
