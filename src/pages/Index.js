import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CalendarDays, Trophy, Users, Code, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredContests = [
    {
      id: 1,
      title: "Weekly Challenge #42",
      description: "Algorithmic problem solving contest with dynamic programming focus",
      status: "live",
      participants: 1247,
      timeLeft: "2h 34m",
      difficulty: "Medium",
      problems: 4,
      startTime: "2024-06-10T14:00:00Z"
    },
    {
      id: 2,
      title: "Spring Code Sprint",
      description: "Advanced data structures and algorithms competition",
      status: "upcoming",
      participants: 892,
      timeLeft: "1d 12h",
      difficulty: "Hard",
      problems: 6,
      startTime: "2024-06-11T16:00:00Z"
    },
    {
      id: 3,
      title: "Beginner's Arena",
      description: "Perfect for newcomers to competitive programming",
      status: "ended",
      participants: 2156,
      timeLeft: "Ended",
      difficulty: "Easy",
      problems: 3,
      startTime: "2024-06-09T10:00:00Z"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "live": return "bg-green-100 text-green-800 border-green-200";
      case "upcoming": return "bg-blue-100 text-blue-800 border-blue-200";
      case "ended": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "bg-green-50 text-green-700 border-green-200";
      case "Medium": return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Hard": return "bg-red-50 text-red-700 border-red-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">CodeArena</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 transition-colors">Contests</Link>
              <Link to="/problems" className="text-gray-600 hover:text-blue-600 transition-colors">Problems</Link>
              <Link to="/leaderboard" className="text-gray-600 hover:text-blue-600 transition-colors">Leaderboard</Link>
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compete. Code. <span className="text-blue-600">Conquer.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of programmers in exciting coding contests. Test your skills, learn from others, and climb the leaderboards.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Trophy className="mr-2 h-5 w-5" />
              Join Live Contest
            </Button>
            <Button variant="outline" size="lg">
              <Code className="mr-2 h-5 w-5" />
              Practice Problems
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12,847</div>
              <div className="text-gray-600">Active Programmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">156</div>
              <div className="text-gray-600">Contests Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2,439</div>
              <div className="text-gray-600">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">847</div>
              <div className="text-gray-600">Solutions Submitted</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Featured Contests</h3>
            <Link to="/contests">
              <Button variant="outline">View All Contests</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContests.map((contest) => (
              <Card key={contest.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getStatusColor(contest.status)}>
                      {contest.status === "live" && <Clock className="mr-1 h-3 w-3" />}
                      {contest.status.toUpperCase()}
                    </Badge>
                    <Badge variant="outline" className={getDifficultyColor(contest.difficulty)}>
                      {contest.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{contest.title}</CardTitle>
                  <CardDescription>{contest.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center text-gray-600">
                        <Users className="mr-1 h-4 w-4" />
                        {contest.participants.toLocaleString()} participants
                      </span>
                      <span className="flex items-center text-gray-600">
                        <Code className="mr-1 h-4 w-4" />
                        {contest.problems} problems
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {contest.status === "live" ? "Time left:" : 
                         contest.status === "upcoming" ? "Starts in:" : "Duration:"} 
                        <span className="font-medium ml-1">{contest.timeLeft}</span>
                      </span>
                      <Button size="sm" 
                        disabled={contest.status === "ended"}
                        className={contest.status === "live" ? "bg-green-600 hover:bg-green-700" : ""}>
                        {contest.status === "live" ? "Join Now" : 
                         contest.status === "upcoming" ? "Register" : "View Results"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Contest Winners</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "AlexCoder", contest: "Algorithm Master", points: 2847, rank: 1 },
              { name: "PyDev_Pro", contest: "Data Structures Battle", points: 2156, rank: 2 },
              { name: "CodeNinja", contest: "Weekly Challenge #41", points: 1923, rank: 3 }
            ].map((winner, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl
                      ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-amber-600'}`}>
                      {winner.rank}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{winner.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{winner.contest}</p>
                  <div className="flex items-center justify-center">
                    <Award className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{winner.points} points</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-6 w-6" />
                <span className="text-xl font-bold">CodeArena</span>
              </div>
              <p className="text-gray-400">The ultimate platform for competitive programming and coding contests.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Platform</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contests" className="hover:text-white transition-colors">Contests</Link></li>
                <li><Link to="/problems" className="hover:text-white transition-colors">Problems</Link></li>
                <li><Link to="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Community</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CodeArena. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;