import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IPhoneFrame } from "@/components/iphone-frame"

export default function HomePage() {
  return (
    <IPhoneFrame>
      <div className="min-h-screen bg-gradient-to-b from-amber-500 to-amber-100 flex flex-col items-center justify-center p-4">
        <div className="w-full space-y-6">
          <div className="flex flex-col items-center justify-center">
            <Image src="/logo.jpg" alt="Mood Match Logo" width={120} height={120} className="mb-4 rounded-lg" />
            <h1 className="text-2xl font-bold text-white text-center">Welcome to Mood Match</h1>
            <p className="text-white text-center mt-1 text-sm">Your personal style assistant</p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="space-y-2">
              <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-base">
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-amber-200 bg-white text-amber-600 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300 py-4 text-base"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>

            <div className="text-center mt-6">
              <p className="text-xs text-amber-800 bg-white/70 p-2 rounded-lg">
                Experience personalized outfit recommendations based on your mood, weather, and occasion
              </p>
            </div>
          </div>
        </div>
      </div>
    </IPhoneFrame>
  )
}
