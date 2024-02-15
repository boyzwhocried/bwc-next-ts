"use client";

import { Reveal } from "@/components/others/RevealAnimation";
import StaggeredTextAnimation from "@/components/others/StaggeredTextAnimation";
import Image from "next/image";
import DefaultFrame from "@/components/others/DefaultFrameLayout";
import Countdown from "react-countdown";

import vrnk1 from "/public/assets/image/vrnkchgv/424556593_3838747819679781_3652225366407140797_n_ edited.jpg";
import vrnk2 from "/public/assets/image/vrnkchgv/425273033_2758637797646142_8827594959017309293_n_ edited.jpg";
import vrnk3 from "/public/assets/image/vrnkchgv/426280157_893547795585654_7471767964293234163_n_ edited.jpg";
import vrnk4 from "/public/assets/image/vrnkchgv/426248514_1939010639834339_9210609605425438094_n_ edited.jpg";
import vrnk5 from "/public/assets/image/vrnkchgv/420233641_396608636094468_542534555026924872_n_ edited.jpg";
import vrnk6 from "/public/assets/image/vrnkchgv/419976425_435251795498409_5432062010578582352_n_ edited.jpg";
import vrnkgif from "/public/assets/image/vrnkchgv/draw.gif";

import vrnkphoto1 from "/public/assets/image/vrnkchgv/photos/418961962_1286796375523378_6330979483646010677_n_ edited.jpg";
import vrnkphoto2 from "/public/assets/image/vrnkchgv/photos/419976425_435251795498409_5432062010578582352_n_ edited.jpg";
import vrnkphoto3 from "/public/assets/image/vrnkchgv/photos/420213790_1082430256239951_4120113282768719875_n_ (1) edited.jpg";
import vrnkphoto4 from "/public/assets/image/vrnkchgv/photos/420233641_396608636094468_542534555026924872_n_ edited.jpg";
import vrnkphoto5 from "/public/assets/image/vrnkchgv/photos/420390621_361884350039704_8020870611669047893_n_ edited.jpg";
import vrnkphoto6 from "/public/assets/image/vrnkchgv/photos/422394456_917416989886494_3302719231872334705_n_ edited.jpg";
import vrnkphoto7 from "/public/assets/image/vrnkchgv/photos/422443919_387977723905162_7969142545030907187_n edited.jpg";
import vrnkphoto8 from "/public/assets/image/vrnkchgv/photos/422443919_1419133565385272_8101161070599729506_n_ edited.jpg";
import vrnkphoto9 from "/public/assets/image/vrnkchgv/photos/422657511_400584539110983_8393333258687208110_n_ edited.jpg";
import vrnkphoto10 from "/public/assets/image/vrnkchgv/photos/422669813_1343486402998609_215756192193651948_n_ edited.jpg";
import vrnkphoto11 from "/public/assets/image/vrnkchgv/photos/422770034_413912874400337_5064533569185626464_n_ edited.jpg";
import vrnkphoto12 from "/public/assets/image/vrnkchgv/photos/423860378_827644012454502_9017629920867010770_n_ edited.jpg";
import vrnkphoto13 from "/public/assets/image/vrnkchgv/photos/423946554_1413270282620935_4509187828577293843_n_ edited.jpg";
import vrnkphoto14 from "/public/assets/image/vrnkchgv/photos/424513868_758891265705876_2850248582948896340_n_ edited.jpg";
import vrnkphoto15 from "/public/assets/image/vrnkchgv/photos/424556593_3838747819679781_3652225366407140797_n_ edited.jpg";
import vrnkphoto16 from "/public/assets/image/vrnkchgv/photos/425273033_2758637797646142_8827594959017309293_n_ edited.jpg";
import vrnkphoto17 from "/public/assets/image/vrnkchgv/photos/425962852_355310777387448_8621707061243242328_n_ edited.jpg";
import vrnkphoto18 from "/public/assets/image/vrnkchgv/photos/426220404_1135645240926956_7544880420259372273_n_ edited.jpg";
import vrnkphoto19 from "/public/assets/image/vrnkchgv/photos/426229595_3718237505124386_1700093218347928244_n_ edited.jpg";
import vrnkphoto20 from "/public/assets/image/vrnkchgv/photos/426248514_1939010639834339_9210609605425438094_n_ edited.jpg";
import vrnkphoto21 from "/public/assets/image/vrnkchgv/photos/426280157_893547795585654_7471767964293234163_n_ edited.jpg";
import vrnkphoto22 from "/public/assets/image/vrnkchgv/photos/426312663_770982321543207_2691545350302193576_n_ edited.jpg";
import vrnkphoto23 from "/public/assets/image/vrnkchgv/photos/427637675_894968165748171_4484938718233307091_n_ edited.jpg";
import vrnkphoto24 from "/public/assets/image/vrnkchgv/photos/427705661_295221266893724_5675894982724478379_n_ edited.jpg";
import vrnkphoto25 from "/public/assets/image/vrnkchgv/photos/427706073_689438089932093_4726456509919238681_n_ edited.jpg";
import vrnkphoto26 from "/public/assets/image/vrnkchgv/photos/427791589_1591030394999645_4229231641127769877_n_ edited.jpg";
import vrnkphoto27 from "/public/assets/image/vrnkchgv/photos/427892268_365426243011763_7902728327583080527_n_ edited.jpg";
import vrnkphoto28 from "/public/assets/image/vrnkchgv/photos/427945475_1172348797268011_8430158244582795164_n_ edited.jpg";
import vrnkphoto29 from "/public/assets/image/vrnkchgv/photos/428194192_1455611618632608_7251843379018904532_n_ edited.jpg";
import vrnkphoto30 from "/public/assets/image/vrnkchgv/photos/428241271_914388653768016_4886562687667545658_n_ edited.jpg";
import vrnkphoto31 from "/public/assets/image/vrnkchgv/photos/Screenshot 2024-01-30 234907 edited.jpg";
import vrnkphoto32 from "/public/assets/image/vrnkchgv/photos/screenshot-1707917605078 edited.jpg";
import { useState } from "react";

