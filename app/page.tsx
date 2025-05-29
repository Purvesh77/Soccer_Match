import { Suspense } from "react"
import MatchesList from "@/components/matches-list"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <Header />

      <main className="flex-1 p-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center py-8">
              <CardTitle className="text-4xl font-bold text-green-700 mb-2">⚽ Upcoming Soccer Matches</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Stay updated with the latest Premier League fixtures and never miss a match
              </CardDescription>
            </CardHeader>
          </Card>

          <Suspense
            fallback={
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
                  <p className="mt-4 text-muted-foreground text-lg">Loading matches...</p>
                </CardContent>
              </Card>
            }
          >
            <MatchesList />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  )
}
