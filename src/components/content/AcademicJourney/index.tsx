import { Reveal } from "@/components/others/RevealAnimation";

export default function AcademicJourney() {
  return (
    <div className="text-lg flex min-h-screen flex-col justify-center gap-1">
      <Reveal>
        <h1 className="m-3 text-7xl md:text-8xl italic text-center text-accent flex justify-center">
          academic journey
        </h1>
      </Reveal>
      <Reveal>
        <p>
          My journey started with an Associate Degree in Mechatronics, where I
          learned to craft seamless interaction between hardware and software
          components. My final project was a 3D Engraving Machine using Visual
          Basic .NET.
        </p>
        <p>
          I then pursued a Bachelor`s Degree in Computer Science, where I delved
          into the micro frontend concept and created a user-friendly experience
          using React.JS to build a human resource app for a company`s task
          management.
        </p>
        <p>
          I`ve also completed various courses and certifications in Flutter,
          Dart, Strategic Management, Statistics, Probability, and English.
        </p>
      </Reveal>
    </div>
  );
}
