import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "token",
      response.data.token
    );

    alert("Login Successful");
    navigate("/");
  } catch (error) {
    alert("Login Failed");
  }
};

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        fontFamily: "Arial",
      }}
    >
      {/* Login Box */}
      <div
        style={{
          width: "380px",
          padding: "35px",
          backgroundColor: "#000",
          border: "1px solid #222",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "25px",
          }}
        >
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "white", fontSize: "13px" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "6px",
                border: "1px solid #333",
                backgroundColor: "#000",
                color: "white",
                outline: "none",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ color: "white", fontSize: "13px" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "6px",
                border: "1px solid #333",
                backgroundColor: "#000",
                color: "white",
                outline: "none",
              }}
            />
          </div>

          {/* Button with hover effect */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "blue";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "red";
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
