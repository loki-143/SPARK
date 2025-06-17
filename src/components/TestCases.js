import React, { useState } from 'react'
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
import { getVerdictColor, getVerdictIcon } from "../utils/utilVerdict";
import axios from 'axios';

const TestCases = ({ code, language, onTestComplete }) => {
  const [customInput, setCustomInput] = useState('');
  const [testResults, setTestResults] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('sample');

  const languageMap = {
    python: 71,
    java: 62,
    javascript: 63,
    cpp: 54,
  };

  const runTestCase = async (input) => {
    try {
      const response = await axios.post(`${process.env.API_URL}/run`, {
        source_code: code,
        language_id: languageMap[language],
        stdin: input
      });

      const { output, stderr, compile_output, status } = response.data;
      return {
        output: output || stderr || compile_output || '',
        status,
        error: stderr || compile_output
      };
    } catch (error) {
      return {
        output: '',
        status: 'error',
        error: error.message
      };
    }
  };

  const handleRunAllTests = async () => {
    setIsRunning(true);
    const results = [];

    for (const testCase of examples) {
      const result = await runTestCase(testCase.input);
      const passed = result.output.trim() === testCase.output.trim();
      
      results.push({
        input: testCase.input,
        expectedOutput: testCase.output,
        actualOutput: result.output,
        passed,
        error: result.error
      });
    }

    setTestResults(results);
    setIsRunning(false);
    onTestComplete?.(results);
  };

  const handleCustomTest = async () => {
    if (!customInput.trim()) return;
    
    setIsRunning(true);
    const result = await runTestCase(customInput);
    setTestResults([{
      input: customInput,
      actualOutput: result.output,
      error: result.error
    }]);
    setIsRunning(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Cases</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
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
                    {testResults[index] && (
                      <div className="mt-2">
                        <div><span className="font-medium">Actual:</span> {testResults[index].actualOutput}</div>
                        <div className={`mt-1 flex items-center space-x-1 px-2 py-1 rounded text-xs ${
                          testResults[index].passed ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
                        }`}>
                          {testResults[index].passed ? '✓ Passed' : '✗ Failed'}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <Button 
                onClick={handleRunAllTests} 
                disabled={isRunning}
                className="w-full"
              >
                {isRunning ? 'Running Tests...' : 'Run All Tests'}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="custom" className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Input</label>
                <Textarea 
                  placeholder="Enter your test input..." 
                  className="min-h-20"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                />
              </div>
              <Button 
                size="sm" 
                onClick={handleCustomTest}
                disabled={isRunning || !customInput.trim()}
              >
                {isRunning ? 'Running...' : 'Run Test'}
              </Button>
              {testResults[0] && (
                <div className="mt-4 border rounded-lg p-3">
                  <div className="text-sm font-medium mb-2">Result</div>
                  <div className="text-sm space-y-1">
                    <div><span className="font-medium">Output:</span></div>
                    <pre className="bg-gray-50 p-2 rounded">{testResults[0].actualOutput}</pre>
                    {testResults[0].error && (
                      <div className="text-red-600 mt-2">
                        <span className="font-medium">Error:</span>
                        <pre className="bg-red-50 p-2 rounded mt-1">{testResults[0].error}</pre>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TestCases;