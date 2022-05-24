import React, { useState } from "react";
import { ShowInput, HideInput } from "../icons-logos/icons";

export default function InputPassword({
  name,
  handleChange,
  label,
  placeholder,
  value,
  error,
}) {
  const [isHidden, setIsHidden] = useState(true);
  const passwordToggle = () => setIsHidden((e) => !e);
  return (
    <div className="label__container">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleChange}
        // required
        id={name}
        name={name}
        type={isHidden ? "password" : "text"}
        placeholder={placeholder}
        value={value}
      />
      <div className="password-toggle" onClick={passwordToggle}>
        {isHidden ? <HideInput /> : <ShowInput />}
      </div>
      {error && <span>{error}</span>}
    </div>
  );
}
