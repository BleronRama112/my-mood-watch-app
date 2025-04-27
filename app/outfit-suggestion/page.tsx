import Image from "next/image"
import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Share2 } from "lucide-react"
import { IPhoneFrame } from "@/components/iphone-frame"

export default function OutfitSuggestionPage() {
  return (
    <IPhoneFrame>
      <div className="min-h-screen bg-gradient-to-b from-amber-500 to-amber-100">
        <DashboardHeader />

        <main className="px-4 py-6">
          <div className="mb-4">
            <h1 className="text-xl font-bold text-white mb-1">Outfit Suggestion</h1>
            <p className="text-white text-xs">Here's a personalized outfit we've created for you</p>
          </div>

          <div className="space-y-4">
            <Card className="border-amber-200 overflow-hidden">
              <div className="aspect-[3/4] relative">
                <Image src="/outfit-suggestion.jpg" alt="Outfit suggestion" fill className="object-cover" />
              </div>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-4">
                <h2 className="text-base font-semibold mb-2">Casual Elegance</h2>
                <p className="text-xs text-gray-700 mb-3">
                  This outfit combines comfort with sophistication, perfect for a casual day out or a relaxed dinner
                  with friends.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 font-medium text-xs">1</span>
                    </div>
                    <p className="text-xs">White Silk Blouse</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 font-medium text-xs">2</span>
                    </div>
                    <p className="text-xs">Black Skinny Jeans</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 font-medium text-xs">3</span>
                    </div>
                    <p className="text-xs">Gold Chain Necklace</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 font-medium text-xs">4</span>
                    </div>
                    <p className="text-xs">Black Stiletto Heels</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-2">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white text-xs py-1 h-8 flex-1">
                <Link href="/view-outfit">View Details</Link>
              </Button>

              <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50 text-xs py-1 h-8">
                <Heart className="mr-1 h-3 w-3" /> Save
              </Button>

              <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50 text-xs py-1 h-8">
                <Share2 className="mr-1 h-3 w-3" /> Share
              </Button>
            </div>

            <Button
              asChild
              variant="ghost"
              className="w-full text-white hover:bg-amber-600/20 hover:text-white text-xs py-1 h-8"
            >
              <Link href="/mood-selector">Try Different Parameters</Link>
            </Button>
          </div>
        </main>
      </div>
    </IPhoneFrame>
  )
}
