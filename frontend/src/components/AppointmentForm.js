import { Box } from "@mui/system";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/Appointment.css";
import axios from "axios";

export default function AppointmentForm(props) {
  const [issue, setIssue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [DrName, setDrName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const appointData = {
      Name: issue,
      date: new Date(date),
      time: time,
      PName: patientName,
      Drname: DrName,
    };
    console.log(appointData);
    axios
      .post("/appointmentinfos/appointmentData", appointData)
      .then((res) => {
        console.log(res.data);
        alert("Appointment scheduled");
      })
      .catch((err) => console.log(err));

    setIssue("");
    setDate("");
    setTime("");
    setPatientName("");
    setDrName("");
  };
  console.log(props);
  return (
    <div className="Appointment">
      <Box component={"form"} onSubmit={submitHandler} className="box">
        <h3>Book Appointment</h3>
        <TextField
          sx={{ marginBottom: 2, marginTop: 2 }}
          fullWidth
          required
          id="outlined--required"
          className="text-required"
          label="Patient's Name"
          defaultValue="Patient's Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <TextField
          sx={{ marginBottom: 2 }}
          required
          fullWidth
          id="outlined--required"
          className="text-required"
          label="Doctor's Name"
          defaultValue="Doctor's Name"
          value={DrName}
          onChange={(e) => setDrName(e.target.value)}
        />
        <TextField
          required
          fullWidth
          sx={{ marginBottom: 2 }}
          id="outlined--required"
          className="text-required"
          label="Issue"
          defaultValue="Tell your issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          sx={{ marginBottom: 2 }}
          id="outlined-required"
          className="text-required"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Slots</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={time}
            label="Slot"
            onChange={(e) => setTime(e.target.value)}
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value={"9:00 Am to 12:00 Pm"}>
              9:00 Am to 12:00 Pm
            </MenuItem>
            <MenuItem value={"2:00 Pm to 5:00 Pm"}>2:00 Pm to 5:00 Pm</MenuItem>
            <MenuItem value={"6:00 Pm to 9:00 Pm"}>6:00 Pm to 9:00 Pm</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          style={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          Confirm
        </Button>
      </Box>
    </div>
  );
}
