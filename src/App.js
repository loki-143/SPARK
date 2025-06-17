import React from "react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContestPage from "./pages/ContestPage";
import ProblemPage from "./pages/ProblemPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contest/:id" element={<ContestPage />} />
            <Route path="/problem/:id" element={<ProblemPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/problems/:slug" element={<ProblemPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
