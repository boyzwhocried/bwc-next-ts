"use client";

import Loading from "@/components/others/Loading";
import { createBrowserClient } from "@supabase/ssr";
import { Session, User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub, FaGoogle, FaSpotify } from "react-icons/fa";

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [sessionStatus, setSessionStatus] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setAuthError("");
  };

  const router = useRouter();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSessionStatus(session)
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, [supabase.auth, user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    clearErrors();
    if (!email || !password) {
      setEmailError("Please enter both email and password.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      setSessionStatus(data.session);
      setUser(data.user);   
      router.refresh();
    } catch (error) {
      setAuthError("An error occurred during sign up.");
    }
  };

  const handleSignIn = async () => {
    clearErrors();

    if (!email || !password) {
      setEmailError("Please enter both email and password.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      setSessionStatus(data.session);
      setUser(data.user);
      router.refresh();
    } catch (error) {
      setAuthError("Invalid email or password.");
    }
  };
  const handleLoginWithGoogle = async () => {
    clearErrors();

    try {
      let { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
          redirectTo: `${location.origin}/auth/callback`,
        },
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      // Handle successful login if needed
    } catch (error) {
      setAuthError("An error occurred during Google login.");
    }
  };

  const handleLoginWithGithub = async () => {
    clearErrors();

    try {
      let { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
          redirectTo: `${location.origin}/auth/callback`,
        },
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      // Handle successful login if needed
    } catch (error) {
      setAuthError("An error occurred during Github login.");
    }
  };

  const handleLoginWithSpotify = async () => {
    clearErrors();

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "spotify",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
          redirectTo: `${location.origin}/auth/callback`,
        },
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      // Handle successful login if needed
    } catch (error) {
      setAuthError("An error occurred during Spotify login.");
    }
  };

  const handleLogout = async () => {
    try {
      
      let { error } = await supabase.auth.signOut();
      router.refresh();
      setSessionStatus(null);
      setUser(null);
      if (error) {
        setAuthError(error.message);
        return;
      }
    } catch (error) {
      setAuthError("An error occurred during loggin out.");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (sessionStatus || user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-card shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          <h1 className="text-2xl font-semibold mb-4 text-center">Logged In</h1>
          <p className="mb-6 text-text text-center">
            Welcome back! You are now logged in.
          </p>
          <button
            className="bg-primary hover:bg-primary/50 py-2 px-4 rounded w-full"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-card shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center text-foreground">
          Login
        </h1>
        <form>
          <div className="mb-4">
            <input
              className="border rounded w-full py-2 px-3"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="border rounded w-full py-2 px-3"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 mx-2 text-danger">{emailError}</div>
          <div className="mb-6 mx-2 text-danger">{passwordError}</div>
          <div className="mb-6 mx-2 text-danger">{authError}</div>
          <div className="mb-6 mx-2 text-danger">{authError}</div>
          <div className="flex items-center justify-between gap-2">
            <button
              className="bg-primary hover:bg-primary/50 py-2 px-4 rounded w-full"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              className="bg-primary10 hover:bg-primary10/50 py-2 px-4 rounded w-full"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-center my-2">or</div>
          <div className="flex flex-col gap-3">
            <button
              className="flex flex-row items-center justify-center gap-2 bg-primary hover:bg-primary/50 py-2 px-4 rounded w-full"
              type="button"
              onClick={handleLoginWithGoogle}
            >
              <FaGoogle />
              Sign in with Google
            </button>
            <button
              className="flex flex-row items-center justify-center gap-2 bg-primary hover:bg-primary/50 py-2 px-4 rounded w-full"
              type="button"
              onClick={handleLoginWithGithub}
            >
              <FaGithub />
              Sign in with Github
            </button>
            <button
              className="flex flex-row items-center justify-center gap-2 bg-primary hover:bg-primary/50 py-2 px-4 rounded w-full"
              type="button"
              onClick={handleLoginWithSpotify}
            >
              <FaSpotify />
              Sign in with Spotify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function validateEmail(email: string): boolean {
  // You can use a regex or any other method to validate email format
  return /\S+@\S+\.\S+/.test(email);
}
