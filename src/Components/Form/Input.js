import React from "react";

export default function Input({
  name,
  handleChange,
  label,
  placeholder,
  value,
  error,
  type = "text",
}) {
  return (
    <div className="label__container">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleChange}
        // required
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
      />
      {error && <span>{error}</span>}
    </div>
  );
}
