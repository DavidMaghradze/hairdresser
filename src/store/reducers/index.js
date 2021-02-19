import { combineReducers } from "redux";

import HairdressersReducer from "./hairdressers";

const rootReducer = combineReducers({
  hairdressers: HairdressersReducer,
});

export default rootReducer;
