import Image from "next/image";
import { photos } from "./PhotosConst";
import { Reveal } from "@/components/others/RevealAnimation";

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function Page() {
  const shuffledPhotos = shuffleArray(photos);

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
