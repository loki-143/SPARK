import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { examples } from '../utils/dummyData';

const TestCases = () => {
  return (
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
  )
}

export default TestCases