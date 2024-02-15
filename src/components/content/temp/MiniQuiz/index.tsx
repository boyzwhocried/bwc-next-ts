import { FC } from "react";
import Quiz from "../MiniQuiz/MiniQuiz";
import { questions, questionsAteez } from "../MiniQuiz/MiniQuizConst";

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Home: FC = () => {
  return (
    <div>
      <Quiz questions={shuffleArray(questionsAteez)} />
    </div>
  );
};

export default Home;
