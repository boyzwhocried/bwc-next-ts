"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function V() {
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();

  const handleV = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount === 14) {
        router.push('/sandbox')
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="rounded-full p-2 text-xs text-primary50/50 cursor-default"
        onClick={handleV}
        style={{ userSelect: "none" }}
      >
        v
      </div>
    </div>
  );
}

export default V;
