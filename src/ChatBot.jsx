import authService from "./auth";

const ChatBot = () => {
  console.log(authService.token);
  return (
    <>
      <div>
        <p>preguntas</p>
        <p>respuestas</p>
      </div>
      <input type="text" name="" id="" />
      <button>send</button>
    </>
  );
};

export default ChatBot;
