import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, MapPin, SearchIcon } from "lucide-react"

const trainers = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Strength & Conditioning",
    location: "New York, NY",
    rating: 4.9,
    reviews: 127,
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Weight Loss", "Muscle Building", "HIIT"],
    price: "$75",
    availability: ["In-person", "Virtual"],
  },
  {
    id: 2,
    name: "Michael Chen",
    specialty: "Yoga & Flexibility",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 93,
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Vinyasa Yoga", "Meditation", "Stretching"],
    price: "$65",
    availability: ["In-person", "Virtual"],
  },
  {
    id: 3,
    name: "David Williams",
    specialty: "Sports Performance",
    location: "Chicago, IL",
    rating: 4.7,
    reviews: 85,
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Athletic Training", "Speed & Agility", "Recovery"],
    price: "$80",
    availability: ["In-person"],
  },
  {
    id: 4,
    name: "Jessica Martinez",
    specialty: "Nutrition & Wellness",
    location: "Miami, FL",
    rating: 4.9,
    reviews: 112,
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Meal Planning", "Weight Management", "Holistic Health"],
    price: "$70",
    availability: ["Virtual"],
  },
  {
    id: 5,
    name: "Robert Kim",
    specialty: "Functional Training",
    location: "Seattle, WA",
    rating: 4.6,
    reviews: 78,
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Mobility", "Core Strength", "Injury Prevention"],
    price: "$85",
    availability: ["In-person", "Virtual"],
  },
  {
    id: 6,
    name: "Emily Davis",
    specialty: "Pilates & Barre",
    location: "Austin, TX",
    rating: 4.8,
    reviews: 95,
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Mat Pilates", "Reformer", "Posture Correction"],
    price: "$75",
    availability: ["In-person", "Virtual"],
  },
  {
    id: 7,
    name: "Marcus Johnson",
    specialty: "Bodybuilding",
    location: "Denver, CO",
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Hypertrophy", "Competition Prep", "Strength Training"],
    price: "$90",
    availability: ["In-person"],
  },
  {
    id: 8,
    name: "Olivia Wilson",
    specialty: "Prenatal & Postnatal Fitness",
    location: "Portland, OR",
    rating: 4.9,
    reviews: 102,
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Prenatal Yoga", "Postnatal Recovery", "Gentle Strength"],
    price: "$80",
    availability: ["In-person", "Virtual"],
  },
]

export default function TrainersPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Perfect Trainer</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Browse our network of certified personal trainers and find the right match for your fitness goals.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, specialty, or location..."
                  className="w-full bg-background pl-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[300px_1fr]">
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-xl font-semibold">Filters</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter city or zip code" />
                  </div>
                  <div className="space-y-2">
                    <Label>Price Range</Label>
                    <div className="space-y-4">
                      <Slider defaultValue={[50, 150]} min={20} max={200} step={5} />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">$20</span>
                        <span className="text-sm font-medium">$50 - $150</span>
                        <span className="text-sm">$200+</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Specialty</Label>
                    <div className="space-y-2">
                      {["Weight Loss", "Muscle Building", "Yoga", "Pilates", "Nutrition", "Sports Performance"].map(
                        (specialty) => (
                          <div key={specialty} className="flex items-center space-x-2">
                            <Checkbox id={specialty.toLowerCase().replace(/\s+/g, "-")} />
                            <label
                              htmlFor={specialty.toLowerCase().replace(/\s+/g, "-")}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {specialty}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Session Type</Label>
                    <div className="space-y-2">
                      {["In-person", "Virtual", "Home Visits"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={type.toLowerCase().replace(/\s+/g, "-")} />
                          <label
                            htmlFor={type.toLowerCase().replace(/\s+/g, "-")}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Rating</Label>
                    <Select defaultValue="4">
                      <SelectTrigger>
                        <SelectValue placeholder="Select minimum rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3+ Stars</SelectItem>
                        <SelectItem value="4">4+ Stars</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        <SelectItem value="5">5 Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Availability</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="evenings">Evenings</SelectItem>
                        <SelectItem value="mornings">Mornings</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  <span className="mr-2">{trainers.length} Trainers Available</span>
                </h2>
                <div className="flex items-center gap-2">
                  <Select defaultValue="recommended">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="rating-high">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {trainers.map((trainer) => (
                  <Card key={trainer.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={trainer.image || "/placeholder.svg"}
                        alt={trainer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold">{trainer.name}</h3>
                          <Badge variant="outline">{trainer.price}/hr</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{trainer.specialty}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          <span>{trainer.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {trainer.specialties.map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="ml-1 font-medium">{trainer.rating}</span>
                        <span className="ml-1 text-xs text-muted-foreground">({trainer.reviews} reviews)</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {trainer.availability.map((type) => (
                          <Badge key={type} variant="outline" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/trainers/${trainer.id}`}>View Profile</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

