import { Field } from "../types";

export const createDependentsMap = (
  fields: Field[],
): Record<string, string[]> => {
  const dependentsMap: Record<string, string[]> = {};

  fields.forEach((field) => {
    if (field.displayRule) {
      if (!dependentsMap[field.displayRule]) {
        dependentsMap[field.displayRule] = [];
      }
      dependentsMap[field.displayRule].push(field.name);
    }
  });

  return dependentsMap;
};
