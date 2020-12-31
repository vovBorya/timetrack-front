import {put, takeLatest, call} from 'redux-saga/effects';
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
    const works = yield call(() => workService.fetchWorks());
    yield put(fetchWorksSuccess(works));
  } catch (err) {
    yield put(fetchWorksError(err));
  }
}

export function* watchFetchWorks() {
  yield takeLatest(FETCH_WORKS, fetchWorksAsync)
}
