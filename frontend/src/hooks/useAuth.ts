import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  email: string;
  name: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const authData = localStorage.getItem("sentimate-auth");
    if (authData) {
      try {
        const userData = JSON.parse(authData);
        setUser(userData);
      } catch (error) {
        console.error("Failed to parse auth data:", error);
        localStorage.removeItem("sentimate-auth");
      }
    }
    setLoading(false);
  }, []);

  const signIn = (email: string, password: string): Promise<{ error?: string }> => {
    return new Promise((resolve) => {
      // Simulate API call
      setTimeout(() => {
        if (email && password) {
          const userData = {
            id: "1",
            email,
            name: "Sarah Johnson",
          };
          localStorage.setItem("sentimate-auth", JSON.stringify(userData));
          setUser(userData);
          resolve({});
        } else {
          resolve({ error: "Invalid email or password" });
        }
      }, 500);
    });
  };

  const signUp = (email: string, password: string, name: string): Promise<{ error?: string }> => {
    return new Promise((resolve) => {
      // Simulate API call
      setTimeout(() => {
        if (email && password && name) {
          const userData = {
            id: "1",
            email,
            name,
          };
          localStorage.setItem("sentimate-auth", JSON.stringify(userData));
          setUser(userData);
          resolve({});
        } else {
          resolve({ error: "All fields are required" });
        }
      }, 500);
    });
  };

  const signOut = () => {
    localStorage.removeItem("sentimate-auth");
    setUser(null);
    navigate("/auth/signin");
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!user,
  };
}
