import { UPDATE_USER_INPUT } from "./constant";
import get from "lodash/get";
const initialState = {
  inputData: {billBodyCopy:'',billHeadline:''},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INPUT:
      return {
        ...state,
        inputData: get(action, "payload"),
      };

    default:
      return state;
  }
}
