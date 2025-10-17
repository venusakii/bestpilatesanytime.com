"use client"

import { motion } from "framer-motion"

export function VideoSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center mb-16"
        >
          Learn & Practice
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          <img src="/serene-pilates-studio-with-natural-light-and-yoga-.jpg" alt="Pilates practice studio" className="w-full h-auto object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
