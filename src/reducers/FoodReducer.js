import { GET_FOOD_FAIL, GET_FOOD_REQUEST, GET_FOOD_SUCCESS } from "../actions/Constant";

const initialData = {
  food: [],
  loading: false,
  error: null,
};

const foodReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_FOOD_SUCCESS:
      return {
        ...state,
        food: [...state.food, ...action.payload],
        loading: false,
      };
    case GET_FOOD_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default foodReducer;
