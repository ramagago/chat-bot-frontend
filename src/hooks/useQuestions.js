import { useState, useCallback } from "react";
import { postQuestion } from "../questionService";

const questionsAndAnswers = [
  { question: "hola", answer: "hola, que quieres saber de tu pdf?" },
  {
    question: "que diría alejo en esta situación?",
    answer: "nunca tengas un hijo negro",
  },
  { question: "por que diría eso?", answer: "ATENCIOOON" },
  {
    question: "en que anda peter?",
    answer: "volando en parapente defiendiendo punta ballena",
  },
  {
    question: "y nico?",
    answer: "en us saveiro negra buscando la wave, zucundun zucundun",
  },
  {
    question: "y rama?",
    answer: "rezandole a todos los santos que lo contraten",
  },
  {
    question: "cuando sale un asado?",
    answer: "los proximos días lindos",
  },
  {
    question: "donde compramos la carne",
    answer: "en gorumeat",
  },
];

export const useQuestion = () => {
  const [prevQA, setPrevQA] = useState(questionsAndAnswers);
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
    [currentQA, loading]
  );

  const questionsAnswers = [...prevQA];
  currentQA && questionsAnswers.push(currentQA);
  return {
    newQuestion,
    questionsAnswers,
    loading,
  };
};
