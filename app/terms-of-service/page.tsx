import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl mb-8 text-center">Terms of Service</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Agreement to Terms</h2>
            <p>
              By accessing and using Best Pilates Anytime ("the Website"), you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Best
              Pilates Anytime's website for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Affiliate Disclaimer</h2>
            <p>
              Best Pilates Anytime is a participant in the Amazon Services LLC Associates Program, an affiliate
              advertising program designed to provide a means for sites to earn advertising fees by advertising and
              linking to Amazon.com. We may receive compensation when you click on links to products we recommend.
            </p>
            <p>
              While we strive to provide accurate product information and honest reviews, we make no representations or
              warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or
              availability of the products or services mentioned on the Website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Product Information</h2>
            <p>
              The product reviews and recommendations on this Website are based on our research and experience. However,
              individual results may vary. We are not responsible for the quality, safety, or performance of products
              purchased through affiliate links. All purchases are subject to the terms and conditions of the respective
              retailers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Disclaimer</h2>
            <p>
              The materials on Best Pilates Anytime's website are provided on an 'as is' basis. Best Pilates Anytime
              makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Limitations</h2>
            <p>
              In no event shall Best Pilates Anytime or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Best Pilates Anytime's website, even if Best Pilates Anytime or a Best
              Pilates Anytime authorized representative has been notified orally or in writing of the possibility of
              such damage.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Accuracy of Materials</h2>
            <p>
              The materials appearing on Best Pilates Anytime's website could include technical, typographical, or
              photographic errors. Best Pilates Anytime does not warrant that any of the materials on its website are
              accurate, complete or current. Best Pilates Anytime may make changes to the materials contained on its
              website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Links</h2>
            <p>
              Best Pilates Anytime has not reviewed all of the sites linked to its website and is not responsible for
              the contents of any such linked site. The inclusion of any link does not imply endorsement by Best Pilates
              Anytime of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Modifications</h2>
            <p>
              Best Pilates Anytime may revise these terms of service for its website at any time without notice. By
              using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us through our contact page or
              email us at legal@bestpilatesanytime.com.
            </p>
          </section>

          <p className="text-sm italic mt-8">Last updated: January 2025</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
