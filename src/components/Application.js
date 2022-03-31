import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "components/DayList.js"
import Appointment from "components/Appointment/index.js";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {}
  });

  const dailyAppointments = [];

  const appt = dailyAppointments.map((appointment) => {
    return (
    <Appointment 
      key={appointment.id} 
      {...appointment} 
    />
    )
    })

  const setDay = day => setState({ ...state, day });
  // const setDays = days => setState({ ...state, days });

  // useEffect(() => {
  //   const daysURL = "http://localhost:8001/api/days"
  //   axios.get(daysURL).then(response => {
  //     setDays(response.data)
  //   });
  // }, [])

  useEffect(() => {
    const daysURL = "/api/days"
    const appointmentsURL = "/api/appointments"
    const interviewers = "/api/interviewers"
    Promise.all([
      axios.get(daysURL),
      axios.get(appointmentsURL),
      axios.get(interviewers)
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  })
  
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
        
      </section>
      <section className="schedule">
        {appt}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
