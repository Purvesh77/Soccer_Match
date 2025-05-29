import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Eye } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Manchester United Signs New Star Player in Record Deal",
    excerpt:
      "The Red Devils have completed the signing of a world-class midfielder in a deal worth £80 million, marking their biggest transfer of the season.",
    category: "Transfer News",
    author: "John Smith",
    date: "2024-12-10",
    readTime: "3 min read",
    views: "12.5K",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Premier League Title Race Heats Up as City Extends Lead",
    excerpt:
      "Manchester City's latest victory puts them 3 points clear at the top of the table, but Arsenal and Liverpool remain in hot pursuit.",
    category: "Match Analysis",
    author: "Sarah Johnson",
    date: "2024-12-09",
    readTime: "5 min read",
    views: "8.7K",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Champions League Draw: English Teams Learn Their Fate",
    excerpt:
      "The Champions League round of 16 draw has been completed, with several exciting matchups set for the knockout stages.",
    category: "Champions League",
    author: "Mike Wilson",
    date: "2024-12-08",
    readTime: "4 min read",
    views: "15.2K",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Injury Update: Key Players Set to Return This Weekend",
    excerpt:
      "Several Premier League stars are expected to make their comeback from injury, providing a boost to their respective teams.",
    category: "Injury News",
    author: "Emma Davis",
    date: "2024-12-07",
    readTime: "2 min read",
    views: "6.3K",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Young Talent Spotlight: Rising Stars to Watch",
    excerpt: "We take a look at the most promising young players making waves in European football this season.",
    category: "Youth Football",
    author: "Tom Brown",
    date: "2024-12-06",
    readTime: "6 min read",
    views: "9.1K",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Tactical Analysis: How Teams Are Adapting to New Rules",
    excerpt:
      "An in-depth look at how Premier League teams have adjusted their playing styles following recent rule changes.",
    category: "Tactical Analysis",
    author: "Alex Turner",
    date: "2024-12-05",
    readTime: "7 min read",
    views: "4.8K",
    image: "/placeholder.svg?height=200&width=400",
  },
]

function getCategoryColor(category: string) {
  switch (category) {
    case "Transfer News":
      return "bg-blue-100 text-blue-800"
    case "Match Analysis":
      return "bg-green-100 text-green-800"
    case "Champions League":
      return "bg-purple-100 text-purple-800"
    case "Injury News":
      return "bg-red-100 text-red-800"
    case "Youth Football":
      return "bg-yellow-100 text-yellow-800"
    case "Tactical Analysis":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <Header />

      <main className="flex-1 p-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center py-8">
              <CardTitle className="text-4xl font-bold text-green-700 mb-2">📰 Football News</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Stay updated with the latest football news, transfers, and match analysis
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white/95 cursor-pointer"
              >
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Eye className="w-3 h-3" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 line-clamp-3">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                    </div>
                    <span className="text-green-600 font-medium">{article.readTime}</span>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Read Article</span>
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
