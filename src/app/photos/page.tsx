import Image from "next/image";

import photo1 from "/public/assets/image/photos/000044.jpg";
import photo2 from "/public/assets/image/photos/000165220036.jpg";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex aspect-auto overflow-hidden">
          <Image
            className="flex object-cover h-screen w-screen"
            src={photo1}
            alt={""}
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex aspect-auto overflow-hidden ">
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
      </div>
    </>
  );
}
