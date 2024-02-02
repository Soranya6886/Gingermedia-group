import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./header/header";
import User from "./user/user";
import Login from "./login/login";
import Signup from "./signup/signup";

function App() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={isLoggedIn ? <User /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/:userId" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
