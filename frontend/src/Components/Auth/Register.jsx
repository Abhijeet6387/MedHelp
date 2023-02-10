import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth/auth.css";
// MUI components
import {
  Box,
  Container,
  TextField,
  Button,
  Paper,
  Link,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
// Assets & Utils import
import authImage from "../../assets/AuthImage.jpg";
import { validateEmail } from "../../utils/validateEmail";
// Icons import
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// External packages
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [contact, setContact] = useState("");
  /*
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  */
  const [role, setRole] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data", { name, email, password, rePass, contact, role });
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      rePass === "" ||
      contact === "" ||
      role === ""
    )
      toast.error("Please enter all the details");
    else {
      // api request here
      axios
        .post("/users/register", {
          name: name,
          email: email,
          password: password,
          contact: contact,
          role: role,
        })
        .then((res) => {
          console.log("Result", res.data.result);
          toast.success("Successfully registered");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Registration failed");
        });
    }
    setName("");
    setEmail("");
    setPassword("");
    setRePass("");
    setContact("");
    setRole("");
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {" "}
          <img src={authImage} alt="Auth" className="auth-image"></img>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className="background-color">
          {" "}
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                paddingLeft: 3,
                paddingRight: 3,
              }}
            >
              <Paper elevation={3} sx={{ padding: 3 }}>
                <h1>Sign Up</h1>
                <p
                  style={{
                    fontSize: 16,
                    color: "gray",
                  }}
                >
                  By creating an account, you agree to provide accurate personal
                  information and confirm that you understand the purpose and
                  use of this application.
                </p>
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <TextField
                    fullWidth
                    id="name"
                    label="Name"
                    type="text"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      marginTop: 1,
                      marginBottom: 1,
                    }}
                  />
                  {/* Email */}
                  <TextField
                    error={!validateEmail(email) && email !== "" ? true : false}
                    fullWidth
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ marginTop: 1, marginBottom: 1 }}
                    helperText={
                      !validateEmail(email) && email !== ""
                        ? "Please enter a valid email"
                        : ""
                    }
                  />
                  {/* Password */}
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      {" "}
                      <TextField
                        fullWidth
                        id="password"
                        label="Password"
                        type={showPass ? "text" : "password"}
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ marginTop: 1, marginBottom: 1 }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="Toggle password visibility"
                                onClick={() =>
                                  showPass
                                    ? setShowPass(false)
                                    : setShowPass(true)
                                }
                              >
                                {showPass ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        error={
                          password !== rePass &&
                          rePass !== "" &&
                          password !== ""
                            ? true
                            : false
                        }
                        id="repassword"
                        label="Confirm Password"
                        type={showPass ? "text" : "password"}
                        variant="outlined"
                        value={rePass}
                        onChange={(e) => setRePass(e.target.value)}
                        sx={{ marginTop: 1, marginBottom: 1 }}
                        helperText={
                          password !== rePass &&
                          rePass !== "" &&
                          password !== ""
                            ? "Passwords did'nt match"
                            : ""
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="Toggle password visibility"
                                onClick={() =>
                                  showPass
                                    ? setShowPass(false)
                                    : setShowPass(true)
                                }
                              >
                                {showPass ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  {/* City, State & Zip */}
                  {/* <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                        {" "}
                        <TextField
                            fullWidth
                            id="city"
                            label="City"
                            type="text"
                            variant="outlined"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            sx={{ marginTop: 1, marginBottom: 1 }}
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                        {" "}
                        <TextField
                            fullWidth
                            id="state"
                            label="State"
                            type="text"
                            variant="outlined"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            sx={{ marginTop: 1, marginBottom: 1 }}
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField
                            fullWidth
                            id="zipCode"
                            label="Zip Code"
                            type="text"
                            variant="outlined"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            sx={{ marginTop: 1, marginBottom: 1 }}
                        />
                        </Grid>
                    </Grid> */}
                  {/* Contact */}
                  <TextField
                    error={
                      contact.length !== 10 && contact !== "" ? true : false
                    }
                    fullWidth
                    id="contact"
                    label="Contact"
                    type="text"
                    variant="outlined"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    sx={{ marginTop: 1, marginBottom: 1 }}
                    helperText={
                      contact.length !== 10 && contact !== ""
                        ? "Please enter a valid contact"
                        : "Note: Do not include the country codes at the start"
                    }
                  />
                  {/* Role */}
                  <FormControl fullWidth sx={{ marginTop: 1, marginBottom: 1 }}>
                    <InputLabel id="role">Role</InputLabel>
                    <Select
                      labelId="role"
                      id="role"
                      value={role}
                      label="Role"
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="Patient">Patient</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      marginTop: 2,
                      marginBottom: 2,
                      borderRadius: 5,
                      backgroundColor: "#FF4A4A",
                      "&:hover": {
                        backgroundColor: "#FF5964",
                      },
                    }}
                  >
                    Register
                  </Button>
                  Already registered?
                  <Link
                    href="/login"
                    underline="none"
                    sx={{ color: "#FF4A4A" }}
                  >
                    {" "}
                    Log in
                  </Link>
                </form>
              </Paper>
            </Box>
          </Container>
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
}

export default Login;
