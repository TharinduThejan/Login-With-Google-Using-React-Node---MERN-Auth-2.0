import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import LoginForm from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track if checking session

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        setUser(data.user); // Passport profile returned
      } catch (err) {
        console.log(
          "Not authenticated:",
          err.response?.data?.message || err.message
        );
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  if (loading) return <div>Loading...</div>; // Wait until session check is done

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginForm />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
