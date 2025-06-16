import React from "react";
import ProblemHeader from "../components/ProblemHeader";
import ProblemOverview from "../components/ProblemOverview";
import ProblemStatement from "../components/ProblemStatement";
import ProblemExample from "../components/ProblemExample";
import CodeEditor from "../components/CodeEditor";
import Submissions from "../components/Submissions";
import TestCases from "../components/TestCases";

const ProblemPage = () => {



  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      {<ProblemHeader />}
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
            {<CodeEditor />}
            {/* Code Editor Closed */}

            {/* Submissions */}
            {<Submissions />}
            {/* Submissions Closed - also render when the code is submited and api is called*/}

            {/* Test Cases */}
            {<TestCases />}
            {/* Test Cases Closed */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
