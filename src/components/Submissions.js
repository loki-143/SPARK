import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { submissions } from '../utils/dummyData';
import { getVerdictColor, getVerdictIcon } from "../utils/utilVerdict";

const Submissions = () => {
  return (
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
    
  )
}

export default Submissions