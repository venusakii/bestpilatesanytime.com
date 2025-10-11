import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CategorySection } from "@/components/category-section"
import { FeaturedProduct } from "@/components/featured-product"
import { BenefitsSection } from "@/components/benefits-section"
import { ReviewsSection } from "@/components/reviews-section"
import { VideoSection } from "@/components/video-section"
import { ComparisonSection } from "@/components/comparison-section"
import { GallerySection } from "@/components/gallery-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CookieNotice } from "@/components/cookie-notice"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <FeaturedProduct />
      <BenefitsSection />
      <ReviewsSection />
      <VideoSection />
      <ComparisonSection />
      <GallerySection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
      <CookieNotice />
    </main>
  )
}
