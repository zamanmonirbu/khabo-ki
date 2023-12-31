import { GET_ALL_ORDER_FAIL, GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, GET_USER_ORDER_FAIL, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS, PLACE_ORDER_FAILED, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS } from "../actions/Constant";

export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST: return {
      loading: true,
    }
    case PLACE_ORDER_SUCCESS: return {
      loading: false,
      success: true,

    }
    case PLACE_ORDER_FAILED: return {
      loading: false,
      error: action.payload,
    }

    default:
      return state
  }
};

export const getUserOrdersReducers = (state = { orders: [] }, action) => {
  switch (action.type) {
    case GET_USER_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case GET_USER_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};


export const getAllOrdersReducers = (state = { orders: [] }, action) => {
  switch (action.type) {
    case GET_ALL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case GET_ALL_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};