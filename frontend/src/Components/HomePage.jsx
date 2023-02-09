import React from "react";
import { Box, Container, Button } from "@mui/material";
export default function HomePage() {
  return (
    <>
      <Box>
        <Container sx={{ textAlign: "center" }}>
          <h1>MedHelp</h1>
          <p>Welcome user, this is the home page of the website</p>
          <Button variant="contained" sx={{ textTransform: "unset" }}>
            Click
          </Button>
        </Container>
      </Box>
    </>
  );
}
