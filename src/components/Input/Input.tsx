import React from "react";
import { FIELD_TYPES } from "../../constants";

interface InputProps {
  name: string;
  label: string;
  type: "text" | "checkbox";
  value: string | boolean;
  onChange: (name: string, value: string | boolean) => void;
}

export const Input: React.FC<InputProps> = React.memo(
  ({ name, value, label, type, onChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, type, checked } = e.target;
      const fieldValue = type === FIELD_TYPES.CHECKBOX ? checked : value;
      onChange(name, fieldValue);
    };
    const resolveInputValue = (val: string | boolean) => {
      if (typeof val === "undefined") return "";
      if (typeof val === "string") return val;
      return val ? "checked" : "unchecked";
    };

    return (
      <div>
        <label>{label}</label>
        <input
          value={resolveInputValue(value)}
          type={type}
          name={name}
          onChange={handleInputChange}
        />
      </div>
    );
  },
);
