
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import foodReducer, { addFoodReducer, deleteFoodReducer, getFoodByIdReducer } from './reducers/FoodReducer';
// import { addToCartReducer } from './reducers/CartReducer';
// import { registerUserReducer, loginUserReducer, getAllUserReducer, deleteUserReducer } from './reducers/UsersReducer';
// import { getAllOrdersReducers, getUserOrdersReducers, placeOrderReducer } from './reducers/OrderReducer';


// const all = combineReducers({ foodReducer: foodReducer, addToCartReducer: addToCartReducer, registerUserReducer: registerUserReducer, loginUserReducer: loginUserReducer, placeOrderReducer: placeOrderReducer, getUserOrdersReducers: getUserOrdersReducers, addFoodReducer: addFoodReducer, getFoodByIdReducer: getFoodByIdReducer, deleteFoodReducer: deleteFoodReducer, getAllOrdersReducers: getAllOrdersReducers, getAllUserReducer: getAllUserReducer, deleteUserReducer: deleteUserReducer })

// const composeEnhancers = composeWithDevTools({});

// const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
// const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

// const initialState = {
//     addToCartReducer: {
//         cartItems: cartItems
//     },
//     loginUserReducer: {
//         currentUser: currentUser
//     }
// }

// const store = createStore(all, initialState, composeEnhancers(applyMiddleware(thunk)))

// export default store;



import { applyMiddleware, combineReducers, createStore } from 'redux';
import {thunk} from 'redux-thunk';
import  {filterReducer, addFoodReducer, deleteFoodReducer, getFoodByIdReducer, allFoodReducer } from './reducers/FoodReducer';
import { addToCartReducer } from './reducers/CartReducer';
import { registerUserReducer, loginUserReducer, getAllUserReducer, deleteUserReducer } from './reducers/UsersReducer';
import { getAllOrdersReducers, getUserOrdersReducers, placeOrderReducer } from './reducers/OrderReducer';
import { mostFavoriteReducer } from './reducers/MostFavoriteReducer';



// Combine reducers
const all = combineReducers({
    filterReducer,
    allFoodReducer,
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
    deleteUserReducer,
    mostFavoriteReducer
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
