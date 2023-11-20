import { useNavigate } from "react-router-dom";
import authService from "./auth";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const success = await authService.login(email, password);
    console.log("Resultado del fetch ", success);
    if (success) navigate("/");
    else alert("Usuario o contraseña incorrectos");
  };

  return (
    <div className="w-screen">
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center items-center bg-slate-600 h-screen"
      >
        <div className="flex flex-col p-20 bg-slate-100 rounded-md">
          <input
            type="text"
            name="email"
            placeholder="usuario"
            className="w-40 h-7 rounded-md text-sm pl-1 mb-3"
          />
          <input
            type="password"
            name="password"
            placeholder="contraseña"
            className="w-40 h-7 rounded-md text-sm pl-1 mb-7"
          />
          <input
            type="submit"
            value="Log in"
            className="px-5 py-2 rounded-md bg-slate-600 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
