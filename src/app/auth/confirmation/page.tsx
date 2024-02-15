"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Confirmation() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleConfirmation = () => {
    const redirect = searchParams.get("next");
    const absoluteURL = new URL("", location.origin);
    redirect
      ?? absoluteURL.searchParams.append("next", redirect!)
    router.replace(`${location.origin}${redirect?redirect:'/'}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full p-12 text-center">
      <p>Please check your email and confirm your account to continue.</p>
      <br/>
      <p>
        Click{" "}
        <button
          className="text-accent underline hover:italic"
          onClick={handleConfirmation}
        >
          here
        </button>{" "}
        to continue to the page if you already done the confirmation.
      </p>
    </div>
  );
}
