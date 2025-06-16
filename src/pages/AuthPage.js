import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Link, useNavigate } from "react-router-dom";

// You can define `useAuth` or MongoDB logic later
const AuthPage = () => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // You can replace this with MongoDB session/token check later
    if (!loading && user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setPending(true);

    try {
      if (mode === "login") {
        // TODO: Replace with MongoDB login logic
        // const res = await loginUser({ email, password });
        console.log("Login with", { email, password });
        toast("Login successful!");
        setUser({ email });
      } else {
        // TODO: Replace with MongoDB signup logic
        // const res = await signupUser({ email, password });
        console.log("Signup with", { email, password });
        toast("Sign up successful! Please check your inbox to confirm your email.");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      toast("Authentication failed", {
        description: error.message || "Unknown error",
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-md mx-auto shadow-xl border-blue-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center mb-2">
            {mode === "login" ? "Sign In" : "Sign Up"}
          </CardTitle>
          <div className="text-center text-muted-foreground text-base mb-2">
            {mode === "login"
              ? "Welcome back to CodeArena."
              : "Create your free account to join contests."}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={pending}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={pending}
              />
            </div>
            <Button
              className="w-full"
              type="submit"
              disabled={pending || !email || !password}
              size="lg"
            >
              {pending
                ? mode === "login"
                  ? "Signing in..."
                  : "Signing up..."
                : mode === "login"
                ? "Sign In"
                : "Sign Up"}
            </Button>
          </form>
          <div className="text-sm mt-6 text-center">
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <button
                  className="text-blue-600 underline hover:text-blue-800"
                  onClick={() => setMode("signup")}
                  disabled={pending}
                  type="button"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-blue-600 underline hover:text-blue-800"
                  onClick={() => setMode("login")}
                  disabled={pending}
                  type="button"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
          <div className="mt-4 text-center">
            <Link to="/" className="text-gray-500 hover:text-blue-600 text-xs">
              &larr; Back to homepage
            </Link>
          </div>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
};

export default AuthPage;
