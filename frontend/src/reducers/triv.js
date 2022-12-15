const reducers = (trivDetails = [], action) => {
  switch (action.type) {
    case "DELETE_TRIV":
      return trivDetails.filter((triv) => triv._id !== action.payload);
    case "UPDATE_TRIV":
      return trivDetails.map((triv) =>
        triv._id === action.payload._id ? action.payload : triv
      );
    case "FETCH_ALL_TRIV":
      return action.payload;
    case "CREATE_TRIV":
      return [...trivDetails, action.payload];
    default:
      return trivDetails;
  }
};
export default reducers;
