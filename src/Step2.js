import React from "react";

const Step2 = ({ disabled, values, isValid, onChange }) => (
  <fieldset disabled={disabled}>
    <legend>Step 2</legend>
    <p>
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
        <div>
          <label htmlFor="companyName">
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
      <p>
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
        <div>
          <label htmlFor="specialAccomodationsText">
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
    {isValid && <div id="step1_result">OK</div>}
  </fieldset>
);

export default Step2;