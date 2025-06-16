import React, { useState, useEffect } from 'react';
// import { fetchDashboardData } from '../services/dashboard.service';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Code, Trophy, TrendingUp, Clock, CheckCircle, XCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await fetchDashboardData();
  //       setData(result);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const userStats = {
    username: "CodeNinja_123",
    rating: 1856,
    rank: 2847,
    contestsParticipated: 23,
    problemsSolved: 156,
    currentStreak: 12,
    totalSubmissions: 324
  };

  const recentActivity = [
    { type: "contest", title: "Weekly Challenge #42", time: "2 hours ago", status: "participated", rank: 45 },
    { type: "problem", title: "Two Sum Variant", time: "3 hours ago", status: "solved", difficulty: "Easy" },
    { type: "problem", title: "Binary Tree Traversal", time: "1 day ago", status: "attempted", difficulty: "Medium" },
    { type: "contest", title: "Algorithm Sprint", time: "2 days ago", status: "participated", rank: 67 }
  ];

  const skillProgress = [
    { skill: "Dynamic Programming", progress: 75, total: 120, solved: 90 },
    { skill: "Graph Algorithms", progress: 60, total: 80, solved: 48 },
    { skill: "Data Structures", progress: 85, total: 100, solved: 85 },
    { skill: "Greedy Algorithms", progress: 45, total: 60, solved: 27 },
    { skill: "String Processing", progress: 70, total: 50, solved: 35 }
  ];

  const upcomingContests = [
    { title: "Spring Code Sprint", date: "Jun 11, 2024", time: "16:00 UTC", registered: true },
    { title: "Algorithm Championship", date: "Jun 13, 2024", time: "14:00 UTC", registered: false },
    { title: "Weekly Challenge #43", date: "Jun 17, 2024", time: "14:00 UTC", registered: false }
  ];

  const getActivityIcon = (type) => {
    return type === "contest" ? <Trophy className="h-4 w-4" /> : <Code className="h-4 w-4" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "solved": return "text-green-600";
      case "attempted": return "text-red-600";
      case "participated": return "text-blue-600";
      default: return "text-gray-600";
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 2000) return "text-purple-600 bg-purple-50";
    if (rating >= 1500) return "text-blue-600 bg-blue-50";
    if (rating >= 1000) return "text-green-600 bg-green-50";
    return "text-gray-600 bg-gray-50";
  };

  const getRatingTitle = (rating) => {
    if (rating >= 2000) return "Master";
    if (rating >= 1500) return "Expert";
    if (rating >= 1000) return "Specialist";
    return "Newbie";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">CodeArena</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="font-medium text-gray-700">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Settings</Button>
              <Button size="sm">
                <Target className="mr-2 h-4 w-4" />
                Set Goal
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {userStats.username}!</h1>
              <p className="text-gray-600 mt-1">Ready to solve some challenging problems today?</p>
            </div>
            <div className="text-right">
              <div className={`inline-flex items-center px-4 py-2 rounded-full font-medium ${getRatingColor(userStats.rating)}`}>
                {getRatingTitle(userStats.rating)}
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{userStats.rating}</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Trophy className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">{userStats.rank}</div>
                <div className="text-sm text-gray-600">Global Rank</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Code className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">{userStats.problemsSolved}</div>
                <div className="text-sm text-gray-600">Problems Solved</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">{userStats.currentStreak}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">{userStats.contestsParticipated}</div>
                <div className="text-sm text-gray-600">Contests</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="contests">Contests</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest coding activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.slice(0, 5).map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50">
                      <div className={`p-2 rounded-full bg-slate-100 ${getStatusColor(activity.status)}`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-sm text-gray-600">
                          {activity.time}
                          {activity.rank && ` • Rank: ${activity.rank}`}
                          {activity.difficulty && ` • ${activity.difficulty}`}
                        </div>
                      </div>
                      <div className={`text-sm font-medium ${getStatusColor(activity.status)}`}>
                        {activity.status === "solved" && <CheckCircle className="h-4 w-4" />}
                        {activity.status === "attempted" && <XCircle className="h-4 w-4" />}
                        {activity.status === "participated" && <Trophy className="h-4 w-4" />}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/activity">View All Activity</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Contests</CardTitle>
                <CardDescription>Don't miss these exciting competitions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingContests.map((contest, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{contest.title}</div>
                        <div className="text-sm text-gray-600">
                          <Calendar className="inline h-3 w-3 mr-1" />
                          {contest.date} at {contest.time}
                        </div>
                      </div>
                      <div>
                        {contest.registered ? (
                          <Badge className="bg-green-100 text-green-800">Registered</Badge>
                        ) : (
                          <Button size="sm" variant="outline">Register</Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Activity Timeline</CardTitle>
                <CardDescription>Complete history of your coding activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-slate-50">
                      <div className={`p-3 rounded-full bg-slate-100 ${getStatusColor(activity.status)}`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-lg">{activity.title}</div>
                          <div className="text-sm text-gray-500">{activity.time}</div>
                        </div>
                        <div className="mt-1">
                          <Badge variant="outline" className={getStatusColor(activity.status)}>
                            {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                          </Badge>
                          {activity.rank && (
                            <Badge variant="secondary" className="ml-2">
                              Rank: {activity.rank}
                            </Badge>
                          )}
                          {activity.difficulty && (
                            <Badge variant="secondary" className="ml-2">
                              {activity.difficulty}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skill Progress</CardTitle>
                  <CardDescription>Track your improvement across different topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skillProgress.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.skill}</span>
                          <span className="text-sm text-gray-600">{skill.solved}/{skill.total}</span>
                        </div>
                        <Progress value={skill.progress} className="h-2" />
                        <div className="text-xs text-gray-500 mt-1">{skill.progress}% complete</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Your coding statistics over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">78%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">23</div>
                        <div className="text-sm text-gray-600">Best Rank</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">4.2</div>
                        <div className="text-sm text-gray-600">Avg Problems/Contest</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">12</div>
                        <div className="text-sm text-gray-600">Current Streak</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contests">
            <Card>
              <CardHeader>
                <CardTitle>Contest History</CardTitle>
                <CardDescription>Your participation record in coding contests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Weekly Challenge #42", date: "Jun 10, 2024", rank: 45, participants: 1247, solved: 3 },
                    { name: "Algorithm Sprint", date: "Jun 09, 2024", rank: 67, participants: 892, solved: 2 },
                    { name: "Data Structures Battle", date: "Jun 08, 2024", rank: 123, participants: 1156, solved: 2 },
                    { name: "Dynamic Programming Challenge", date: "Jun 07, 2024", rank: 89, participants: 978, solved: 3 }
                  ].map((contest, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
                      <div>
                        <div className="font-medium">{contest.name}</div>
                        <div className="text-sm text-gray-600">{contest.date} • {contest.participants} participants</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">#{contest.rank}</div>
                        <div className="text-sm text-gray-600">{contest.solved} problems solved</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
