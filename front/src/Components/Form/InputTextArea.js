import React from "react";

export default function InputTextArea({
  name,
  handleChange,
  label,
  placeholder,
  value,
  error,
}) {
  return (
    <div className="label__container">
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={handleChange}
        required
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        
      />
      {error && <span>{error}</span>}
    </div>
  );
}
