"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const products = [
  {
    name: "Manduka PRO",
    thickness: "6mm",
    grip: "Excellent",
    eco: true,
    warranty: "Lifetime",
  },
  {
    name: "Liforme",
    thickness: "4.2mm",
    grip: "Excellent",
    eco: true,
    warranty: "1 Year",
  },
  {
    name: "Gaiam",
    thickness: "5mm",
    grip: "Good",
    eco: false,
    warranty: "60 Days",
  },
]

export function ComparisonSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center mb-16"
        >
          Compare Top Mats
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-x-auto border-0 shadow-xl">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="p-4 text-left font-serif text-lg">Product</th>
                  <th className="p-4 text-left font-serif text-lg">Thickness</th>
                  <th className="p-4 text-left font-serif text-lg">Grip</th>
                  <th className="p-4 text-left font-serif text-lg">Eco-Friendly</th>
                  <th className="p-4 text-left font-serif text-lg">Warranty</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.name} className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">{product.name}</td>
                    <td className="p-4">{product.thickness}</td>
                    <td className="p-4">{product.grip}</td>
                    <td className="p-4">
                      {product.eco ? (
                        <Check className="w-5 h-5 text-primary" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground" />
                      )}
                    </td>
                    <td className="p-4">{product.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
