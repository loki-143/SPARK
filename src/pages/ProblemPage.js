import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Play,
  Upload,
  Clock,
  CheckCircle,
  XCircle,
  Code,
} from "lucide-react";
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
    successRate: 85,
  };

  const examples = [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
  ];

  const submissions = [
    {
      id: 1,
      time: "14:23:45",
      language: "Python",
      verdict: "Accepted",
      executionTime: "45ms",
      memory: "12.3MB",
    },
    {
      id: 2,
      time: "14:18:32",
      language: "Python",
      verdict: "Wrong Answer",
      executionTime: "32ms",
      memory: "11.8MB",
    },
    {
      id: 3,
      time: "14:15:21",
      language: "C++",
      verdict: "Time Limit Exceeded",
      executionTime: ">1000ms",
      memory: "8.2MB",
    },
  ];

  const getVerdictColor = (verdict) => {
    switch (verdict) {
      case "Accepted":
        return "text-green-700 bg-green-50";
      case "Wrong Answer":
        return "text-red-700 bg-red-50";
      case "Time Limit Exceeded":
        return "text-yellow-700 bg-yellow-50";
      case "Runtime Error":
        return "text-purple-700 bg-purple-50";
      default:
        return "text-gray-700 bg-gray-50";
    }
  };

  const getVerdictIcon = (verdict) => {
    switch (verdict) {
      case "Accepted":
        return <CheckCircle className="h-4 w-4" />;
      case "Wrong Answer":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
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
                <span className="text-xl font-bold text-gray-900">
                  CodeArena
                </span>
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                to="/contest/1"
                className="text-gray-600 hover:text-blue-600"
              >
                Weekly Challenge #42
              </Link>
              <span className="text-gray-400">/</span>
              <span className="font-medium text-gray-700">
                Problem {problem.id}
              </span>
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
          {/* Left Panel */}
          <div className="space-y-6">
            {/* Problem Card */}
            {/* Statement, Examples ... same as above */}
            {/* ... */}
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Code Editor, Submissions, Test Cases ... same as above */}
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
