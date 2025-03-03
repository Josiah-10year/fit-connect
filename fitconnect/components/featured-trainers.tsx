import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin } from "lucide-react"

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
  },
]

export default function FeaturedTrainers() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {trainers.map((trainer) => (
        <Card key={trainer.id} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={trainer.image || "/placeholder.svg"} alt={trainer.name} fill className="object-cover" />
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
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="ml-1 font-medium">{trainer.rating}</span>
              <span className="ml-1 text-xs text-muted-foreground">({trainer.reviews} reviews)</span>
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
  )
}

