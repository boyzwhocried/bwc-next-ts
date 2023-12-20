import Image from "next/image";
import React from "react";
import HeroImage from "/public/assets/image/hero/hero.webp";

export default function AboutMe() {
  return (
    <section className="flex h-screen min-h-[750px]">
      <div className="grid content-center sm:grid-cols-2 gap-4 ">
        <Image
          className="object-cover sm:h-[500px] h-[200px] w-full"
          src={HeroImage}
          alt={"Hero Image"}
          priority={true}
        />
        <div className="flex flex-col justify-center gap-2">
          <h1 className="md:text-9xl text-8xl italic text-accent">about me</h1>
          <p className="text-lg">
            Hey, my name is Verrel Al Syoumi and I use ’boyzwhocried’ as my
            nickname across social medias. I’m a fresh graduated computer
            science student from Indonesia, who has growing interest in
            front-end web development & designing. I’m also passionate about
            music, photography, arts and technologies and I’m always curious to
            learn more when it comes to new technologies and creative coding.
          </p>
        </div>
      </div>
    </section>
  );
}
