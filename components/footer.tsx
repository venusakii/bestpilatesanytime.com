import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Best Pilates Anytime</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for premium yoga and pilates equipment.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 Best Pilates Anytime. All rights reserved.</p>
          <p className="leading-relaxed">
            🛒 As an Amazon Associate, we earn from qualifying purchases. This helps us continue providing quality
            content and recommendations.
          </p>
        </div>
      </div>
    </footer>
  )
}
