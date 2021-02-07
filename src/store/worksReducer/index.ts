import {FETCH_WORKS_ERROR, FETCH_WORKS_REQUESTED, FETCH_WORKS_SUCCESS} from "./types";

const initialState: WorkState = {
  works: [{
    id: 1,
    hours: 2,
    date: new Date(),
    archived: false,
    description: 'делал крч я работу'
  }],
  loading: false,
  error: ''
};

export const workReducer = (state: WorkState = initialState, action: WorkAction) => {
  switch (action.type) {
    case FETCH_WORKS_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_WORKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        works: action.payload
      };
    }
    case FETCH_WORKS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default:
      return {
        ...state
      }
  }
};
