import { NextResponse } from "next/server"

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

export async function GET() {
  const API_KEY = "0b8146200de54bec91dccf9eace428da"

  try {
    console.log("Fetching real-time data from football-data.org API...")

    // Fetch upcoming matches from Premier League
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

        return NextResponse.json({
          matches: upcomingMatches.length > 0 ? upcomingMatches : mockMatches,
          source: upcomingMatches.length > 0 ? "real-api-fallback" : "mock-data",
          note:
            upcomingMatches.length > 0
              ? "Real data from football-data.org API (fallback mode)"
              : "Using mock data due to API issues",
        })
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

        return NextResponse.json({
          matches: recentMatches.length > 0 ? recentMatches : mockMatches,
          source: recentMatches.length > 0 ? "real-api-recent" : "mock-data",
          note:
            recentMatches.length > 0
              ? "Real data from football-data.org API (recent matches)"
              : "Using mock data - no matches available",
        })
      }
    }

    return NextResponse.json({
      matches: data.matches || mockMatches,
      source: "real-api",
      note: "Real-time data from football-data.org API",
      totalMatches: data.count || data.matches?.length || 0,
    })
  } catch (error) {
    console.error("Error fetching from football API:", error)

    return NextResponse.json(
      {
        matches: mockMatches,
        source: "mock-data",
        error: "Failed to fetch real-time data",
        note: "Using mock data due to API error. Real API integration is configured but currently unavailable.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 200 },
    ) // Return 200 with mock data instead of error
  }
}
