import React from "react";
import { Button, FormControlLabel, FormGroup, Checkbox } from "@mui/material";
export default function SymptomChecker() {
  const handleClick = () => {
    window.open(
      "https://symptom-checker-alpha.vercel.app/takeTheTest.html",
      "_blank"
    );
  };
  return (
    <div className="card wrapper-3" style={{ height: "500", width: "500" }}>
      <div className="card-header">
        <h5>Symptom Checker</h5>
      </div>
      <div className="card-body">
        <p>
          This is a digital tool that helps individuals assess their health
          condition based on reported symptoms. Users answer questions about
          their symptoms, and the tool provides potential diagnoses or
          recommendations. It serves as a preliminary guide, but professional
          medical advice should be sought for accurate diagnosis and treatment
        </p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I agree"
            sx={{ color: "gray" }}
          />
        </FormGroup>
        {/* <Button
          variant="contained"
          sx={{ marginTop: 3, marginBottom: 3, textTransform: "unset" }}
          fullWidth
          onClick={handleClick}
        >
          Take the test
        </Button> */}
        <a
          href="https://symptom-checker-alpha.vercel.app/takeTheTest.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take the test
        </a>
      </div>
    </div>
  );
}
