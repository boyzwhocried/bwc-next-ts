"use client";

import Image from "next/image";
import { photos } from "./PhotosConst";
import { Reveal } from "@/components/others/RevealAnimation";
import { useState, useEffect } from "react";

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Page() {
  const [shuffledPhotos, setShuffledPhotos] = useState(photos);

  useEffect(() => {
    setShuffledPhotos(shuffleArray(photos));
  }, []);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-4 mx-4 my-20 max-w-screen-2xl 2xl:mx-auto">
        {shuffledPhotos.map((photo, index) => (
          <Reveal key={index}>
            <div className={`flex aspect-auto overflow-hidden my-2`}>
              <Image
                className="hover:scale-105 transition duration-500 w-full h-auto"
                src={photo}
                alt={""}
                width={500}
                height={500}
                priority
              />
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
