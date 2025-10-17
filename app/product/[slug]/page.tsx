import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Product data - in a real app, this would come from a database
const products = [
  {
    name: "Manduka PRO Yoga Mat",
    slug: "manduka-pro-yoga-mat",
    image: "https://m.media-amazon.com/images/I/91WnKjpclwL._AC_SX679_.jpg",
    additionalImages: ["/manduka-mat-in-use-yoga-studio.jpg", "/manduka-mat-texture-close-up.jpg"],
    rating: 4.4,
    price: "$113.00",
    review:
      "Exceptional durability and grip. The lifetime guarantee and joint protection make this the perfect mat for serious practitioners. Worth every penny for long-term use.",
    reviewer: "Alex J.",
    description:
      "The Manduka PRO Yoga Mat is the gold standard for serious yogis. Its high-density 6mm cushioning offers unmatched joint protection and stability, while the closed-cell surface ensures hygiene by preventing moisture absorption. Backed by a lifetime guarantee, this mat is built to last through countless sessions.",
    features: [
      "High-density 6mm cushioning for joint support",
      "Closed-cell surface prevents sweat absorption",
      "Superior grip even when wet",
      "Lifetime guarantee",
      "Zero-waste, emissions-free manufacturing",
      "Oeko-Tex certified for safety",
    ],
    specifications: {
      dimensions: '71" x 26"',
      thickness: "6mm",
      weight: "7 lbs",
      material: "PVC",
    },
    amazonUrl: "https://www.amazon.com/Manduka-Yoga-Pilates-Black-Sage/dp/B005NZ7PEQ",
  },
  {
    name: "Liforme Inked Yoga Mat",
    slug: "liforme-inked-yoga-mat",
    image: "https://m.media-amazon.com/images/I/51lIvo5TnuL._AC_SX679_.jpg",
    additionalImages: ["/liforme-mat-alignment-markers-detail.jpg", "/liforme-mat-hot-yoga-session.jpg"],
    rating: 4.6,
    price: "$150.00",
    review:
      "Biodegradable and sweat-resistant with alignment markers that help perfect poses. Eco-friendly and grippy even in hot yoga sessions.",
    reviewer: "Jordan K.",
    description:
      "The Liforme Inked Yoga Mat combines eco-friendly materials with a revolutionary alignment system. Its biodegradable natural rubber and unique GripForMe surface provide exceptional traction, even during sweaty hot yoga sessions. The alignment markers guide precise positioning for enhanced practice.",
    features: [
      "Alignment marker system for perfect poses",
      "Biodegradable natural rubber",
      "GripForMe surface for superior traction",
      "Eco-friendly and non-toxic",
      "Sweat-resistant for hot yoga",
      "Lightweight and portable",
    ],
    specifications: {
      dimensions: '73" x 27"',
      thickness: "4.2mm",
      weight: "5.5 lbs",
      material: "Natural rubber",
    },
    amazonUrl: "https://www.amazon.com/Liforme-Inked-Yoga-Biodegradable-Sweat-resistant/dp/B0D1VQ8452",
  },
  {
    name: "JadeYoga Harmony Yoga Mat",
    slug: "jade-harmony-yoga-mat",
    image: "https://m.media-amazon.com/images/I/61Ut5qGMJXL._AC_SX679_.jpg",
    additionalImages: ["/jade-mat-natural-rubber-texture.jpg", "/jade-mat-outdoor-yoga-practice.jpg"],
    rating: 4.4,
    price: "$84.99",
    review:
      "Natural rubber provides unbeatable grip and cushioning. Sustainable choice that performs well in various practices, though initial smell fades with time.",
    reviewer: "Taylor M.",
    description:
      "The JadeYoga Harmony Yoga Mat is crafted from sustainable natural rubber, offering exceptional grip and cushioning. Made in the USA, it’s an eco-conscious choice that supports reforestation through a tree planted for every mat sold. Perfect for all yoga styles with a 5mm thickness for balance.",
    features: [
      "Sustainable natural rubber construction",
      "Superior grip for all yoga styles",
      "5mm thickness for balance and cushioning",
      "One tree planted per mat sold",
      "PVC-free and eco-friendly",
      "Made in the USA",
    ],
    specifications: {
      dimensions: '68" x 24"',
      thickness: "5mm",
      weight: "5 lbs",
      material: "Natural rubber",
    },
    amazonUrl: "https://www.amazon.com/JadeYoga-Yoga-Exercise-Stretching-Non-Slip/dp/B000EC7KW0",
  },
  {
    name: "PAETA Pilates Reformer Machine",
    slug: "paeta-pilates-reformer-machine",
    image: "https://m.media-amazon.com/images/I/61i4MZg2wML._AC_SX679_.jpg",
    additionalImages: ["/reformer-machine-in-home-studio.jpg", "/reformer-carriage-springs-detail.jpg"],
    rating: 4.5,
    price: "$679.99",
    review:
      "Professional-grade for home use with smooth carriage and adjustable resistance. Transforms workouts, though assembly takes time.",
    reviewer: "Casey L.",
    description:
      "The PAETA Pilates Reformer Machine brings studio-quality workouts home. Featuring a solid oak frame, smooth-gliding carriage, and adjustable springs, it supports up to 500 lbs. With included accessories like a sitting box and jump board, it’s perfect for beginners and experts alike.",
    features: [
      "Solid oak frame for durability",
      "Smooth-gliding carriage with foam padding",
      "12-gear spring system for adjustable resistance",
      "Includes sitting box, jump board, and accessories",
      "Foldable for easy storage",
      "Supports up to 500 lbs",
    ],
    specifications: {
      dimensions: '92" x 26" x 14"',
      weight: "120 lbs",
      "weight capacity": "500 lbs",
      material: "Oak wood and aluminum",
    },
    amazonUrl: "https://www.amazon.com/Reformer-PAETA-Foldable-Equipment-Accessories/dp/B0D7M7JNFV",
  },
  {
    name: "Syntus Yoga Block and Strap Set",
    slug: "syntus-yoga-block-strap-set",
    image: "https://m.media-amazon.com/images/I/61iMXcdFasL._AC_SX679_PIcountsize-3,TopRight,0,0_SH20_.jpg",
    additionalImages: ["/yoga-blocks-supporting-pose.jpg", "/yoga-strap-stretching-exercise.jpg"],
    rating: 4.8,
    price: "$15.99",
    review:
      "Sturdy EVA foam blocks with non-slip surface and durable strap. Great for deepening stretches and maintaining alignment in yoga and Pilates.",
    reviewer: "Morgan P.",
    description:
      "The Syntus Yoga Block and Strap Set is perfect for enhancing yoga and Pilates practice. The high-density EVA foam blocks provide stable support, while the 8ft poly-cotton strap with a D-ring buckle aids in deepening stretches and improving flexibility. Includes an instruction book for beginners.",
    features: [
      "High-density EVA foam blocks",
      "Non-slip surface for stability",
      "8ft poly-cotton strap with D-ring buckle",
      "Beveled edges for comfortable grip",
      "Includes instruction book",
      "Durable and easy to clean",
    ],
    specifications: {
      blockDimensions: '9" x 6" x 4"',
      strapLength: "8 feet",
      strapWidth: "1.5 inches",
      material: "EVA foam and poly-cotton",
    },
    amazonUrl: "https://www.amazon.com/Syntus-Non-Slip-General-Stretching-Workouts/dp/B085TD4ZKR",
  },
  {
    name: "GHB Gymnastic Rings",
    slug: "ghb-gymnastic-rings",
    image: "https://m.media-amazon.com/images/I/71UW77JqzwL._AC_SX679_.jpg",
    additionalImages: ["/gymnastic-rings-workout-dips.jpg", "/gymnastic-rings-mounting-setup.jpg"],
    rating: 4.5,
    price: "$39.99",
    review:
      "Adjustable straps and durable rings for bodyweight training. Excellent for building strength, though setup requires sturdy mounting.",
    reviewer: "Riley S.",
    description:
      "The GHB Gymnastic Rings offer a versatile solution for bodyweight training. Made from durable ABS material with adjustable nylon straps, they’re perfect for strength exercises like dips and pull-ups. Ideal for home or gym use, they require a sturdy anchor for safe setup.",
    features: [
      "Durable ABS rings for strength training",
      "Adjustable 15ft nylon straps",
      "Supports up to 600 lbs",
      "Textured surface for better grip",
      "Portable for home or gym use",
      "Includes setup guide",
    ],
    specifications: {
      ringDiameter: "9.25 inches",
      strapLength: "15 feet",
      weightCapacity: "600 lbs",
      material: "ABS plastic and nylon",
    },
    amazonUrl: "https://www.amazon.com/GHB-Gymnastic-Training-RingsAdjustable-Bodyweight/dp/B0B6C4N3XP",
  },
  {
    name: "Stretching Strap with Loops",
    slug: "stretching-strap-loops",
    image: "https://m.media-amazon.com/images/I/81yFA8fjcbL._AC_SX679_.jpg",
    additionalImages: ["/stretching-strap-loops-leg-stretch.jpg", "/stretching-strap-physical-therapy.jpg"],
    rating: 4.7,
    price: "$19.95",
    review:
      "Non-elastic strap with numbered loops for precise stretching. Ideal for physical therapy and flexibility improvement, comfortable and durable.",
    reviewer: "Jordan T.",
    description:
      "This Stretching Strap with Loops is designed for precise flexibility training. Featuring 10 or 12 numbered loops and durable nylon with neoprene padding, it’s ideal for physical therapy, yoga, and stretching. The included guide helps beginners and experts improve range of motion.",
    features: [
      "10 or 12 numbered loops for precision",
      "Durable nylon with neoprene padding",
      "Non-elastic for controlled stretching",
      "Includes free stretching guide",
      "Portable with carrying bag",
      "Suitable for all fitness levels",
    ],
    specifications: {
      length: '78" or 96"',
      width: "1.5 inches",
      material: "Nylon with neoprene padding",
    },
    amazonUrl: "https://www.amazon.com/Stretching-Physical-Therapy-Exercise-Flexibility/dp/B076MSZZ9L",
  },
  {
    name: "OPTP Original Stretch Out Strap",
    slug: "optp-stretch-out-strap",
    image: "https://m.media-amazon.com/images/I/719dg2bMHvL._AC_SX679_.jpg",
    additionalImages: ["/optp-strap-hamstring-stretch.jpg", "/optp-strap-exercise-book-guide.jpg"],
    rating: 4.7,
    price: "$15.95",
    review:
      "Durable nylon strap with exercise book for guided stretches. Excellent for physical therapy and yoga, made in the USA with strong construction.",
    reviewer: "Alex V.",
    description:
      "The OPTP Original Stretch Out Strap, made in the USA, is a trusted tool for physical therapy and yoga. Its 6ft woven nylon design with 10 loops allows for targeted stretching, and the included exercise book provides over 30 guided stretches for improved flexibility and recovery.",
    features: [
      "6ft woven nylon with 10 loops",
      "Includes exercise book with 30+ stretches",
      "Made in the USA",
      "Durable for long-term use",
      "Ideal for physical therapy and yoga",
      "Supports contract-relax stretches",
    ],
    specifications: {
      length: "6 feet",
      width: "1 inch",
      material: "Woven nylon",
    },
    amazonUrl: "https://www.amazon.com/Original-Stretch-Strap-Exercise-OPTP/dp/B00065X222",
  },
  {
    name: "ProBody Pilates Exercise Ball",
    slug: "probody-pilates-exercise-ball",
    image: "https://m.media-amazon.com/images/I/816BIBf-+ZL._AC_SX679_.jpg",
    additionalImages: ["/exercise-ball-core-workout.jpg", "/exercise-ball-office-chair-use.jpg"],
    rating: 4.5,
    price: "$17.95",
    review:
      "Anti-burst stability ball for workouts and therapy. Versatile for core strengthening and balance, with easy inflation and grippy surface.",
    reviewer: "Casey W.",
    description:
      "The ProBody Pilates Exercise Ball is a versatile fitness tool for yoga, Pilates, and physical therapy. Made from anti-burst PVC, it supports up to 600 lbs and features a grippy surface for safety. Available in multiple sizes, it’s perfect for core workouts, pregnancy, or office chair use.",
    features: [
      "Anti-burst PVC material",
      "Supports up to 600 lbs",
      "Grippy surface for safety",
      "Includes inflation pump",
      "Available in multiple sizes (45cm to 85cm)",
      "Ideal for pregnancy and office use",
    ],
    specifications: {
      sizes: "45cm, 55cm, 65cm, 75cm, 85cm",
      material: "PVC",
      weightCapacity: "600 lbs",
    },
    amazonUrl: "https://www.amazon.com/ProBody-Pilates-Exercise-Ball-65cm/dp/B010TIO30U",
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            {" / "}
            <Link href="/reviews" className="hover:text-primary transition-colors">
              Reviews
            </Link>
            {" / "}
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images Gallery */}
            <div className="space-y-4">
              {/* Main Product Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Two Additional Product Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={product.additionalImages?.[0] || "/placeholder.svg?height=400&width=400"}
                    alt={`${product.name} in use`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < product.rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">({product.rating}.0)</span>
              </div>

              {/* Price */}
              

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  asChild
                >
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy on Amazon
                  </a>
                </Button>
              </div>

              {/* Review Quote */}
              <div className="bg-secondary/30 rounded-2xl p-6 border border-primary/10">
                <p className="text-lg italic mb-3">"{product.review}"</p>
                <p className="font-medium">— {product.reviewer}</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl mb-6">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-6">Specifications</h2>
              <dl className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-border pb-2">
                    <dt className="font-medium capitalize">{key}:</dt>
                    <dd className="text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Back to Reviews */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="rounded-full bg-transparent" asChild>
              <Link href="/reviews">← Back to All Reviews</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
