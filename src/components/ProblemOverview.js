import React from 'react'
import {
  Play,
  Upload,
  Clock,
  CheckCircle,
  XCircle,
  Code,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { problem } from '../utils/dummyData';

const ProblemOverview = () => {
  return (
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
  )
}

export default ProblemOverview;