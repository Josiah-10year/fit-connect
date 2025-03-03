import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col gap-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">FitConnect</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your fitness journey, powered by connection. Find certified trainers, top gyms, and a supportive
              community.
            </p>
            <div className="mt-4">
              <h4 className="mb-2 font-medium">Join our newsletter</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">For Clients</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trainers" className="text-muted-foreground hover:text-foreground">
                  Find a Trainer
                </Link>
              </li>
              <li>
                <Link href="/gyms" className="text-muted-foreground hover:text-foreground">
                  Explore Gyms
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Fitness Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">For Trainers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trainers/join" className="text-muted-foreground hover:text-foreground">
                  Join as a Trainer
                </Link>
              </li>
              <li>
                <Link href="/trainers/resources" className="text-muted-foreground hover:text-foreground">
                  Trainer Resources
                </Link>
              </li>
              <li>
                <Link href="/trainers/success" className="text-muted-foreground hover:text-foreground">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/trainers/faq" className="text-muted-foreground hover:text-foreground">
                  Trainer FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} FitConnect. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

