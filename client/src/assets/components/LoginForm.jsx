import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUserAPI } from "../services/LoginSubmit";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

 const handleLogin = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const data = await loginUserAPI(email, password);

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);

    // ✅ STORE USER
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/home");
  } catch (error) {
    alert("Invalid credentials");
  } finally {
    setLoading(false);
  }
};


  return (
    <form onSubmit={handleLogin}>
      <div className="text-black bg-white flex flex-col gap-5 px-[80px] py-[100px]">
        <input
          placeholder="Email"
          value={email}
          className="border border-black p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="border border-black p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </form>
  );
}
