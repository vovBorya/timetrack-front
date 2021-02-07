import {put, takeLatest, call, delay} from 'redux-saga/effects';
import {
  fetchWorksError,
  fetchWorksSuccess,
  fetchWorksRequested
} from "./actions";
import {WorkService} from "../../services/WorkService";
import {FETCH_WORKS} from "./types";

const workService: WorkService = new WorkService();

export function* fetchWorksAsync() {
  try {
    yield put(fetchWorksRequested());
    yield delay(800)
    const res = yield call(() => workService.fetchWorks());
    yield put(fetchWorksSuccess(res.data
      .map((item: IWork) => ({...item, date: new Date(item.date)}))));
  } catch (err) {
    yield put(fetchWorksError(err));
  }
}

export function watchFetchWorks() {
  return[takeLatest(FETCH_WORKS, fetchWorksAsync)]
}
