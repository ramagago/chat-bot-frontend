import Login from "./Login";
import ChatBot from "./ChatBot";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  // const handleLogout = () => {
  //   authService.logout();
  //   Location. ("/");
  // };

  return (
    <div className="flex flex-col">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat-bot" element={<ChatBot />} />
      </Routes>
    </div>
  );
}

export default App;
