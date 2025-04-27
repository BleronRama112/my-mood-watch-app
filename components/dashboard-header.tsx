"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bell, Menu, Search, User, Home, Shirt, Sparkles, CloudSun, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function DashboardHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-200 bg-white/80 backdrop-blur-sm">
      <div className="flex h-12 items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] pt-12">
              <div className="flex flex-col gap-6 py-4">
                <Link href="/dashboard" className="flex items-center gap-2">
                  <Image src="/logo.jpg" alt="Mood Match Logo" width={32} height={32} className="rounded-lg" />
                  <span className="text-base font-bold">Mood Match</span>
                </Link>
                <nav className="flex flex-col gap-1">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-amber-50 hover:text-amber-600"
                  >
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/virtual-closet"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-amber-50 hover:text-amber-600"
                  >
                    <Shirt className="h-4 w-4" />
                    Virtual Closet
                  </Link>
                  <Link
                    href="/outfit-suggestion"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-amber-50 hover:text-amber-600"
                  >
                    <Sparkles className="h-4 w-4" />
                    Outfit Suggestions
                  </Link>
                  <Link
                    href="/mood-selector"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-amber-50 hover:text-amber-600"
                  >
                    <CloudSun className="h-4 w-4" />
                    Mood Selector
                  </Link>
                  <Link
                    href="/social-feed"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-amber-50 hover:text-amber-600"
                  >
                    <Users className="h-4 w-4" />
                    Social Feed
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/dashboard" className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Mood Match Logo" width={24} height={24} className="rounded-lg" />
            <span className="font-bold text-xs">Mood Match</span>
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>

          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <User className="h-4 w-4" />
            <span className="sr-only">Profile</span>
          </Button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="px-3 py-2 border-t border-amber-200 bg-white">
          <Input placeholder="Search..." className="w-full border-amber-200 text-sm h-8" autoFocus />
        </div>
      )}
    </header>
  )
}
