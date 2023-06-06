import React, { useState } from "react";
import logo from "../images/mhlogo.png";
import { Link } from "react-router-dom";
import { validateEmail } from "../helpers/validation";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Enter a valid email address");
      return;
    }
    if (pass === "") {
      alert("Password cannot be empty");
      return;
    }
    try {
      console.log("Email", email);
      console.log("Pass", pass);
      console.log(axios);
      const res = await axios.post("/users/login", {
        Email: email,
        Password: pass,
      });
      alert(res.data.message);
      localStorage.setItem("my_token", res.data.token);
      window.location.href = "/home";
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
    setEmail("");
    setPass("");
  };

  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="text-center mt-4 name">MEDHELP</div>

        <form className="p-3 mt-3" onSubmit={onSubmitForm} autoComplete="off">
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-envelope"></span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              required
            />
          </div>
          <Link to="/register" style={{ float: "right" }}>
            Forgot Password?
          </Link>
          <button className="btn color mt-3" type="submit">
            Login
          </button>
        </form>
        <div className="text-center fs-6">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
}
