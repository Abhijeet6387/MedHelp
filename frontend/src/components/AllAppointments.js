import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllAppoint() {
  const [list, setList] = useState([]);
  const Role = localStorage.getItem("Role");
  const Username = localStorage.getItem("Username");

  console.log(Role);
  console.log(Username);

  const getAppointmentData = () => {
    const userRole = Role;
    const userName = Username;

    axios
      .get("/appointmentinfos/getappointments", {
        params: {
          userName: userName,
          userRole: userRole,
        },
      })

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
  }, [Role, Username]);

  return (
    <div className="container">
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
