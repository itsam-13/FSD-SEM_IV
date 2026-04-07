import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const correctUsername = "Sarcastic";
    const correctPassword = "RoosterX";

    if (username === "" || password === "") {
      setError("Please fill all fields");
    } else if (username !== correctUsername || password !== correctPassword) {
      setError("Invalid Username or Password");
    } else {
      setError("");
      alert("Login Successful");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Form</h2>

      {/* Username */}
      <input 
        type="text" 
        value={username} 
        onChange={handleUsername} 
        placeholder="Enter Username" 
      />
      <br /><br />

      {/* Password with Show Button */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <input 
          type={showPassword ? "text" : "password"} 
          value={password} 
          onChange={handlePassword} 
          placeholder="Enter Password" 
        />
        <button 
          onClick={togglePassword} 
          style={{ marginLeft: "5px" }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <br />

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Login Button */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;