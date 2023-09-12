import { Action, FormData } from "../../types";
import { ACTION_TYPES } from "../../constants";

export const formReducer = (state: FormData, action: Action): FormData => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_FIELD:
      return { ...state, [action.name]: action.value };
    case ACTION_TYPES.DELETE_FIELD: {
      const newState = { ...state };
      delete newState[action.name];
      return newState;
    }
    case ACTION_TYPES.DELETE_DEPENDANT_FIELDS: {
      const newState = { ...state };
      action.names.forEach((name) => {
        delete newState[name];
      });
      return newState;
    }
    default:
      return state;
  }
};
