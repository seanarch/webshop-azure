const initialState = {};

export const topMenu = (state = initialState, action) => {
  return {
    ...state,
    ...action.data,
  };
};
