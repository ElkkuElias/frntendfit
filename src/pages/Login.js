import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
//import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  //const navigate = useNavigate(); // Initialize navigate
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  }
    // try {
    //   const response = await fetch("http://localhost:3001/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (response.ok) {
    //     // Login successful
    //     const data = await response.json();

    //     // Store the token and email in session storage
    //     sessionStorage.setItem("token", data.token);
    //     sessionStorage.setItem("userEmail", email); // Store user email in session storage // WHAT A PAIN IN THE BUTT...

    //     // Redirect to a protected route (e.g., "/dashboard")
    //     navigate("/dashboard");
    //   } else {
    //     // Login failed
    //     const errorData = await response.json();
    //     setError(errorData.error);
    //   }
    // } catch (error) {
    //   // Handle network or other errors
    //   console.error("Error:", error);
    // }
  // };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Log in</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
