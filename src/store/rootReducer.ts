import {combineReducers} from "redux";
import {workReducer} from "./worksReducer";

export const rootReducer = combineReducers({
  works: workReducer
});

export type RootState = ReturnType<typeof rootReducer>;