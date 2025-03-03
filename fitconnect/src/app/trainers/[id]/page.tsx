import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, CheckCircle, Clock, MapPin, MessageSquare, Star, Video } from "lucide-react"

export default function TrainerProfilePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the trainer data based on the ID
  const trainer = {
    id: params.id,
    name: "Sarah Johnson",
    specialty: "Strength & Conditioning",
    location: "New York, NY",
    rating: 4.9,
    reviews: 127,
    image: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=300&width=1200",
    bio: "Certified personal trainer with 8+ years of experience helping clients achieve their fitness goals. Specializing in strength training, weight loss, and athletic performance. My approach focuses on sustainable lifestyle changes and personalized workout programs tailored to your unique needs and goals.",
    specialties: ["Weight Loss", "Muscle Building", "HIIT", "Functional Training", "Nutrition Coaching"],
    certifications: ["NASM Certified Personal Trainer", "ACE Fitness Nutrition Specialist", "TRX Suspension Training"],
    price: "$75",
    availability: ["In-person", "Virtual"],
    education: "Bachelor's in Exercise Science, University of Michigan",
    experience: "8+ years",
    languages: ["English", "Spanish"],
    schedule: [
      { day: "Monday", hours: "6:00 AM - 8:00 PM" },
      { day: "Tuesday", hours: "6:00 AM - 8:00 PM" },
      { day: "Wednesday", hours: "6:00 AM - 8:00 PM" },
      { day: "Thursday", hours: "6:00 AM - 8:00 PM" },
      { day: "Friday", hours: "6:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    testimonials: [
      {
        id: 1,
        name: "John D.",
        content:
          "Sarah is an amazing trainer! She helped me lose 30 pounds in 6 months with her personalized workout plans and nutrition advice. Highly recommend!",
        rating: 5,
      },
      {
        id: 2,
        name: "Michelle T.",
        content:
          "I've been training with Sarah for over a year now. She's knowledgeable, motivating, and always pushes me to do my best. My strength has improved significantly.",
        rating: 5,
      },
      {
        id: 3,
        name: "Robert K.",
        content:
          "Sarah's approach to fitness is holistic and effective. She tailors workouts to my specific needs and is always available to answer questions.",
        rating: 4,
      },
    ],
    packages: [
      {
        id: 1,
        name: "Single Session",
        price: "$75",
        description: "One-on-one personal training session (60 minutes)",
        features: ["Personalized workout", "Form correction", "Progress tracking"],
      },
      {
        id: 2,
        name: "5-Session Package",
        price: "$350",
        description: "Five personal training sessions (60 minutes each)",
        features: ["Personalized workout plan", "Nutrition guidance", "Progress tracking", "Email support"],
        popular: true,
      },
      {
        id: 3,
        name: "10-Session Package",
        price: "$650",
        description: "Ten personal training sessions (60 minutes each)",
        features: [
          "Comprehensive fitness assessment",
          "Customized workout plan",
          "Detailed nutrition plan",
          "Weekly check-ins",
          "24/7 messaging support",
        ],
      },
    ],
  }

  return (
    <div className="flex flex-col">
      {/* Cover Image */}
      <div className="relative h-48 w-full md:h-64 lg:h-80">
        <Image
          src={trainer.coverImage || "/placeholder.svg"}
          alt={`${trainer.name} cover`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[300px_1fr] lg:gap-12">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="relative -mt-20 h-40 w-40 overflow-hidden rounded-full border-4 border-background md:-mt-24 md:h-48 md:w-48">
              <Image
                src={trainer.image || "/placeholder.svg"}
                alt={trainer.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold md:text-3xl">{trainer.name}</h1>
              <p className="text-muted-foreground">{trainer.specialty}</p>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{trainer.location}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="ml-1 font-medium">{trainer.rating}</span>
                <span className="ml-1 text-sm text-muted-foreground">({trainer.reviews} reviews)</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {trainer.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Certifications</h3>
              <ul className="space-y-1">
                {trainer.certifications.map((certification) => (
                  <li key={certification} className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">{certification}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Training Options</h3>
              <div className="flex flex-wrap gap-2">
                {trainer.availability.map((type) => (
                  <Badge key={type} variant="outline">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Additional Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Experience:</span>
                </div>
                <div>{trainer.experience}</div>
                <div>
                  <span className="text-muted-foreground">Education:</span>
                </div>
                <div>{trainer.education}</div>
                <div>
                  <span className="text-muted-foreground">Languages:</span>
                </div>
                <div>{trainer.languages.join(", ")}</div>
              </div>
            </div>
            <div className="space-y-4">
              <Button className="w-full" size="lg">
                Book a Session
              </Button>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="packages">Packages</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">About Me</h2>
                  <p className="leading-relaxed">{trainer.bio}</p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">My Approach</h2>
                  <p className="leading-relaxed">
                    I believe that fitness should be accessible and enjoyable for everyone. My training philosophy
                    centers around creating sustainable habits that fit into your lifestyle. I'll work with you to
                    develop a personalized plan that addresses your specific goals, whether that's weight loss, muscle
                    gain, improved athletic performance, or overall wellness.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">What to Expect</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <div>
                        <span className="font-medium">Initial Assessment:</span> We'll start with a comprehensive
                        fitness assessment to understand your current level, goals, and any limitations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <div>
                        <span className="font-medium">Customized Plan:</span> Based on your assessment, I'll create a
                        personalized workout and nutrition plan tailored to your specific needs.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <div>
                        <span className="font-medium">Regular Progress Tracking:</span> We'll monitor your progress
                        regularly and adjust your plan as needed to ensure you're always moving toward your goals.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <div>
                        <span className="font-medium">Ongoing Support:</span> I'm available for questions and guidance
                        between sessions to keep you motivated and on track.
                      </div>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="packages" className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {trainer.packages.map((pkg) => (
                    <Card key={pkg.id} className={pkg.popular ? "border-primary" : ""}>
                      {pkg.popular && (
                        <div className="absolute right-4 top-0 translate-y-[-50%] rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                          Most Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{pkg.name}</CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-3xl font-bold">{pkg.price}</div>
                        <ul className="space-y-2">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <div className="p-6 pt-0">
                        <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                          Select Package
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="schedule" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Availability</h2>
                  <p className="text-muted-foreground">
                    Below are my general availability hours. Please book a session to see specific time slots.
                  </p>
                </div>
                <div className="space-y-4">
                  {trainer.schedule.map((item) => (
                    <div key={item.day} className="flex items-center justify-between border-b pb-2">
                      <div className="font-medium">{item.day}</div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{item.hours}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book In-Person Session
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Video className="mr-2 h-4 w-4" />
                    Book Virtual Session
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Client Reviews</h2>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="ml-1 font-medium">{trainer.rating}</span>
                    <span className="ml-1 text-sm text-muted-foreground">({trainer.reviews} reviews)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {trainer.testimonials.map((testimonial) => (
                    <Card key={testimonial.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-muted-foreground">{testimonial.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  View All Reviews
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

