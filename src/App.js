import "./App.css";
import Login from "./Login";
import ChatBot from "./ChatBot";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "chat-bot",
      element: <ChatBot />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
