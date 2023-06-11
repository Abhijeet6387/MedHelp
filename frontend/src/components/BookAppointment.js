import React, { useState, useEffect } from "react";
import axios from "axios";
import { Select, MenuItem } from "@mui/material";

export default function BookAppointment() {
  const [userlist, setUserlist] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getusers();
  }, [filter]);

  const getusers = () => {
    const params = filter ? { expertise: filter } : {};
    console.log(params);
    axios
      .get("/users/getDoctors", { params })
      .then((res) => {
        console.log(res.data);
        setUserlist(res.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    window.location.href = "/appointment";
  };
  return (
    <>
      <div className="card container">
        <div className="card-body table-responsive">
          <div className="filter-section">
            <label>Filter by Expertise: </label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                marginLeft: 10,
              }}
            >
              <option value="" disabled>
                Select Expertise
              </option>
              <option value="Cardiology">Cardiology</option>
              <option value="Oncology">Oncology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Physician">Physician</option>
            </select>
          </div>

          {userlist.length === 0 ? (
            <p>Sorry, Doctors are currently unavailable !</p>
          ) : (
            <div className="table-wrapper">
              <div className="table-title">
                <div className="text-center">
                  <h4>List of Doctors</h4>
                </div>
              </div>
              <div style={{ overflow: "auto", height: "500px" }}>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Expertise</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="getbooks">
                    {userlist.map((singleuser, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{singleuser.Username}</td>
                        <td>{singleuser.Email}</td>
                        <td>{singleuser.Role}</td>
                        <td>{singleuser.Contact}</td>
                        <td>{singleuser.Expertise}</td>
                        <td>
                          <button
                            type="button"
                            onClick={handleClick}
                            className="btn btn-outline-primary btn-sm"
                          >
                            Consult
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