export const photosvrnk = [
  vrnkphoto1.src,
  vrnkphoto2.src,
  vrnkphoto3.src,
  vrnkphoto4.src,
  vrnkphoto5.src,
  vrnkphoto6.src,
  vrnkphoto7.src,
  vrnkphoto8.src,
  vrnkphoto9.src,
  vrnkphoto10.src,
  vrnkphoto11.src,
  vrnkphoto12.src,
  vrnkphoto13.src,
  vrnkphoto14.src,
  vrnkphoto15.src,
  vrnkphoto16.src,
  vrnkphoto17.src,
  vrnkphoto18.src,
  vrnkphoto19.src,
  vrnkphoto20.src,
  vrnkphoto21.src,
  vrnkphoto22.src,
  vrnkphoto23.src,
  vrnkphoto24.src,
  vrnkphoto25.src,
  vrnkphoto26.src,
  vrnkphoto27.src,
  vrnkphoto28.src,
  vrnkphoto29.src,
  vrnkphoto30.src,
  vrnkphoto31.src,
  vrnkphoto32.src,
];

export default function Page() {
  const [showPage, setShowPage] = useState(false);

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function timeLeft() {
    const newDate = new Date("Febuary 16, 2024, 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newDate - nowDate;
    return remainingTime;
  }

  const shuffledPhotos = shuffleArray(photosvrnk);

  if (showPage) {
    return (
      <div>
        <section className="text-lg flex min-h-screen flex-col justify-center gap-1 items-center">
          <div className="flex flex-col justify-center items-center h-screen w-full p-12 text-center">
            <Reveal>
              <StaggeredTextAnimation
                el="h1"
                text={["happy 15th birthday dearest verooo"]}
                className="flex text-7xl sm:text-8xl md:text-9xl italic text-accent"
                once
              />
            </Reveal>
          </div>
        </section>

        <section className="text-lg flex min-h-screen flex-col justify-center gap-1 items-center">
          <div className="flex flex-col justify-center items-center h-screen w-full p-12 text-center">
            <Reveal>
              <h1 className="flex text-6xl lg:text-9xl text-accent">
                🎂ʕ•ᴥ•ʔﾉ♡
              </h1>
            </Reveal>
          </div>
        </section>
        <DefaultFrame>
          <section className="flex items-center h-screen min-h-[750px]">
            <div className="grid items-center gap-4 content-center sm:grid-cols-2">
              <Reveal>
                <Image
                  className="object-cover  min-h-full"
                  src={vrnk1}
                  alt="Hero Image"
                  priority={true}
                  height={1000}
                  width={1000}
                />
              </Reveal>
              <div className="flex flex-col justify-center gap-2">
                <Reveal>
                  <p className="text-lg text-center sm:text-left">
                    heyy, happy birthday verooo! today marks another year of
                    your incredible journey around the sun. as you turn 15, i
                    wish you nothing but the absolute best in life. may your
                    days be filled with joy, laughter, and endless blessings.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
          <section className="flex items-center h-screen min-h-[750px]">
            <div className="grid items-center gap-4 content-center sm:grid-cols-2">
              <Reveal>
                <div className="flex flex-col justify-center gap-2 sm:hidden">
                  <Image
                    className="object-cover min-h-full"
                    src={vrnk2}
                    alt="Hero Image"
                    priority={true}
                    height={1000}
                    width={1000}
                  />
                </div>
                <div className="flex-col justify-center gap-2 sm:block hidden">
                  <Reveal>
                    <p className="text-lg text-center sm:text-left">
                      i want to take this moment to express my gratitude for
                      having you in my life. you bring so much positivity and
                      light wherever you go. your kindness, resilience, and
                      determination inspire me every day. thank you for being a
                      shining example of strength and courage.
                    </p>
                  </Reveal>
                </div>
              </Reveal>
              <div className="flex-col justify-center gap-2 sm:block hidden">
                <Reveal>
                  <Image
                    className="object-cover min-h-full"
                    src={vrnk2}
                    alt="Hero Image"
                    priority={true}
                    height={1000}
                    width={1000}
                  />
                </Reveal>
              </div>
              <div className="flex flex-col justify-center gap-2 sm:hidden">
                <Reveal>
                  <p className="text-lg text-center sm:text-left">
                    i want to take this moment to express my gratitude for
                    having you in my life. you bring so much positivity and
                    light wherever you go. your kindness, resilience, and
                    determination inspire me every day. thank you for being a
                    shining example of strength and courage.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
          <section className="flex items-center h-screen min-h-[750px]">
            <div className="grid items-center gap-4 content-center sm:grid-cols-2">
              <Reveal>
                <Image
                  className="object-cover  min-h-full"
                  src={vrnk3}
                  alt="Hero Image"
                  priority={true}
                  height={1000}
                  width={1000}
                />
              </Reveal>
              <div className="flex flex-col justify-center gap-2">
                <Reveal>
                  <p className="text-lg text-center sm:text-left">
                    i admire your unwavering commitment to growth and
                    self-improvement. you never shy away from challenges but
                    instead embrace them as opportunities for personal
                    development. your dedication to becoming the best version of
                    yourself is truly commendable.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
          <section className="flex items-center h-screen min-h-[750px]">
            <div className="grid items-center gap-4 content-center sm:grid-cols-2">
              <Reveal>
                <div className="flex flex-col justify-center gap-2 sm:hidden">
                  <Image
                    className="object-cover min-h-full"
                    src={vrnk4}
                    alt="Hero Image"
                    priority={true}
                    height={1000}
                    width={1000}
                  />
                </div>
                <div className="flex-col justify-center gap-2 sm:block hidden">
                  <Reveal>
                    <p className="text-lg text-center sm:text-left">
                      as you embark on this new chapter of your life, remember
                      to always believe in yourself. you have the power to
                      achieve anything you set your mind to. trust in your
                      abilities and never doubt the greatness that lies within
                      you.
                    </p>
                  </Reveal>
                </div>
              </Reveal>
              <div className="flex-col justify-center gap-2 sm:block hidden">
                <Reveal>
                  <Image
                    className="object-cover min-h-full"
                    src={vrnk4}
                    alt="Hero Image"
                    priority={true}
                    height={1000}
                    width={1000}
                  />
                </Reveal>
              </div>
              <div className="flex flex-col justify-center gap-2 sm:hidden">
                <Reveal>
                  <p className="text-lg text-center sm:text-left">
                    as you embark on this new chapter of your life, remember to
                    always believe in yourself. you have the power to achieve
                    anything you set your mind to. trust in your abilities and
                    never doubt the greatness that lies within you.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
          <section className="flex items-center h-screen min-h-[750px]">
            <div className="grid items-center gap-4 content-center sm:grid-cols-2">
              <Reveal>
                <Image
                  className="object-cover  min-h-full"
                  src={vrnk5}
                  alt="Hero Image"
                  priority={true}
                  height={1000}
                  width={1000}
                />
              </Reveal>
              <div className="flex flex-col justify-center gap-2">
                <Reveal>
                  <p className="text-lg text-center sm:text-left">
                    i have no doubt that the future holds amazing things for
                    you. your hard work and perseverance will lead you to
                    incredible heights. so go forth with confidence, knowing
                    that you are capable of accomplishing anything you desire.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
          <section className="flex items-center h-screen min-h-[750px]">
            <div className="grid items-center gap-4 content-center sm:grid-cols-2">
              <Reveal>
                <div className="flex flex-col justify-center gap-2 sm:hidden">
                  <Image
                    className="object-cover min-h-full"
                    src={vrnk6}
                    alt="Hero Image"
                    priority={true}
                    height={1000}
                    width={1000}
                  />
                </div>
                <div className="flex-col justify-center gap-2 sm:block hidden">
                  <Reveal>
                    <p className="text-lg text-center sm:text-left">
                      on your special day, i hope you take the time to celebrate
                      all that you are and all that you have accomplished. you
                      deserve all the happiness and success in the world. may
                      this birthday be the start of a year filled with wonderful
                      memories and exciting adventures.
                    </p>
                  </Reveal>
                </div>
              </Reveal>
              <div className="flex-col justify-center gap-2 sm:block hidden">
                <Reveal>
                  <Image
                    className="object-cover min-h-full"
                    src={vrnk6}
                    alt="Hero Image"
                    priority={true}
                    height={1000}
                    width={1000}
                  />
                </Reveal>
              </div>
              <div className="flex flex-col justify-center gap-2 sm:hidden">
                <Reveal>
                  <p className="text-lg text-center sm:text-left">
                    on your special day, i hope you take the time to celebrate
                    all that you are and all that you have accomplished. you
                    deserve all the happiness and success in the world. may this
                    birthday be the start of a year filled with wonderful
                    memories and exciting adventures.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-center items-center">
            <Reveal>
              <h1 className="m-2 text-5xl md:text-6xl italic text-center text-accent flex justify-center">
                some of ur art that i like
              </h1>
            </Reveal>
            <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-4 mx-4 max-w-screen-2xl 2xl:mx-auto">
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
          </section>
          <section className="flex justify-center">
            <div className="flex items-center h-screen min-h-[750px] max-w-lg">
              <div className="flex flex-col items-center gap-4 content-center ">
                <Reveal>
                  <Image
                    className="object-cover min-h-full"
                    src={vrnkgif}
                    alt="Hero Image"
                    priority={true}
                    height={1000}
                    width={1000}
                  />
                </Reveal>
                <div className="flex flex-col justify-center gap-2">
                  <Reveal>
                    <p className="text-lg text-center">
                      once again, happy 15th birthday, verooo! may your day be
                      as fantastic as you are. cheers to another year of growth,
                      love, and endless possibilities.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </DefaultFrame>
      </div>
    );
  }
  return (
    <section className="text-6xl flex min-h-screen flex-col justify-center gap-4 items-center">
      <div className="text-3xl">
        something is cooking...
      </div>
        <Countdown
          date={Date.now() + timeLeft()}
          onComplete={() => {
            setShowPage(true);
          }}
        />
    </section>
  );
}
