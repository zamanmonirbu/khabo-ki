import axios from "axios"
import { BACKEND_URL, GET_ALL_ORDER_FAIL, GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, GET_USER_ORDER_FAIL, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS, PLACE_ORDER_FAILED, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS,CLEAR_CART } from "./Constant";


export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: PLACE_ORDER_REQUEST });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().addToCartReducer.cartItems;

  try {
    await axios.post(`${BACKEND_URL}/api/orders/placeOrder`, { token, subTotal, currentUser, cartItems });
    dispatch({ type: PLACE_ORDER_SUCCESS });
    dispatch({ type: CLEAR_CART }); 
    localStorage.removeItem('cartItems');
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred.";
    dispatch({ type: PLACE_ORDER_FAILED, payload: errorMessage });
  }
};



export const getUserOrders = () => async (dispatch, getState) => {

  const currentUser = getState().loginUserReducer.currentUser;

  dispatch({
    type: GET_USER_ORDER_REQUEST,
  });
  try {
    const res = await axios.post(`${BACKEND_URL}/api/orders/getUserOrders`, { userid: currentUser._id });
    dispatch({
      type: GET_USER_ORDER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred.";
    dispatch({
      type: GET_USER_ORDER_FAIL,
      payload: errorMessage,
    });
  }
};
export const getAllOrders = () => async (dispatch, getState) => {

  dispatch({
    type: GET_ALL_ORDER_REQUEST,
  });
  try {
    const res = await axios.get(`${BACKEND_URL}/api/orders/get/all/orders`)
    dispatch({
      type: GET_ALL_ORDER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred.";
    dispatch({
      type: GET_ALL_ORDER_FAIL,
      payload: errorMessage,
    });
  }
};
export const deliveredOrder = (id) => async (dispatch, getState) => {

  try {
    await axios.post(`${BACKEND_URL}/api/order/delivery/${id}`)
    alert("Order Delivered")
    const res = await axios.get(`${BACKEND_URL}/api/orders/get/all/orders`)
    dispatch({
      type: GET_ALL_ORDER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log("Frontend", error);
  }
};
