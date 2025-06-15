
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Play, Upload, Clock, CheckCircle, XCircle, Code } from "lucide-react";
import { Link } from "react-router-dom";

const ProblemPage = () => {
  const problem = {
    id: "A",
    title: "Two Sum Variant",
    difficulty: "Easy",
    points: 100,
    timeLimit: "1000ms",
    memoryLimit: "256MB",
    solved: 987,
    attempts: 1156,
    successRate: 85
  };

  const examples = [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
    },
    {
      input: "nums = [3,2,4], target = 6", 
      output: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
    }
  ];

  const submissions = [
    { id: 1, time: "14:23:45", language: "Python", verdict: "Accepted", executionTime: "45ms", memory: "12.3MB" },
    { id: 2, time: "14:18:32", language: "Python", verdict: "Wrong Answer", executionTime: "32ms", memory: "11.8MB" },
    { id: 3, time: "14:15:21", language: "C++", verdict: "Time Limit Exceeded", executionTime: ">1000ms", memory: "8.2MB" }
  ];

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "Accepted": return "text-green-700 bg-green-50";
      case "Wrong Answer": return "text-red-700 bg-red-50";
      case "Time Limit Exceeded": return "text-yellow-700 bg-yellow-50";
      case "Runtime Error": return "text-purple-700 bg-purple-50";
      default: return "text-gray-700 bg-gray-50";
    }
  };

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "Accepted": return <CheckCircle className="h-4 w-4" />;
      case "Wrong Answer": return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">CodeArena</span>
              </Link>
              <span className="text-gray-400">/</span>
              <Link to="/contest/1" className="text-gray-600 hover:text-blue-600">Weekly Challenge #42</Link>
              <span className="text-gray-400">/</span>
              <span className="font-medium text-gray-700">Problem {problem.id}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Submit
              </Button>
              <Button size="sm">
                <Play className="mr-2 h-4 w-4" />
                Run Code
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Problem Statement */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-gray-700">{problem.id}.</span>
                    <div>
                      <CardTitle className="text-2xl">{problem.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge className="text-green-600 bg-green-50 border-green-200">
                          {problem.difficulty}
                        </Badge>
                        <span className="text-sm text-gray-600">{problem.points} points</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Success Rate</div>
                    <div className="text-2xl font-bold text-blue-600">{problem.successRate}%</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-gray-400 mx-auto mb-1" />
                    <div className="text-sm text-gray-600">Time Limit</div>
                    <div className="font-medium">{problem.timeLimit}</div>
                  </div>
                  <div className="text-center">
                    <div className="h-5 w-5 bg-gray-400 rounded mx-auto mb-1"></div>
                    <div className="text-sm text-gray-600">Memory Limit</div>
                    <div className="font-medium">{problem.memoryLimit}</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto mb-1" />
                    <div className="text-sm text-gray-600">Solved</div>
                    <div className="font-medium">{problem.solved}</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Problem Statement</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Given an array of integers <code className="bg-gray-100 px-1 py-0.5 rounded">nums</code> and an integer <code className="bg-gray-100 px-1 py-0.5 rounded">target</code>, 
                  return indices of the two numbers such that they add up to target.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may assume that each input would have exactly one solution, and you may not use the same element twice.
                  You can return the answer in any order.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">Constraints:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><code className="bg-gray-100 px-1 py-0.5 rounded">2 ≤ nums.length ≤ 10⁴</code></li>
                  <li><code className="bg-gray-100 px-1 py-0.5 rounded">-10⁹ ≤ nums[i] ≤ 10⁹</code></li>
                  <li><code className="bg-gray-100 px-1 py-0.5 rounded">-10⁹ ≤ target ≤ 10⁹</code></li>
                  <li>Only one valid answer exists.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {examples.map((example, index) => (
                  <div key={index}>
                    <h5 className="font-semibold mb-3">Example {index + 1}:</h5>
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-gray-700">Input: </span>
                        <code className="bg-gray-100 px-2 py-1 rounded">{example.input}</code>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Output: </span>
                        <code className="bg-gray-100 px-2 py-1 rounded">{example.output}</code>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Explanation: </span>
                        <span className="text-gray-600">{example.explanation}</span>
                      </div>
                    </div>
                    {index < examples.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Code Editor & Submissions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Code Editor</CardTitle>
                <div className="flex items-center space-x-4">
                  <Select defaultValue="python">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="python">Python 3</SelectItem>
                      <SelectItem value="cpp">C++</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="text-sm text-gray-600">
                    Template: <Button variant="link" className="p-0 h-auto">Load starter code</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2"># Python 3</div>
                  <Textarea 
                    className="bg-transparent border-none text-green-400 font-mono resize-none focus:outline-none min-h-[300px]"
                    placeholder="def twoSum(nums, target):
    # Write your solution here
    pass"
                    defaultValue="def twoSum(nums, target):
    # Write your solution here
    pass"
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Play className="mr-2 h-4 w-4" />
                      Test
                    </Button>
                    <Button variant="outline" size="sm">Reset</Button>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Upload className="mr-2 h-4 w-4" />
                    Submit Solution
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>My Submissions</CardTitle>
                <CardDescription>Your recent submissions for this problem</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {submissions.map((submission) => (
                    <div key={submission.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded text-xs ${getVerdictColor(submission.verdict)}`}>
                          {getVerdictIcon(submission.verdict)}
                          <span>{submission.verdict}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {submission.time} • {submission.language}
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div>{submission.executionTime}</div>
                        <div>{submission.memory}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Test Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="sample">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="sample">Sample</TabsTrigger>
                    <TabsTrigger value="custom">Custom</TabsTrigger>
                  </TabsList>
                  <TabsContent value="sample" className="space-y-4">
                    <div className="space-y-3">
                      {examples.map((example, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <div className="text-sm font-medium mb-2">Test Case {index + 1}</div>
                          <div className="text-sm space-y-1">
                            <div><span className="font-medium">Input:</span> {example.input}</div>
                            <div><span className="font-medium">Expected:</span> {example.output}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="custom">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Input</label>
                        <Textarea placeholder="Enter your test input..." className="min-h-20" />
                      </div>
                      <Button size="sm">Run Test</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
