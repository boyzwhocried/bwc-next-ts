"use client";

import Image from "next/image";
import { FC, useState, useEffect, useCallback } from "react";

interface Option {
  text: string;
  image: string;
}

interface Question {
  prompt: {
    text: string;
    image: string;
  };
  options: Option[];
}

interface QuizProps {
  questions: Question[];
}

const Quiz: FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<Option[]>([]);

  const shuffleOptions = useCallback(() => {
    const options = [...questions[currentQuestion].options];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    setShuffledOptions(options);
  }, [currentQuestion, questions]);

  useEffect(() => {
    shuffleOptions();
  }, [shuffleOptions]);

  const handleAnswerClick = (index: number) => {
    const selectedOption = shuffledOptions[index];
    if (selectedOption === questions[currentQuestion].options[0]) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <>
      {showScore ? (
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Quiz Completed!</div>
          <div className="text-xl mb-4">
            You scored {score} out of {questions.length}
          </div>
          <button
            className="bg-primary py-2 px-4 rounded hover:bg-primary/75"
            onClick={restartQuiz}
            aria-label="Restart Quiz"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="bg-primary p-8 rounded shadow-md">
          <div className="text-center mb-8">
            <div className="text-xl font-bold mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <div className="text-2xl mb-4">
              {questions[currentQuestion].prompt.image && (
                <div className="flex justify-center p-4">
                  <Image
                    className="h-40"
                    src={questions[currentQuestion].prompt.image}
                    alt={`${questions[currentQuestion].prompt.image}`}
                  />
                </div>
              )}
              {questions[currentQuestion].prompt.text}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                className="bg-background/50 hover:bg-background/75 py-2 px-4 rounded"
                onClick={() => handleAnswerClick(index)}
                aria-label="Answer"
              >
                <div>
                  {option.image}
                  {option.text}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
