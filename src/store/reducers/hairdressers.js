import * as actionTypes from "../types";

export default (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_HAIRDRESSERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
