import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Upload } from "lucide-react";

const CodeEditor = () => {
  return (
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
                        placeholder="def twoSum(nums, target):\n    # Write your solution here\n    pass"
                        defaultValue={`def twoSum(nums, target):\n    # Write your solution here\n    pass`}
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
  )
}

export default CodeEditor;