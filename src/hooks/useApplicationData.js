import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });

  function setDay(day) {
    setState({...state, day})
  };

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('http://localhost:8001/api/days')),
      Promise.resolve(axios.get('http://localhost:8001/api/appointments')),
      Promise.resolve(axios.get('http://localhost:8001/api/interviewers'))
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
  }, []);

  function retrieveDay(day) {
    const days = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4
    }
    return days[day]
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const weekday = retrieveDay(state.day)
    let day = {
      ...state.days[weekday],
      spots: state.days[weekday]
    };
    if (!state.appointments[id].interview) {
      day = {
        ...state.days[weekday],
        spots: state.days[weekday].spots - 1
      };
    } else {
      day = {
        ...state.days[weekday],
        spots: state.days[weekday].spots
      }; 
    };
    let days = state.days;
    days[weekday] = day;
    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview })
    .then(res => {
        setState({...state, appointments, days});
        return res;
      });
  };

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const weekday = retrieveDay(state.day)
    const day = {
      ...state.days[weekday],
      spots: state.days[weekday].spots + 1
    };
    let days = state.days
    days[weekday] = day;
    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
    .then(res => {
      setState({...state, appointments, days});
      return res;
    });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }; 
};