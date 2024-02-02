import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../service";

const Signup = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const onRegister = () => {
    setError("");
    apiService
      .register({ userId, password, age, dob, contact, name })
      .then((res) => {
        if (res) {
          setSuccessMessage("Signup Successfull! redirecting to login.");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  const onChange = (e, type) => {
    setError("");
    if (type === "userId") {
      setUserId(e.target.value);
    }
    if (type === "password") {
      setPassword(e.target.value);
    }
    if (type === "age") {
      setAge(e.target.value);
    }
    if (type === "dob") {
      setDob(e.target.value);
    }
    if (type === "contact") {
      setContact(e.target.value);
    }
    if (type === "name") {
      setName(e.target.value);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "40px",
        height: "500px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {successMessage ? (
        <p style={{ color: "green", fontSize: "22px" }}>{successMessage}</p>
      ) : (
        <>
          <h4>Signup</h4>
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
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <label style={{ fontSize: "12px" }}>Name</label>
            <input
              style={{width:"170px",outline:"none"}}
              value={name}
              onChange={(e) => onChange(e, "name")}
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
            <label style={{ fontSize: "12px" }}>Age</label>
            <input
              style={{width:"170px",outline:"none"}}
              value={age}
              onChange={(e) => onChange(e, "age")}
              type="number"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <label style={{ fontSize: "12px" }}>DOB</label>
            <input
              style={{width:"170px",outline:"none"}}
              value={dob}
              onChange={(e) => onChange(e, "dob")}
              type="date"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <label style={{ fontSize: "12px" }}>Contact</label>
            <input
              style={{width:"170px",outline:"none"}}
              value={contact}
              onChange={(e) => onChange(e, "contact")}
              type="number"
              maxLength={10}
            />
          </div>
          
          <p
            style={{
              height: "15px",
              color: "red",
              fontSize: "11px",
              margin: 0,
            }}
          >
            {error}
          </p>
          <button onClick={onRegister}>Signup</button>
          <p style={{ fontSize: "12px" }}>
            Existing user?
            <a href="/login" style={{ color: "blue" }}>
              Login
            </a>
          </p>
        </>
      )}
    </div>
  );
};
export default Signup;
