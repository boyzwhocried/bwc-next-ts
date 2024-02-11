"use client";

import Loading from "@/components/others/Loading";
import { createBrowserClient } from "@supabase/ssr";
import { Session, User } from "@supabase/supabase-js";
import { useRouter, useSearchParams, redirect } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
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

  const clearForms = () => {
    setEmail("");
    setPassword("");
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useLayoutEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSessionStatus(session);
      setUser(user);
      setLoading(false);
    }
    getUser();
  }, [supabase.auth, user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    setLoading(true);
    clearErrors();
    if (!email || !password) {
      setEmailError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback/signup`,
        },
      });

      if (error) {
        setLoading(false);
        setAuthError(error.message);
        return;
      }
      router.replace(
        `${location.origin}/auth/confirmation${next ? `?next=${next}` : "/"}`
      );
      router.refresh();
    } catch (error) {
      setLoading(false);
      setAuthError("An error occurred during sign up.");
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
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
        setLoading(false);
        setAuthError(error.message);
        return;
      }
      setLoading(false);
      router.replace(`${location.origin}${next ? `/${next}` : "/"}`);
      router.refresh();
    } catch (error) {
      setLoading(false);
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
          redirectTo: `${location.origin}/auth/callback${
            next ? `?next=${next}` : "/"
          }`,
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
          redirectTo: `${location.origin}/auth/callback${
            next ? `?next=${next}` : "/"
          }`,
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
          redirectTo: `${location.origin}/auth/callback${
            next ? `?next=${next}` : "/"
          }`,
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
          <div className="mb-4 mx-2 text-danger text-sm">{emailError}</div>
          <div className="mb-6 mx-2 text-danger text-sm">{passwordError}</div>
          <div className="mb-6 mx-2 text-danger text-sm">{authError}</div>
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
              disabled={loading}
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
