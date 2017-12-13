import React from "react";

const Step3 = ({ disabled, values, isValid, onChange }) => (
  <fieldset disabled={disabled}>
    <legend>Step 3</legend>
    <label htmlFor="rock">
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