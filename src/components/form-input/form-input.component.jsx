import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, lable, name, ...OtherProps }) => {
  return lable ? (
    <label htmlFor={name}>
      {lable}
      <input onChange={handleChange} name={name} {...OtherProps} />
    </label>
  ) : (
    <input onChange={handleChange} name={name} {...OtherProps} />
  );
};

export default FormInput;
