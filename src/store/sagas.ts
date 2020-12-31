import {all} from 'redux-saga/effects';
import {fetchWorksAsync, watchFetchWorks} from "./worksReducer/saga";

export function* rootSaga() {
  yield all([
    fetchWorksAsync(),
    watchFetchWorks()
  ]);
}
