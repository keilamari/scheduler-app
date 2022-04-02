export function getAppointmentsForDay(state, day) {
  let appts = [];
  for (const days of state.days) {
    if (days.name === day) {
      for (const appointment of days.appointments) {
        appts.push(state.appointments[appointment]);
      }
    }
  }
  return appts;
};

export function getInterview(state, interview) {
  let details = {};
  if(!interview) {
    return null;
  } else {
    details.student = interview.student;
    details.interviewer = state.interviewers[interview.interviewer]
  }
  return details;
};

export function getInterviewersForDay(state, day) {
    let intvwers = [];
    for (const days of state.days) {
      if (days.name === day) {
        for (const interviewer of days.interviewers) {
          intvwers.push(state.interviewers[interviewer])
        }
      }
    }
    return intvwers;
  };