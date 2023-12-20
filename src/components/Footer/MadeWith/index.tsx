import Image from "next/image";
import technologies from "./MadeWithConst";

function MadeWith() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg">made with:</h1>
      <div className="flex justify-center gap-2">
        {technologies.map((tech, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={tech.link}
          >
            <div
              className={`p-1 rounded-full hover:bg-text/25 transform scale-${
                tech.scale * 100
              }`}
            >
              <Image
                src={tech.logoSrc}
                className="w-7 h-7"
                alt={`${tech.name} logo`}
                style={{ filter: `${tech.filter}` }}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MadeWith;
