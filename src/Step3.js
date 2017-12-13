import React from "react";

const Step3 = ({ disabled, values, isValid, onChange }) => (
  <fieldset disabled={disabled} className="Step Step-three">
    <legend>Step 3</legend>
    <label className="Step_label">
      Are you ready to rock?
      <input 
        type="checkbox" 
        name="rock"
        checked={values.rock}
        onChange={onChange}
      />
    </label>
    <input 
      type="submit" 
      value="Complete Registration"
      disabled={!isValid}
    />
  </fieldset>
);

export default Step3;