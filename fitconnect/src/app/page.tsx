import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, MapPin, Star } from "lucide-react"
import FeaturedTrainers from "@/components/featured-trainers"
import TestimonialCarousel from "@/components/testimonial-carousel"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_0.8fr]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex" variant="outline">
                  Your Fitness Journey, Powered by Connection
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Find Your Perfect <span className="text-primary">Fitness Match</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with certified personal trainers and top gyms to achieve your fitness goals. Book sessions,
                  track progress, and join a community of fitness enthusiasts.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/trainers">
                    Find a Trainer <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/gyms">Explore Gyms</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Verified Trainers</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Secure Booking</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Money-back Guarantee</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full md:h-[400px] lg:h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Personal trainer working with a client"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/50">
        <div className="container px-4 py-10 md:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-3xl font-bold md:text-4xl">2,500+</div>
              <div className="text-sm font-medium text-muted-foreground">Certified Trainers</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-3xl font-bold md:text-4xl">500+</div>
              <div className="text-sm font-medium text-muted-foreground">Partner Gyms</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-3xl font-bold md:text-4xl">50,000+</div>
              <div className="text-sm font-medium text-muted-foreground">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-3xl font-bold md:text-4xl">4.8/5</div>
              <div className="text-sm font-medium text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Featured Trainers Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Trainers</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover top-rated personal trainers ready to help you achieve your fitness goals.
              </p>
            </div>
          </div>
          <FeaturedTrainers />
          <div className="mt-10 flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/trainers">View All Trainers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gym Partners Section */}
      <section className="py-12 bg-muted/30 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Gym Partners</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore top fitness facilities in your area with state-of-the-art equipment and amenities.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((gym) => (
              <Card key={gym} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Gym ${gym}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>FitLife Gym {gym}</CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span className="text-sm">New York, NY</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">24/7 Access</Badge>
                    <Badge variant="secondary">Personal Training</Badge>
                    <Badge variant="secondary">Group Classes</Badge>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="ml-2 text-sm text-muted-foreground">(120 reviews)</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/gyms/${gym}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/gyms">View All Gyms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from our community members who have transformed their lives with FitConnect.
              </p>
            </div>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Fitness Journey?
              </h2>
              <p className="max-w-[700px] md:text-xl">
                Join thousands of fitness enthusiasts who have found their perfect match on FitConnect.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">
                  Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <Link href="/trainers">Browse Trainers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

