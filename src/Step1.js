import React from "react";
import { TransitionGroup } from "react-transition-group";
import StepResult from "./StepResult";
import StepAnimation from "./StepAnimation";

const Step1 = ({ values, isValid, onChange, onBlur, setFieldValue }) => {
  
  const onAttendeesCountChange = (ev) => {
    const attendees = parseInt(ev.target.value, 10);
    setFieldValue("names", new Array(attendees).fill(""));
    onChange(ev);
  }

  const onAttendeeNameChange = (idx, ev) => {
    let newNames = [...values.names];
    newNames.splice(idx, 1, ev.target.value);
    setFieldValue("names", newNames)
  }
  return (
    <fieldset className="Step Step-one">
      <legend>Step 1</legend>
      <label className="Step_label" htmlFor="attendees">
          How many people will be attending?
      </label>
      <select 
        id="attendees" 
        name="attendees" 
        value={values.attendees}
        onChange={onAttendeesCountChange}
        onBlur={onBlur}
      >
        <option value={0}>Please Choose</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <div className="Step_smallInput">
        <TransitionGroup>
        { values.attendees !== "0" && 
          <StepAnimation>
            <h3>Please provide full names:</h3>
          </StepAnimation> }
        </TransitionGroup>
        <TransitionGroup>
          { values.names.map((n, idx) => 
            <StepAnimation key={idx}>
              <div className="Step-one_attendee">
                <label htmlFor={`name_attendee_${idx}`}>
                  Attendee {idx + 1} Name:
                </label>
                <input 
                  type="text"
                  id={`name_attendee_${idx}`}
                  name="names"
                  value={values.names[idx]}
                  onChange={ev => onAttendeeNameChange(idx, ev)}
                  onBlur={onBlur}
                />
              </div>
            </StepAnimation>
          )}
        </TransitionGroup>
      </div> 
      <StepResult isValid={isValid} />
    </fieldset>
  );
}

export default Step1;