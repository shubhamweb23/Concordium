import React from "react";

const CustomButton = ({ children, ...props }) => {
  return (
    <button
      className={`button-style ${props.className}`}
      onClick={props.onClick}
      role={props.role ? props.role : "button"}
      id={props.id}
      style={props.style}
    >
      {children}
    </button>
  );
};
export default CustomButton;
