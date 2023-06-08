import React, { useState } from "react";
import logo from "../images/mhlogo.png";
import { Link } from "react-router-dom";
import { validateEmail } from "../helpers/validation";
import axios from "axios";
import { TextField, Button, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

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
        <div
          className="text-center"
          style={{
            fontWeight: 600,
            fontSize: "1.2rem",
            letterSpacing: "1.3px",
            paddingLeft: "10px",
            paddingTop: "10px",
            color: "black",
          }}
        >
          MEDHELP
        </div>

        <form className="p-3 mt-3" onSubmit={onSubmitForm} autoComplete="off">
          <TextField
            fullWidth
            size="small"
            type="email"
            name="email"
            id="email"
            label="Email"
            placeholder="Email"
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            size="small"
            type="password"
            name="password"
            id="pwd"
            label="Password"
            placeholder="Password"
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon fontSize="medium" />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            sx={{ marginBottom: 2 }}
          />

          <Button
            type="submit"
            sx={{
              ":hover": {
                bgcolor: "black",
                color: "white",
              },
              width: "100%",
              marginTop: 1,
            }}
            variant="contained"
          >
            Login
          </Button>
        </form>
        <div className="text-center fs-6">
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#1976D2" }}>
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
