import { put, call } from "redux-saga/effects";
import { fetchHairdressers } from "../actions";
import API from "api/hairdressers";
export function* fetchHairdressersSaga() {
  try {
    const response = yield call(API.getHairdressers);
    yield put(fetchHairdressers(response));
  } catch (error) {
    console.log(error);
  }
}
