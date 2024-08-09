import {
    MOST_FAVORITE_REQUEST,
    MOST_FAVORITE_SUCCESS,
    MOST_FAVORITE_FAIL,
  } from '../actions/Constant';
  
  const initialState = {
    mostOrderedFoods: [],
    loading: false,
    error: null,
  };
  
  export const mostFavoriteReducer = (state = initialState, action) => {
    switch (action.type) {
      case MOST_FAVORITE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case MOST_FAVORITE_SUCCESS:
        return {
          ...state,
          mostOrderedFoods: action.payload,
          loading: false,
        };
      case MOST_FAVORITE_FAIL:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  