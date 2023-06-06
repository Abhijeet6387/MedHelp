const express = require("express");
const AppointmentModel = require("../models/AppointmentModel");
const router = express.Router();

router.post("/appointmentData", async (req, res) => {
  const { Name, time, date, PName, Drname } = req.body;
  try {
    const newAppointment = await AppointmentModel.create({
      Name: Name,
      date: date,
      slot: time,
      PName: PName,
      Drname: Drname,
    });
    res.json({ statusCode: 200, data: newAppointment });
  } catch (error) {
    res.json({ statusCode: 400, data: error });
  }
});

router.get("/getappointments", async (req, res) => {
  try {
    const appointments = await AppointmentModel.find();
    res.json({ appointments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching appointments" });
  }
});
module.exports = router;
