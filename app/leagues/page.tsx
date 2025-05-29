import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar } from "lucide-react"

const leagues = [
  {
    id: 1,
    name: "Premier League",
    country: "England",
    logo: "https://crests.football-data.org/PL.png",
    teams: 20,
    season: "2024/25",
    status: "Active",
    description: "The top tier of English football, featuring the world's best players and clubs.",
  },
  {
    id: 2,
    name: "La Liga",
    country: "Spain",
    logo: "https://crests.football-data.org/PD.png",
    teams: 20,
    season: "2024/25",
    status: "Active",
    description: "Spain's premier football division, home to Real Madrid and Barcelona.",
  },
  {
    id: 3,
    name: "Bundesliga",
    country: "Germany",
    logo: "https://crests.football-data.org/BL1.png",
    teams: 18,
    season: "2024/25",
    status: "Active",
    description: "Germany's top football league known for its passionate fans and competitive play.",
  },
  {
    id: 4,
    name: "Serie A",
    country: "Italy",
    logo: "https://crests.football-data.org/SA.png",
    teams: 20,
    season: "2024/25",
    status: "Active",
    description: "Italy's premier football championship with rich history and tactical excellence.",
  },
  {
    id: 5,
    name: "Ligue 1",
    country: "France",
    logo: "https://crests.football-data.org/FL1.png",
    teams: 20,
    season: "2024/25",
    status: "Active",
    description: "France's top football division featuring PSG and other competitive clubs.",
  },
  {
    id: 6,
    name: "Champions League",
    country: "Europe",
    logo: "https://crests.football-data.org/CL.png",
    teams: 32,
    season: "2024/25",
    status: "Active",
    description: "Europe's premier club competition featuring the continent's best teams.",
  },
]

export default function LeaguesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <Header />

      <main className="flex-1 p-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center py-8">
              <CardTitle className="text-4xl font-bold text-green-700 mb-2">🏆 Soccer Leagues</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Explore the world's top football competitions and championships
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leagues.map((league) => (
              <Card
                key={league.id}
                className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white/95 cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <img
                      src={league.logo || "/placeholder.svg"}
                      alt={`${league.name} logo`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{league.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{league.country}</CardDescription>
                  <Badge className="bg-green-100 text-green-800 w-fit mx-auto">{league.status}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 text-center">{league.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">{league.teams} Teams</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">{league.season}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>View Matches</span>
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
