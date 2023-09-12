import "./index.css";
import { Form } from "./components/Form";
import React from "react";
import { Field } from "./types";

const FORM_DECLARATION: Field[] = [
  {
    name: "firstName",
    kind: "text",
    label: "First Name",
  },
  {
    name: "lastName",
    kind: "text",
    label: "Last Name",
  },
  {
    name: "hasAccount",
    kind: "bool",
    label: "I have an account",
  },
  {
    name: "accountNumber",
    kind: "text",
    label: "Account Number",
    displayRule: "hasAccount",
  },
];

export const App: React.FC = () => {
  return (
    <div>
      <Form name={"Account form"} fields={FORM_DECLARATION} />
    </div>
  );
};
