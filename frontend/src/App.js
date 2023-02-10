import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import HomePage from "./Components/HomePage";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import axios from "axios";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      axios
        .get("/users/getUserInfo", {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        })
        .then((res) => {
          console.log(res.data.info);
          setUserInfo(res.data.info);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
          setUserInfo(null);
        });
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {/* Open Routes */}
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* Protected Routes */}
          <Route
            path="/home"
            element={<HomePage userInfo={userInfo} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
