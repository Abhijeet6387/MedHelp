import React, { useState } from "react";
import "../Auth/auth.css";
import {
  Box,
  Grid,
  Container,
  TextField,
  Button,
  Paper,
  Link,
  Checkbox,
  FormGroup,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import authImage from "../../assets/AuthImage.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data", { email, password });
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={authImage} alt="Auth Image" className="auth-image"></img>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className="background-color">
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
                <h1>Sign In</h1>
                <p
                  style={{
                    fontSize: 16,
                    color: "gray",
                  }}
                >
                  By logging in, you agree to our Privacy Policy and Terms of
                  Service, and confirm that you understand the purpose and use
                  of this app.
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
                              showPass ? setShowPass(false) : setShowPass(true)
                            }
                          >
                            {showPass ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          sx={{
                            color: "#FF4A4A",
                            "&.Mui-checked": {
                              color: "#FF4A4A",
                            },
                          }}
                        />
                      }
                      label="I agree with the terms and conditions"
                    />
                  </FormGroup>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
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
                    Login
                  </Button>
                  Need Account?
                  <Link
                    href="/register"
                    underline="none"
                    sx={{ color: "#FF4A4A" }}
                  >
                    {" "}
                    Register
                  </Link>
                </form>
              </Paper>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
