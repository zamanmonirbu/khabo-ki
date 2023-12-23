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

export const addFood=(food)=>async dispatch=>{
  dispatch({type:'ADD_FOOD_REQUEST'})
  try {
    const res=await axios.post('/api/food/addfood',{food})
    console.log(res);
    dispatch({type:'ADD_FOOD_SUCCESS'})
  } catch (error) {
    dispatch({type:'ADD_FOOD_FAILED',payload:error})
  }
}