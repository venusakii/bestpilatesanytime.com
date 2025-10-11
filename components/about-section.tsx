"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/peaceful-yoga-studio-with-natural-light-and-plants.jpg" alt="Studio" className="rounded-2xl shadow-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-balance">Our Mission</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe that the balance of body and spirit begins with comfort and ease in every movement. Our
              carefully curated collection brings together the finest eco-friendly materials and thoughtful design.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From sustainable yoga mats to premium accessories, each product is chosen to support your practice and
              enhance your journey toward wellness.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
