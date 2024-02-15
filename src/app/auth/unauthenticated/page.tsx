"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Unauthenticated() {
  const loginUrl = "/auth/login";
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLogin = () => {

    const redirect = searchParams.get("next");
    const absoluteURL = new URL(loginUrl, location.origin);
    redirect
      ? absoluteURL.searchParams.append("next", redirect as string)
      : null;
    router.replace(absoluteURL.toString());
  };

  return (
    <div className="flex justify-center items-center h-screen w-full p-12 text-center">
      <p>
        This page is protected. Please click{" "}
        <button
          className="text-accent underline hover:italic"
          onClick={handleLogin}
        >
          here
        </button>{" "}
        to login and access it.
      </p>
    </div>
  );
}
