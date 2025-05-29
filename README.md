# ⚽ MatchTracker - Soccer Match Webpage

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://v0-soccer-match-webpage.vercel.app)

A modern, responsive web application for tracking soccer matches, leagues, teams, and standings. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring real-time data from the football-data.org API.

## 🌟 Features

### 🏠 **Main Dashboard**
- **Live Match Data**: Real-time upcoming matches from Premier League and other competitions
- **Team Information**: Official team crests, venue details, and match schedules
- **Smart Fallbacks**: Graceful handling of API limits with realistic mock data
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 📊 **Comprehensive Pages**
- **Leagues**: Browse major football competitions (Premier League, La Liga, Bundesliga, etc.)
- **Teams**: Detailed team profiles with stadiums, managers, and ratings
- **Standings**: Live league tables with positions, points, and qualification indicators
- **News**: Latest football news with categories and reading time estimates

### 🎨 **Modern UI/UX**
- **Glass Morphism**: Beautiful backdrop blur effects and transparency
- **Professional Design**: Clean, modern interface with consistent branding
- **Interactive Elements**: Hover effects, smooth transitions, and loading states
- **Accessibility**: Screen reader support and keyboard navigation

## 🚀 Live Demo

**[View Live Application](https://v0-soccer-match-webpage.vercel.app/)**

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **API**: football-data.org
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- football-data.org API key (free tier available)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/soccer-match-webpage.git
   cd soccer-match-webpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   FOOTBALL_API_KEY=your_api_key_here
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Get API Key**
   - Sign up at [football-data.org](https://www.football-data.org/client/register)
   - Get your free API key (100 requests/day)
   - Add it to your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
soccer-match-webpage/
├── app/
│   ├── page.tsx                 # Main matches page
│   ├── leagues/page.tsx         # Leagues overview
│   ├── teams/page.tsx           # Teams directory
│   ├── standings/page.tsx       # League tables
│   ├── news/page.tsx           # Football news
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   └── api/
│       └── matches/route.ts    # API endpoint
├── components/
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Site footer
│   ├── matches-list.tsx        # Match display component
│   ├── team-image.tsx          # Team crest component
│   └── ui/                     # shadcn/ui components
├── lib/
│   └── utils.ts                # Utility functions
└── public/                     # Static assets
```

## 🔧 API Integration

### football-data.org API
- **Endpoint**: `https://api.football-data.org/v4/`
- **Rate Limits**: 100 requests/day (free tier)
- **Coverage**: Premier League, Champions League, and more
- **Data**: Matches, teams, standings, competitions

### Fallback Strategy
1. **Primary**: Real-time API data
2. **Secondary**: Alternative competitions (Champions League)
3. **Tertiary**: Realistic mock data with proper dates

## 🎯 Key Features Explained

### Real-Time Match Data
- Fetches upcoming Premier League matches
- Displays team crests, venues, and schedules
- Handles off-season periods gracefully
- Shows match status (Scheduled, Live, Finished)

### Responsive Navigation
- Sticky header with brand identity
- Mobile-friendly hamburger menu
- Active page highlighting
- Search and notification icons

### Professional Footer
- Company information and branding
- Quick links and popular leagues
- Social media integration
- Newsletter signup form
- Contact information

### Error Handling
- Graceful API failure management
- Image fallback for broken crests
- Loading states and error messages
- Console logging for debugging

## 🌐 Deployment

### Vercel (Recommended)
1. **Connect Repository**
   - Import your GitHub repository to Vercel
   - Vercel will auto-detect Next.js configuration

2. **Environment Variables**
   - Add `FOOTBALL_API_KEY` in Vercel dashboard
   - Set `NEXT_PUBLIC_BASE_URL` to your domain

3. **Deploy**
   - Automatic deployments on every push
   - Preview deployments for pull requests

### Manual Deployment
```bash
npm run build
npm start
```

## 🔮 Future Enhancements

- [ ] **Live Score Updates**: Real-time match scores
- [ ] **User Authentication**: Personal dashboards and favorites
- [ ] **Match Predictions**: Betting odds and predictions
- [ ] **Mobile App**: React Native version
- [ ] **Push Notifications**: Match reminders and score alerts
- [ ] **Multiple Languages**: Internationalization support
- [ ] **Dark Mode**: Theme switching capability
- [ ] **Advanced Filters**: Search and filter functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **football-data.org** for providing the free football API
- **shadcn/ui** for the beautiful UI components
- **Vercel** for seamless deployment and hosting
- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first styling

## 📞 Support

If you have any questions or need help:

- 📧 Email: purveshpatil111@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/soccer-match-webpage/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/soccer-match-webpage/discussions)

---

**Built with ❤️ by [Purvesh](https://github.com/Purvesh77)**

*Stay updated with the beautiful game! ⚽*
```
