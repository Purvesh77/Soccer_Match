import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const standings = [
  {
    position: 1,
    team: "Manchester City",
    crest: "https://crests.football-data.org/65.png",
    played: 15,
    won: 12,
    drawn: 2,
    lost: 1,
    gf: 35,
    ga: 12,
    gd: 23,
    points: 38,
  },
  {
    position: 2,
    team: "Arsenal",
    crest: "https://crests.football-data.org/57.png",
    played: 15,
    won: 11,
    drawn: 3,
    lost: 1,
    gf: 33,
    ga: 15,
    gd: 18,
    points: 36,
  },
  {
    position: 3,
    team: "Liverpool",
    crest: "https://crests.football-data.org/64.png",
    played: 15,
    won: 10,
    drawn: 4,
    lost: 1,
    gf: 32,
    ga: 16,
    gd: 16,
    points: 34,
  },
  {
    position: 4,
    team: "Newcastle United",
    crest: "https://crests.football-data.org/67.png",
    played: 15,
    won: 9,
    drawn: 4,
    lost: 2,
    gf: 28,
    ga: 18,
    gd: 10,
    points: 31,
  },
  {
    position: 5,
    team: "Manchester United",
    crest: "https://crests.football-data.org/66.png",
    played: 15,
    won: 8,
    drawn: 4,
    lost: 3,
    gf: 25,
    ga: 20,
    gd: 5,
    points: 28,
  },
  {
    position: 6,
    team: "Tottenham",
    crest: "https://crests.football-data.org/73.png",
    played: 15,
    won: 8,
    drawn: 3,
    lost: 4,
    gf: 30,
    ga: 22,
    gd: 8,
    points: 27,
  },
  {
    position: 7,
    team: "Brighton",
    crest: "https://crests.football-data.org/397.png",
    played: 15,
    won: 7,
    drawn: 4,
    lost: 4,
    gf: 24,
    ga: 20,
    gd: 4,
    points: 25,
  },
  {
    position: 8,
    team: "Chelsea",
    crest: "https://crests.football-data.org/61.png",
    played: 15,
    won: 6,
    drawn: 6,
    lost: 3,
    gf: 22,
    ga: 18,
    gd: 4,
    points: 24,
  },
  {
    position: 9,
    team: "Aston Villa",
    crest: "https://crests.football-data.org/58.png",
    played: 15,
    won: 6,
    drawn: 5,
    lost: 4,
    gf: 23,
    ga: 21,
    gd: 2,
    points: 23,
  },
  {
    position: 10,
    team: "West Ham United",
    crest: "https://crests.football-data.org/563.png",
    played: 15,
    won: 5,
    drawn: 6,
    lost: 4,
    gf: 20,
    ga: 19,
    gd: 1,
    points: 21,
  },
]

function getPositionColor(position: number) {
  if (position <= 4) return "bg-green-100 text-green-800" // Champions League
  if (position <= 6) return "bg-blue-100 text-blue-800" // Europa League
  if (position >= 18) return "bg-red-100 text-red-800" // Relegation
  return "bg-gray-100 text-gray-800"
}

function getPositionLabel(position: number) {
  if (position <= 4) return "UCL"
  if (position <= 6) return "UEL"
  if (position >= 18) return "REL"
  return ""
}

export default function StandingsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <Header />

      <main className="flex-1 p-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center py-8">
              <CardTitle className="text-4xl font-bold text-green-700 mb-2">📊 League Standings</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Current Premier League table and team positions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Premier League 2024/25</CardTitle>
              <CardDescription>Current season standings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Pos</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Team</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">P</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">W</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">D</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">L</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">GF</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">GA</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">GD</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map((team) => (
                      <tr key={team.position} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-gray-900">{team.position}</span>
                            {getPositionLabel(team.position) && (
                              <Badge className={`text-xs ${getPositionColor(team.position)}`}>
                                {getPositionLabel(team.position)}
                              </Badge>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center space-x-3">
                            <img
                              src={team.crest || "/placeholder.svg"}
                              alt={`${team.team} crest`}
                              className="w-6 h-6 object-contain"
                            />
                            <span className="font-medium text-gray-900">{team.team}</span>
                          </div>
                        </td>
                        <td className="text-center py-3 px-2 text-gray-700">{team.played}</td>
                        <td className="text-center py-3 px-2 text-gray-700">{team.won}</td>
                        <td className="text-center py-3 px-2 text-gray-700">{team.drawn}</td>
                        <td className="text-center py-3 px-2 text-gray-700">{team.lost}</td>
                        <td className="text-center py-3 px-2 text-gray-700">{team.gf}</td>
                        <td className="text-center py-3 px-2 text-gray-700">{team.ga}</td>
                        <td className="text-center py-3 px-2">
                          <span className={`font-medium ${team.gd >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {team.gd > 0 ? "+" : ""}
                            {team.gd}
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span className="font-bold text-gray-900">{team.points}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">UCL</Badge>
                  <span className="text-gray-600">Champions League</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-100 text-blue-800">UEL</Badge>
                  <span className="text-gray-600">Europa League</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-red-100 text-red-800">REL</Badge>
                  <span className="text-gray-600">Relegation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
