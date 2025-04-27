import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IPhoneFrame } from "@/components/iphone-frame"

export default function SignupPage() {
  return (
    <IPhoneFrame>
      <div className="min-h-screen bg-gradient-to-b from-amber-500 to-amber-100 flex flex-col items-center justify-center p-4">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center mb-6">
            <Link href="/">
              <Image src="/logo.jpg" alt="Mood Match Logo" width={80} height={80} className="mb-3 rounded-lg" />
            </Link>
            <h1 className="text-xl font-bold text-white">Create an Account</h1>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="firstName" className="text-sm">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="border-amber-200 focus:border-amber-500 h-9 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="lastName" className="text-sm">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="border-amber-200 focus:border-amber-500 h-9 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-amber-200 focus:border-amber-500 h-9 text-sm"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="password" className="text-sm">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="border-amber-200 focus:border-amber-500 h-9 text-sm"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="confirmPassword" className="text-sm">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="border-amber-200 focus:border-amber-500 h-9 text-sm"
                />
              </div>

              <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/dashboard">Create Account</Link>
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-amber-600 hover:text-amber-800 font-medium">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </IPhoneFrame>
  )
}
