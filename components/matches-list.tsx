import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import TeamImage from "./team-image"

interface Match {
  id: number
  homeTeam: {
    name: string
    crest?: string
  }
  awayTeam: {
    name: string
    crest?: string
  }
  utcDate: string
  status: string
  venue?: string
  competition: {
    name: string
  }
}

// Mock data as fallback
const mockMatches = [
  {
    id: 1,
    homeTeam: {
      name: "Manchester United",
      crest: "https://crests.football-data.org/66.png",
    },
    awayTeam: {
      name: "Liverpool",
      crest: "https://crests.football-data.org/64.png",
    },
    utcDate: "2024-12-15T15:00:00Z",
    status: "SCHEDULED",
    venue: "Old Trafford",
    competition: {
      name: "Premier League",
    },
  },
  {
    id: 2,
    homeTeam: {
      name: "Arsenal",
      crest: "https://crests.football-data.org/57.png",
    },
    awayTeam: {
      name: "Chelsea",
      crest: "https://crests.football-data.org/61.png",
    },
    utcDate: "2024-12-16T17:30:00Z",
    status: "SCHEDULED",
    venue: "Emirates Stadium",
    competition: {
      name: "Premier League",
    },
  },
  {
    id: 3,
    homeTeam: {
      name: "Manchester City",
      crest: "https://crests.football-data.org/65.png",
    },
    awayTeam: {
      name: "Tottenham",
      crest: "https://crests.football-data.org/73.png",
    },
    utcDate: "2024-12-17T20:00:00Z",
    status: "SCHEDULED",
    venue: "Etihad Stadium",
    competition: {
      name: "Premier League",
    },
  },
]

async function getMatches(): Promise<Match[]> {
  const API_KEY = "0b8146200de54bec91dccf9eace428da"

  try {
    console.log("Fetching real-time data from football-data.org API...")

    // Fetch upcoming matches from Premier League directly from the component
    const response = await fetch("https://api.football-data.org/v4/competitions/PL/matches?status=SCHEDULED", {
      headers: {
        "X-Auth-Token": API_KEY,
        "Content-Type": "application/json",
      },
      cache: "no-store", // Always fetch fresh data
    })

    if (!response.ok) {
      console.error(`API Error: ${response.status} - ${response.statusText}`)

      // If API fails, try to get any matches (not just scheduled)
      const fallbackResponse = await fetch("https://api.football-data.org/v4/competitions/PL/matches", {
        headers: {
          "X-Auth-Token": API_KEY,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      })

      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json()
        // Filter for upcoming matches
        const upcomingMatches =
          fallbackData.matches
            ?.filter((match: any) => match.status === "SCHEDULED" || match.status === "TIMED")
            .slice(0, 10) || []

        console.log(`Successfully fetched ${upcomingMatches.length} matches from fallback API`)
        return upcomingMatches.length > 0 ? upcomingMatches : mockMatches
      }

      throw new Error(`API request failed: ${response.status}`)
    }

    const data = await response.json()
    console.log(`Successfully fetched ${data.matches?.length || 0} matches from API`)

    // If no scheduled matches, get recent and upcoming matches
    if (!data.matches || data.matches.length === 0) {
      console.log("No scheduled matches found, fetching all recent matches...")

      const allMatchesResponse = await fetch("https://api.football-data.org/v4/competitions/PL/matches", {
        headers: {
          "X-Auth-Token": API_KEY,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      })

      if (allMatchesResponse.ok) {
        const allData = await allMatchesResponse.json()
        const recentMatches = allData.matches?.slice(-10) || []
        return recentMatches.length > 0 ? recentMatches : mockMatches
      }
    }

    return data.matches || mockMatches
  } catch (error) {
    console.error("Error fetching from football API:", error)
    return mockMatches // Fallback to mock data
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return {
    date: date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "SCHEDULED":
      return "bg-blue-100 text-blue-800"
    case "LIVE":
      return "bg-red-100 text-red-800"
    case "FINISHED":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default async function MatchesList() {
  const matches = await getMatches()

  if (matches.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">No upcoming matches found.</p>
          <p className="text-sm text-muted-foreground mt-2">
            This could be due to API rate limits, no scheduled matches, or network issues.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Real-time API integration is active. Check console for details.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {matches.map((match) => {
        const { date, time } = formatDate(match.utcDate)

        return (
          <Card
            key={match.id}
            className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white/95"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">{match.competition.name}</CardTitle>
                <Badge className={getStatusColor(match.status)}>{match.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  {match.homeTeam.crest && (
                    <TeamImage
                      src={match.homeTeam.crest}
                      alt={`${match.homeTeam.name} crest`}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                  <span className="font-semibold text-lg">{match.homeTeam.name}</span>
                </div>

                <div className="text-center px-6">
                  <div className="text-3xl font-bold text-green-600">VS</div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-lg">{match.awayTeam.name}</span>
                  {match.awayTeam.crest && (
                    <TeamImage
                      src={match.awayTeam.crest}
                      alt={`${match.awayTeam.name} crest`}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span className="font-medium">{date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="font-medium">{time}</span>
                </div>
                {match.venue && (
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span className="font-medium">{match.venue}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
