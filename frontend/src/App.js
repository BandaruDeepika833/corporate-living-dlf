import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import { api } from "@/lib/api";

function ProtectedRoute({ children }) {
  const [state, setState] = useState("checking"); // checking | ok | denied
  useEffect(() => {
    const token = localStorage.getItem("nestro_admin_token");
    if (!token) {
      setState("denied");
      return;
    }
    api
      .get("/auth/me")
      .then(() => setState("ok"))
      .catch(() => {
        localStorage.removeItem("nestro_admin_token");
        setState("denied");
      });
  }, []);
  if (state === "checking")
    return (
      <div className="min-h-screen flex items-center justify-center text-navy/70">
        Checking session…
      </div>
    );
  if (state === "denied") return <Navigate to="/admin/login" replace />;
  return children;
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-center" richColors closeButton />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
