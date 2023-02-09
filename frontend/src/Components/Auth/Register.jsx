import React, { useState } from "react";
import "../Auth/auth.css";
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
} from "@mui/material";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data", { name, email, password, rePass, contact, role });
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
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
              information and confirm that you understand the purpose and use of
              this application.
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
                sx={{ marginTop: 1, marginBottom: 1 }}
              />
              {/* Email */}
              <TextField
                fullWidth
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ marginTop: 1, marginBottom: 1 }}
              />
              {/* Password */}
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  {" "}
                  <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ marginTop: 1, marginBottom: 1 }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    id="repassword"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    value={rePass}
                    onChange={(e) => setRePass(e.target.value)}
                    sx={{ marginTop: 1, marginBottom: 1 }}
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
                fullWidth
                id="contact"
                label="Contact"
                type="text"
                variant="outlined"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                sx={{ marginTop: 1, marginBottom: 1 }}
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
                color="primary"
                sx={{ marginTop: 2, marginBottom: 2, borderRadius: 5 }}
              >
                Register
              </Button>
              Already registered?
              <Link href="/register" underline="none">
                {" "}
                Log in
              </Link>
            </form>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default Login;
