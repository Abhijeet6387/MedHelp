import axios from "axios";
import React, { useState } from "react";
import "../styles/Donation.css";

function DonationForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodg, setBloodG] = useState("A+");
  const [ques1, setQues1] = useState("");
  const [ques2, setQues2] = useState("Heart");
  const [ques3, setQues3] = useState("Major");
  const token = localStorage.getItem("my_token");
  const data = {
    Fname: firstname,
    Lname: lastname,
    gender: gender,
    contact: contact,
    age: age,
    address: address,
    city: city,
    state: state,
    pincode: zip,
    weight: weight,
    blood_group: bloodg,
    organ: ques1,
    any_disease: ques2,
    surgery_or_transfusion: ques3,
  };
  const handleSubmit = (e) => {
    console.log(token);
    axios
      .post("/organdonations/donateorgan", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        alert(res.data.message);
        //res.data.result is yet to be coded
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
    setFirstName("");
    setLastName("");
    setContact("");
    setAge("");
    setGender("");
    setBloodG("");
    setWeight("");
    setAddress("");
    setState("");
    setCity("");
    setZip("");
    setQues1("");
    setQues2("");
    setQues3("");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header bluee">
          <h4>Organ Donation Form</h4>
        </div>
        <div className="card-body">
          <form
            className="row g-3 p-3 mt-3"
            autoComplete="off"
            style={{ overflow: "auto", height: "70vh" }}
          >
            <div className="col-md-6 mt-3">
              <label for="inputfirstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputfirstname"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputlastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputlastname"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputcontact" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                id="inputcontact"
                placeholder="+91-6387168893"
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mt-3">
              <label className="visually-hidden" for="autoSizingSelect">
                Gender
              </label>
              <select
                className="form-control"
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option>Male</option>
                <option>Female</option>
                <option>Rather Not Say</option>
              </select>
            </div>
            <div className="col-md-3 mt-3">
              <label for="inputage" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="inputage"
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St."
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="col-md-2 mt-3">
              <label for="inputcity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="inputcity"
                placeholder="Mumbai"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="col-md-2 mt-3">
              <label for="inputstate" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="inputstate"
                placeholder="Maharashtra"
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <div className="col-md-2 mt-3">
              <label for="inputzip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="inputzip"
                placeholder="226021"
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mt-3">
              <label for="inputweight" className="form-label">
                Weight
              </label>
              <input
                type="text"
                className="form-control"
                id="inputweight"
                placeholder="In Kg"
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mt-3">
              <label className="visually-hidden" for="autoSizingSelect">
                Blood Group
              </label>
              <select
                className="form-control"
                onChange={(e) => setBloodG(e.target.value)}
                required
              >
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputdonate" className="form-label">
                Which organ you wish to donate?
              </label>
              <input
                type="text"
                className="form-control"
                id="inputdonate"
                placeholder="Kidney"
                onChange={(e) => setQues1(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputdisease" className="form-label">
                Do you suffer from any of the following Disease ?
              </label>
              <select
                className="form-control"
                onChange={(e) => setQues2(e.target.value)}
                required
              >
                <option>Heart</option>
                <option>Lungs</option>
                <option>Tuberculosis</option>
                <option>Liver</option>
                <option>Kidney</option>
                <option>Diabetes</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputblood" className="form-label">
                Had any Surgery Or Blood TransFusion before?
              </label>
              <select
                className="form-control"
                onChange={(e) => setQues3(e.target.value)}
                required
              >
                <option>Major</option>
                <option>Minor</option>
                <option>Blood Transfusion</option>
              </select>
            </div>
            <div className="col-12 mt-3" style={{ textAlign: "center" }}>
              <button
                type="button"
                className="btn btnhover"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* <p>
          {gender}
          <br />
          {bloodg}
          <br />
          {ques2}
          <br />
          {ques3}
        </p> */}
      </div>
    </div>
  );
}
export default DonationForm;
