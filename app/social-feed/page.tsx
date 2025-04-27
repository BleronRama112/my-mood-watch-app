import Image from "next/image"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Share2, Send } from "lucide-react"

export default function SocialFeedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500 to-amber-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Social Feed</h1>
            <p className="text-white">Share your outfits and get inspired by others</p>
          </div>

          <Tabs defaultValue="trending" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-white/20">
              <TabsTrigger value="trending" className="data-[state=active]:bg-white data-[state=active]:text-amber-600">
                Trending
              </TabsTrigger>
              <TabsTrigger
                value="following"
                className="data-[state=active]:bg-white data-[state=active]:text-amber-600"
              >
                Following
              </TabsTrigger>
              <TabsTrigger
                value="your-posts"
                className="data-[state=active]:bg-white data-[state=active]:text-amber-600"
              >
                Your Posts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trending" className="mt-0">
              <div className="space-y-8">
                <Card className="border-amber-200">
                  <CardContent className="p-0">
                    <div className="p-4 flex items-center gap-3 border-b border-amber-100">
                      <div className="h-10 w-10 rounded-full bg-amber-100 overflow-hidden relative">
                        <Image src="/avatar-1.jpg" alt="User avatar" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-medium">Sophie Anderson</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>

                    <div className="aspect-square md:aspect-[4/3] relative">
                      <Image src="/social-post-1.jpg" alt="Outfit post" fill className="object-cover" />
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-4 mb-3">
                        <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
                          <Heart className="h-5 w-5 text-gray-600" />
                          <span className="sr-only">Like</span>
                        </Button>
                        <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
                          <MessageCircle className="h-5 w-5 text-gray-600" />
                          <span className="sr-only">Comment</span>
                        </Button>
                        <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
                          <Share2 className="h-5 w-5 text-gray-600" />
                          <span className="sr-only">Share</span>
                        </Button>
                      </div>

                      <p className="font-medium mb-1">124 likes</p>
                      <p className="mb-2">
                        <span className="font-medium">Sophie Anderson</span> Perfect outfit for a casual Friday at the
                        office! #workstyle #casualchic
                      </p>
                      <p className="text-gray-500 text-sm mb-3">View all 28 comments</p>

                      <div className="flex items-center gap-2">
                        <Input placeholder="Add a comment..." className="border-amber-200" />
                        <Button variant="ghost" className="h-9 w-9 p-0 rounded-full shrink-0">
                          <Send className="h-5 w-5 text-gray-600" />
                          <span className="sr-only">Post</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardContent className="p-0">
                    <div className="p-4 flex items-center gap-3 border-b border-amber-100">
                      <div className="h-10 w-10 rounded-full bg-amber-100 overflow-hidden relative">
                        <Image src="/avatar-2.jpg" alt="User avatar" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-medium">Alex Johnson</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                    </div>

                    <div className="aspect-square md:aspect-[4/3] relative">
                      <Image src="/social-post-2.jpg" alt="Outfit post" fill className="object-cover" />
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-4 mb-3">
                        <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
                          <Heart className="h-5 w-5 text-amber-600 fill-amber-600" />
                          <span className="sr-only">Like</span>
                        </Button>
                        <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
                          <MessageCircle className="h-5 w-5 text-gray-600" />
                          <span className="sr-only">Comment</span>
                        </Button>
                        <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
                          <Share2 className="h-5 w-5 text-gray-600" />
                          <span className="sr-only">Share</span>
                        </Button>
                      </div>

                      <p className="font-medium mb-1">89 likes</p>
                      <p className="mb-2">
                        <span className="font-medium">Alex Johnson</span> Date night ready with this elegant outfit
                        suggestion from Mood Match! #datenight #elegance
                      </p>
                      <p className="text-gray-500 text-sm mb-3">View all 15 comments</p>

                      <div className="flex items-center gap-2">
                        <Input placeholder="Add a comment..." className="border-amber-200" />
                        <Button variant="ghost" className="h-9 w-9 p-0 rounded-full shrink-0">
                          <Send className="h-5 w-5 text-gray-600" />
                          <span className="sr-only">Post</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Other tabs content would be similar */}
          </Tabs>
        </div>
      </main>
    </div>
  )
}
