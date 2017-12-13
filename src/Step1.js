import React from "react";

const Step1 = ({ values, isValid, onChange, onBlur, setFieldValue }) => {
  
  const onAttendeesCountChange = (ev) => {
    const attendees = parseInt(ev.target.value, 10);
    onChange(ev);
    setFieldValue("names", new Array(attendees).fill(""));
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
      { values.attendees > 0  
        ? (
          <div className="Step_smallInput">
            <h3>Please provide full names:</h3>
            { values.names.map((n, idx) => 
              <div key={idx}>
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
            )}
          </div> 
        )
        : null }
      {isValid && <div className="Step_result" />}
    </fieldset>
  );
}

export default Step1;