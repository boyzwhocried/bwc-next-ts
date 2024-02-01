"use client";

import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, [supabase.auth]);

  const handleSignUp = async () => {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    setUser(res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setUser(res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut;
    router.refresh();
    setUser(null);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-background backdrop-blur-md opacity-75"></div>
        <div className="relative p-8 rounded">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-accent animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-background shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          <h1 className="text-2xl font-semibold mb-4 text-center text-foreground">
            Logged In
            {/* Logged In as {user.email} */}
          </h1>
          <p className="mb-6 text-text text-center">
            Welcome back! You are now logged in.
          </p>
          <button
            className="bg-primary hover:bg-primary/50 text-foreground font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
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
      <div className="bg-background shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center text-foreground">
          Login
        </h1>
        <form>
          <div className="mb-4">
            {/* <label
              className="block text-text text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label> */}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            {/* <label
              className="block text-text text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label> */}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-primary/50 text-foreground font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              className="bg-primary10 hover:bg-primary10/50 text-foreground font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    // <div className="h-screen flex items-center justify-center p-6">
    //   <div className="bg-primary50/50 p-8 rounded-lg shadow-md w-96">
    //     <input
    //       className="mb-4 w-full p-3 rounded-md border border-primary bg-primary/25 placeholder-primary/10 focus:outline-none focus:border-blue-500"
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       placeholder="Email"
    //     />
    //     <input
    //       className="mb-4 w-full p-3 rounded-md border border-primary bg-primary/25 placeholder-primary/10 focus:outline-none focus:border-blue-500"
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Password"
    //     />
    //     <button
    //       className="w-full mb-4 p-3 rounded-md bg-accent hover:bg-accent/75 focus:outline-none"
    //       onClick={handleSignUp}
    //     >
    //       Sign Up
    //     </button>
    //     <button
    //       className="w-full p-3 rounded-md bg-primary10 hover:bg-primary10/75 focus:outline-none"
    //       onClick={handleSignIn}
    //     >
    //       Sign In
    //     </button>
    //   </div>
    // </div>
  );
}
