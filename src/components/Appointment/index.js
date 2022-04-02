import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = function(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch((error) => transition(ERROR_SAVE, true))
  };

  const remove = function(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(DELETING, true);
    props.cancelInterview(props.id, interview)
    .then(() => transition(EMPTY))
    .catch((error) => transition(ERROR_DELETE, true))
  };

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE, false)} />}
      {mode === SHOW && (
        <Show 
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && 
        <Form 
        name={props.name}
        value={props.value}
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}
        />}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && <Confirm onConfirm={remove} onCancel={back} message="Are you sure you want to delete this appointment?"/>}
      {mode === EDIT &&   
        <Form 
        name={props.interview.student}
        value={props.interview.interviewer}
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}
        />}
      {mode === ERROR_SAVE && <Error message="Unable to save appointment" onClose={() => transition(CREATE, true)}/>}
      {mode === ERROR_DELETE && <Error message="Unable to delete appointment" onClose={() => transition(SHOW, true)}/>}
    </article>
  );
} 