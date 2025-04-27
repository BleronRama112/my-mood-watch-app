import Image from "next/image"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import { IPhoneFrame } from "@/components/iphone-frame"

export default function VirtualClosetPage() {
  return (
    <IPhoneFrame>
      <div className="min-h-screen bg-gradient-to-b from-amber-500 to-amber-100">
        <DashboardHeader />

        <main className="px-4 py-6">
          <div>
            <h1 className="text-xl font-bold text-white mb-2">Your Virtual Closet</h1>
            <p className="text-white text-sm">Browse and manage your wardrobe items</p>
          </div>

          <div className="flex justify-end mb-4 mt-4">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white text-xs py-1 h-8">
              <Plus className="mr-1 h-3 w-3" /> Add Item
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-5 mb-4 bg-white/20 h-8">
              <TabsTrigger
                value="all"
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-amber-600"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="tops"
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-amber-600"
              >
                Tops
              </TabsTrigger>
              <TabsTrigger
                value="bottoms"
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-amber-600"
              >
                Bottoms
              </TabsTrigger>
              <TabsTrigger
                value="dresses"
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-amber-600"
              >
                Dresses
              </TabsTrigger>
              <TabsTrigger
                value="accessories"
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-amber-600"
              >
                Acc.
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-amber-200 transition-all hover:shadow-md">
                  <div className="aspect-square relative">
                    <Image src="/white-blouse.jpg" alt="White blouse" fill className="object-cover" />
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-xs">White Silk Blouse</h3>
                    <p className="text-xs text-gray-600">Tops</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-amber-200 transition-all hover:shadow-md">
                  <div className="aspect-square relative">
                    <Image src="/black-jeans.jpg" alt="Black jeans" fill className="object-cover" />
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-xs">Black Skinny Jeans</h3>
                    <p className="text-xs text-gray-600">Bottoms</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-amber-200 transition-all hover:shadow-md">
                  <div className="aspect-square relative">
                    <Image src="/red-dress.jpg" alt="Red dress" fill className="object-cover" />
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-xs">Red Cocktail Dress</h3>
                    <p className="text-xs text-gray-600">Dresses</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-amber-200 transition-all hover:shadow-md">
                  <div className="aspect-square relative">
                    <Image src="/leather-jacket.jpg" alt="Leather jacket" fill className="object-cover" />
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-xs">Leather Jacket</h3>
                    <p className="text-xs text-gray-600">Tops</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tops" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-amber-200 transition-all hover:shadow-md">
                  <div className="aspect-square relative">
                    <Image src="/white-blouse.jpg" alt="White blouse" fill className="object-cover" />
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-xs">White Silk Blouse</h3>
                    <p className="text-xs text-gray-600">Tops</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-amber-200 transition-all hover:shadow-md">
                  <div className="aspect-square relative">
                    <Image src="/leather-jacket.jpg" alt="Leather jacket" fill className="object-cover" />
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-xs">Leather Jacket</h3>
                    <p className="text-xs text-gray-600">Tops</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Other tabs content would be similar */}
          </Tabs>
        </main>
      </div>
    </IPhoneFrame>
  )
}
