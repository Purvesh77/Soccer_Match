import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Trophy, Star } from "lucide-react"

const teams = [
  {
    id: 1,
    name: "Manchester United",
    league: "Premier League",
    country: "England",
    crest: "https://crests.football-data.org/66.png",
    founded: 1878,
    stadium: "Old Trafford",
    capacity: "74,310",
    manager: "Erik ten Hag",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Liverpool",
    league: "Premier League",
    country: "England",
    crest: "https://crests.football-data.org/64.png",
    founded: 1892,
    stadium: "Anfield",
    capacity: "53,394",
    manager: "Jürgen Klopp",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Arsenal",
    league: "Premier League",
    country: "England",
    crest: "https://crests.football-data.org/57.png",
    founded: 1886,
    stadium: "Emirates Stadium",
    capacity: "60,260",
    manager: "Mikel Arteta",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Manchester City",
    league: "Premier League",
    country: "England",
    crest: "https://crests.football-data.org/65.png",
    founded: 1880,
    stadium: "Etihad Stadium",
    capacity: "53,400",
    manager: "Pep Guardiola",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Chelsea",
    league: "Premier League",
    country: "England",
    crest: "https://crests.football-data.org/61.png",
    founded: 1905,
    stadium: "Stamford Bridge",
    capacity: "40,834",
    manager: "Mauricio Pochettino",
    rating: 4.2,
  },
  {
    id: 6,
    name: "Tottenham",
    league: "Premier League",
    country: "England",
    crest: "https://crests.football-data.org/73.png",
    founded: 1882,
    stadium: "Tottenham Hotspur Stadium",
    capacity: "62,850",
    manager: "Ange Postecoglou",
    rating: 4.1,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating}</span>
    </div>
  )
}

export default function TeamsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <Header />

      <main className="flex-1 p-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center py-8">
              <CardTitle className="text-4xl font-bold text-green-700 mb-2">⚽ Football Teams</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Discover your favorite teams, their stadiums, and key information
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <Card
                key={team.id}
                className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white/95 cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <img
                      src={team.crest || "/placeholder.svg"}
                      alt={`${team.name} crest`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{team.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{team.league}</CardDescription>
                  <Badge className="bg-blue-100 text-blue-800 w-fit mx-auto">Founded {team.founded}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <StarRating rating={team.rating} />

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">{team.stadium}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">Capacity: {team.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">Manager: {team.manager}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>View Details</span>
                      <span>→</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
