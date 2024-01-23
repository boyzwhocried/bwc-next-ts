import Image from "next/image";

import photo1 from "/public/assets/image/photos/000010.jpg";
import photo2 from "/public/assets/image/photos/000015.jpg";
import photo3 from "/public/assets/image/photos/000016.jpg";
import photo4 from "/public/assets/image/photos/000017.jpg";
import photo5 from "/public/assets/image/photos/000018.jpg";
import photo6 from "/public/assets/image/photos/000020.jpg";
import photo7 from "/public/assets/image/photos/000030.jpg";
import photo8 from "/public/assets/image/photos/000043.jpg";
import photo9 from "/public/assets/image/photos/000063.jpg";
import photo10 from "/public/assets/image/photos/000064.jpg";
import photo11 from "/public/assets/image/photos/0000441.jpg";
import photo12 from "/public/assets/image/photos/000015950002.jpg";
import photo13 from "/public/assets/image/photos/000015950024.jpg";
import photo14 from "/public/assets/image/photos/000015950028.jpg";
import photo15 from "/public/assets/image/photos/000015950029.jpg";
import photo16 from "/public/assets/image/photos/000015950033.jpg";
import photo17 from "/public/assets/image/photos/000015950036.jpg";
import photo18 from "/public/assets/image/photos/000015990015.jpg";
import photo19 from "/public/assets/image/photos/000015990025.jpg";
import photo20 from "/public/assets/image/photos/000016000015.jpg";
import photo21 from "/public/assets/image/photos/000016000031.jpg";
import photo22 from "/public/assets/image/photos/000137130023.jpg";
import photo23 from "/public/assets/image/photos/000165220005.jpg";
import photo24 from "/public/assets/image/photos/000165220008.jpg";
import photo25 from "/public/assets/image/photos/000165220010.jpg";
import photo26 from "/public/assets/image/photos/000165220016.jpg";
import photo27 from "/public/assets/image/photos/000165220017.jpg";
import photo28 from "/public/assets/image/photos/000165220021.jpg";
import photo29 from "/public/assets/image/photos/000165220022.jpg";
import photo30 from "/public/assets/image/photos/000165220025.jpg";
import photo31 from "/public/assets/image/photos/000165220027.jpg";
import photo32 from "/public/assets/image/photos/000165220029.jpg";
import photo33 from "/public/assets/image/photos/000165220032.jpg";
import photo34 from "/public/assets/image/photos/instaxfilmlab66028.jpg";
import photo35 from "/public/assets/image/photos/instaxfilmlab66042.jpg";
import photo36 from "/public/assets/image/photos/instaxfilmlab66044.jpg";
import photo37 from "/public/assets/image/photos/instaxfilmlab66045.jpg";
import photo38 from "/public/assets/image/photos/instaxfilmlab66048.jpg";
import photo39 from "/public/assets/image/photos/instaxfilmlab66069.jpg";
import photo40 from "/public/assets/image/photos/instaxfilmlab66071.jpg";

import { Reveal } from "@/components/others/RevealAnimation";

const photos = [
  photo1.src,
  photo2.src,
  photo3.src,
  photo4.src,
  photo5.src,
  photo6.src,
  photo7.src,
  photo8.src,
  photo9.src,
  photo10.src,
  photo11.src,
  photo12.src,
  photo13.src,
  photo14.src,
  photo15.src,
  photo16.src,
  photo17.src,
  photo18.src,
  photo19.src,
  photo20.src,
  photo21.src,
  photo22.src,
  photo23.src,
  photo24.src,
  photo25.src,
  photo26.src,
  photo27.src,
  photo28.src,
  photo29.src,
  photo30.src,
  photo31.src,
  photo32.src,
  photo33.src,
  photo34.src,
  photo35.src,
  photo36.src,
  photo37.src,
  photo38.src,
  photo39.src,
  photo40.src,
];

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

type Image = {
  id: number;
  imageSrc: string;
  name: string;
};

export default function Page({ images }: { images: Image[] }) {
  const shuffledPhotos = shuffleArray(photos);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-4 mx-4 my-20">
        {shuffledPhotos.map((photo, index) => (
          <Reveal key={index}>
            <div className={`flex aspect-auto overflow-hidden my-2 `}>
              <Image
                className="hover:scale-105 transition duration-500"
                src={photo}
                alt={""}
                width={1000}
                height={1000}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
