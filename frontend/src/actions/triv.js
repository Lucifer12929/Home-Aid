import * as api from "../api";

export const getTRIV = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTRIV();

    dispatch({ type: "FETCH_ALL_TRIV", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTRIV = (triv) => async (dispatch) => {
  try {
    const { data } = await api.createTRIV(triv);
    dispatch({ type: "CREATE_TRIV", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTRIV = (id, triv) => async (dispatch) => {
  try {
    const { data } = await api.updateTRIV(id, triv);
    dispatch({ type: "UPDATE_TRIV", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTRIV = (id) => async (dispatch) => {
  try {
    await api.deleteTRIV(id);
    dispatch({ type: "DELETE_TRIV", payload: id });
  } catch (error) {
    console.log(error);
  }
};
