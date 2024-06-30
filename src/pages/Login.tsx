import { useEffect } from "react";
import LoginSection from "../components/LoginSection";

const Login = () => {
  const handleLogin = () => {
    localStorage.removeItem("session_Id");
    localStorage.removeItem("request_token");
    localStorage.removeItem("guest_session_id");
  };

  useEffect(() => {
    handleLogin();
  });

  return (
    <div className="bg-loginBg bg-center h-screen text-white flex justify-center items-center">
      <LoginSection />
    </div>
  );
};

export default Login;
