"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Search, Bell, User } from "lucide-react"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚽</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MatchTracker</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                pathname === "/" ? "text-green-600" : ""
              }`}
            >
              Matches
            </Link>
            <Link
              href="/leagues"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                pathname === "/leagues" ? "text-green-600" : ""
              }`}
            >
              Leagues
            </Link>
            <Link
              href="/teams"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                pathname === "/teams" ? "text-green-600" : ""
              }`}
            >
              Teams
            </Link>
            <Link
              href="/standings"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                pathname === "/standings" ? "text-green-600" : ""
              }`}
            >
              Standings
            </Link>
            <Link
              href="/news"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                pathname === "/news" ? "text-green-600" : ""
              }`}
            >
              News
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
