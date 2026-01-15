"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* CTA Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Tell Your Story</h2>
            <p className="text-muted-foreground">Because in healthcare, trust is the real metric.</p>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">From 10M+ Views to One Call Away.</h3>
              <p className="text-muted-foreground mb-6">
                Let&apos;s turn your expertise into content that educates, inspires, and builds lasting patient trust.
              </p>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">View Portfolio</Button>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Write us your message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">First Name*</label>
                  <Input placeholder="First name" className="bg-background" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Last name*</label>
                  <Input placeholder="Last name" className="bg-background" />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email*</label>
                <Input type="email" placeholder="Email" className="bg-background" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message*</label>
                <Textarea placeholder="Your message" className="bg-background min-h-32" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="agree" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
                <label htmlFor="agree" className="text-sm text-muted-foreground">
                  I agree to be contacted by Manjot&apos;s team.
                </label>
              </div>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
