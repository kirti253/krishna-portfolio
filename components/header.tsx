"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary">
          SunMac <span className="text-accent">Edits</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
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

        <Button className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">Get Quote</Button>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-4">
          <nav className="flex flex-col gap-4">
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
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">Get Quote</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
