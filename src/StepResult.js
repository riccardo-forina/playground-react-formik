import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import StepAnimation from "./StepAnimation";

const StepResult = ({ isValid }) => (
  <TransitionGroup> 
    {isValid && 
      <StepAnimation>
        <div className="Step_result" />
      </StepAnimation>}
  </TransitionGroup> 
);

export default StepResult;