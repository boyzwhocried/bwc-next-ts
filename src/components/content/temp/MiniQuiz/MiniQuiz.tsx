"use client";

import Image from "next/image";
import { FC, useState, useEffect, useCallback } from "react";

import anjay from "/public/assets/image/sandbox/quiz/others/anjay-snow.gif";

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
          <div className="text-2xl font-bold mb-4">
            Horray Quiz Completed!🎉🎉
          </div>
          <div className="flex justify-center">
            <Image className="object-fill object-center  aspect-square" src={anjay} alt={"anjay"} height={300}/>
          </div>
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
        <div className="bg-primary10 p-8 rounded shadow-md my-24">
          <div className="text-center mb-8">
            <div className="text-xl font-bold mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <div className="text-2xl mb-4">
              {questions[currentQuestion].prompt.image && (
                <div className="flex justify-center p-4">
                  <Image
                    className="object-fill object-center sm:aspect-video aspect-square"
                    src={questions[currentQuestion].prompt.image}
                    alt={`${questions[currentQuestion].prompt.image}`}
                    width={800}
                    height={800}
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
                className="bg-primary50 hover:bg-primary50/75 py-2 px-4 rounded"
                onClick={() => handleAnswerClick(index)}
                aria-label="Answer"
              >
                <div>
                  {option.image && (
                    <Image
                      className="object-fill object-center sm:aspect-video aspect-square"
                      src={option.image}
                      alt={option.text}
                      width={1000}
                      height={1000}
                    />
                  )}
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
