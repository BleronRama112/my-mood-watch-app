import Link from "next/link"
import { Sparkles, Shirt, CloudSun } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { IPhoneFrame } from "@/components/iphone-frame"

export default function DashboardPage() {
  return (
    <IPhoneFrame>
      <div className="min-h-screen bg-gradient-to-b from-amber-500 to-amber-100">
        <DashboardHeader />

        <main className="px-4 py-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Welcome back, Jessica</h1>
            <p className="text-white mb-6">What would you like to do today?</p>

            <div className="grid grid-cols-1 gap-4">
              <Link href="/virtual-closet" className="block">
                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-amber-200">
                  <CardContent className="p-4 flex items-center">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Shirt className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold">Browse Virtual Closet</h2>
                      <p className="text-gray-600 text-xs">View and manage your wardrobe items</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/outfit-suggestion" className="block">
                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-amber-200">
                  <CardContent className="p-4 flex items-center">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Sparkles className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold">Get Outfit Suggestion</h2>
                      <p className="text-gray-600 text-xs">Receive personalized outfit recommendations</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/mood-selector" className="block">
                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-amber-200">
                  <CardContent className="p-4 flex items-center">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <CloudSun className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold">Weather, Occasion or Mood</h2>
                      <p className="text-gray-600 text-xs">Get outfits based on specific conditions</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="mt-8 bg-white rounded-xl p-4 border border-amber-200 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Casual Friday Outfit</p>
                    <p className="text-xs text-gray-600">Created 2 days ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Shirt className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Added 3 new items to your closet</p>
                    <p className="text-xs text-gray-600">4 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </IPhoneFrame>
  )
}
