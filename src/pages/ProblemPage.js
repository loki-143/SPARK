import React, { useState, useEffect } from "react";
import ProblemHeader from "../components/ProblemHeader";
import ProblemOverview from "../components/ProblemOverview";
import ProblemStatement from "../components/ProblemStatement";
import ProblemExample from "../components/ProblemExample";
import CodeEditor from "../components/CodeEditor";
import Submissions from "../components/Submissions";
import TestCases from "../components/TestCases";
import { useToast } from "@/components/ui/use-toast";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProblemPage = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [submissions, setSubmissions] = useState([]);
  const { toast } = useToast();

  const { slug } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/problems/${slug}`)
      .then(res => setProblem(res.data))
      .catch(err => console.error(err));
  }, [slug]);

  if (!problem) return <div>Loading...</div>;

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleTestComplete = (results) => {
    const allPassed = results.every(result => result.passed);
    if (allPassed) {
      toast({
        title: "Success",
        description: "All test cases passed!",
      });
    } else {
      toast({
        title: "Test Cases Failed",
        description: "Some test cases failed. Please check the results.",
        variant: "destructive",
      });
    }
  };

  const handleSubmissionComplete = (submission) => {
    setSubmissions(prev => [submission, ...prev]);
    toast({
      title: "Success",
      description: "Solution submitted successfully",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <ProblemHeader problem={problem} />
      {/*Header Closed */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel */}
          <div className="space-y-6">

            {/* Problem Overview */}
            {<ProblemOverview />}
            {/*PO closed */}

            {/* Problem Statement */}
           {<ProblemStatement />}
           {/*PS closed */}

            {/* Examples */}
            {<ProblemExample />}
            {/* Examples Closed */}
          </div>

          {/* Right Panel */}
          <div className="space-y-6">

            {/* Code Editor */}
            <CodeEditor 
              problemId="two-sum" // This should come from your routing/state management
              onSubmissionComplete={handleSubmissionComplete}
            />
            {/* Code Editor Closed */}

            {/* Test Cases */}
            <TestCases 
              code={code}
              language={language}
              onTestComplete={handleTestComplete}
            />
            {/* Test Cases Closed */}

            {/* Submissions */}
            <Submissions submissions={submissions} />
            {/* Submissions Closed - also render when the code is submited and api is called*/}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
