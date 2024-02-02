import { useState } from "react";
import apiService from "../service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSignin = () => {
    setError("");
    if(userId && password){
      apiService
      .signIn({ userId, password })
      .then((res) => {
        if (res) {
          sessionStorage.setItem("isLoggedIn","true")
          navigate("/profile/" + res.data.userId);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    }else{
      setError("Please enter user id and password")
    }
    
  };
  const onChange = (e, type) => {
    setError("");
    if (type === "userId") {
      setUserId(e.target.value);
    }
    if (type === "password") {
      setPassword(e.target.value);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "40px",
        height: "250px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h4>Login</h4>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <label style={{ fontSize: "12px" }}>User id</label>
        <input
          style={{width:"170px",outline:"none"}}
          value={userId}
          onChange={(e) => onChange(e, "userId")}
          type="text"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <label style={{ fontSize: "12px" }}>Password</label>
        <input
          style={{width:"170px",outline:"none"}}
          value={password}
          onChange={(e) => onChange(e, "password")}
          type="password"
        />
      </div>
      <p style={{ height: "15px", color: "red", fontSize: "11px", margin: 0 }}>
        {error}
      </p>
      <button onClick={onSignin}>Login</button>
      <p style={{ fontSize: "12px" }}>
        New user?
        <a href="/signup" style={{ color: "blue" }}>
          Signup
        </a>
      </p>
    </div>
  );
};
export default Login;
