import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:4000/auth/register", {
        email,
        username,
        password,
      });

      console.log("Registered:", res.data);
      alert("User created!");
    } catch (err) {
      console.error(err);
      alert("Error during registration");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "250px" }}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;