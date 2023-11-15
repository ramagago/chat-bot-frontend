import { useState, useCallback } from "react";
import { postQuestion } from "../questionService";

export const useQuestion = () => {
  const [prevQA, setPrevQA] = useState([]);
  const [currentQA, setCurrentQA] = useState();
  const [loading, setLoading] = useState(false);

  const newQuestion = useCallback(
    async (question) => {
      if (loading) return;

      setLoading(true);
      if (currentQA) setPrevQA((pre) => [...pre, currentQA]);
      setCurrentQA({ question });

      try {
        const answer = await postQuestion(question);
        setCurrentQA((pre) => ({ ...pre, answer }));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [currentQA, loading],
  );

  const questionsAnswers = [...prevQA];
  currentQA && questionsAnswers.push(currentQA);
  return {
    newQuestion,
    questionsAnswers,
    loading,
  };
};
