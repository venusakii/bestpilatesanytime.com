import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl mb-8 text-center">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Introduction</h2>
            <p>
              At Best Pilates Anytime, we respect your privacy and are committed to protecting your personal data. This
              privacy policy will inform you about how we look after your personal data when you visit our website and
              tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Information We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped
              together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes email address and telephone numbers.</li>
              <li>
                Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and
                location.
              </li>
              <li>Usage Data includes information about how you use our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">How We Use Your Information</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal
              data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Amazon Affiliate Disclosure</h2>
            <p>
              Best Pilates Anytime is a participant in the Amazon Services LLC Associates Program, an affiliate
              advertising program designed to provide a means for sites to earn advertising fees by advertising and
              linking to Amazon.com. When you click on product links and make a purchase, we may earn a commission at no
              additional cost to you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our website and hold certain
              information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data
              to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Your Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data,
              including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our contact page or email
              us at privacy@bestpilatesanytime.com.
            </p>
          </section>

          <p className="text-sm italic mt-8">Last updated: January 2025</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
