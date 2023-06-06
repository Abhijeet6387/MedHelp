import { Box } from "@mui/system";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
          sx={{ marginBottom: 1 }}
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
          sx={{ marginBottom: 1 }}
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
          sx={{ marginBottom: 1 }}
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
          sx={{ marginBottom: 1 }}
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
          >
            <MenuItem value={"9:00 Am to 12:00 Pm"}>
              9:00 Am to 12:00 Pm
            </MenuItem>
            <MenuItem value={"2:00 Pm to 5:00 Pm"}>2:00 Pm to 5:00 Pm</MenuItem>
            <MenuItem value={"6:00 Pm to 9:00 Pm"}>6:00 Pm to 9:00 Pm</MenuItem>
          </Select>
        </FormControl>

        <button
          type="submit"
          className="btn btn-primary"
          style={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          Add
        </button>
      </Box>
    </div>
  );
}
