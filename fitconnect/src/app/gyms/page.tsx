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
import { Star, MapPin, SearchIcon, Users } from "lucide-react"

const gyms = [
  {
    id: 1,
    name: "FitLife Gym",
    location: "New York, NY",
    rating: 4.8,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=600",
    amenities: ["24/7 Access", "Personal Training", "Group Classes", "Pool"],
    price: "From $49/mo",
    trainers: 12,
  },
  {
    id: 2,
    name: "PowerHouse Fitness",
    location: "Los Angeles, CA",
    rating: 4.7,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=600",
    amenities: ["Strength Training", "Cardio Equipment", "Sauna", "Locker Rooms"],
    price: "From $59/mo",
    trainers: 8,
  },
  {
    id: 3,
    name: "Elite Training Center",
    location: "Chicago, IL",
    rating: 4.9,
    reviews: 98,
    image: "/placeholder.svg?height=300&width=600",
    amenities: ["Olympic Lifting", "CrossFit", "Recovery Zone", "Nutrition Bar"],
    price: "From $79/mo",
    trainers: 15,
  },
  {
    id: 4,
    name: "Wellness Hub",
    location: "Miami, FL",
    rating: 4.6,
    reviews: 87,
    image: "/placeholder.svg?height=300&width=600",
    amenities: ["Yoga Studio", "Pilates", "Meditation Room", "Massage Therapy"],
    price: "From $65/mo",
    trainers: 10,
  },
  {
    id: 5,
    name: "Iron Athletics",
    location: "Seattle, WA",
    rating: 4.7,
    reviews: 112,
    image: "/placeholder.svg?height=300&width=600",
    amenities: ["Powerlifting", "Bodybuilding", "Cardio Cinema", "Smoothie Bar"],
    price: "From $55/mo",
    trainers: 9,
  },
  {
    id: 6,
    name: "Flex Fitness",
    location: "Austin, TX",
    rating: 4.8,
    reviews: 103,
    image: "/placeholder.svg?height=300&width=600",
    amenities: ["Group Classes", "Personal Training", "Childcare", "Basketball Court"],
    price: "From $69/mo",
    trainers: 14,
  },
]

export default function GymsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Perfect Gym</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover top fitness facilities in your area with state-of-the-art equipment and amenities.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name or location..."
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
                    <Label>Amenities</Label>
                    <div className="space-y-2">
                      {["24/7 Access", "Personal Training", "Group Classes", "Pool", "Sauna", "Childcare"].map(
                        (amenity) => (
                          <div key={amenity} className="flex items-center space-x-2">
                            <Checkbox id={amenity.toLowerCase().replace(/\s+/g, "-")} />
                            <label
                              htmlFor={amenity.toLowerCase().replace(/\s+/g, "-")}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {amenity}
                            </label>
                          </div>
                        ),
                      )}
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
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  <span className="mr-2">{gyms.length} Gyms Available</span>
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
                {gyms.map((gym) => (
                  <Card key={gym.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={gym.image || "/placeholder.svg"} alt={gym.name} fill className="object-cover" />
                    </div>
                    <CardHeader className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold">{gym.name}</h3>
                          <Badge variant="outline">{gym.price}</Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          <span>{gym.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {gym.amenities.slice(0, 3).map((amenity) => (
                          <Badge key={amenity} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {gym.amenities.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{gym.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="ml-1 font-medium">{gym.rating}</span>
                        <span className="ml-1 text-xs text-muted-foreground">({gym.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>{gym.trainers} Trainers Available</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/gyms/${gym.id}`}>View Details</Link>
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

