import {all} from 'redux-saga/effects';
import {watchFetchWorks} from "./worksReducer/saga";

export function* rootSaga() {
  yield all([
    ...watchFetchWorks()
  ]);
}
