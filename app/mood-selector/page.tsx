import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CloudSun, Calendar, Smile } from "lucide-react"

export default function MoodSelectorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500 to-amber-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Customize Your Outfit</h1>
            <p className="text-white">Select parameters to get a personalized outfit recommendation</p>
          </div>

          <Tabs defaultValue="weather" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-white/20">
              <TabsTrigger
                value="weather"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-amber-600"
              >
                <CloudSun className="h-4 w-4" /> Weather
              </TabsTrigger>
              <TabsTrigger
                value="occasion"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-amber-600"
              >
                <Calendar className="h-4 w-4" /> Occasion
              </TabsTrigger>
              <TabsTrigger
                value="mood"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-amber-600"
              >
                <Smile className="h-4 w-4" /> Mood
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weather" className="mt-0">
              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Select Weather Conditions</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <CloudSun className="h-8 w-8" />
                      <span>Sunny</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <CloudSun className="h-8 w-8" />
                      <span>Cloudy</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <CloudSun className="h-8 w-8" />
                      <span>Rainy</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <CloudSun className="h-8 w-8" />
                      <span>Snowy</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <CloudSun className="h-8 w-8" />
                      <span>Windy</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <CloudSun className="h-8 w-8" />
                      <span>Hot</span>
                    </Button>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Link href="/outfit-suggestion">Get Outfit Suggestion</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="occasion" className="mt-0">
              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Select an Occasion</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Calendar className="h-8 w-8" />
                      <span>Casual</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Calendar className="h-8 w-8" />
                      <span>Work</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Calendar className="h-8 w-8" />
                      <span>Date Night</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Calendar className="h-8 w-8" />
                      <span>Formal</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Calendar className="h-8 w-8" />
                      <span>Party</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Calendar className="h-8 w-8" />
                      <span>Workout</span>
                    </Button>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Link href="/outfit-suggestion">Get Outfit Suggestion</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mood" className="mt-0">
              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Select Your Mood</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Smile className="h-8 w-8" />
                      <span>Happy</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Smile className="h-8 w-8" />
                      <span>Confident</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Smile className="h-8 w-8" />
                      <span>Relaxed</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Smile className="h-8 w-8" />
                      <span>Energetic</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Smile className="h-8 w-8" />
                      <span>Romantic</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2 border-amber-200 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300"
                    >
                      <Smile className="h-8 w-8" />
                      <span>Creative</span>
                    </Button>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Link href="/outfit-suggestion">Get Outfit Suggestion</Link>
                    </Button>
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
