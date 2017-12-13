import React from "react";

const Step2 = ({ disabled, values, isValid, onChange }) => (
  <fieldset disabled={disabled} className="Step Step-two">
    <legend>Step 2</legend>
    <p className="Step_label">
      Would you like your company name on your badges?
    </p>
    
    <label>
      <input 
        type="radio"
        name="showCompanyName"
        value={"yes"} 
        checked={values.showCompanyName === "yes"}
        onChange={onChange}
      />
      Yes
    </label>
    &emsp;
    <label>
      <input 
        type="radio"
        name="showCompanyName"
        value={"no"} 
        checked={values.showCompanyName === "no"}
        onChange={onChange}
      />
      No
    </label>

    { values.showCompanyName === "yes" 
      ? (
        <div className="Step_smallInput">
          <label>
              Company Name:
          </label>
          <input 
            type="text"
            name="companyName"
            value={values.companyName} 
            onChange={onChange}
          />
        </div>
      )
      : null }
    <div>			
      <p className="Step_label">
          Will anyone in your group require special accommodations?
      </p>
      <label>
        <input 
          type="radio"
          name="specialAccomodations"
          value={"yes"} 
          checked={values.specialAccomodations === "yes"}
          onChange={onChange}
        />
        Yes
      </label>
      &emsp;
      <label>
        <input 
          type="radio"
          name="specialAccomodations"
          value={"no"} 
          checked={values.specialAccomodations === "no"}
          onChange={onChange}
        />
        No
      </label>
    </div>
    { values.specialAccomodations === "yes"
      ? (
        <div className="Step_smallInput">
          <label>
              Please explain below:
          </label>
          <textarea 
            name="specialAccomodationsText"
            value={values.specialAccomodationsText}
            onChange={onChange}
          />
        </div>
      )
      : null }
    {isValid && <div className="Step_result" />}
  </fieldset>
);

export default Step2;