import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "../actions/Constant";

export const addToCartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const alreadyExist = state.cartItems.find(item => item._id === action.payload._id);
            if (alreadyExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id ? action.payload : item)
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };
            }

        case DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload._id)
            };

        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            };

        default:
            return state;
    }
};
