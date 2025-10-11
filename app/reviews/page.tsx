import { Navigation } from "@/components/navigation"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  )
}
