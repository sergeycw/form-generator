import React, { useCallback, useReducer } from "react";
import { FIELD_TYPES, ACTION_TYPES } from "../../constants";
import { Input } from "../Input";
import { Field } from "../../types";
import { formReducer } from "./reducer";
import { createDependentsMap } from "../../helpers";

interface FormProps {
  fields: Field[];
  name?: string;
}

export const Form: React.FC<FormProps> = ({ name, fields }) => {
  const [formData, dispatch] = useReducer(formReducer, {});
  const dependentsMap = createDependentsMap(fields);

  const handleInputChange = useCallback(
    (name: string, fieldValue: string | boolean) => {
      if (!fieldValue) {
        dispatch({ type: ACTION_TYPES.DELETE_FIELD, name });

        if (dependentsMap[name]) {
          dispatch({
            type: ACTION_TYPES.DELETE_DEPENDANT_FIELDS,
            names: dependentsMap[name],
          });
        }
      } else {
        dispatch({ type: ACTION_TYPES.UPDATE_FIELD, name, value: fieldValue });
      }
    },
    [],
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {name && <h1>{name}</h1>}

      {fields.map(({ name, label, kind, displayRule }) => {
        if (displayRule && !formData[displayRule]) return null;

        const fieldType =
          kind === FIELD_TYPES.TEXT ? FIELD_TYPES.TEXT : FIELD_TYPES.CHECKBOX;

        return (
          <Input
            key={name}
            value={formData[name]}
            name={name}
            label={label}
            type={fieldType}
            onChange={handleInputChange}
          />
        );
      })}

      <button type="submit">Submit</button>
    </form>
  );
};
