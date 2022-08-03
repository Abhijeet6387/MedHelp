const express = require("express");
const DonationFrom = require("../models/BloodDonation");
const auth = require("../utils/checkAuth");
const Hospital = require("../models/Hospital");
const router = express.Router();

// submit
router.post("/donateblood", async (req, res) => {
  const form = new DonationFrom(req.body);

  try {
    await form.save();
    var city = req.body.city;
    const dd = new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000);
    const day = dd.getDay();
    const date = dd.getUTCDate();
    const month = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sept",
      "oct",
      "nov",
      "dec",
    ];
    const fd = month[day - 1] + " " + date;
    const time = "1 PM - 4 PM";

    // implement function to find hospital near city
    const hosp = await Hospital.find({ city });
    if (!hosp) {
      throw new Error("No results! Try Again..");
    }
    //console.log({ hosp, time, fd });
    res.status(201).json({ message: "Successful", result: { hosp, time, fd } });
  } catch (err) {
    console.log({ err });
    res.status(401).json({ message: "Something went wrong!", error: err });
  }
});

module.exports = router;
