import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../types";
import { fetchHairdressersSaga } from "./hairdressers";
export function* rootSaga() {
  yield takeEvery(
    actionTypes.FETCH_HAIRDRESSERS_REQUEST,
    fetchHairdressersSaga
  );
}
