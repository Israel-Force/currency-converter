const Reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default Reducer;
