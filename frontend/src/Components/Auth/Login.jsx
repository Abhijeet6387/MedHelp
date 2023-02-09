import React, { useState } from "react";
import "../Auth/auth.css";
import {
  Box,
  Container,
  TextField,
  Button,
  Paper,
  Link,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data", { email, password });
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
            <h1>Log In</h1>
            <p
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              By logging in, you agree to our Privacy Policy and Terms of
              Service, and confirm that you understand the purpose and use of
              this app.
            </p>
            <form onSubmit={handleSubmit}>
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
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree with the terms and conditions"
                />
              </FormGroup>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2, marginBottom: 2, borderRadius: 5 }}
              >
                Login
              </Button>
              Need Account?
              <Link href="/register" underline="none">
                {" "}
                Register
              </Link>
            </form>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default Login;
