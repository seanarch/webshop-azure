const initialState = [];

export const topMenu = (state = initialState, action) => {
  switch (action.type) {
    case "Menu":
      return action.data || state;
    default:
      return state;
  }
};
