"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const productReviews = [
  {
    name: "Manduka PRO Yoga Mat",
    slug: "manduka-pro-yoga-mat",
    image: "https://m.media-amazon.com/images/I/91WnKjpclwL._AC_SX679_.jpg",
    rating: 4.4,
    price: "$113.00",
    review:
      "Exceptional durability and grip. The lifetime guarantee and joint protection make this the perfect mat for serious practitioners. Worth every penny for long-term use.",
    reviewer: "Alex J.",
  },
  {
    name: "Liforme Inked Yoga Mat",
    slug: "liforme-inked-yoga-mat",
    image: "https://m.media-amazon.com/images/I/51lIvo5TnuL._AC_SX679_.jpg",
    rating: 4.6,
    price: "$150.00",
    review:
      "Biodegradable and sweat-resistant with alignment markers that help perfect poses. Eco-friendly and grippy even in hot yoga sessions.",
    reviewer: "Jordan K.",
  },
  {
    name: "JadeYoga Harmony Yoga Mat",
    slug: "jade-harmony-yoga-mat",
    image: "https://m.media-amazon.com/images/I/61Ut5qGMJXL._AC_SX679_.jpg",
    rating: 4.4,
    price: "$84.99",
    review:
      "Natural rubber provides unbeatable grip and cushioning. Sustainable choice that performs well in various practices, though initial smell fades with time.",
    reviewer: "Taylor M.",
  },
  {
    name: "Pilates Reformer Machine",
    slug: "pilates-reformer-machine",
    image: "https://m.media-amazon.com/images/I/61i4MZg2wML._AC_SX679_.jpg",
    rating: 4.5,
    price: "$679.99",
    review:
      "Professional-grade for home use with smooth carriage and adjustable resistance. Transforms workouts, though assembly takes time.",
    reviewer: "Casey L.",
  },
  {
    name: "Syntus Yoga Block and Strap Set",
    slug: "syntus-yoga-block-strap-set",
    image: "https://m.media-amazon.com/images/I/61iMXcdFasL._AC_SX679_PIcountsize-3,TopRight,0,0_SH20_.jpg",
    rating: 4.8,
    price: "$15.99",
    review:
      "Sturdy EVA foam blocks with non-slip surface and durable strap. Great for deepening stretches and maintaining alignment in yoga and Pilates.",
    reviewer: "Morgan P.",
  },
  {
    name: "GHB Gymnastic Rings",
    slug: "ghb-gymnastic-rings",
    image: "https://m.media-amazon.com/images/I/71UW77JqzwL._AC_SX679_.jpg",
    rating: 4.5,
    price: "$39.99",
    review:
      "Adjustable straps and durable rings for bodyweight training. Excellent for building strength, though setup requires sturdy mounting.",
    reviewer: "Riley S.",
  },
  {
    name: "Stretching Strap with Loops",
    slug: "stretching-strap-loops",
    image: "https://m.media-amazon.com/images/I/81yFA8fjcbL._AC_SX679_.jpg",
    rating: 4.7,
    price: "$19.95",
    review:
      "Non-elastic strap with numbered loops for precise stretching. Ideal for physical therapy and flexibility improvement, comfortable and durable.",
    reviewer: "Jordan T.",
  },
  {
    name: "OPTP Original Stretch Out Strap",
    slug: "optp-stretch-out-strap",
    image: "https://m.media-amazon.com/images/I/719dg2bMHvL._AC_SX679_.jpg",
    rating: 4.7,
    price: "$15.95",
    review:
      "Durable nylon strap with exercise book for guided stretches. Excellent for physical therapy and yoga, made in the USA with strong construction.",
    reviewer: "Alex V.",
  },
  {
    name: "ProBody Pilates Exercise Ball",
    slug: "probody-pilates-exercise-ball",
    image: "https://m.media-amazon.com/images/I/816BIBf-+ZL._AC_SX679_.jpg",
    rating: 4.5,
    price: "$17.95",
    review:
      "Anti-burst stability ball for workouts and therapy. Versatile for core strengthening and balance, with easy inflation and grippy surface.",
    reviewer: "Casey W.",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center mb-4"
        >
          Product Reviews
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Honest reviews from our community of Pilates and Yoga practitioners
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productReviews.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl mb-3 text-foreground">{product.name}</h3>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-grow text-sm">"{product.review}"</p>

                  {/* Reviewer */}
                  <p className="font-medium text-sm mb-4">— {product.reviewer}</p>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors bg-transparent"
                    asChild
                  >
                    <Link href={`/product/${product.slug}`}>View Product</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
