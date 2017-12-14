import React, { Component } from 'react';
import { Formik } from 'formik';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const initialValues = {
  attendees: "0",
  names: [],
  showCompanyName: undefined,
  companyName: '',
  specialAccomodations: undefined,
  specialAccomodationsText: '',
  rock: false
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Seminar <span>Registration</span></h1>

        <Formik
          initialValues={initialValues}
          validate={values => {
            let errors = {};
            if (values.attendees === "0") {
              errors.attendees = 'Required';
            }
            if (values.names.indexOf("") >= 0) {
              errors.names = 'Required';
            }
            if (!values.showCompanyName) {
              errors.showCompanyName = 'Required';
            }
            if (values.showCompanyName === "yes" && !values.companyName) {
              errors.companyName = 'Required';
            }
            if (!values.specialAccomodations) {
              errors.specialAccomodations = 'Required';
            }
            if (values.specialAccomodations === "yes" && !values.specialAccomodationsText) {
              errors.specialAccomodationsText = 'Required';
            }
            if (!values.rock) {
              errors.rock = 'Required';
            }
            return errors;
          }}
          onSubmit={(
            values,
            { setValues }
          ) => {
            setValues(initialValues)
          }}
          render={({
            values,
            errors,
            dirty,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => {
            const onChange = (...args) => {
              handleChange(...args);
              handleBlur(...args);
            };
            const isStep1Valid = !(
              !dirty || errors.attendees || errors.names
            );
            const isStep2Valid = !(
              !dirty || errors.showCompanyName || errors.companyName || 
              errors.specialAccomodations || errors.specialAccomodationsText
            );

            return (
              <form className="App-form" onSubmit={handleSubmit}>
                <Step1
                  values={values}
                  onChange={onChange}
                  setFieldValue={setFieldValue}
                  isValid={isStep1Valid}
                />
                <Step2
                  values={values}
                  onChange={handleChange}
                  disabled={!isStep1Valid}
                  isValid={isStep2Valid}
                />
                <Step3
                  values={values}
                  onChange={handleChange}
                  disabled={!isStep2Valid}
                  isValid={isValid}
                />
              </form>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
