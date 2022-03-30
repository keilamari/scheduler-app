import React from "react";
import "./styles.scss";

export default function Appointment(props) {
  const formatAppts = function(props) {
    if (!props.time) {
      return "No Appointments"
    } else {
      return `Appointment at ${props.time}`
    }
  }
  
  return (
    <article className="appointment">{formatAppts(props)}</article>
  );
} 