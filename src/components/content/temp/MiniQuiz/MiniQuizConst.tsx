import q1 from "/public/assets/image/sandbox/quiz/1/q1.webp";
import q2a1 from "/public/assets/image/sandbox/quiz/2/q2a1.webp";
import q2a2 from "/public/assets/image/sandbox/quiz/2/q2a2.webp";
import q2a3 from "/public/assets/image/sandbox/quiz/2/q2a3.webp";
import q2a4 from "/public/assets/image/sandbox/quiz/2/q2a4.webp";
import q4a1 from "/public/assets/image/sandbox/quiz/4/q4a1.webp";
import q4a2 from "/public/assets/image/sandbox/quiz/4/q4a2.webp";
import q4a3 from "/public/assets/image/sandbox/quiz/4/q4a3.webp";
import q4a4 from "/public/assets/image/sandbox/quiz/4/q4a4.webp";

const questions = [
  {
    prompt: {
      text: "is this 2 color is the same color?",
      image: q1.src,
    },
    options: [
      { text: "yes, duh (idk, i hv severe color blindness)", image: "" },
      { text: "nopee", image: "" },
      { text: "probabli ", image: "" },
      { text: "probabli yes (?)", image: "" },
    ],
  },
  {
    prompt: { text: "which image that represented as a car the most?", image: "" },
    options: [
      { text: "", image: q2a1.src },
      { text: "", image: q2a2.src },
      { text: "", image: q2a3.src },
      { text: "", image: q2a4.src },
    ],
  },
  {
    prompt: {
      text: 'what is the name of a tree that made a song called "You & Me"',
      image: "",
    },
    options: [
      { text: "hunna", image: "" },
      { text: "pine tree coffee", image: "" },
      { text: "wise mystical tree", image: "" },
      { text: "🌳🌴🌲", image: "" },
    ],
  },
  {
    prompt: { text: "which logo is the official logo of Mishka?", image: "" },
    options: [
      { text: "", image: q4a1.src },
      { text: "", image: q4a2.src },
      { text: "", image: q4a3.src },
      { text: "", image: q4a4.src },
    ],
  },
  {
    prompt: { text: "huh?", image: "" },
    options: [
      { text: "yeah", image: "" },
      { text: "whut", image: "" },
      { text: "say what?", image: "" },
      { text: "huh???", image: "" },
    ],
  },
  {
    prompt: { text: "say no to...", image: "" },
    options: [
      { text: "zaza", image: "" },
      { text: "ring ding ding ding", image: "" },
      { text: "kra kra", image: "" },
      { text: "pra pra", image: "" },
    ],
  },
  {
    prompt: { text: "wait", image: "" },
    options: [
      { text: "im boated", image: "" },
      { text: "a moment", image: "" },
      { text: "please", image: "" },
      { text: "for a second", image: "" },
    ],
  },
];

export default questions;
