import { useNavigate } from "react-router";
import { ApiEndpoint } from "../../enum";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("authToken", "my-secret-token");
    navigate(ApiEndpoint.TODOS);
  };

  return (
    <div className="container" id="login">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login </button>
    </div>
  );
}
