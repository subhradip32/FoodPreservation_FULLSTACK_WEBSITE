import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { APP_NAME } from "../constants";
import Navbar from "../components/navbar";
import BackCircles from "../components/backcircles";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Login failed");
        // store basic info and navigate
        try {
          localStorage.setItem("userId", data.id);
          localStorage.setItem("userName", data.name || "");
        } catch (e) {}
        navigate("/");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  return (
  <>
    <Navbar/>
    <BackCircles/>
    <div className="min-h-[80vh] flex items-center justify-center bg-grad-start">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-primary mb-1">Welcome back</h2>
        <p className="text-subtext mb-6">Log in to {APP_NAME} to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-subtext mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-accent-light focus:ring-2 focus:ring-primary outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-subtext mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-accent-light focus:ring-2 focus:ring-primary outline-none"
              placeholder="Your password"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-xl font-semibold mt-2 hover:opacity-95 transition"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Log in"}
          </button>
        </form>

        <p className="text-center text-sm text-subtext mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}
