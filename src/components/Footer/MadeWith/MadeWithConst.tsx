import reactLogo from "/public/assets/icon/react.svg";
import nextjsLogo from "/public/assets/icon/next-js.svg";
import tailwindLogo from "/public/assets/icon/tailwind.svg";
import framermotionLogo from "/public/assets/icon/framer-motion.svg";

const technologies = [
  {
    name: "React",
    logoSrc: reactLogo,
    link: "https://react.dev/",
    scale: 1,
    filter: "",
  },
  {
    name: "NextJS",
    logoSrc: nextjsLogo,
    link: "https://nextjs.org/",
    scale: 0.9,
    filter:
      "brightness(0) saturate(100%) invert(86%) sepia(6%) saturate(47%) hue-rotate(151deg) brightness(90%) contrast(87%)",
  },
  {
    name: "Tailwind",
    logoSrc: tailwindLogo,
    link: "https://tailwindcss.com/",
    scale: 1.1,
    filter: "",
  },
  {
    name: "Framer Motion",
    logoSrc: framermotionLogo,
    link: "https://www.framer.com/motion/",
    scale: 0.75,
    filter: "",
  },
];

export default technologies;
