import Image from "next/image";
import React from "react";
import HeroImage from "/public/assets/image/hero/hero.webp";
import { Reveal } from "@/components/others/RevealAnimation";

export default function AboutMe() {
  return (
    <section className="flex items-center h-screen min-h-[750px]">
      <div className="grid items-center gap-4 content-center sm:grid-cols-2">
        <Image
          className="object-cover max-h-[200px] sm:max-h-[500px] min-h-full"
          src={HeroImage}
          alt="Hero Image"
          priority={true}
          height={1000}
          width={1000}
        />
        <div className="flex flex-col justify-center gap-2">
          <Reveal>
            <h1 className="flex w-min text-8xl md:text-9xl italic text-accent">
              about me
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-lg">
              Hey, my name is Verrel Al Syoumi, and I use `boyzwhocried` as my
              nickname across social media. I`m a freshly graduated computer
              science student from Indonesia, with a growing interest in
              front-end web development and design. I`m also passionate about
              music, photography, arts, and technologies, and I`m always curious
              to learn more when it comes to new technologies and creative
              coding.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
