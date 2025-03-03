"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Dumbbell } from "lucide-react"

export default function SignupPage() {
  const [userType, setUserType] = useState("client")

  return (
    <div className="container flex h-screen max-w-screen-xl items-center justify-center px-4 py-12 md:px-6">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center">
            <Dumbbell className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>
            Join FitConnect to find trainers, book sessions, and achieve your fitness goals.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="client" onValueChange={setUserType}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="client">Client</TabsTrigger>
              <TabsTrigger value="trainer">Trainer</TabsTrigger>
              <TabsTrigger value="gym">Gym</TabsTrigger>
            </TabsList>
            <TabsContent value="client" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </TabsContent>
            <TabsContent value="trainer" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="trainer-first-name">First Name</Label>
                  <Input id="trainer-first-name" placeholder="Jane" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trainer-last-name">Last Name</Label>
                  <Input id="trainer-last-name" placeholder="Smith" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="trainer-email">Email</Label>
                <Input id="trainer-email" type="email" placeholder="jane.smith@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="trainer-password">Password</Label>
                <Input id="trainer-password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="trainer-confirm-password">Confirm Password</Label>
                <Input id="trainer-confirm-password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialty">Primary Specialty</Label>
                <Input id="specialty" placeholder="e.g., Strength Training, Yoga, etc." required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="trainer-terms" />
                <label
                  htmlFor="trainer-terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </TabsContent>
            <TabsContent value="gym" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="gym-name">Gym Name</Label>
                <Input id="gym-name" placeholder="FitLife Gym" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gym-email">Business Email</Label>
                <Input id="gym-email" type="email" placeholder="contact@fitlifegym.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gym-password">Password</Label>
                <Input id="gym-password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gym-confirm-password">Confirm Password</Label>
                <Input id="gym-confirm-password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="123 Main St, New York, NY" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="gym-terms" />
                <label
                  htmlFor="gym-terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">
            {userType === "client"
              ? "Sign Up as Client"
              : userType === "trainer"
                ? "Sign Up as Trainer"
                : "Sign Up as Gym"}
          </Button>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline">
              Log In
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

