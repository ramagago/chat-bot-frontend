import React, { useState } from "react";
import QuestionService from "./questionService";

const questionService = new QuestionService();

// {
//   getResponse: async (question) =>
//     new Promise((resolve) =>
//       setTimeout(() => resolve(`Respuesta a la pregunta ${question}`), 500)
//     ),
// };

const ChatBot = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");

  const handleQuestion = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userQuestion = formData.get("question");

    const response = await questionService.getResponse(userQuestion);

    setCurrentQuestion(userQuestion);
    setCurrentAnswer(response);

    // Agregar la pregunta y la respuesta al array
    setQuestionsAndAnswers((prevQuestionsAndAnswers) => [
      ...prevQuestionsAndAnswers,
      { question: userQuestion, answer: response },
    ]);
  };

  return (
    <>
      <div>
        <p>preguntas</p>
        <p>respuestas</p>
      </div>
      <form onSubmit={handleQuestion}>
        <input type="text" name="question" placeholder="Ask a question" />
        <input type="submit" value="Send" />
      </form>
      <div>
        {questionsAndAnswers.map((qa, index) => (
          <div key={index}>
            <p>Pregunta: {qa.question}</p>
            <p>Respuesta: {qa.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatBot;
