import DayList from "components/DayList";

export function getAppointmentsForDay(state, day) {
// want to return an array of appointments for the 'day'

  let appts = [];
  for (const days of state.days) {
    if (days.name === day) {
      for (const appointment of days.appointments) {
        appts.push(state.appointments[appointment])
      }
    }
  }
  return appts;
}