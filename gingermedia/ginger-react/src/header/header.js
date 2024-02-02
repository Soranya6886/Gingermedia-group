import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const navigate = useNavigate();
  const onLogOut = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
    // eslint-disable-next-line
  }, [sessionStorage.getItem("isLoggedIn")]);
  return (
    <div
      style={{
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <span style={{ fontSize: "24px", fontWeight: "600" }}>Ginger Media</span>
      {isLoggedIn && (
        <span style={{ color: "red", cursor: "pointer" }} onClick={onLogOut}>
          Logout
        </span>
      )}
    </div>
  );
};
export default Header;
