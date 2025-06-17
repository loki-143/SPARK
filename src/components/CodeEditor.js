import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play, Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { languageMap, templateMap } from "../utils/constants";

const API_URL = 'http://localhost:5000';

const CodeEditor = ({ 
  code, 
  language, 
  onCodeChange, 
  onLanguageChange
}) => {
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLanguageChange = (value) => {
    onLanguageChange(value);
  };

  const handleExecute = async () => {
    setIsLoading(true);
    setOutput("Running...");
    try {
      const submission = await axios.post(`${API_URL}/run`, {
        source_code: code,
        language_id: languageMap[language],
        stdin: "Judge0"
      });

      const { output, stderr, compile_output, status } = submission.data;
      setOutput(output || stderr || compile_output || `No output (status: ${status})`);

      if (stderr || compile_output) {
        toast({
          title: "Error",
          description: stderr || compile_output,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Code execution error:', error);
      setOutput("Error executing code");
      toast({
        title: "Error",
        description: error.response?.data?.message || error.message,
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleReset = () => {
    onCodeChange(templateMap[language]);
    setOutput("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Code Editor</CardTitle>
        <div className="flex items-center space-x-4">
          <Select value={language} onValueChange={handleLanguageChange}>
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
            Template:{" "}
            <Button
              variant="link"
              className="p-0 h-auto"
              onClick={() => onCodeChange(templateMap[language])}
            >
              Load starter code
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
          <div className="text-gray-100 mb-2"># {language}</div>
          <Textarea
            className="bg-transparent border-none text-white font-mono resize-none focus:outline-none min-h-[300px]"
            placeholder="Write your code here..."
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleExecute}
              disabled={isLoading}
            >
              <Play className="mr-2 h-4 w-4" />
              {isLoading ? "Running..." : "Test"}
            </Button>
            <Button variant="outline" size="sm" onClick={handleReset}>
              Reset
            </Button>
          </div>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            disabled={true}
          >
            <Upload className="mr-2 h-4 w-4" />
            Submit Solution
          </Button>
        </div>
        {output && (
          <div className="mt-4 bg-black text-white p-3 rounded-lg text-sm">
            <strong>Output:</strong>
            <pre className="mt-2 whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CodeEditor;