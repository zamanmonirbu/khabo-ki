import { GET_FOOD_FAIL, GET_FOOD_REQUEST, GET_FOOD_SUCCESS } from "./Constant";
import axios from "axios";
export const getAllFood = () => async (dispatch) => {
  dispatch({
    type: GET_FOOD_REQUEST,
  });
  try {
    const res = await axios.get("/api/food/getFoods");
    dispatch({
      type: GET_FOOD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred.";
    dispatch({
      type: GET_FOOD_FAIL,
      payload: errorMessage,
    });
  }
};

export const getFoodById = (id) => async (dispatch) => {
  dispatch({
    type: "GET_FOOD_BY_ID_REQUEST",
  });
  try {
    const res = await axios.get(`/api/get/food/${id}`);
    dispatch({
      type: "GET_FOOD_BY_ID_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred.";
    dispatch({
      type: "GET_FOOD_BY_ID_FAIL",
      payload: errorMessage,
    });
  }
};

export const addFood = (food) => async (dispatch) => {
  dispatch({ type: "ADD_FOOD_REQUEST" });
  try {
    const res = await axios.post("/api/food/addfood", { food });
    console.log(res);
    dispatch({ type: "ADD_FOOD_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_FOOD_FAILED", payload: error });
  }
};
export const editFood = (EditFoodData) => async (dispatch) => {
  dispatch({ type: "EDIT_FOOD_REQUEST" });
  try {
    const res = await axios.put("/api/edit/food", { EditFoodData });
    console.log("From action", res);
    dispatch({ type: "EDIT_FOOD_SUCCESS" });
    window.location.href = "/admin/food/list";
  } catch (error) {
    dispatch({ type: "EDIT_FOOD_FAILED", payload: error });
  }
};


export const deleteFood = (id) => async (dispatch) => {

  dispatch({ type: "DELETE_FOOD_REQUEST" });
  try {
    const res = await axios.delete(`/api/delete/food/${id}`);
    console.log("From action", res);
    dispatch({ type: "DELETE_FOOD_SUCCESS" });
    alert("Deleted Successfully")
    window.location.reload();
  } catch (error) {
    dispatch({ type: "DELETE_FOOD_FAILED", payload: error });
  }
};
