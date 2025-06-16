import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { examples } from '../utils/dummyData';
const ProblemExample = () => {
  return (
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
  )
}

export default ProblemExample;