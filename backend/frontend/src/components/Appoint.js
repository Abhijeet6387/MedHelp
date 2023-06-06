import React, { useEffect, useState } from "react";
import axios from "axios";
import AppointmentForm from "./AppointmentForm";

export default function Appoint() {
  const [list, setList] = useState([]);
  const getAppointmentData = () => {
    axios
      .get("/appointmentinfos/getappointments")
      .then((res) => {
        console.log(res.data.appointments);
        setList(res.data.appointments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAppointmentData();
  }, []);

  return (
    <div className="container">
      <div className="cardo">
        <div className="appointment">
          <AppointmentForm />
        </div>
        <div className="appointimg">
          <div className="imgholder"></div>
        </div>
      </div>
      <div className="card container">
        <div className="card-body table-responsive">
          {list.length === 0 ? (
            <p>Sorry, please try again later !</p>
          ) : (
            <div className="table-wrapper">
              <div className="table-title">
                <div className="text-center">
                  <h4>List of Appointments</h4>
                </div>
              </div>
              <div style={{ overflow: "auto", height: "400px" }}>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Issue</th>
                      <th scope="col">Patient's Name</th>
                      <th scope="col">Doctor's Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody className="all-appointment">
                    {list.map((appoint, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{appoint.Name}</td>
                        <td>{appoint.PName}</td>
                        <td>{appoint.Drname}</td>
                        <td>{appoint.date.slice(0, 10)}</td>
                        <td>{appoint.slot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
