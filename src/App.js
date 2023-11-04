import Login from "./Login";
import ChatBot from "./ChatBot";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import authService from "./auth";
import { Location } from "react-router-dom";

function App() {
  const navigate = useNavigate();
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

  // const handleLogout = () => {
  //   authService.logout();
  //   Location. ("/");
  // };

  return (
    <div className="flex flex-col">
      <header className="fixed flex items-center justify-between w-full h-20 bg-slate-500">
        <h1 className="text-white align-middle p-4 font-bold text-lg">
          ChatBot
        </h1>
        <button className="text-white p-4 hover:text-slate-400">Logout</button>
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
