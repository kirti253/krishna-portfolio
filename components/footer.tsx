import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* CTA Banner */}
        <div className="bg-accent text-accent-foreground rounded-2xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">10M+ Views. 120+ Hospitals. One Call Away.</h2>
          <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto">
            Join 120+ hospitals and doctors who trust MacEdits to craft videos, posts, and campaigns that turn
            credibility into visibility.
          </p>
          <Button className="bg-background text-foreground hover:bg-background/90">Get Started</Button>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <a href="#" className="text-xl font-bold">
            SunMac <span className="text-accent">Edits</span>
          </a>

          <nav className="flex items-center gap-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-muted-foreground text-sm">© 2026 SunMac Edits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
