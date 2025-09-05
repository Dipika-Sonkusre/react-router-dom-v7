import { useNavigate } from "react-router";
import { ApiEndpoint } from "../../enum";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    localStorage.setItem("authToken", "my-secret-token");
    localStorage.setItem("role", role);
    navigate(ApiEndpoint.TODOS);
  };

  return (
    <div className="container" id="login">
      <h2>Login Page</h2>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
      <button onClick={() => handleLogin("super-admin")}>
        Login as Super Admin
      </button>
    </div>
  );
}
