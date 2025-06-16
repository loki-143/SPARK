// Converted to JavaScript from TypeScript
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trophy, Medal, Award, TrendingUp, Code, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeaderboardPage = () => {
  const globalLeaderboard = [
    { rank: 1, username: 'AlexCoder', rating: 2847, country: '🇺🇸', contests: 156, solved: 1247, streak: 45 },
    { rank: 2, username: 'PyDev_Pro', rating: 2756, country: '🇯🇵', contests: 142, solved: 1089, streak: 23 },
    { rank: 3, username: 'CodeNinja', rating: 2698, country: '🇩🇪', contests: 134, solved: 987, streak: 67 },
    { rank: 4, username: 'AlgoMaster', rating: 2634, country: '🇮🇳', contests: 128, solved: 934, streak: 12 },
    { rank: 5, username: 'DevGuru', rating: 2587, country: '🇷🇺', contests: 119, solved: 876, streak: 34 },
    { rank: 6, username: 'BinaryWiz', rating: 2523, country: '🇨🇦', contests: 115, solved: 823, streak: 8 },
    { rank: 7, username: 'CppMaster', rating: 2476, country: '🇬🇧', contests: 108, solved: 798, streak: 19 },
    { rank: 8, username: 'JavaGuru', rating: 2445, country: '🇰🇷', contests: 102, solved: 756, streak: 56 },
    { rank: 9, username: 'DSExpert', rating: 2398, country: '🇧🇷', contests: 98, solved: 723, streak: 41 },
    { rank: 10, username: 'LogicLord', rating: 2356, country: '🇫🇷', contests: 94, solved: 689, streak: 15 }
  ];

  const recentContests = [
    { name: 'Weekly Challenge #42', date: '2024-06-10', participants: 1247, winner: 'AlexCoder' },
    { name: 'Algorithm Sprint', date: '2024-06-09', participants: 892, winner: 'PyDev_Pro' },
    { name: 'Data Structures Battle', date: '2024-06-08', participants: 1156, winner: 'CodeNinja' },
    { name: 'Dynamic Programming Challenge', date: '2024-06-07', participants: 978, winner: 'AlgoMaster' }
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Award className="h-6 w-6 text-amber-600" />;
      default: return <div className="w-6 h-6 flex items-center justify-center text-gray-600 font-bold">{rank}</div>;
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 2500) return 'text-red-600 bg-red-50';
    if (rating >= 2000) return 'text-purple-600 bg-purple-50';
    if (rating >= 1500) return 'text-blue-600 bg-blue-50';
    if (rating >= 1000) return 'text-green-600 bg-green-50';
    return 'text-gray-600 bg-gray-50';
  };

  const getRatingTitle = (rating) => {
    if (rating >= 2500) return 'Grandmaster';
    if (rating >= 2000) return 'Master';
    if (rating >= 1500) return 'Expert';
    if (rating >= 1000) return 'Specialist';
    return 'Newbie';
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
              <span className="font-medium text-gray-700">Leaderboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="global">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="global">Global</SelectItem>
                  <SelectItem value="country">Country</SelectItem>
                  <SelectItem value="university">University</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">12,847</div>
              <div className="text-sm text-gray-600">Active Competitors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2,156</div>
              <div className="text-sm text-gray-600">Contests Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">45,923</div>
              <div className="text-sm text-gray-600">Problems Solved</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Days Active</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="global" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="global">Global Rankings</TabsTrigger>
            <TabsTrigger value="contests">Contest History</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="global">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span>Global Leaderboard</span>
                </CardTitle>
                <CardDescription>
                  Rankings based on contest performance and problem-solving skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {globalLeaderboard.map((user) => (
                    <div key={user.rank} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12">
                          {getRankIcon(user.rank)}
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{user.country}</span>
                          <div>
                            <div className="font-semibold text-lg">{user.username}</div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{user.contests} contests</span>
                              <span>•</span>
                              <span>{user.solved} solved</span>
                              <span>•</span>
                              <span>{user.streak} day streak</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(user.rating)}`}>
                          {getRatingTitle(user.rating)}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mt-1">{user.rating}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contests">
            <Card>
              <CardHeader>
                <CardTitle>Recent Contest Results</CardTitle>
                <CardDescription>Latest contest winners and participation stats</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentContests.map((contest, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="font-semibold">{contest.name}</div>
                        <div className="text-sm text-gray-600">{contest.date} • {contest.participants} participants</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium">{contest.winner}</span>
                        </div>
                        <div className="text-sm text-gray-600">Winner</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Contest Winner</h3>
                  <p className="text-sm text-gray-600">Win your first contest</p>
                  <Badge className="mt-2">Rare</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Problem Solver</h3>
                  <p className="text-sm text-gray-600">Solve 100 problems</p>
                  <Badge className="mt-2" variant="outline">Common</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Rising Star</h3>
                  <p className="text-sm text-gray-600">Gain 500 rating points</p>
                  <Badge className="mt-2" variant="secondary">Uncommon</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Speed Demon</h3>
                  <p className="text-sm text-gray-600">Solve a problem in under 2 minutes</p>
                  <Badge className="mt-2" variant="secondary">Uncommon</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Medal className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Perfect Score</h3>
                  <p className="text-sm text-gray-600">Achieve 100% in a contest</p>
                  <Badge className="mt-2">Legendary</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Consistent</h3>
                  <p className="text-sm text-gray-600">Maintain a 30-day solving streak</p>
                  <Badge className="mt-2" variant="outline">Common</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LeaderboardPage;
