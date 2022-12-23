import React from "react";
import { Box, Container, Button } from "@mui/material";
export default function HomePage() {
  return (
    <>
      <Box>
        <Container sx={{ textAlign: "center" }}>
          <p>Let's Start</p>
          <Button variant="contained" sx={{ textTransform: "unset" }}>
            Click
          </Button>
        </Container>
      </Box>
    </>
  );
}
