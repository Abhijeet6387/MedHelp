const express = require("express");
const DonationFrom = require("../models/OrganDonation");
const auth = require("../utils/checkAuth");
const Hospital = require("../models/Hospital");

const router = express.Router();

// submit
router.post("/donateorgan", auth, async (req, res) => {
  const form = new DonationFrom(req.body);

  try {
    await form.save();
    var city = req.body.city;
    city = city.toLowerCase();
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
    const t1 = Math.floor(Math.random()*5) + 1;
    const t2 = t1 + 1;
    const time = t1 + " - " + t2;

    const hosp = await Hospital.find({ city });
    if (!hosp) {
      throw new Error("No results! Try Again..");
    }
    // implement function to find hospital near city

    res.status(201).json({ message: "Successful", result: { hosp, time, fd } });
  } catch (err) {
    console.log({ err });
    res.status(401).json({ message: "Something went wrong!", error: err });
  }
});

module.exports = router;