import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage({ userInfo }) {
  const navigate = useNavigate();
  console.log("UserInfo", userInfo);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/");
  };
  return (
    <>
      <Box>
        <Container sx={{ textAlign: "center" }}>
          <h1>MedHelp</h1>
          <p>Welcome {userInfo?.name}, this is the home page of the website</p>
          <Button
            variant="contained"
            sx={{ textTransform: "unset" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Container>
        <ToastContainer />
      </Box>
    </>
  );
}
