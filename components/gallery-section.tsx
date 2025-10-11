"use client"

import { motion } from "framer-motion"

const images = [
  {
    src: "/minimalist-yoga-studio-interior.jpg",
    quote: "Find your center",
  },
  {
    src: "/woman-meditating-on-yoga-mat.jpg",
    quote: "Breathe deeply",
  },
  {
    src: "/yoga-accessories-arranged-beautifully.jpg",
    quote: "Practice mindfully",
  },
  {
    src: "/peaceful-home-yoga-space.jpg",
    quote: "Create balance",
  },
  {
    src: "/pilates-equipment-in-natural-light.jpg",
    quote: "Move with intention",
  },
  {
    src: "/yoga-mat-rolled-up-with-plants.jpg",
    quote: "Embrace stillness",
  },
]

export function GallerySection() {
  return (
    <section id="explore" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center mb-16"
        >
          Inspiration Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.quote}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                <p className="font-serif text-white text-lg italic text-pretty">{image.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
