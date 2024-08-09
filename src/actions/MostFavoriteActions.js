import { BACKEND_URL, MOST_FAVORITE_FAIL, MOST_FAVORITE_REQUEST, MOST_FAVORITE_SUCCESS } from './Constant';
import axios from 'axios';

export const getMostOrderedFoods = () => async (dispatch) => {
  dispatch({ type: MOST_FAVORITE_REQUEST });
  try {
    const res = await axios.get(`${BACKEND_URL}/api/orders/most`);
    dispatch({
      type: MOST_FAVORITE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error fetching most ordered foods';
    dispatch({
      type: MOST_FAVORITE_FAIL,
      payload: errorMessage,
    });
  }
};
