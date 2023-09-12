export const FIELD_TYPES = {
  TEXT: "text",
  CHECKBOX: "checkbox",
} as const;

export const ACTION_TYPES = {
  UPDATE_FIELD: "UPDATE_FIELD",
  DELETE_FIELD: "DELETE_FIELD",
  DELETE_DEPENDANT_FIELDS: "DELETE_DEPENDANT_FIELDS",
} as const;
