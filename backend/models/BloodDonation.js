const mongoose = require("mongoose");

const form = new mongoose.Schema({
  Fname: {
    type: String,
    required: true,
    trim: true,
  },
  Lname: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Rather Not Say"],
    required: true,
  },
  contact: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  age: {
    type: Number,
    required: true,
    minlength: 2,
    validate(value) {
      if (value <= 14) {
        throw new Error("Not qualified for Donation");
      }
    },
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  blood_group: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  donated_before: {
    type: String,
    enum: ["Yes", "No"],
    required: true,
  },
  last_donation_date: {
    type: Date,
    required: true,
  },
  any_disease: {
    type: String,
    required: true,
  },
  surgery_or_transfusion: {
    type: String,
    enum: ["Major", "Minor", "Blood Transfusion"],
    required: true,
  },
});

const BloodDonation = mongoose.model("BloodDonation", form);

module.exports = BloodDonation;
