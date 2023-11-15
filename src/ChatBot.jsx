import { MdSend } from "react-icons/md";
import { useQuestion } from "./hooks/useQuestions";
import { useScrollList } from "./hooks/useScrollList";
import { useRef } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useCheckAuth } from "./hooks/useCheckAuth";

// {
//   getResponse: async (question) =>
//     new Promise((resolve) =>
//       setTimeout(() => resolve(`Respuesta a la pregunta ${question}`), 500)
//     ),
// };

// const questionsAndAnswers = [
//   { question: "hola", answer: "hola, que quieres saber de tu pdf?" },
//   {
//     question: "que diría alejo en esta situación?",
//     answer: "nunca tengas un hijo negro",
//   },
//   { question: "por que diría eso?", answer: "ATENCIOOON" },
//   {
//     question: "en que anda peter?",
//     answer: "volando en parapente defiendiendo punta ballena",
//   },
//   {
//     question: "y nico?",
//     answer: "en us saveiro negra buscando la wave, zucundun zucundun",
//   },
//   {
//     question: "y rama?",
//     answer: "rezandole a todos los santos que lo contraten",
//   },
//   {
//     question: "cuando sale un asado?",
//     answer: "los proximos días lindos",
//   },
//   {
//     question: "donde compramos la carne",
//     answer: "en gorumeat",
//   },
// ];

const ChatBot = () => {
  const { newQuestion, questionsAnswers, loading } = useQuestion();
  const listRef = useRef();

  useScrollList(listRef, questionsAnswers);

  useCheckAuth();

  const handleQuestion = (e) => {
    e.preventDefault();
    const question = e.target.question.value;
    newQuestion(question);
    e.target.question.value = "";
  };

  return (
    <>
      <div className="flex flex-col justify-spacebetween items-center bg-slate-600 w-scren h-screen">
        <div className="flex flex-col pt-20 pb-5 w-1/2 h-screen bg-slate-600 justify-between">
          <div ref={listRef} className="overflow-auto mb-5 h-full flex-1">
            {questionsAnswers.map(({ question, answer }, index) => (
              <div className="" key={index}>
                <div className="flex justify-end">
                  <p className="animate-appearFromRight py-2 px-5 my-3 mx-3 bg-slate-100 w-fit rounded-md ">
                    {question}
                  </p>
                </div>

                {!!answer && (
                  <div className="animate-appearFromLeft flex items-end py-2 px-5 mx-3 bg-slate-300 w-fit rounded-md">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {
            <ThreeDots
              height="20"
              width="40"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperClass="justify-center w-100 pb-6"
              visible={loading}
            />
          }
          <form onSubmit={handleQuestion} className="flex justify-center">
            <input
              type="text"
              name="question"
              placeholder="Ask a question"
              className="w-2/3 px-3 rounded-lg"
            />
            <button
              type="submit"
              className="m-3 text-white text-2xl hover:text-slate-400"
            >
              <MdSend />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
