import Image from "next/image";

import photo1 from "/public/assets/image/photos/000044.jpg";
import photo2 from "/public/assets/image/photos/000165220036.jpg";
import photo3 from "/public/assets/image/photos/000015990015.jpg";
import photo4 from "/public/assets/image/photos/000015950036.jpg";

const photos = [photo1, photo2, photo3, photo4];

const getRandomPosition = () => ({
  top: `${Math.random() * 50}vh`, // Adjust the range based on your needs
  left: `${Math.random() * 50}vw`,
});

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex aspect-auto overflow-hidden">
          <Image
            className="flex object-cover h-screen w-screen"
            src={photo4}
            alt={""}
            sizes="100vw"
            width={0}
            height={0}
          />
        </div>
        {photos.map((photo, index) => (
          <div
            key={index}
            className="flex aspect-auto overflow-hidden"
            style={getRandomPosition()}
          >
            <Image
              className="flex object-scale-down hover:scale-105 transition duration-500"
              src={photo}
              alt={""}
              width={1000}
              height={1000}
            />
          </div>
        ))}
        {/* <div className="flex aspect-auto overflow-hidden ">
          <Image
            className="flex object-scale-down hover:scale-105 transition duration-500 "
            src={photo2}
            alt={""}
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex aspect-auto overflow-hidden ">
          <Image
            className="flex object-scale-down hover:scale-105 transition duration-500 "
            src={photo1}
            alt={""}
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex aspect-auto overflow-hidden ">
          <Image
            className="flex object-scale-down hover:scale-105 transition duration-500 "
            src={photo3}
            alt={""}
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex aspect-auto overflow-hidden ">
          <Image
            className="flex object-scale-down hover:scale-105 transition duration-500 "
            src={photo1}
            alt={""}
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex aspect-auto overflow-hidden ">
          <Image
            className="flex object-scale-down hover:scale-105 transition duration-500 "
            src={photo3}
            alt={""}
            width={1000}
            height={1000}
          />
        </div> */}
      </div>
    </>
  );
}
