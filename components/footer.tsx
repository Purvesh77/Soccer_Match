import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚽</span>
              </div>
              <span className="text-xl font-bold">MatchTracker</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for soccer match updates, live scores, and comprehensive league coverage. Never
              miss a moment of the beautiful game.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Live Matches
                </Link>
              </li>
              <li>
                <Link href="/leagues" className="text-gray-400 hover:text-white transition-colors text-sm">
                  All Leagues
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Team Profiles
                </Link>
              </li>
              <li>
                <Link href="/standings" className="text-gray-400 hover:text-white transition-colors text-sm">
                  League Tables
                </Link>
              </li>
              <li>
                <Link href="/fixtures" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Fixtures
                </Link>
              </li>
            </ul>
          </div>

          {/* Leagues */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Leagues</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/premier-league" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Premier League
                </Link>
              </li>
              <li>
                <Link href="/la-liga" className="text-gray-400 hover:text-white transition-colors text-sm">
                  La Liga
                </Link>
              </li>
              <li>
                <Link href="/bundesliga" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Bundesliga
                </Link>
              </li>
              <li>
                <Link href="/serie-a" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Serie A
                </Link>
              </li>
              <li>
                <Link href="/champions-league" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Champions League
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-gray-400 text-sm">info@matchtracker.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-gray-400 text-sm">London, United Kingdom</span>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
              <p className="text-gray-400 text-xs mb-3">Get match updates delivered to your inbox</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-green-400"
                />
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-r-md transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 MatchTracker. All rights reserved.</div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
