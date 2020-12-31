import {
  ADD_WORK_ERROR,
  ADD_WORK_SUCCESS,
  FETCH_WORKS_ERROR,
  ADD_WORK_REQUESTED,
  FETCH_WORKS_SUCCESS,
  FETCH_WORKS_REQUESTED, FETCH_WORKS,
} from "./types";


export const addWorkRequested = (): WorkAction => ({
  type: ADD_WORK_REQUESTED
});
export const addWorkSuccess = (work: IWork): WorkAction => ({
  type: ADD_WORK_SUCCESS,
  payload: work
});
export const addWorkError = (): WorkAction => ({
  type: ADD_WORK_ERROR
});


export const fetchWorks = (): WorkAction => ({
  type: FETCH_WORKS
});
export const fetchWorksRequested = (): WorkAction => ({
  type: FETCH_WORKS_REQUESTED
});
export const fetchWorksSuccess = (works: IWork[]): WorkAction => ({
  type: FETCH_WORKS_SUCCESS,
  payload: works
});
export const fetchWorksError = (err: string): WorkAction => ({
  type: FETCH_WORKS_ERROR,
  payload: err
});