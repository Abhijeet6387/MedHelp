import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../images/mhlogo.png";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CallIcon from "@mui/icons-material/Call";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");
  const [contact, setContact] = useState("");
  const [expertise, setExpertise] = useState("");

  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePass = (e) => {
    setPass(e.target.value);
  };
  const onChangeRole = (e) => {
    setRole(e.target.value);
  };
  const onChangeContact = (e) => {
    setContact(e.target.value);
  };
  const onChangeExpertise = (e) => {
    setExpertise(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (
      username === "" ||
      email === "" ||
      pass === "" ||
      role === "" ||
      contact === ""
    ) {
      alert("Please fill the details");
    } else {
      console.log(username, email, pass, role, contact, expertise);
      await axios
        .post("/users/register/", {
          Username: username,
          Email: email,
          Password: pass,
          Role: role,
          Contact: contact,
          Expertise: expertise,
        })
        .then((res) => {
          console.log(res);
          alert("User added successfully");
          window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setUserName("");
    setEmail("");
    setPass("");
    setRole("");
    setContact("");
    setExpertise("");
  };

  return (
    <>
      <div className="wrapper-2">
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
            label="Username"
            value={username}
            onChange={onChangeName}
            sx={{ marginBottom: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            sx={{ marginBottom: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={pass}
            onChange={onChangePass}
            sx={{ marginBottom: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Contact"
            value={contact}
            onChange={onChangeContact}
            sx={{ marginBottom: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CallIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ marginBottom: 1 }}>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  value={role}
                  onChange={onChangeRole}
                  label="Role"
                >
                  <MenuItem value={"Patient"}>Patient</MenuItem>
                  <MenuItem value={"Doctor"}>Doctor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ marginBottom: 1 }}>
                <InputLabel id="expertise-label">Expertise</InputLabel>
                <Select
                  labelId="expertise-label"
                  value={expertise}
                  onChange={onChangeExpertise}
                  label="Expertise"
                >
                  <MenuItem value={"Cardiology"}>Cardiology</MenuItem>
                  <MenuItem value={"Oncology"}>Oncology</MenuItem>
                  <MenuItem value={"Neurology"}>Neurology</MenuItem>
                  <MenuItem value={"Orthopedics"}>Orthopedics</MenuItem>
                  <MenuItem value={"Pediatrics"}>Pediatrics</MenuItem>
                  <MenuItem value={"Physician"}>Physician</MenuItem>
                  <MenuItem value={"N/A"}>N/A</MenuItem>
                </Select>
                <FormHelperText>
                  {" "}
                  Please select N/A if you are a patient
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            sx={{
              ":hover": {
                bgcolor: "black",
                color: "white",
              },
              width: "100%",
            }}
            variant="contained"
          >
            Register
          </Button>
        </form>
        <div className="text-center fs-6">
          Already Registered ?{" "}
          <Link to="/login" style={{ color: "#1976D2" }}>
            {" "}
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
