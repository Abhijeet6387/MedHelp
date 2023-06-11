import React from "react";
import AppointmentForm from "./AppointmentForm";

export default function Appoint() {
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
    </div>
  );
}
