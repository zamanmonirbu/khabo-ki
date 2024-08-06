import { applyMiddleware, combineReducers, createStore } from 'redux';
import {thunk} from 'redux-thunk';
import foodReducer, { addFoodReducer, deleteFoodReducer, getFoodByIdReducer } from './reducers/FoodReducer';
import { addToCartReducer } from './reducers/CartReducer';
import { registerUserReducer, loginUserReducer, getAllUserReducer, deleteUserReducer } from './reducers/UsersReducer';
import { getAllOrdersReducers, getUserOrdersReducers, placeOrderReducer } from './reducers/OrderReducer';

// Combine reducers
const all = combineReducers({
    foodReducer,
    addToCartReducer,
    registerUserReducer,
    loginUserReducer,
    placeOrderReducer,
    getUserOrdersReducers,
    addFoodReducer,
    getFoodByIdReducer,
    deleteFoodReducer,
    getAllOrdersReducers,
    getAllUserReducer,
    deleteUserReducer
});

// Load initial state from localStorage
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const initialState = {
    addToCartReducer: {
        cartItems
    },
    loginUserReducer: {
        currentUser
    }
};

// Create store without Redux DevTools
const store = createStore(
    all,
    initialState,
    applyMiddleware(thunk)
);

export default store;
