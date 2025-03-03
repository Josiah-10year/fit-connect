import { Calendar, Dumbbell, Search } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How FitConnect Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Find your perfect fitness match in just a few simple steps.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold">1. Find Your Match</h3>
            <p className="mt-2 text-muted-foreground">
              Search for trainers based on your goals, location, budget, and preferences. Our smart matching algorithm
              helps you find the perfect fit.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold">2. Book Sessions</h3>
            <p className="mt-2 text-muted-foreground">
              Schedule sessions at your convenience, whether in-person at a gym, at home, or virtually. Manage your
              calendar and payments all in one place.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Dumbbell className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold">3. Achieve Your Goals</h3>
            <p className="mt-2 text-muted-foreground">
              Work with your trainer to track progress, celebrate milestones, and adjust your plan as needed. Join our
              community for additional support and motivation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

