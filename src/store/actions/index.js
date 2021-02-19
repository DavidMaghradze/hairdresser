import * as actionTypes from "../types";
export const fetchHairdressers = (posts) => ({
  type: actionTypes.FETCH_HAIRDRESSERS,
  payload: posts,
});
export const fetchHairdressersReq = () => ({
  type: actionTypes.FETCH_HAIRDRESSERS_REQUEST,
});
