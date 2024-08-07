import {
  ADD_FOOD_FAILED,
  ADD_FOOD_REQUEST,
  ADD_FOOD_SUCCESS,
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
} from "../actions/Constant";

const initialData = {
  food: [],
  loading: false,
  error: null,
};

export const filterReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_FOOD_REQUEST:
    case FILTER_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_FOOD_SUCCESS:
    case FILTER_FOOD_SUCCESS:
      return {
        ...state,
        food: action.payload,
        loading: false,
      };
    case GET_FOOD_FAIL:
    case FILTER_FOOD_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};


export const getFoodByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FOOD_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_FOOD_BY_ID_SUCCESS:
      return {
        ...state,
        food: action.payload,
        loading: false,
      };
    case GET_FOOD_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ADD_FOOD_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const editFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case EDIT_FOOD_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const deleteFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FOOD_REQUEST:
      return {
        ...state,
        deleteLoading: true,
      };
    case DELETE_FOOD_SUCCESS:
      return {
        ...state,
        deleteLoading: false,
        deleteSuccess: true,
      };
    case DELETE_FOOD_FAILED:
      return {
        ...state,
        deleteError: action.payload,
        deleteLoading: false,
      };
    default:
      return state;
  }
};
