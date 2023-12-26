// pages/index.tsx
import { FC } from 'react';
import Quiz from '../MiniQuiz/MiniQuiz';
import  questions  from '../MiniQuiz/MiniQuizConst';

const Home: FC = () => {
  return (
    <div>
      <Quiz questions={questions} />
    </div>
  );
};

export default Home;
