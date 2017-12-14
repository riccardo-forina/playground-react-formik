import React from "react";
import { CSSTransition } from "react-transition-group";

const StepAnimation = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={300}
    classNames="StepAnimation"
  >
    {children}
  </CSSTransition>
);

export default StepAnimation;