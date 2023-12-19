import Image from "next/image";
import React from "react";
import HeroImage from "/public/assets/image/hero/hero.webp";

function Hero() {
  return (
    <section className="flex h-screen min-h-[750px]">
      <div className="grid content-center sm:grid-cols-2 gap-4 ">
        <Image
          className="object-cover h-[300px] sm:h-[500px] w-full"
          src={HeroImage}
          alt={"Hero Image"}
          priority={true}
        />
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-9xl italic text-accent">about me</h1>
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

export default Hero;
