import React from "react";
import { Link } from "react-router-dom";
import mhlogo from "../images/mhlogo.png";
export default function Navbar() {
  const Role = localStorage.getItem("Role");
  const Username = localStorage.getItem("Username");
  const handlelogout = () => {
    if (window.confirm("Are you sure?") === true) {
      localStorage.removeItem("my_token");
      alert("Logged Out!");
      window.location.href = "/login";
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "white" }}
      >
        <Link className="navbar-brand" to="/home">
          <img
            src={mhlogo}
            width="30"
            height="30"
            className="d-inline-block align-top mx-2 mh"
            alt="logo"
          />
          MedHelp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i
              className="fa fa-bars"
              style={{ color: "#000", fontSize: "24px", border: "none" }}
            ></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {Role === "Patient" ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link hoverlink" to="/home">
                    <i className="fa fa-fw fa-home"></i>Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hoverlink" to="/symptomcheck">
                    <i className="fa fa-fw fa-question-circle"></i>Test Symptoms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hoverlink" to="/bookappoint">
                    <i className="fa fa-fw fa-heartbeat"></i>Book Appointment
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link hoverlink" to="/home">
                  <i className="fa fa-fw fa-home"></i>Home
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link hoverlink" to="/viewappointment">
                <i className="fa fa-fw fa-eye"></i>View Appointments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hoverlink" to="/latestnews">
                <i className="fa fa-fw fa-newspaper-o"></i>Latest News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hoverlink" to="/faq">
                <i className="fa fa-fw fa-question-circle"></i>FAQ's
              </Link>
            </li>
            <li className="nav-item">
              <button
                className=" nav-link hoverlink logout"
                onClick={handlelogout}
              >
                <i className="fa fa-fw fa-user"></i>Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
