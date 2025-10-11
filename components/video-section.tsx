"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

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
          <img src="/yoga-instructor-teaching-pilates-class-in-bright-s.jpg" alt="Video thumbnail" className="w-full h-auto" />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button
                size="lg"
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 animate-pulse"
              >
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
