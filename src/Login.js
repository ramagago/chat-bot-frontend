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
    if (success) navigate("/chat-bot");
    else alert("Usuario o contraseña incorrectos");
  };

  return (
    <div className="App">
      <form onSubmit={handleLogin}>
        <input type="text" name="email" placeholder="usuario" />
        <input type="password" name="password" placeholder="contraseña" />
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default Login;
