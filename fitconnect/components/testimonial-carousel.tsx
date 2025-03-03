"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Marketing Executive",
    content:
      "Working with my trainer from FitConnect completely transformed my fitness journey. I've lost 30 pounds and gained so much confidence. The personalized approach made all the difference!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Software Engineer",
    content:
      "As someone with a busy schedule, finding a trainer who could accommodate my needs was challenging until I discovered FitConnect. The platform made it easy to find the perfect match for my goals and availability.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Teacher",
    content:
      "I've tried many fitness platforms, but FitConnect stands out with its quality trainers and seamless booking experience. My trainer understands my goals and pushes me to achieve more than I thought possible.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative mt-10 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <Card className="border-none bg-muted/50 shadow-sm">
          <CardContent className="p-6 sm:p-10">
            <Quote className="h-12 w-12 text-primary/20" />
            <div className="mt-4 space-y-6">
              <p className="text-lg font-medium leading-relaxed md:text-xl">{testimonials[currentIndex].content}</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6 flex justify-center gap-2">
          <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant={index === currentIndex ? "default" : "outline"}
              size="icon"
              className="h-2 w-2 rounded-full p-0"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
          <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

