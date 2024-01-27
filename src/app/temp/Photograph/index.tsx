"use client";

import { Reveal } from "@/components/others/RevealAnimation";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface PhotoData {
  id: number;
  filename: string;
  title: string;
  imageurl: string;
  categories: string[];
  alt: string |null;
  description: string;
  uploadedAt: string | null;
}

export default function Photographs() {
  const [photos, setPhotos] = useState<PhotoData[]>([]);

  const shuffleArray = (array: PhotoData[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        const res = await fetch("/api/supabase/photograph", { method: "GET" });
        const data = await res.json();

        const shuffledData = shuffleArray(data as PhotoData[]);

        setPhotos(shuffledData as PhotoData[]);
        console.log(shuffledData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPhotoData();
  }, []);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-4 mx-4 my-20">
        {photos.map((photo, index) => (
          <Reveal key={index}>
            <div className={`flex aspect-auto overflow-hidden my-2 `}>
              <Image
                className="hover:scale-105 transition duration-500"
                src={photo.imageurl}
                alt={""}
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
