import QuestionCard from "./QuestionCard";
import Loader from "./Loader";
import Scores from "./Scores";

import { fetchQuestion } from "./api/questions";
import { validateAnswer } from "./api/validate";
import { useCallback, useEffect, useRef, useState } from "react";

const QuestionBoard = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(5);
  const [shouldOptionsDisabled, setShouldOptionsDisabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [skipped, setSkipped] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = useCallback(async (index: number) => {
    setIsLoading(true);
    setSelectedValue("");
    try {
      const data = await fetchQuestion(index);
      if (!data) {
        setIsFinished(true);
      } else {
        setCurrentQuestion(data);
        setShouldOptionsDisabled(false);
        setTimeLeft(5);
      }
    } catch (err) {
      setIsFinished(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isFinished) return;
    fetchData(questionIndex);
  }, [questionIndex, fetchData, isFinished]);

  useEffect(() => {
    if (isLoading || isFinished || !currentQuestion) return;

    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    timerRef.current = setTimeout(() => {
      setSkipped((prev) => prev + 1);
      setShouldOptionsDisabled(true);
      setQuestionIndex((prev) => prev + 1);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentQuestion, isLoading, isFinished]);

  const handleSelectOption = useCallback(
    async (answer: string) => {
      if (shouldOptionsDisabled) return;

      setSelectedValue(answer);
      setShouldOptionsDisabled(true);

      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);

      const isCorrect = await validateAnswer(answer, currentQuestion?.correct);
      if (isCorrect) {
        setCorrect((prev) => prev + 1);
      } else {
        setIncorrect((prev) => prev + 1);
      }

      setTimeout(() => {
        setQuestionIndex((prev) => prev + 1);
      }, 500);
    },
    [currentQuestion, shouldOptionsDisabled]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-8">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          🔥 Rapid Fire Quiz
        </h1>

        <Scores correct={correct} incorrect={incorrect} skipped={skipped} />

        {isFinished ? (
          <div className="text-center text-xl text-green-600 font-semibold">
            🎉 You’ve completed the quiz!
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-right text-sm text-gray-600">
              ⏳ Time Left: <span className="font-semibold">{timeLeft}s</span>
            </div>

            {isLoading ? (
              <Loader />
            ) : (
              <QuestionCard
                question={currentQuestion?.question}
                options={currentQuestion?.options}
                disabled={shouldOptionsDisabled}
                onSelect={handleSelectOption}
                selected={selectedValue}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionBoard;
