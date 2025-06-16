import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Clock,
  Users,
  Code,
  Trophy,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContestPage = () => {
  const contestData = {
    id: 1,
    title: "Weekly Challenge #42",
    description:
      "Algorithmic problem solving contest with dynamic programming focus",
    status: "live",
    participants: 1247,
    timeLeft: "2h 34m",
    totalTime: "4h 00m",
    startTime: "14:00 UTC",
    endTime: "18:00 UTC",
  };

  const problems = [
    {
      id: "A",
      title: "Two Sum Variant",
      difficulty: "Easy",
      points: 100,
      solved: 987,
      attempts: 1156,
      status: "accepted",
    },
    {
      id: "B",
      title: "Longest Increasing Subsequence",
      difficulty: "Medium",
      points: 250,
      solved: 543,
      attempts: 892,
      status: "attempted",
    },
    {
      id: "C",
      title: "Tree DP Optimization",
      difficulty: "Hard",
      points: 400,
      solved: 187,
      attempts: 456,
      status: "unsolved",
    },
    {
      id: "D",
      title: "Advanced Graph Algorithm",
      difficulty: "Hard",
      points: 500,
      solved: 43,
      attempts: 234,
      status: "unsolved",
    },
  ];

  const leaderboard = [
    {
      rank: 1,
      username: "AlexCoder",
      score: 1250,
      penalty: "0:45:23",
      problems: [true, true, true, true],
    },
    {
      rank: 2,
      username: "PyDev_Pro",
      score: 1150,
      penalty: "1:12:45",
      problems: [true, true, true, false],
    },
    {
      rank: 3,
      username: "CodeNinja",
      score: 1050,
      penalty: "1:23:12",
      problems: [true, true, false, true],
    },
    {
      rank: 4,
      username: "AlgoMaster",
      score: 850,
      penalty: "0:56:34",
      problems: [true, true, false, false],
    },
    {
      rank: 5,
      username: "DevGuru",
      score: 750,
      penalty: "1:45:23",
      problems: [true, false, true, false],
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-50 border-green-200";
      case "Medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Hard":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "accepted":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "attempted":
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <div className="h-5 w-5 rounded-full bg-gray-300" />;
    }
  };

  const timeProgress = ((4 * 60 - 2 * 60 - 34) / (4 * 60)) * 100;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">CodeArena</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="font-medium text-gray-700">{contestData.title}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">
                <Clock className="mr-1 h-3 w-3" />
                LIVE
              </Badge>
              <Button variant="outline" size="sm">My Submissions</Button>
              <Button size="sm">Submit Solution</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{contestData.title}</h1>
              <p className="text-gray-600">{contestData.description}</p>
            </div>
            <div className="mt-4 lg:mt-0 lg:text-right">
              <div className="text-2xl font-bold text-blue-600">{contestData.timeLeft}</div>
              <div className="text-sm text-gray-600">remaining</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-blue-600">{contestData.participants.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Participants</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Code className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-green-600">{problems.length}</div>
              <div className="text-sm text-gray-600">Problems</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-purple-600">{contestData.totalTime}</div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Trophy className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-orange-600">1250</div>
              <div className="text-sm text-gray-600">Max Points</div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Contest Progress</span>
              <span>{Math.round(timeProgress)}% complete</span>
            </div>
            <Progress value={timeProgress} className="h-2" />
          </div>
        </div>

        <Tabs defaultValue="problems" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="problems">Problems</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="submissions">My Submissions</TabsTrigger>
          </TabsList>

          <TabsContent value="problems" className="space-y-4">
            {problems.map((problem) => (
              <Card key={problem.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(problem.status)}
                      <div>
                        <CardTitle className="flex items-center space-x-3">
                          <span className="text-lg font-bold text-gray-700">{problem.id}.</span>
                          <Link to={`/problem/${problem.id}`} className="hover:text-blue-600 transition-colors">
                            {problem.title}
                          </Link>
                        </CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge className={getDifficultyColor(problem.difficulty)}>
                            {problem.difficulty}
                          </Badge>
                          <span className="text-sm text-gray-600">{problem.points} points</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">
                        Solved: {problem.solved} / {problem.attempts}
                      </div>
                      <div className="text-xs text-gray-500">
                        Success: {Math.round((problem.solved / problem.attempts) * 100)}%
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(problem.solved / problem.attempts) * 100}%` }}
                      ></div>
                    </div>
                    <Button size="sm" asChild>
                      <Link to={`/problem/${problem.id}`}>
                        {problem.status === "accepted" ? "View Solution" : "Solve"}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="leaderboard">
            <Card>
              <CardHeader>
                <CardTitle>Contest Leaderboard</CardTitle>
                <CardDescription>Live rankings updated in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((entry) => (
                    <div
                      key={entry.rank}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm
                          ${entry.rank === 1 ? "bg-yellow-500" : entry.rank === 2 ? "bg-gray-400" : entry.rank === 3 ? "bg-amber-600" : "bg-blue-500"}`}
                        >
                          {entry.rank}
                        </div>
                        <div>
                          <div className="font-semibold">{entry.username}</div>
                          <div className="text-sm text-gray-600">Penalty: {entry.penalty}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="flex space-x-2">
                          {entry.problems.map((solved, index) => (
                            <div
                              key={index}
                              className={`w-6 h-6 rounded flex items-center justify-center text-xs
                              ${solved ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-400"}`}
                            >
                              {String.fromCharCode(65 + index)}
                            </div>
                          ))}
                        </div>
                        <div className="text-xl font-bold text-blue-600">{entry.score}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="submissions">
            <Card>
              <CardHeader>
                <CardTitle>My Submissions</CardTitle>
                <CardDescription>Your submission history for this contest</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No submissions yet. Start solving problems to see your submissions here!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContestPage;
