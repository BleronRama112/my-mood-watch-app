import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IPhoneFrame } from "@/components/iphone-frame"

export default function LoginPage() {
  return (
    <IPhoneFrame>
      <div className="min-h-screen bg-gradient-to-b from-amber-500 to-amber-100 flex flex-col items-center justify-center p-4">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center mb-6">
            <Link href="/">
              <Image src="/logo.jpg" alt="Mood Match Logo" width={80} height={80} className="mb-3 rounded-lg" />
            </Link>
            <h1 className="text-xl font-bold text-white">Login to Mood Match</h1>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200">
            <form className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-xs text-amber-600 hover:text-amber-800">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="border-amber-200 focus:border-amber-500 h-9 text-sm"
                />
              </div>

              <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-2">
                <Link href="/dashboard">Login</Link>
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-amber-600 hover:text-amber-800 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </IPhoneFrame>
  )
}
