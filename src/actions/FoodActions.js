import {
  ADD_FOOD_FAILED,
  ADD_FOOD_REQUEST,
  ADD_FOOD_SUCCESS,
  BACKEND_URL,
  DELETE_FOOD_FAILED,
  DELETE_FOOD_REQUEST,
  DELETE_FOOD_SUCCESS,
  EDIT_FOOD_FAILED,
  EDIT_FOOD_REQUEST,
  EDIT_FOOD_SUCCESS,
  GET_FOOD_BY_ID_FAIL,
  GET_FOOD_BY_ID_REQUEST,
  GET_FOOD_BY_ID_SUCCESS,
  GET_FOOD_FAIL,
  GET_FOOD_REQUEST,
  GET_FOOD_SUCCESS,
  FILTER_FOOD_REQUEST,
  FILTER_FOOD_SUCCESS,
  FILTER_FOOD_FAIL,
} from "./Constant";
import axios from "axios";

export const getAllFood = () => async (dispatch) => {
  dispatch({
    type: GET_FOOD_REQUEST,
  });
  try {
    const res = await axios.get(`${BACKEND_URL}/api/food/getFoods`);
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
    type: GET_FOOD_BY_ID_REQUEST,
  });
  try {
    const res = await axios.get(`${BACKEND_URL}/api/get/food/${id}`);
    dispatch({
      type: GET_FOOD_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred.";
    dispatch({
      type: GET_FOOD_BY_ID_FAIL,
      payload: errorMessage,
    });
  }
};

export const addFood = (food) => async (dispatch) => {
  dispatch({ type: ADD_FOOD_REQUEST });
  try {
    await axios.post(`${BACKEND_URL}/api/food/addFood`, { food });
    // const added=await axios.post(`${BACKEND_URL}/api/food/addFood`, { food });
    // console.log("Test",added);
    dispatch({ type: ADD_FOOD_SUCCESS });
  } catch (error) {
    dispatch({ type: ADD_FOOD_FAILED, payload: error });
  }
};

export const editFood = (EditFoodData) => async (dispatch) => {
  dispatch({ type: EDIT_FOOD_REQUEST });
  try {
    await axios.put(`${BACKEND_URL}/api/edit/food`, { EditFoodData });
    dispatch({ type: EDIT_FOOD_SUCCESS });
    window.location.href = "/admin/food/list";
  } catch (error) {
    dispatch({ type: EDIT_FOOD_FAILED, payload: error });
  }
};

export const deleteFood = (id) => async (dispatch) => {
  dispatch({ type: DELETE_FOOD_REQUEST });
  try {
    await axios.delete(`${BACKEND_URL}/api/delete/food/${id}`);
    dispatch({ type: DELETE_FOOD_SUCCESS });
    alert("Deleted Successfully");
    window.location.reload();
  } catch (error) {
    dispatch({ type: DELETE_FOOD_FAILED, payload: error });
  }
};

// New filter action
export const filterFood = (category, size, priceRange) => async (dispatch) => {
  dispatch({ type: FILTER_FOOD_REQUEST });
  try {
    const response = await axios.get(`${BACKEND_URL}/api/food/filter`, {
      params: { category, size, priceRange },
    });
    // console.log(response.data)
    dispatch({
      type: FILTER_FOOD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred.";
    dispatch({
      type: FILTER_FOOD_FAIL,
      payload: errorMessage,
    });
  }
};
