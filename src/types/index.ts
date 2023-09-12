export type FormData = {
  [key: string]: string | boolean;
};

export interface Field {
  name: string;
  kind: "text" | "bool";
  label: string;
  displayRule?: string;
}

export type Action =
  | { type: "UPDATE_FIELD"; name: string; value: string | boolean }
  | { type: "DELETE_FIELD"; name: string }
  | { type: "DELETE_DEPENDANT_FIELDS"; names: string[] };
