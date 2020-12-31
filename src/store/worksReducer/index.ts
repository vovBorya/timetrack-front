const initialState: WorkState = {
  works: [{
    id: 1,
    hours: 2,
    date: new Date(),
    archived: false,
    description: 'делал крч я работу'
  }],
};

export const workReducer = (state: WorkState = initialState, action: WorkAction) => {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
};
