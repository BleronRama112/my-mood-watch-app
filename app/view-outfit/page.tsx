import Image from "next/image"
import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Download, Check } from "lucide-react"

export default function ViewOutfitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500 to-amber-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Outfit Details</h1>
            <p className="text-white">Explore and customize your suggested outfit</p>
          </div>

          <Tabs defaultValue="outfit" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-white/20">
              <TabsTrigger value="outfit" className="data-[state=active]:bg-white data-[state=active]:text-amber-600">
                Suggested Outfit
              </TabsTrigger>
              <TabsTrigger value="why" className="data-[state=active]:bg-white data-[state=active]:text-amber-600">
                Why It Works
              </TabsTrigger>
              <TabsTrigger value="swap" className="data-[state=active]:bg-white data-[state=active]:text-amber-600">
                Swap Items
              </TabsTrigger>
            </TabsList>

            <TabsContent value="outfit" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-amber-200 overflow-hidden">
                  <div className="aspect-[3/4] relative">
                    <Image src="/outfit-suggestion.jpg" alt="Outfit suggestion" fill className="object-cover" />
                  </div>
                </Card>

                <div className="space-y-6">
                  <Card className="border-amber-200">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Casual Elegance</h2>
                      <p className="text-gray-700 mb-4">
                        This outfit combines comfort with sophistication, perfect for a casual day out or a relaxed
                        dinner with friends.
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-amber-600 font-medium">1</span>
                          </div>
                          <p>White Silk Blouse</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-amber-600 font-medium">2</span>
                          </div>
                          <p>Black Skinny Jeans</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-amber-600 font-medium">3</span>
                          </div>
                          <p>Gold Chain Necklace</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-amber-600 font-medium">4</span>
                          </div>
                          <p>Black Stiletto Heels</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white flex-1">
                      <Link href="/social-feed">Post to Social Feed</Link>
                    </Button>

                    <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
                      <Heart className="mr-2 h-4 w-4" /> Save
                    </Button>

                    <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>

                    <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
                      <Check className="mr-2 h-4 w-4" /> Mark as Worn
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="why" className="mt-0">
              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Why This Outfit Works</h2>

                  <div className="space-y-6">
                    <div className="p-4 bg-amber-50 rounded-lg">
                      <h3 className="font-medium mb-2">Color Harmony</h3>
                      <p>
                        The monochromatic black and white palette creates a timeless, elegant look that's easy to
                        accessorize with gold accents.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg">
                      <h3 className="font-medium mb-2">Proportions</h3>
                      <p>
                        The flowing silk blouse balances perfectly with the fitted skinny jeans, creating a flattering
                        silhouette.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg">
                      <h3 className="font-medium mb-2">Versatility</h3>
                      <p>This outfit can easily transition from day to night with simple accessory changes.</p>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg">
                      <h3 className="font-medium mb-2">Personal Style Match</h3>
                      <p>
                        Based on your closet items and preferences, this combination aligns with your elegant yet
                        comfortable style.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="swap" className="mt-0">
              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Swap Items</h2>
                  <p className="text-gray-600 mb-6">Don't like an item? Swap it for something else from your closet.</p>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-amber-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-16 w-16 relative rounded-md overflow-hidden">
                          <Image src="/white-blouse.jpg" alt="White blouse" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">White Silk Blouse</p>
                          <p className="text-sm text-gray-600">Tops</p>
                        </div>
                      </div>
                      <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
                        Swap
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-amber-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-16 w-16 relative rounded-md overflow-hidden">
                          <Image src="/black-jeans.jpg" alt="Black jeans" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Black Skinny Jeans</p>
                          <p className="text-sm text-gray-600">Bottoms</p>
                        </div>
                      </div>
                      <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
                        Swap
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-amber-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-16 w-16 relative rounded-md overflow-hidden">
                          <Image src="/gold-necklace.jpg" alt="Gold necklace" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Gold Chain Necklace</p>
                          <p className="text-sm text-gray-600">Accessories</p>
                        </div>
                      </div>
                      <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
                        Swap
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-amber-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-16 w-16 relative rounded-md overflow-hidden">
                          <Image src="/black-heels.jpg" alt="Black heels" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Black Stiletto Heels</p>
                          <p className="text-sm text-gray-600">Accessories</p>
                        </div>
                      </div>
                      <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
                        Swap
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">Update Outfit</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
