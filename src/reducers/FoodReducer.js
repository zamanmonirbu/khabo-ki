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

export const getFoodByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_FOOD_BY_ID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_FOOD_BY_ID_SUCCESS":
      return {
        ...state,
        food: action.payload,
        loading: false,
      };
    case "GET_FOOD_BY_ID_FAIL":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};



export const addFoodReducer = (state ={}, action) => {
  switch (action.type) {
    case "ADD_FOOD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_FOOD_SUCCESS":
      return {
        ...state,
        loading: false,
        success:true,
      };
    case "ADD_FOOD_FAIL":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const editFoodReducer = (state ={}, action) => {
  switch (action.type) {
    case "EDIT_FOOD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "EDIT_FOOD_SUCCESS":
      return {
        ...state,
        loading: false,
        success:true,
      };
    case "EDIT_FOOD_FAIL":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};


export const deleteFoodReducer = (state ={}, action) => {
  switch (action.type) {
    case "DELETE_FOOD_REQUEST":
      return {
        ...state,
        deleteLoading: true,
      };
    case "DELETE_FOOD_SUCCESS":
      return {
        ...state,
        deleteLoading: false,
        deleteSuccess:true,
      };
    case "DELETE_FOOD_FAIL":
      return {
        ...state,
        deleteError: action.payload,
        deleteLoading: false,
      };
    default:
      return state;
  }
};


